<script lang="ts">
    import '@fortawesome/fontawesome-free/css/fontawesome.css';
    import '@fortawesome/fontawesome-free/css/brands.css';
    import '@fortawesome/fontawesome-free/css/solid.css';

    export let name: string = 'font-awesome';
    export let type: string = 'solid';
    export let size: string = 'base';
    export let classes: string = '';
</script>

<i class="fa-{type} fa-{name} fa-fw text-{size} tracking-normal {classes}"></i>

<!-- Usage -->
<!-- <FontAwesome name="envelope" type="solid" /> -->