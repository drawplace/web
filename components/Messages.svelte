<script lang="ts">
	import messages from '../lib/api/messages'
</script>

<div>
	{#if $messages}
		{#each $messages as message (message.id)}
			<p>{JSON.stringify(message)}</p>
		{/each}
	{/if}
</div>

<style lang="scss">
</style>
