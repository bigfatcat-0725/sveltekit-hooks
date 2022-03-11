<script>
	let message = ''

	const login = async () => {
		const res = await fetch('/api/login', {
			method: 'POST',
			body: JSON.stringify({
				username: 'Bigfatcat',
				password: '$^%#^*#'
			})
		})

		const data = await res.json()
		message = data.message
	}
</script>

<h1>Login</h1>
<p>{message}</p>
<button on:click={login}>Login</button>

<style>
	p {
		color: brown;
	}
</style>
