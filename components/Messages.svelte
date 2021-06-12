<script lang="ts">
	import session from '../lib/session/store'
	import messages from '../lib/message/store'
</script>

<div aria-expanded={$session.chatExpanded}>
	{#if $messages}
		{#each $messages as message (message.id)}
			<p>{JSON.stringify(message)}</p>
		{/each}
	{/if}
</div>

<style lang="scss">
	div {
		height: 0;
		overflow: hidden;
		transition: height 0.3s;

		&[aria-expanded='true'] {
			height: 300px;
		}
	}
</style>
