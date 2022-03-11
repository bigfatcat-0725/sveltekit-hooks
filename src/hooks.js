import * as cookie from 'cookie'

export const handle = async ({ event, resolve }) => {
	// event.locals.userName = 'Bigfatcat'
	const cookies = cookie.parse(event.request.headers.get('cookie') || '')

	event.locals.user = cookies

	if (!cookies.session_id) {
		event.locals.user.authenticated = false
	} else {
		event.locals.user.authenticated = true
	}

	const response = await resolve(event)

	// response.headers.set('hello-world', 'hey programmer')

	// console.log(response.headers)

	return response
}

export const getSession = (event) => {
	const user = event.locals.user

	if (!user.session_id) {
		return {}
	}

	console.log(user)

	return {
		// user: {
		// 	id: '$@#SDF',
		// 	name: 'Bigfacat',
		// 	access: 'admin'
		// }
		user
	}
}
