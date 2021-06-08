<script lang="ts" context="module">
	export const load: Load = async ({ fetch }) => ({
		props: {
			chatExpanded: await (await fetch(`/${CHAT_EXPANDED}`)).json()
		}
	})
</script>

<script lang="ts">
	import type { Load } from '@sveltejs/kit'
	import { setContext } from 'svelte'
	import { writable } from 'svelte/store'

	import type ChatExpanded from '../lib/chat/expanded'
	import { CHAT_EXPANDED } from '../lib/chat/expanded'
	import Navbar from '../components/Navbar.svelte'

	export let chatExpanded: boolean

	setContext<ChatExpanded>(CHAT_EXPANDED, writable(chatExpanded))
</script>

<svelte:head>
	<title>drawplace</title>
</svelte:head>

<Navbar />
