import AppearanceAndBehavior from '../../components/App/Settings/AppearanceAndBehavior'
import BackupAndRestore from '../../components/App/Settings/BackupAndRestore'
import DatePicker from '../../components/App/Settings/DatePicker'
import Version from '../../components/App/Settings/Version'

const SettingsPage = () => {
	return (
		<div className='gutter-stable animate-in slide-in-from-right h-full overflow-auto px-8 py-4 md:px-10 lg:px-14'>
			<h2 className='table rounded-none text-2xl font-semibold'>
				Settings
			</h2>
			{/* ## Version */}
			<Version />
			{/* ## Appearance and behavior */}
			<AppearanceAndBehavior />
			{/* ## Date picker */}
			<DatePicker />
			{/* Backup and Reset */}
			<BackupAndRestore />
		</div>
	)
}

export default SettingsPage
