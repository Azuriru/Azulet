<script>
	export let layout = '';
</script>

<div class='column {layout}'>
	<slot />
</div>

<style>
	.column {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
</style>