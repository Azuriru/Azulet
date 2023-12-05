<script>
	import '../app.postcss';
    import Navigation from '../lib/components/layout/Navigation.svelte';
    import UserHeader from '../lib/components/layout/UserHeader.svelte';
</script>

<div class="main flex flex-col flex-col-reverse md:flex-row h-full md:bg-gradient-to-r from-surface-700 to-[250px] to-transparent">
	<Navigation />
	<div class="content w-full h-full flex flex-col overflow-hidden">
		<UserHeader />
		<div class="flex flex-col h-full overflow-auto px-4 sm:px-8 md:px-12 pb-4 sm:pb-8 sm:pb-12">
			<slot />
		</div>
	</div>
</div>