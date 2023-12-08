<script>
    import { goto } from '$app/navigation';
    import { t } from '$lib/i18n';
    import FontAwesome from '$lib/components/util/FontAwesome.svelte';

    let passwordShown = false;
    let passwordConfirmationShown = false;
</script>

<div class="w-full h-full flex flex-col justify-center items-center capitalize font-semibold ">
    <div class="flex flex-col items-start">
        <a href="/stake" class="flex items-center pl-2 mb-4">
            <FontAwesome name="chevron-left"/>
            {$t('login.back')}
        </a>
        <div class="flex flex-col px-8 py-8 items-center rounded-md bg-surface-700">
            <div class="text-2xl mb-8">{$t('login.password')}</div>
            <div class="password flex flex-col w-full mt-6 mb-4">
                <div class="label mb-2">{$t('login.password')}</div>
                <div class="flex justify-between items-center border-2 border-surface-900 rounded-lg py-2 px-3">
                    <input class="flex-grow bg-transparent placeholder-gray-400 outline-0" placeholder={$t('login.password-placeholder')} type={passwordShown ? 'text' : 'password'}/>
                    <div class="inline-flex">
                        <FontAwesome name="close" classes="ml-2 mr-2"/>
                        <button on:click={() => passwordShown = !passwordShown}><FontAwesome name={passwordShown ? 'eye' : 'eye-slash'}/></button>
                    </div>
                </div>
            </div>
            <div class="password-requirements flex flex-wrap max-w-lg text-sm pl-8">
                {#each ['lowercase', 'uppercase', 'number', 'minchar'] as requirement}
                    <div class="requirement w-1/2 leading-8">
                        &bull; {$t(`login.password-require-${requirement}`)}
                    </div>
                {/each}
            </div>
            <div class="password-confirm flex flex-col w-full mt-6 mb-4">
                <div class="label mb-2">{$t('login.password-confirm')}</div>
                <div class="flex justify-between items-center border-2 border-surface-900 rounded-lg py-2 px-3">
                    <input class="flex-grow bg-transparent placeholder-gray-400 outline-0" placeholder={$t('login.password-confirm-placeholder')} type={passwordConfirmationShown ? 'text' : 'password'}/>
                    <div class="inline-flex">
                        <FontAwesome name="close" classes="ml-2 mr-2"/>
                        <button on:click={() => passwordConfirmationShown = !passwordConfirmationShown}><FontAwesome name={passwordConfirmationShown ? 'eye' : 'eye-slash'}/></button>
                    </div>
                </div>
            </div>
            <button type="button" class="btn variant-filled-primary capitalize w-full mt-8" on:click={() => goto('email-verification') }>{$t('login.continue')}</button>
        </div>
    </div>
</div>