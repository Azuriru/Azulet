<script>
    import { page } from '$app/stores';  
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';
    import logo from '$lib/assets/logo.png';

    const navstart = [
        ['layer-group', t.get('nav.dashboard'), '/'],
        ['seedling', t.get('nav.stake')],
        ['circle-nodes', t.get('nav.dapps')],
        ['clock', t.get('nav.history')],
        ['star', t.get('nav.watchlist')],
        ['gear', t.get('nav.settings')]
    ];
    
    const navend = [
        ['circle-question', t.get('nav.faq') ],
        ['message', t.get('nav.support') ],
        ['square-arrow-up-right', t.get('nav.tos') ]
    ];
</script>

<nav class="navigation">
	<input type="checkbox" id="shitty-checkbox-hack" class="hidden" />
	<div class="nav flex w-full md:h-full capitalize font-medium">
        <div class="options flex flex-1 md:flex-col bg-surface-800 md:bg-transparent">
            <div class="nav-start flex md:flex-col justify-evenly flex-1">
                <a href="sandbox" class="brand nav-item hidden md:flex justify-center items-center h-36">
                    <img src={logo} alt="logo" class="w-28"/>
                </a>
                {#each navstart as [ name, title, route ]}
                    <a class="nav-item flex-grow hover:bg-surface-400 hover:md:bg-gradient-to-r hover:md:bg-transparent hover:md:from-surface-200 from-surface-300 to-transparent flex flex-col md:flex-row md:flex-row-reverse items-center flex-shrink-0 px-2 py-2 md:pl-4 md:py-2 {$page.url.pathname === route ? 'bg-surface-600 md:bg-transparent md:bg-gradient-to-r' : ''}" href={route}>
                        <div class="icon flex items-center justify-center w-10 h-10 md:w-8 md:h-8">
                            <FontAwesome {name} size="2xl" classes="md:text-base"/>
                        </div>
                        <div class="title sm:flex hidden mt-1 md:mt-0 md:mr-1 whitespace-nowrap">
                            {title}
                        </div>
                    </a>
                {/each}
            </div>
            <div class="spacer hidden md:flex flex-1" />
            <div class="nav-end hidden md:flex md:flex-col">
                {#each navend as [ name, title, route ]}
                    <a class="nav-item hover:bg-surface-400 hover:md:bg-gradient-to-r hover:md:bg-transparent hover:md:from-surface-200 from-surface-300 to-transparent flex flex-col md:flex-row md:flex-row-reverse items-center flex-shrink-0 px-2 py-2 md:pl-4 md:py-2 {$page.url.pathname === route ? 'bg-surface-600 md:bg-transparent md:bg-gradient-to-r' : ''}" href={route}>
                        <div class="icon flex items-center justify-center w-10 h-10 md:w-8 md:h-8">
                            <FontAwesome {name} size="2xl" classes="md:text-base"/>
                        </div>
                        <div class="title sm:flex hidden mt-1 md:mt-0 md:mr-1 whitespace-nowrap">
                            {title}
                        </div>
                    </a>
                {/each}
            </div>
        </div>
        <label for="shitty-checkbox-hack" class="hamburger hidden items-center justify-center bg-surface-700">
            <FontAwesome name="chevron-up" size="2xl"/>
        </label>
	</div>
</nav>

<style style="scss">
	@media only screen and (max-width: 352px) {
		.nav .options {
			position: absolute;
			flex-direction: column;
            width: 100%;
			transform: translate(0, 40px);
			transition: transform 300ms ease-in-out;
		}

        .nav .nav-start,
        .nav .nav-end {
            flex-direction: column;
        }
        
        .nav .nav-end {
            display: flex;
        }

		.nav .options .nav-item {
            flex-direction: row;
        }

		.nav .options .title {
            display: flex;
            margin-top: 0;
        }

		:global(.nav .options .icon i) {
            font-size: 16px !important;
        }
		
		.hamburger {
			display: flex;
			align-items: center;
			justify-content: center;
            width: 100%;
			z-index: 10;
			padding: 8px;
			cursor: pointer;
			user-select: none;
		}

		#shitty-checkbox-hack:checked + .nav .options {
			transform: translate(0, -100%);
		}

		:global(#shitty-checkbox-hack:checked + .nav .hamburger i::before) {
			content: "\f078";
		}
	}
</style>