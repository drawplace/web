<script lang="ts">
	import session from '../lib/session/store'
	import CHAT_EXPANDED from '../lib/chat/expanded/key'
	import FOREVER from '../lib/cookie/forever'
	import toggleCookie from '../lib/cookie/toggle'
	import Expand from '../images/Expand.svelte'
	import Collapse from '../images/Collapse.svelte'
	import Messages from './Messages.svelte'

	const toggle = () => {
		$session = { ...$session, chatExpanded: !$session.chatExpanded }
		toggleCookie(CHAT_EXPANDED, $session.chatExpanded, FOREVER)
	}
</script>

<article>
	<header on:click={toggle}>
		<h1>Chat</h1>
		<svelte:component
			this={$session.chatExpanded ? Collapse : Expand}
			class="toggle"
		/>
	</header>
	<Messages />
</article>

<style lang="scss">
	@use 'styles/colors';

	article {
		flex-shrink: 0;
		width: 300px;
		background: white;
		box-shadow: 0 0 20px 5px transparentize(black, 0.9);
		border-radius: 12px;
	}

	header {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 12px 16px;

		&:hover > :global .toggle {
			opacity: 0.7;
		}
	}

	header > :global .toggle {
		height: 20px;
		color: colors.$blue;
		transition: opacity 0.15s;
	}
</style>
