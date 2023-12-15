import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authStore'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import bcrypt from 'bcryptjs'

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

	const onSubmit = (values: { name: string; password: string }) => {
		const { name, password } = values
		const hashedPassword = bcrypt.hashSync(password, 10) // Hash the password

		// Save user data to localStorage
		localStorage.setItem('username', name)
		localStorage.setItem('password', hashedPassword)

		console.log('User registered:', name)
		console.log('Hashed password saved to localStorage')
		logIn()
	}

	return (
		<div className='card bg-base-100'>
			<div className='card-body'>
				<h1
					className={clsx(
						'card-title text-2xl w-full',
						'table after:bg-gradient-to-r after:from-primary after:to-secondary after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full pb-1.5',
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
					<Form>
						<div className='w-full form-control'>
							<label htmlFor='name' className='label'>
								<span className='label-text'>Name</span>
							</label>
							<Field
								type='text'
								id='name'
								name='name'
								className='input input-bordered w-full input-primary placeholder-neutral'
							/>
							<ErrorMessage
								name='name'
								component='label'
								className='label label-text-alt text-error'
							/>
						</div>

						<div className='w-full form-control'>
							<label htmlFor='password' className='label'>
								<span className='label-text'>Password</span>
							</label>
							<Field
								type='password'
								id='password'
								name='password'
								className='input input-bordered w-full input-primary placeholder-neutral'
							/>
							<ErrorMessage
								name='password'
								component='label'
								className='label label-text-alt text-error'
							/>
						</div>

						<div className='w-full form-control'>
							<label htmlFor='repeatPassword' className='label'>
								<span className='label-text'>
									Repeat Password
								</span>
							</label>
							<Field
								type='password'
								id='repeatPassword'
								name='repeatPassword'
								className='input input-bordered w-full input-primary placeholder-neutral'
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
							Submit
						</button>
					</Form>
				</Formik>
			</div>
		</div>
	)
}

export default RegisterPage
