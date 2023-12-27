import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'

const MoreItems = () => {
	return (
		<Menu as='div' className='relative inline-block text-left'>
			<div>
				<Menu.Button className='btn btn-ghost btn-square'>
					<svg
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 fill-current'
					>
						<path d='M12 7.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM12 13.75a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM10.25 18a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z' />
					</svg>
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
				<Menu.Items className='bg-base-100 border-base-300 rounded-box divide-base-300 absolute right-0 z-30 mt-1 w-40 origin-top-right divide-y border px-1.5 shadow-lg focus:outline-none'>
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-primary mr-2'
									>
										<path
											d='M5.503 4.627 5.5 6.75v10.504a3.25 3.25 0 0 0 3.25 3.25h8.616a2.251 2.251 0 0 1-2.122 1.5H8.75A4.75 4.75 0 0 1 4 17.254V6.75c0-.98.627-1.815 1.503-2.123ZM17.75 2A2.25 2.25 0 0 1 20 4.25v13a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-13A2.25 2.25 0 0 1 8.75 2h9Zm0 1.5h-9a.75.75 0 0 0-.75.75v13c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75v-13a.75.75 0 0 0-.75-.75Z'
											// fill='#212121'
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-primary mr-2'
									>
										<path d='M12.14 9.341v.002L7.37 2.328a.75.75 0 1 0-1.24.844l5.13 7.545-2.395 3.743a4 4 0 1 0 1.178.943l2.135-3.337 2.065 3.036a4 4 0 1 0 1.261-.813l-2.447-3.597.002-.002-.918-1.348Zm-7.64 8.66a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm10 0a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z' />
										<path d='m13.938 9.316 3.943-6.162a.75.75 0 1 0-1.263-.808L13.02 7.968l.918 1.348Z' />
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-primary mr-2'
									>
										<path d='M12.753 2c1.158 0 2.111.875 2.234 2h1.763a2.25 2.25 0 0 1 2.245 2.096L19 6.25a.75.75 0 0 1-.647.742L18.249 7a.75.75 0 0 1-.742-.647L17.5 6.25a.75.75 0 0 0-.648-.743L16.75 5.5h-2.132a2.244 2.244 0 0 1-1.865.993H9.247c-.777 0-1.461-.393-1.865-.992L5.25 5.5a.75.75 0 0 0-.743.648L4.5 6.25v13.505c0 .38.282.693.648.743l.102.007h3a.75.75 0 0 1 .743.647l.007.102a.75.75 0 0 1-.75.75h-3a2.25 2.25 0 0 1-2.245-2.095L3 19.755V6.25a2.25 2.25 0 0 1 2.096-2.245L5.25 4h1.763a2.247 2.247 0 0 1 2.234-2h3.506Zm5.997 6a2.25 2.25 0 0 1 2.245 2.096l.005.154v9.5a2.25 2.25 0 0 1-2.096 2.245L18.75 22h-6.5a2.25 2.25 0 0 1-2.245-2.096L10 19.75v-9.5a2.25 2.25 0 0 1 2.096-2.245L12.25 8h6.5Zm0 1.5h-6.5a.75.75 0 0 0-.743.648l-.007.102v9.5c0 .38.282.694.648.743l.102.007h6.5a.75.75 0 0 0 .743-.648l.007-.102v-9.5a.75.75 0 0 0-.648-.743L18.75 9.5Zm-5.997-6H9.247a.747.747 0 0 0 0 1.493h3.506a.747.747 0 1 0 0-1.493Z' />
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-secondary mr-2'
									>
										<path d='M4.75 2a.75.75 0 0 1 .743.648l.007.102v5.69l4.574-4.56a6.41 6.41 0 0 1 8.879-.179l.186.18a6.41 6.41 0 0 1 0 9.063l-8.846 8.84a.75.75 0 0 1-1.06-1.062l8.845-8.838a4.91 4.91 0 0 0-6.766-7.112l-.178.17L6.562 9.5h5.688a.75.75 0 0 1 .743.648l.007.102a.75.75 0 0 1-.648.743L12.25 11h-7.5a.75.75 0 0 1-.743-.648L4 10.25v-7.5A.75.75 0 0 1 4.75 2Z' />
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-secondary mr-2'
									>
										<path d='M19.25 2a.75.75 0 0 0-.743.648l-.007.102v5.69l-4.574-4.56a6.41 6.41 0 0 0-8.878-.179l-.186.18a6.41 6.41 0 0 0 0 9.063l8.845 8.84a.75.75 0 0 0 1.06-1.062l-8.845-8.838a4.91 4.91 0 0 1 6.766-7.112l.178.17L17.438 9.5H11.75a.75.75 0 0 0-.743.648L11 10.25c0 .38.282.694.648.743l.102.007h7.5a.75.75 0 0 0 .743-.648L20 10.25v-7.5a.75.75 0 0 0-.75-.75Z' />
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
										width='24'
										height='24'
										fill='none'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-error mr-2'
									>
										<path d='M12 1.75a3.25 3.25 0 0 1 3.245 3.066L15.25 5h5.25a.75.75 0 0 1 .102 1.493L20.5 6.5h-.796l-1.28 13.02a2.75 2.75 0 0 1-2.561 2.474l-.176.006H8.313a2.75 2.75 0 0 1-2.714-2.307l-.023-.174L4.295 6.5H3.5a.75.75 0 0 1-.743-.648L2.75 5.75a.75.75 0 0 1 .648-.743L3.5 5h5.25A3.25 3.25 0 0 1 12 1.75Zm6.197 4.75H5.802l1.267 12.872a1.25 1.25 0 0 0 1.117 1.122l.127.006h7.374c.6 0 1.109-.425 1.225-1.002l.02-.126L18.196 6.5ZM13.75 9.25a.75.75 0 0 1 .743.648L14.5 10v7a.75.75 0 0 1-1.493.102L13 17v-7a.75.75 0 0 1 .75-.75Zm-3.5 0a.75.75 0 0 1 .743.648L11 10v7a.75.75 0 0 1-1.493.102L9.5 17v-7a.75.75 0 0 1 .75-.75Zm1.75-6a1.75 1.75 0 0 0-1.744 1.606L10.25 5h3.5A1.75 1.75 0 0 0 12 3.25Z' />
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
