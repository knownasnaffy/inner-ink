import clsx from 'clsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/authStore'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { verifyUser } from '../../utils/database'

const LoginPage = () => {
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
		password: '',
	}

	const validationSchema = Yup.object({
		password: Yup.string()
			.required('Password is required')
			.test(
				'fakePasswordCheck',
				'Invalid password',
				async (value: string) => await verifyUser(value),
			),
	})

	const onSubmit = () => {
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
					Login
				</h1>
				<Formik
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
					validateOnChange={false}
					className='flex'
				>
					{({ isSubmitting }) => (
						<Form>
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

export default LoginPage
