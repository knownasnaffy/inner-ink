import clsx from 'clsx'

const SignUpPage = () => {
	return (
		<div className='h-screen flex flex-col justify-center'>
			<div className='relative py-3 sm:max-w-xl sm:mx-auto'>
				<div className='absolute inset-0 bg-gradient-to-r from-primary to-secondary shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
				<div className='relative shadow-lg sm:rounded-3xl'>
					<div className='card max-w-md bg-base-200 mx-auto'>
						<div className='card-body'>
							<h1 className={clsx('card-title text-2xl w-full mb-2','table after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full pb-1.5')}>
								Register
							</h1>
							<form className=''>
								<div className='flex gap-4'>
									{/* First Name Field */}
									<TextInput
										label='First Name'
										placeholder='John'
									/>
									{/* Last Name Field */}
									<TextInput
										label='Last Name'
										placeholder='Doe'
									/>
								</div>
								{/* Password Field */}
								<div className='form-control w-full'>
									<label className='label pt-px'>
										<span className='label-text'>
											Password
										</span>
									</label>
									<input
										type='text'
										placeholder='********'
										className='input input-bordered w-full focus:input-primary focus:focus-within:outline-offset-0 focus:border-none placeholder-neutral'
									/>
									<label className='label pb-px'>
										<span className='label-text-alt invisible'>
											Validation Error
										</span>
									</label>
								</div>
								{/* Repeat Password field */}
								<div className='form-control w-full'>
									<label className='label pt-px'>
										<span className='label-text'>
											Repeat Password
										</span>
									</label>
									<input
										type='text'
										placeholder='********'
										className='input input-bordered w-full focus:input-primary focus:focus-within:outline-offset-0 focus:border-none placeholder-neutral'
									/>
									<label className='label'>
										<span className='label-text-alt invisible'>
											Validation Error
										</span>
									</label>
								</div>
								<button
									type='submit'
									className='btn btn-primary btn-block'>
									Continue
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SignUpPage

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

const TextInput = ({ label, className, ...props }: TextInputProps) => {
	return (
		<div className='form-control w-full'>
			<label className='label'>
				<span className='label-text'>{label}</span>
			</label>
			<input
				className={clsx(
					'input input-bordered hover:outline-none w-full focus:input-primary focus:focus-within:outline-offset-0 focus:border-none placeholder-neutral',
					className
				)}
				{...props}
			/>
			<label className='label pb-px'>
				<span className='label-text-alt invisible'>
					Validation Error
				</span>
			</label>
		</div>
	)
}
