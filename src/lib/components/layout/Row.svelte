<script>
	export let layout = '';
</script>

<div class='row {layout}'>
	<slot />
</div>

<style>
	.row {
		display: flex;
		flex-direction: row;
		flex: 1;
	}
</style>