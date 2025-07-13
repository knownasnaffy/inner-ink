import { invoke } from '@tauri-apps/api/core'
import { myStore } from './store'

function normalizeWhitespace(input: unknown): string {
  if (typeof input !== 'string') return ''

  const trimmed = input.trim()
  return trimmed === '' ? '' : trimmed
}

export async function setUserName(name: string) {
  const newName = normalizeWhitespace(name)
  await myStore.set('name', newName)
  console.log(await invoke('greet', { name }))
  await myStore.set('onboarding', 'password')
}

export async function getOnBoardingStatus() {
  await myStore.get('onboarding')
}
