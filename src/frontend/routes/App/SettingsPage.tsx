import AppearanceAndBehavior from '../../components/App/Settings/AppearanceAndBehavior'
import BackupAndRestore from '../../components/App/Settings/BackupAndRestore'
import DatePicker from '../../components/App/Settings/DatePicker'
import Version from '../../components/App/Settings/Version'

const SettingsPage = () => {
	return (
		<div className='h-full py-4 px-8 md:px-10 lg:px-14 overflow-auto gutter-stable animate-in slide-in-from-right'>
			<h2 className='text-2xl font-semibold table rounded-none'>
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
