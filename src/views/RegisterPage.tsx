import clsx from 'clsx'
// import useAuth from '../hooks/useAuth'

const RegisterPage = () => {
	// const logIn = useAuth((state: any) => state.logIn)
	return (
		<div className='max-w-md mx-auto card bg-base-100'>
			<div className='card-body'>
				<h1
					className={clsx(
						'card-title text-2xl w-full mb-5',
						'table after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full pb-1.5',
					)}
				>
					Register
				</h1>
				<div className='flex gap-4'>
					{/* First Name Field */}
					{/* IDEA: An option in settings to select honorifics(based on gender as well). For eg. Mr/Mrs FirstName, Mr/Mrs LastName, FirstName, LastName */}
					<TextInput
						label='First Name'
						type='text'
						placeholder='John'
						altLabel='*First Name is required'
						autoComplete='off'
					/>
					{/* Last Name Field */}
					<TextInput
						label='Last Name'
						type='text'
						placeholder='Doe'
						autoComplete='off'
					/>
				</div>
				{/* Password Field */}
				{/* IDEA: An option in settings to only except numbers(pin) using attributes [inputmode="numeric"] and [minlength="4"] */}
				<TextInput
					label='Password'
					type='password'
					placeholder='********'
					autoComplete='new-password'
				/>
				{/* Repeat Password field */}
				<TextInput
					label='Repeat Password'
					type='password'
					placeholder='********'
					autoComplete='off'
				/>
				{/* Submit Button */}
				{/* IDEA: A dialog pops up when pressing the button which says, "`Attention!` All access to data will be lost if you don't remember this password. The future is in your hands. [Change][Continue]" */}
				<button
					type='submit'
					className='mt-2 btn btn-primary btn-block'
					// onClick={logIn}
				>
					Continue
				</button>
			</div>
		</div>
	)
}

export default RegisterPage

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
	altLabel?: string
	altLableClassName?: string
	altLabelError?: boolean
	altLabelWarn?: boolean
	altLableSuccess?: boolean
}

const TextInput = ({
	label,
	altLabel,
	altLabelError,
	altLabelWarn,
	altLableSuccess,
	className,
	...props
}: TextInputProps) => {
	return (
		<div className='w-full form-control'>
			<label className='label'>
				<span
					className={clsx(
						'label-text',
						altLabelError
							? 'text-error'
							: altLabelWarn
							? 'text-warning'
							: altLableSuccess
							? 'text-success'
							: null,
					)}
				>
					{label}
				</span>
			</label>
			<input
				className={clsx(
					'input input-bordered w-full',
					altLabelError
						? 'input-error'
						: altLabelWarn
						? 'input-warning'
						: altLableSuccess
						? 'input-success'
						: 'focus:input-primary',
					'focus:focus-within:outline-offset-0 focus:border-none placeholder-neutral',
					className,
				)}
				{...props}
			/>
			<label className='label'>
				<span
					className={clsx(
						'label-text-alt',
						altLabelError
							? 'text-error'
							: altLabelWarn
							? 'text-warning'
							: altLableSuccess
							? 'text-success'
							: 'hidden',
					)}
				>
					{altLabel || 'ㅤ'}
				</span>
			</label>
		</div>
	)
}
