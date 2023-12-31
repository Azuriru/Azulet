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
    <div class="flex info flex-col md:flex-row md:h-min">
        {#each balGroup as group, i}
            <div class="balance {i === 0 ? 'flex py-4 md:py-0' : 'hidden md:flex'} flex-grow flex-col {i === 0 ? 'items-center md:items-start' : 'items-center'}">
                <div class="title hidden items-center mb-3 md:flex">
                    {group}
                    {#if i === 0}
                        <button class="w-4 visibility ml-2 hidden md:flex" on:click={() => visible = !visible}>
                            <FontAwesome type="regular" size="" name={visible ? 'eye' : 'eye-slash'}/>
                        </button>
                    {/if}
                </div> 
                <div class="balance flex {i === 0 ? 'text-[38px] leading-[42px]' : 'text-3xl'}">
                    {visible ? `$${number(2)}` : '******'}
                </div> 
                {#if i === 0}
                    <div class="value flex items-center mt-3">
                        <button class="w-4 visibility mr-4 md:hidden" on:click={() => visible = !visible}>
                            <FontAwesome type="regular" size="lg" name={visible ? 'eye' : 'eye-slash'}/>
                        </button>
                        <span class:font-mono={!visible}>
                            {visible ? `${flip() ? '+' : '-'}$${number(2)}` : '******'}
                        </span>
                        <span class="flex items-center rounded-full px-2 ml-2 text-[10px] leading-[18px] bg-success-500">
                            +{number(2)}%
                        </span>
                    </div>
                {/if}
            </div>
            {#if i !== balGroup.length -1 }
                <div class="divider hidden md:flex my-2 md:my-0 md:mx-2 border border-white/10" />
            {/if}
        {/each}
        <div class="divider hidden md:flex my-2 md:my-0 md:mx-2 border border-white/10" />
        <div class="actions flex flex-col flex-grow items-center w-full md:w-auto">
            <div class="hidden md:flex mb-3">
                {$t('dashboard.act')}
            </div>
            <div class="flex">
                {#each actGroup as [ text, icon ], i}
                    <div class="flex flex-col items-center justify-center" class:mx-2={i === 1}>
                        <div class="icon flex w-10 h-10 bg-surface-50 rounded justify-center items-center md:mb-2">
                            <FontAwesome name={icon} size="lg" classes="md:text-base" />
                        </div>
                        <div class="title hidden md:flex">{text}</div>
                    </div>
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
                    {#if flip()}
                        <div class="rate text-xs text-success-500">+{number(2)}%</div>
                    {:else}
                        <div class="rate text-xs text-error-500">-{number(2)}%</div>
                    {/if}
                </div>
                <div class="flex basis-1/5 flex-col items-end">
                    <div class="balance" class:font-mono={!visible}>{visible ? `${number(0)} ${token}` : '******'}</div>
                    <div class="conversion text-xs text-gray-400" class:font-mono={!visible}>{visible ? `$${number(2)}` : '******'}</div>
                </div>
            </div>
        {/each}
    </div>
</div>