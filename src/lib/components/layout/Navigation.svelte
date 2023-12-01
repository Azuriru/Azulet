<script>
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';
    import logo from '$lib/assets/logo.png';
    import logo_text from '$lib/assets/logo_text.png';

    const navstart = [
        ['layer-group', t.get('nav.dashboard') ],
        ['seedling', t.get('nav.stake') ],
        ['circle-nodes', t.get('nav.dapps') ],
        ['clock', t.get('nav.history') ],
        ['star', t.get('nav.watchlist') ],
        ['gear', t.get('nav.settings') ]
    ];
    
    const navend = [
        ['circle-question', t.get('nav.faq') ],
        ['message', t.get('nav.support') ],
        ['square-arrow-up-right', t.get('nav.tos') ]
    ];

    // $0.scrollBy({ left: 20, behavior: 'smooth' })

    let width;
</script>

<svelte:window bind:innerWidth={width}/>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<nav class:shrunken={width < 352} class="navigation flex w-full md:max-w-min">
    <div class="scroller flex md:flex-col w-full uppercase tracking-widest overflow-x-auto bg-surface-800">
        <!-- <div class="icon flex items-center justify-center w-10 h-10 md:w-8 md:h-8">
            <img src={logo} alt="logo" class="logo w-8" />
        </div> -->
        <div class="menu hidden">
            <FontAwesome name="bars" size="2xl"/>
        </div>
        <div class="nav-wrapper flex flex-col flex-1 justify-between">
            <div class="nav start flex flex-1 md:flex-col justify-evenly md:justify-start">
                {#each navstart as [ name, title ]}
                    <div class="nav-item hover:bg-surface-500 flex flex-col md:flex-row md:flex-row-reverse items-center flex-shrink-0 px-2 py-2 md:pl-4 md:py-2">
                        <div class="icon flex items-center justify-center w-10 h-10 md:w-8 md:h-8">
                            <FontAwesome {name} size="2xl" classes="md:text-base"/>
                        </div>
                        <div class="title sm:flex hidden mt-1 md:mt-0 md:mr-1 text-xs whitespace-nowrap">
                            {title}
                        </div>
                    </div>
                {/each}
            </div>
            <div class="nav end hidden md:flex flex-col">
                {#each navend as [ name, title ]}
                    <div class="nav-item hover:bg-surface-500 flex flex-col md:flex-row md:flex-row-reverse items-center flex-shrink-0 px-2 py-2 md:pl-4 md:py-2">
                        <div class="icon flex items-center justify-center w-10 h-10 md:w-8 md:h-8">
                            <FontAwesome {name} size="2xl" classes="md:text-base"/>
                        </div>
                        <div class="title sm:flex hidden mt-1 md:mt-0 md:mr-1 text-xs whitespace-nowrap">
                            {title}
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </div>
</nav>

<style lang="scss">
    :global(.navigation.shrunken) {
        justify-content: center;
    
        .scroller {
            width: min-content;
            border-radius: 4px 4px 0 0;
        }
        
        .menu {
            @apply flex;
            height: 64px;
            width: 64px;
            justify-content: center;
            align-items: center;
        }

        .nav-wrapper {
            @apply flex absolute left-0 right-0 top-0 bg-surface-800;

            .nav.start,
            .nav.end {
                @apply flex flex-col;
            }
        }

        .nav-item {
            @apply flex-row;

            .icon {
                @apply w-8 h-8 text-base;
            }

            .title {
                @apply flex mt-0;
            }
        }
    }
</style>
