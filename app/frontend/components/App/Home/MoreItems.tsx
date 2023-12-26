import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

const MoreItems = () => {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='btn btn-ghost btn-square'>
					<EllipsisVerticalIcon className='h-6' />
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='bg-base-100 border-base-300 rounded-box divide-base-300 absolute right-0 mt-1 w-40 origin-top-right divide-y border px-1.5 shadow-lg focus:outline-none'>
					<div className='py-1.5'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-primary bg-primary/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-primary/5 stroke-primary mr-2 h-6 w-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
										/>
									</svg>
									Copy
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-primary bg-primary/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-primary/5 stroke-primary mr-2 h-6 w-6 -rotate-90'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M7.848 8.25l1.536.887M7.848 8.25a3 3 0 11-5.196-3 3 3 0 015.196 3zm1.536.887a2.165 2.165 0 011.083 1.839c.005.351.054.695.14 1.024M9.384 9.137l2.077 1.199M7.848 15.75l1.536-.887m-1.536.887a3 3 0 11-5.196 3 3 3 0 015.196-3zm1.536-.887a2.165 2.165 0 001.083-1.838c.005-.352.054-.695.14-1.025m-1.223 2.863l2.077-1.199m0-3.328a4.323 4.323 0 012.068-1.379l5.325-1.628a4.5 4.5 0 012.48-.044l.803.215-7.794 4.5m-2.882-1.664A4.331 4.331 0 0010.607 12m3.736 0l7.794 4.5-.802.215a4.5 4.5 0 01-2.48-.043l-5.326-1.629a4.324 4.324 0 01-2.068-1.379M14.343 12l-2.882 1.664'
										/>
									</svg>
									Cut
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-primary bg-primary/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-primary/5 stroke-primary mr-2 h-6 w-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
										/>
									</svg>
									Paste
								</button>
							)}
						</Menu.Item>
					</div>
					<div className='py-1.5'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-secondary bg-secondary/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-secondary/5 stroke-secondary mr-2 h-6 w-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3'
										/>
									</svg>
									Undo
								</button>
							)}
						</Menu.Item>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-secondary bg-secondary/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-secondary/5 stroke-secondary mr-2 h-6 w-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M15 15l6-6m0 0l-6-6m6 6H9a6 6 0 000 12h3'
										/>
									</svg>
									Redo
								</button>
							)}
						</Menu.Item>
					</div>
					<div className='py-1.5'>
						<Menu.Item>
							{({ active }) => (
								<button
									className={clsx(
										'rounded-btn group flex w-full items-center px-3 py-2 text-sm',
										active
											? 'text-error bg-error/5'
											: 'text-base-content',
									)}
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth={1.5}
										stroke='currentColor'
										className='fill-error/5 stroke-error mr-2 h-6 w-6'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
										/>
									</svg>
									Clear
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}

export default MoreItems
