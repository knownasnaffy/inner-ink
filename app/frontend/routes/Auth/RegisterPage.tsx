import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authStore'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { saveUser } from '../../utils/database'

const RegisterPage = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const auth = useAuth()

	const from = location.state?.from?.pathname || '/'
	function logIn() {
		auth.signin('username', () => {
			// Send them back to the page they tried to visit when they were
			// redirected to the login page. Use { replace: true } so we don't create
			// another entry in the history stack for the login page.  This means that
			// when they get to the protected page and click the back button, they
			// won't end up back on the login page, which is also really nice for the
			// user experience.
			navigate(from, { replace: true })
		})
	}
	const initialValues = {
		name: '',
		password: '',
		repeatPassword: '',
	}

	const validationSchema = Yup.object({
		name: Yup.string().required('Name is required'),
		password: Yup.string()
			.min(4, 'Password must be at least 4 characters')
			.required('Password is required'),
		repeatPassword: Yup.string()
			.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
			.required('Repeat Password is required'),
	})

	const onSubmit = async (values: { name: string; password: string }) => {
		const { name, password } = values

		await saveUser(name, password)

		console.log('User registered:', name)
		console.log('Hashed password saved to localStorage')
		logIn()
	}

	return (
		<div className='card bg-base-100'>
			<div className='card-body'>
				<h1
					className={clsx(
						'card-title w-full text-2xl',
						'after:from-primary after:to-secondary table pb-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gradient-to-r',
					)}
				>
					Register
				</h1>

				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					className='flex'
				>
					{({ isSubmitting }) => (
						<Form>
							<div className='form-control w-full'>
								<label htmlFor='name' className='label'>
									<span className='label-text'>Name</span>
								</label>
								<Field
									type='text'
									id='name'
									name='name'
									className='input input-bordered input-primary placeholder-neutral w-full'
								/>
								<ErrorMessage
									name='name'
									component='label'
									className='label label-text-alt text-error'
								/>
							</div>

							<div className='form-control w-full'>
								<label htmlFor='password' className='label'>
									<span className='label-text'>Password</span>
								</label>
								<Field
									type='password'
									id='password'
									name='password'
									className='input input-bordered input-primary placeholder-neutral w-full'
								/>
								<ErrorMessage
									name='password'
									component='label'
									className='label label-text-alt text-error'
								/>
							</div>

							<div className='form-control w-full'>
								<label
									htmlFor='repeatPassword'
									className='label'
								>
									<span className='label-text'>
										Repeat Password
									</span>
								</label>
								<Field
									type='password'
									id='repeatPassword'
									name='repeatPassword'
									className='input input-bordered input-primary placeholder-neutral w-full'
								/>
								<ErrorMessage
									name='repeatPassword'
									component='label'
									className='label label-text-alt text-error'
								/>
							</div>

							<button
								type='submit'
								className='btn btn-primary btn-block mt-4'
							>
								<span
									className={clsx(
										'loading loading-ring loading-md',
										!isSubmitting && 'hidden',
									)}
								></span>
								Submit
							</button>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	)
}

export default RegisterPage
