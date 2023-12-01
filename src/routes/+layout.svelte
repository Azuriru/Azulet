<script>
	import '../app.postcss';
    import Navigation from '../lib/components/layout/Navigation.svelte';
</script>

<div class="main flex flex-col flex-col-reverse md:flex-row h-full">
	<Navigation />
	<div class="content w-full h-full">
		<slot />
	</div>
</div>