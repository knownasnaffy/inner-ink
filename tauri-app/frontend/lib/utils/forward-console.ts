import { warn, trace, info, error } from '@tauri-apps/plugin-log'

function forwardConsole(
  fnName: 'log' | 'debug' | 'info' | 'warn' | 'error',
  logger: (message: string) => Promise<void>,
) {
  const original = console[fnName]
  console[fnName] = (message) => {
    original(message)
    logger(message)
  }
}

forwardConsole('log', trace)
forwardConsole('info', info)
forwardConsole('warn', warn)
forwardConsole('error', error)
