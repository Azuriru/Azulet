<script lang="ts">
    import { header } from '$lib/util/store';
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';
    
    header.set(t.get('nav.dashboard'));
    
    let visible = true;
    const funds = 100;
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
</script>

<div class="flex flex-col flex-grow">
    <div class="flex flex-col justify-around md:flex-row items-center md:h-min">
        <div class="balance flex basis-4/5 flex-col w-full md:flex-row h-min justify-evenly md:pr-5 uppercase font-medium tracking-widest text-sm text-center">
            {#each balGroup as group, i}
                <div class="flex flex-col flex-grow justify-evenly items-center">
                    <div class="title flex items-center justify-center mb-1">
                        {#if i === 0}
                            <!-- <div class="w-4 mr-2"/> -->
                        {/if}
                        {group}
                        {#if i === 0}
                            <button class="w-4 visibility ml-2 md:hidden" on:click={() => visible = !visible}>
                                <FontAwesome type="regular" size="xs" name={visible ? 'eye' : 'eye-slash'}/>
                            </button>
                        {/if}
                    </div> 
                    <div class="value" class:font-mono={!visible}>{visible ? `$${number(2)}` : '******'}</div>
                </div>
                {#if i !== balGroup.length -1 }
                    <div class="divider my-2 md:my-0 md:mx-2 border border-white/20" />
                {/if}
            {/each}
            <button class="visibility hidden md:flex items-center mt-2 md:mt-0 md:ml-2" on:click={() => visible = !visible}>
                <FontAwesome type="regular" name={visible ? 'eye' : 'eye-slash'}/>
            </button>
        </div>
        <div class="actions flex flex-col w-full md:w-auto mt-4 md:mt-0 text-sm font-medium uppercase tracking-widest">
            <div class="hidden md:flex justify-center mb-4">
                {$t('dashboard.act')}
            </div>
            <div class="flex justify-evenly ">
                {#each actGroup as [ text, icon ], i}
                    <div class="flex w-full flex-col items-center border-2 md:border-none border-white/20 justify-center py-2 px-2 md:p-0" class:mx-1={i === 1}>
                        <div class="icon flex md:w-10 md:h-10 md:border border-white/30 rounded justify-center items-center mb-1 md:mb-2">
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
    <div class="tokens flex flex-col mt-8 uppercase tracking-widest font-medium text-sm">
        <div class="header mb-2">tokens</div>
        {#each tokens as token}
            <div class="token flex items-center justify-between py-2 px-3 mb-2 bg-surface-700">
                <div class="flex items-center ">
                    <div class="flex img w-12 mr-2">
                        <img src="./src/lib/assets/networks/{token.toLowerCase()}.png" alt="a"/>
                    </div>
                    <div class="flex flex-col">
                        <div>{token}</div>
                        <div>${number(2)}</div>
                    </div>
                </div>
                <div class="flex flex-col items-end">
                    <div class="balance" class:font-mono={!visible}>{visible ? `0 ${token}` : '******'}</div>
                    <div class="conversion text-xs text-gray-400" class:font-mono={!visible}>{visible ? `$0` : '******'}</div>
                </div>
            </div>
        {/each}
    </div>
</div>