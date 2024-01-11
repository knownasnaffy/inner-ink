import {
	enable as enableAS,
	isEnabled,
	disable as disableAS,
} from 'tauri-plugin-autostart-api'
import BooleanSettings from './BooleanSetting'
import { ThemeList } from './ThemeList'
import { ChangeEventHandler, useLayoutEffect, useState } from 'react'

const AppearanceAndBehavior = () => {
	const [autoStart, setAutoStart] = useState<boolean>()
	useLayoutEffect(() => {
		const fetchSettings = async () => {
			const isASEnabled = await isEnabled()
			setAutoStart(isASEnabled)
		}

		fetchSettings()
	})

	const handleASChange: ChangeEventHandler<HTMLInputElement> = async (
		event,
	) => {
		const checked = event.target.checked
		await (checked ? enableAS() : disableAS())
		setAutoStart(checked)
	}

	return (
		<>
			<h3 className='mb-2 mt-4 text-lg font-semibold'>
				Appearance & Behaviour
			</h3>
			<div className='join join-vertical w-full'>
				{/* ### Application theme */}
				<div className='rounded-btn collapse-arrow bg-base-200 join-item collapse'>
					<input type='checkbox' />
					<div className='collapse-title text-md font-semibold'>
						<div className='flex flex-row items-center gap-2'>
							<svg
								viewBox='0 0 24 24'
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6 shrink-0 fill-current'
							>
								<path d='M14.036 2.777a2.75 2.75 0 0 1 3.368 1.945l2.718 10.142a2.75 2.75 0 0 1-1.945 3.368L11.9 19.915A2.75 2.75 0 0 1 8.53 17.97L5.813 7.828A2.75 2.75 0 0 1 7.758 4.46l6.278-1.683Zm-8.233 8.881 1.762 6.57a3.732 3.732 0 0 0 1.002 1.714l-.443-.024a2.75 2.75 0 0 1-2.602-2.89l.281-5.37Zm8.621-7.432L8.146 5.91a1.25 1.25 0 0 0-.884 1.53l2.717 10.143a1.25 1.25 0 0 0 1.531.884l6.279-1.683a1.25 1.25 0 0 0 .884-1.53L15.955 5.11a1.25 1.25 0 0 0-1.53-.884ZM4.878 10.18l-.355 6.796c-.037.698.12 1.362.424 1.94l-.414-.161a2.75 2.75 0 0 1-1.582-3.553l1.927-5.022Zm4.863-3.146a1 1 0 1 1 .518 1.932 1 1 0 0 1-.518-1.932Z' />
							</svg>
							Application Theme
						</div>
					</div>
					<div className='collapse-content'>
						<div className='grid w-full grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8'>
							<ThemeList />
						</div>
					</div>
				</div>
				{/* ### Run at startup */}
				<BooleanSettings
					icon={
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 shrink-0 fill-current'
						>
							<path d='M10.64 2.547a.748.748 0 0 1 .39.037L18.262 5.3a.748.748 0 0 1 .025 1.391l-.859.358a4.252 4.252 0 0 0-2 1.719l-.541.892c.085.551.347 1.25.72 1.97a11.4 11.4 0 0 0 1.249 1.928l2.382 1.191a2.748 2.748 0 0 1 1.518 2.458v2.796a.748.748 0 0 1-.748.748h-.837c-3.523 0-7.52-1.175-10.84-2.95-3.286-1.756-6.09-4.2-6.99-6.863a.748.748 0 0 1 .052-.598c.34-.624.706-1.205 1.087-1.745.174-.245.48-.574.737-.845l.185-.195a13.007 13.007 0 0 0 .482-.522c.333-.369.8-.84 1.351-1.336.712-.642 1.58-1.34 2.5-1.92.91-.573 1.918-1.06 2.905-1.229Zm4.817 11.651a13.38 13.38 0 0 1-1.18-1.883c-.378-.733-.714-1.556-.85-2.322l-1.274-.59 1.573 3.965a.748.748 0 0 1-.005.565l-.672 1.606 1.214.449 1.194-1.79Zm.292 2.259c1.262.363 1.929.552 3.512.761v-.012c0-.474-.268-.907-.692-1.12l-1.929-.964-.891 1.335Zm3.512 2.27c-1.87-.24-2.608-.452-4-.854-.273-.079-.57-.164-.906-.259a.76.76 0 0 1-.057-.018l-2.5-.924a.742.742 0 0 1-.062-.026c-2.077-.99-3.239-1.72-4.683-2.775-1.758-1.286-3.064-2.542-3.916-3.555-.09.145-.178.293-.264.444.829 2.02 3.133 4.1 6.165 5.721 3.151 1.685 6.907 2.773 10.134 2.773h.09v-.527ZM4.042 9.058c.596.76 1.57 1.774 2.935 2.87l.425-2.336-1.75-2.236c-.255.25-.475.478-.649.67-.13.155-.34.374-.542.587a78.847 78.847 0 0 0-.419.445ZM6.764 6.35l2.023 2.586a.748.748 0 0 1 .147.595l-.62 3.407a23.135 23.135 0 0 0 3.36 2.014l.549-1.314-2.152-5.424a.748.748 0 0 1 1.01-.955l2.743 1.27.326-.538a5.749 5.749 0 0 1 1.912-1.919l-5.36-2.011c-.661.15-1.406.502-2.169.983-.62.39-1.224.848-1.77 1.306Z' />
						</svg>
					}
					title='Run at startup'
					description='Start when windows starts'
					checked={autoStart}
					onChange={handleASChange}
				/>
				{/* ### Language */}
				<div className='border-base-100 rounded-btn collapse-title bg-base-200 text-md join-item flex flex-row items-center justify-between gap-4 border-t-2 pr-4'>
					<div className='flex flex-row items-center gap-2 font-semibold'>
						<svg
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6 shrink-0 fill-current'
						>
							<path d='m9.34 6.372.05.105 5.56 14.5a.755.755 0 0 1-.418.971.73.73 0 0 1-.91-.333l-.043-.092-1.433-3.737H5.06l-.094-.006-1.546 3.76a.73.73 0 0 1-.963.401.754.754 0 0 1-.427-.885l.033-.096 5.964-14.5a.73.73 0 0 1 1.314-.088Zm9.406-4.37a.75.75 0 0 1 .743.65l.007.1V7.5h1.75a.75.75 0 0 1 .743.649l.007.102a.75.75 0 0 1-.648.743L21.245 9l-1.75-.001v7.25a.75.75 0 0 1-.648.744l-.102.007a.75.75 0 0 1-.743-.648l-.007-.102V2.753a.75.75 0 0 1 .75-.75ZM8.81 8.748 5.65 16.286h6.11L8.81 8.747Zm1.937-6.744h5.498a.75.75 0 0 1 .743.648l.006.102v3.004c0 2.344-1.9 4.245-4.245 4.245a.75.75 0 0 1 0-1.5c1.46 0 2.654-1.14 2.74-2.578l.005-.167V3.503h-4.747a.75.75 0 0 1-.102-1.493l.102-.007h5.498-5.498Z' />
						</svg>
						<div>
							Language
							<p className='text-base-content/50 text-sm'>
								Select a display language fpr this app.
								Overrides default Windows interface language
							</p>
						</div>
					</div>
					<select
						className='select select-bordered select-sm w-full max-w-fit'
						defaultValue='System Default'
					>
						{/* <option>System Default</option> */}
						<option>English (Default)</option>
						{/* <option>French</option> */}
					</select>
				</div>
			</div>
		</>
	)
}

export default AppearanceAndBehavior
