import { LazyStore } from '@tauri-apps/plugin-store'
// when using `"withGlobalTauri": true`, you may use
// const { load } = window.__TAURI__.store;

// Create a new store or load the existing one,
// note that the options will be ignored if a `Store` with that path has already been created
const store = new LazyStore('store.json', { autoSave: false })

// Set a value.
// await store.set('some-key', 'hello')

// Get a value.
// const val = await store.get<{ value: number }>('some-key')
// console.log(val) // { value: 5 }

// You can manually save the store after making changes.
// Otherwise, it will save upon graceful exit
// And if you set `autoSave` to a number or left empty,
// it will save the changes to disk after a debounce delay, 100ms by default.
// await store.save()

export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function isOnboarding(): Promise<Boolean> {
  await delay(1000)
  const val = await store.get<string>('onboarding')
  if (val === 'done') {
    return false
  } else return true
}
