<script>
    import { header } from '$lib/util/store';
    import FontAwesome from '../util/FontAwesome.svelte';
</script>

<div class="flex justify-between items-center p-4 sm:p-8 md:px-12 mb-4 md:mb-0">
    <div class="header text-lg font-medium uppercase tracking-widest">{$header}</div>
    <div class="logout flex justify-center items-center">
        <FontAwesome name="arrow-right-from-bracket"/>
    </div>
</div>