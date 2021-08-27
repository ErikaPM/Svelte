<script>
    import { onMount } from 'svelte';
    import Content from './Content.svelte';
    import getData from '../services/Api.js';
    import { userData } from '../store/store.js'

    let data = [];
    onMount(async() => {
        let userResponse = await getData();
        console.log("userResponse >>", userResponse);
        data = userResponse;
        userResponse && userData.set(data);
        console.log("Home", data);
    })
</script>

<section>
    <div>
        <p class="header-title">User list</p>
    </div>
    <div>
        <Content {...data}/>
    </div>
</section>

<style>

    :global(body) {
        background-color: var(--background-color);
        color: var(--main-font-color);
        margin:0;
        padding:0
    }

    :global(:root) {
        --background-color: #31324e;
        --theme-color: #00A7E1;
        --label-color: #0D0221;
        --main-font: 'Georama', sans-serif;
        --secondary-font: 'Roboto Mono', monospace;
        --main-font-color: black;
        --secondary-font-color: beige;
        --blue: #76DCE8;
        --green: #daf5d4;
        --red: #f9dbdb;
        --yellow: #F5D66B ;
    }

    .header-title {
        margin-left: 50px;
        text-align: start;
        color: var(--theme-color);
        font-size: 1.7em;
        font-weight: bold;
        text-transform: uppercase;
    }
</style>
