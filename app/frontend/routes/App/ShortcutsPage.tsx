import clsx from 'clsx'
import shortcuts from '../../config/shortcuts'

const ShortcutsPage = () => {
	return (
		<div className='gutter-stable animate-in slide-in-from-right h-full overflow-auto px-8 py-4 md:px-10 lg:px-14'>
			<h2 className='table rounded-none pb-4 text-2xl font-semibold'>
				Keyboard Shortcuts
			</h2>
			<div className='bg-base-200 rounded-box px-2 pb-2'>
				<table className='table-zebra table table-auto'>
					{/* head */}
					<thead>
						<tr>
							<th>Function</th>
							<th>Scope</th>
							<th>Shortcut</th>
						</tr>
					</thead>
					<tbody>
						{shortcuts.map((shortcut, index) => {
							return (
								<tr key={index}>
									<td
										className={clsx(
											index % 2 ||
												'bg-base-100 rounded-l-btn',
										)}
									>
										{shortcut.function}
									</td>
									<td
										className={clsx(
											index % 2 || 'bg-base-100',
										)}
									>
										<span
											className={clsx(
												'badge badge-sm capitalize',
												index % 2 || 'badge-ghost',
											)}
										>
											{shortcut.scope}
										</span>
									</td>
									<td
										className={clsx(
											index % 2 ||
												'bg-base-100 rounded-r-btn',
										)}
									>
										{shortcut.default
											.split('+')
											.map((key, index, keys) => (
												<>
													<kbd
														className='kbd'
														key={index}
													>
														{key}
													</kbd>
													{index ===
														keys.length - 1 ||
														' + '}
												</>
											))}
									</td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ShortcutsPage
