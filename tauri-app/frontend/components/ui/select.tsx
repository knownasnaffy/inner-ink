import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/react'
import { useState } from 'react'
import clsx from 'clsx'

const people = [
  { id: 1, name: 'Durward Reynolds' },
  { id: 2, name: 'Kenton Towne' },
  { id: 3, name: 'Therese Wunsch' },
  { id: 4, name: 'Benedict Kessler' },
  { id: 5, name: 'Katelyn Rohan' },
]

export default function Example() {
  const [selectedPerson, setSelectedPerson] = useState(people[0])

  return (
    <Listbox value={selectedPerson} onChange={setSelectedPerson}>
      <ListboxButton className='select join-item w-full'>
        {selectedPerson.name}
      </ListboxButton>
      <ListboxOptions
        anchor='bottom'
        className='w-(--button-width) data-leave:data-closed:opacity-0 bg-base-100 shadow-xl transition duration-100 ease-in focus:outline-none'
      >
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className='data-focus:bg-base-200 rounded-b-field group flex cursor-default select-none items-center gap-2 px-3 py-1.5'
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  )
}

export type selectItem = {
  id: number
  name: string
}

export function Select({
  children,
  value: userValue,
  onChange: userOnChange,
}: {
  value?: selectItem
  onChange?: (value: selectItem) => void
  children: React.ReactNode
}) {
  const [value, onChange] = useState(people[0])

  return (
    <Listbox value={userValue || value} onChange={userOnChange || onChange}>
      {children}
    </Listbox>
  )
}

export function SelectTrigger({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <ListboxButton className={clsx('select w-full', className)}>
      {children}
    </ListboxButton>
  )
}

export function SelectContent({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <ListboxOptions
      anchor='bottom'
      className={clsx(
        'w-(--button-width) data-leave:data-closed:opacity-0 bg-base-100 shadow-xl transition duration-100 ease-in focus:outline-none',
        className,
      )}
    >
      {children}
    </ListboxOptions>
  )
}

export function SelectOption({ value }: { value: selectItem }) {
  return (
    <ListboxOption
      key={value.id}
      value={value}
      className='data-focus:bg-base-200 group flex cursor-default select-none items-center gap-2 px-3 py-1.5'
    >
      {value.name}
    </ListboxOption>
  )
}
