<script context="module">
	export const load = ({ session }) => {
		// console.log(session)

		return {
			props: { session }
		}
	}
</script>

<script>
	export let session
	console.log(session)
</script>

{JSON.stringify(session)}

{#if session.user}
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{:else}
	<h1>not login</h1>
{/if}
