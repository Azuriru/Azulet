<script>
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';

    let countdown = 5;

    setInterval(() => {
        if (countdown !== 0) countdown--;
    }, 1000);
</script>

<div class="w-full h-full flex flex-col justify-center items-center capitalize font-semibold ">
    <div class="flex flex-col px-8 py-8 items-center rounded-md bg-surface-700">
        <div class="bg-surface-500 p-8 rounded-full flex items-center justify-center w-32 h-32 mb-8">
            <FontAwesome name="envelope" type="regular" classes="text-6xl"/>
        </div>
        <div class="text-2xl mb-4">{$t('login.email-verification')}</div>
        <div class="text-sm mb-8 normal-case">{$t('login.email-verification-sent')} {'{email}'}</div>
        <div class="flex items-center border-2 border-surface-900 w-96 h-10 text-sm rounded-lg py-1 {countdown === 0 ? 'pl-3 pr-1' : 'px-3'}">
            <input class="flex-grow bg-transparent placeholder-gray-400 outline-0" placeholder={$t('login.email-verification-placeholder')} type="text"/>
            {#if countdown}
                <div class="inline-flex lowercase ml-2">
                    {countdown}s {$t('login.resend')}
                </div>
            {:else}
                <button type="button" class="btn variant-filled-primary rounded text-xs ml-2 py-0 h-full px-2 capitalize">{$t('login.resend')}</button>
            {/if}
        </div>
        <button type="button" class="btn variant-filled-primary capitalize w-full mt-8">{$t('login.continue')}</button>
    </div>
</div>