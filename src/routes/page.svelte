<script lang="ts">
    import { header } from '$lib/util/store';
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';
    
    header.set(t.get('nav.dashboard'));
    
    let visible = true;
    const chain = 'ethereum';
    const balGroup = [
        t.get('dashboard.bal'),
        t.get('dashboard.bal-trans'),
        t.get('dashboard.bal-locked')
    ];
    const actGroup = [
        [ t.get('dashboard.act-send'), 'angles-up' ],
        [ t.get('dashboard.act-receive'), 'angles-down' ],
        [ t.get('dashboard.act-buy'), 'cart-shopping' ]
    ];
    const tokens = [
        'BNB',
        'BUSD',
        'DAI',
        'DPR',
        'ETH',
        '1INCH',
        'APE',
        'BAT',
        'CHZ',
        'COMP',
        'CRO',
        'ENJ',
        'ENS',
        'GALA',
        'KNC',
        'LDO',
        'LINK',
        'MATIC',
        'MKR',
        'NEAR',
        'SAND',
        'SHIB',
        'stETH',
        'THETA',
        'UNI',
        'VERSE',
        'vETH',
        'wstETH',
        'FTM',
        'USDC',
        'USDD',
        'USDT',
        'WBTC',
        'WETH'
    ];
    const number = (decimals: number) => Number(Math.random() * 100).toFixed(decimals);
    const flip = () => Math.random() < 0.5;
</script>

<div class="flex flex-col flex-grow capitalize font-medium">
    <div class="flex flex-col md:border-y-2 [border-image:_linear-gradient(to_right,_transparent,_#ffffff1a_25%_75%,_transparent)_1] md:py-4 md:bg-gradient-to-r from-transparent via-surface-600 justify-around md:flex-row items-center md:h-min">
        <div class="balance flex  basis-4/5 flex-col w-full md:flex-row h-min justify-evenly md:pr-5 text-center">
            {#each balGroup as group, i}
                <div class="{i === 0 ? 'flex bg-gradient-to-r md:bg-none md:border-0 from-transparent via-surface-700 to-transparent border-y-2 [border-image:_linear-gradient(to_right,_transparent,_#ffffff1a_25%_75%,_transparent)_1] py-4 md:py-0' : 'hidden md:flex'} flex-col flex-grow justify-evenly items-center">
                    <div class="title flex items-center justify-center mb-1">
                        {#if i === 0}
                            <div class="w-4 mr-2 md:hidden"/>
                        {/if}
                        {group}
                        {#if i === 0}
                            <button class="w-4 visibility ml-2 md:hidden" on:click={() => visible = !visible}>
                                <FontAwesome type="regular" size="xs" name={visible ? 'eye' : 'eye-slash'}/>
                            </button>
                        {/if}
                    </div> 
                    <div class="value flex items-center" class:font-mono={!visible}>
                        {#if i === 0}
                            <span class="w-14 mr-1"></span>
                        {/if}
                        {visible ? `$${number(2)}` : '******'}
                        {#if i === 0}
                            <span class="w-14 ml-1 text-success-500 text-left text-xs">
                                {visible ? `+${number(2)}%` : '******'}
                            </span>
                        {/if}
                    </div>
                </div>
                {#if i !== balGroup.length -1 }
                    <div class="divider hidden md:flex my-2 md:my-0 md:mx-2 border border-white/10" />
                {/if}
            {/each}
            <button class="visibility hidden md:flex items-center mt-2 md:mt-0 md:ml-2" on:click={() => visible = !visible}>
                <FontAwesome type="regular" name={visible ? 'eye' : 'eye-slash'}/>
            </button>
        </div>
        <div class="actions flex flex-col w-full md:w-auto mt-4 md:mt-0 text-sm">
            <div class="hidden md:flex justify-center mb-4">
                {$t('dashboard.act')}
            </div>
            <div class="flex justify-evenly ">
                {#each actGroup as [ text, icon ], i}
                    <div class="flex w-full flex-col items-center border-2 md:border-none border-white/20 justify-center py-3 px-2 md:p-0" class:mx-1={i === 1}>
                        <div class="icon flex md:w-10 md:h-10 md:border border-white/30 rounded justify-center items-center mb-2 md:mb-2">
                            <FontAwesome name={icon} size="lg" classes="md:text-base" />
                        </div>
                        <div class="title text-xs md:text-[10px]">{text}</div>
                    </div>
                    {#if i !== actGroup.length - 1 }
                        <!-- <div class="divider hidden sm:flex h-full border border-white/20" /> -->
                    {/if}
                {/each}
            </div>
        </div>
    </div>
    <div class="tokens flex flex-col mt-8 text-sm">
        <div class="header px-3 flex mb-2">
            <div class="flex flex-grow">
                Token
            </div>
            <div class="md:flex hidden basis-1/4 justify-center">
                Portfolio %
            </div>
            <div class="md:flex hidden basis-1/4 justify-center">
                Price
            </div>
            <div class="flex basis-1/5 justify-end">
                Balance
            </div>
        </div>
        {#each tokens as token}
            <div class="token flex rounded items-center justify-end py-2 px-3 mb-2 bg-gradient-to-r from-surface-600 to-surface-800">
                <div class="flex flex-grow items-center">
                    <div class="flex img w-12 mr-2">
                        <img src="networks/{token.toLowerCase()}.png" alt={token}/>
                    </div>
                    <div class="flex flex-col">
                        <div class="token">{token}</div>
                        <div class="rate flex md:hidden {flip() ? 'text-success-500' : 'text-error-500'}">${number(2)}</div>
                        <div class="chain md:flex hidden text-xs text-gray-400">{chain}</div>
                    </div>
                </div>
                <div class="md:flex hidden basis-1/4 flex-col items-center">
                    <div class="portfolio-percentage text-base">{number(0)}%</div>
                </div>
                <div class="md:flex hidden basis-1/4 flex-col items-center">
                    <div class="balance">${number(2)}</div>
                    <div class="rate text-xs {flip() ? 'text-success-500' : 'text-error-500'}">${number(2)}</div>
                </div>
                <div class="flex basis-1/5 flex-col items-end">
                    <div class="balance" class:font-mono={!visible}>{visible ? `${number(0)} ${token}` : '******'}</div>
                    <div class="conversion text-xs text-gray-400" class:font-mono={!visible}>{visible ? `$${number(2)}` : '******'}</div>
                </div>
            </div>
        {/each}
    </div>
</div>