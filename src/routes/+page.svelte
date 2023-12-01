<script>
	let selectedIndex = 0;
</script>

<div class="tabbers flex h-full items-center justify-center">
	<div class="flex p-8 bg-surface-700">
		<div class="flex flex-col bg-surface-500 w-32 h-64">
			{#each new Array(5) as item, i} 
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div class:active={selectedIndex === i} on:click={() => selectedIndex = i} class="flex col-item h-16 w-full bg-surface-200">
					<div class="flex col-inner flex-1 w-full"></div>
				</div>
			{/each}
		</div>
		<div class="flex main flex-col bg-surface-400 w-96 h-64">
			
		</div>
	</div>
</div>


<style>
	.col-item {
		border: 4px solid transparent;
		border-radius: 5px 0 0 5px;
	}

	.col-item.active {
		background: rgb(var(--color-surface-400) / var(--tw-bg-opacity));
		border-right: none !important;
		border-color: white;
		z-index: 4;
	}

	.col-item.active .col-inner {
		background: rgb(var(--color-surface-400) / var(--tw-bg-opacity));
		/* border: 4px solid blue; */
		/* border-right: 4px solid rgb(var(--color-surface-400) / var(--tw-bg-opacity)); */
		/* border-right: 4px solid white; */
		z-index: 4;
	}

	.main {
		border: 4px solid white;
		border-left: none;
		position: relative;
	}

	.main::after {
		content: '';
		position: absolute;
		top: -4px;
		height: calc(100% + 8px);
		left: -4px;
		width: 20px;
		border: 4px solid rgb(255, 255, 255);
		border-right: none;
		border-radius: 4px 0 0 4px;
	}
</style>