import { useRouteError } from 'react-router-dom'

type RouteErrorState = {
	statusText: string
	message: string
}

export default function ErrorPage() {
	const error = useRouteError() as RouteErrorState
	console.error(error)

	return (
		<div className='flex flex-col text-center justify-center'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
		</div>
	)
}
