<script>
    import { page } from '$app/stores';

    /** @type {Array} */
    export let art_records;
    /** @type {boolean} */
    let expandedArt = true;
    /** @type {boolean} */
    let expandedCom = true;
</script>

<nav>
    <ul>
        <span class="dash-vert">&nbsp</span>
        <!-- <li>
            <span class="dash-hori">&nbsp;</span>
            <a href="/" class="title" aria-current={$page.url.pathname === '/'}>home</a>
        </li> -->
        <li class:expanded={expandedArt}>
            <button on:click|preventDefault={() => expandedArt = !expandedArt}>
                <span class="icon-expand">&boxplus;</span>
                <span class="icon-collapse">&boxminus;</span>
                <span class="dash-hori">&nbsp;</span>
                <span class="title">art_records</span>
            </button>
            <ul>
                <span class="dash-vert">&nbsp</span>
                {#each art_records as record}
                    <li>
                        <span class="dash-hori">&nbsp;</span>
                        <a href="/art_records/{record.slug}" class="title" aria-current="{$page.url.pathname === `/art_records/${record.slug}`}">{record.title}</a>
                    </li>
                {/each}
            </ul>
        </li>
        <li>
            <span class="dash-hori">&nbsp;</span>
            <a href="/sketches" class="title" aria-current={$page.url.pathname === "/sketches"}>sketches</a>
        </li>
        <li>
            <span class="dash-hori">&nbsp;</span>
            <a href="/texts" class="title" aria-current={$page.url.pathname === "/texts"}>texts</a>
        </li>
        <li>
            <span class="dash-hori">&nbsp;</span>
            <a href="/biodata" class="title" aria-current={$page.url.pathname === "/biodata"}>biodata</a>
        </li>
        <!-- <li class:expanded={expandedCom}>
            <button on:click|preventDefault={() => expandedCom = !expandedCom}>
                <span class="icon-expand">&boxplus;</span>
                <span class="icon-collapse">&boxminus;</span>
                <span class="dash-hori">&nbsp;</span>
                <span class="title">commune</span>
            </button>
            <ul>
                <span class="dash-vert">&nbsp</span>
                <li>
                    <span class="dash-hori">&nbsp;</span>
                    <a href="https://www.instagram.com/bradleywalkernet/" class="title" target="_blank">instagram</a>
                </li>
                <li>
                    <span class="dash-hori">&nbsp;</span>
                    <a href="https://pencilbooth.com/bradleywalker" class="title" target="_blank">newsletter</a>
                </li>
                <li>
                    <span class="dash-hori">&nbsp;</span>
                    <a href="" class="title">e-mail</a>
                </li>
            </ul>
        </li> -->
    </ul>
</nav>

<style>
    nav{
        width: 240px;
    }
    ul{
        list-style-type: none;
        margin: 0;
        padding: 0;
        position: relative;
    }
    li{
        position: relative;
    }
    li > ul{
        display: none;
        padding-left: 40px;
    }
    .expanded > ul{
        display: block;
    }
    .dash-vert{
        border-left: 1px dotted white;
        display: inline-block;
        width: 1px;

        position: absolute;
        left: 19px;
        top: 20px;
        bottom: 19px;
        /* bottom: 154px; */
    }
    ul > li > ul .dash-vert{
        left: 58px;
        top: 0px;
        bottom: 18px;
    }
    .dash-hori{
        border-top: 1px dotted white;
        display: inline-block;
        height: 1px;

        position: absolute;
        top: 50%;
    }
    /* styles w/out icon */
    li > .dash-hori{
        width: 24px;
        left: 20px;
    }
    li > .title{
        margin-left: 44px;
    }
    /* styles with icon */
    button > .dash-hori{
        width: 16px;
        left: 32px;
    }
    button > .title{
        margin-left: 16px;
    }
    /* .icon-trans{
        visibility: hidden;
    } */
    .expanded .icon-expand, .icon-collapse{
        display: none;
    }
    .expanded .icon-collapse, .icon-expand{
        background-color: var(--color-black);
        display: inline-block;
    }
    a, button{
        background: none;
        border: 1px dotted transparent;
        color: var(--color-white);
        cursor: pointer;
        display: inline-block;
        padding: 4px 8px;
        text-decoration: none;
        position: relative;
    }
    /* a:hover{
        text-decoration: underline dotted;
    } */
    a[aria-current="true"]{
        background-color: var(--color-black);
        border-color: var(--color-white);
        color: var(--color-accent);
    }
</style>