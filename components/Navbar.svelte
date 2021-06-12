<script lang="ts">
	import Chat from './Chat.svelte'
</script>

<div class="root">
	<nav>
		<h1>drawplace</h1>
	</nav>
	<Chat />
</div>

<style lang="scss">
	$margin: 24px;

	.root {
		display: flex;
		align-items: flex-start;
		position: absolute;
		top: $margin;
		left: $margin;
		right: $margin;
	}

	nav {
		flex-grow: 1;
		display: flex;
		align-items: center;
		margin-right: $margin;
		padding: 12px 16px;
		background: white;
		box-shadow: 0 0 20px 5px transparentize(black, 0.9);
		border-radius: 12px;
	}

	h1 {
		cursor: default;
		margin-right: auto;
	}
</style>
