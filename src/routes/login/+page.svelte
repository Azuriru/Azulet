<script>
    import { goto } from '$app/navigation';
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';

    let isLogin = false;
    let passwordShown = false;
</script>

<div class="w-full h-full flex justify-center items-center capitalize">
    <div class="flex flex-col px-6 py-8 items-center rounded-md font-semibold bg-surface-700">
        <div class="switch flex w-min items-center justify-center rounded-full p-2 mb-8 bg-surface-900">
            <button class="sign-up inline-flex items-center justify-center w-40 py-3 capitalize rounded-full mr-1 {!isLogin ? 'bg-surface-700' : ''}" on:click={() => isLogin = false}>{$t('login.sign-up')}</button>
            <button class="log-in inline-flex items-center justify-center w-40 py-3 capitalize rounded-full {isLogin ? 'bg-surface-700' : ''}" on:click={() => isLogin = true}>{$t('login.log-in')}</button>
        </div>
        <div class="email flex flex-col w-96">
            <div class="label mb-2">{$t('login.email')}</div>
            <input class="bg-transparent border-2 border-surface-900 placeholder-gray-400 rounded-lg outline-0 py-2 px-3" placeholder={$t('login.email-placeholder')} type="email" />
        </div>
        {#if isLogin}
            <div class="password flex flex-col w-96 mt-6 mb-4">
                <div class="label mb-2">{$t('login.password')}</div>
                <div class="flex justify-between items-center border-2 border-surface-900 rounded-lg py-2 px-3">
                    <input class="flex-grow bg-transparent placeholder-gray-400 outline-0" placeholder={$t('login.password-placeholder')} type={passwordShown ? 'text' : 'password'}/>
                    <div class="inline-flex">
                        <FontAwesome name="close" classes="ml-2 mr-2"/>
                        <button on:click={() => passwordShown = !passwordShown}><FontAwesome name={passwordShown ? 'eye' : 'eye-slash'}/></button>
                    </div>
                </div>
            </div>
            <div class="forgot-password flex justify-end w-full">
                {$t('login.password-forgot')}
            </div>
        {/if}
        <button type="button" on:click={() => { if (!isLogin) goto('/stake/create-password') }} class="btn variant-filled-primary capitalize w-full mt-8">{isLogin ? $t('login.log-in') : $t('login.continue')}</button>
        <div class="or uppercase text-xs flex items-center w-full mt-4">
            <hr class="divider flex flex-grow border-t-2 border-primary-500 mr-4" />
            {$t('login.or')}
            <hr class="divider flex flex-grow border-t-2 border-primary-500 ml-4" />
        </div>
        <button type="button" class="btn variant-ringed-primary capitalize w-full mt-4">{$t('login.wallet')}</button>
        {#if !isLogin}
            <div class="terms flex normal-case text-xs mt-4 whitespace-pre-wrap">
                {$t('login.terms-and-conditions')}
                <span class="text-primary-400 capitalize"> {$t('login.pp')}</span>
            </div>
        {/if}
    </div>
</div>