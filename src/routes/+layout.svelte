<script>
    // import Nav from '$lib/components/Nav.svelte';
    import Intro from '$lib/components/Intro.svelte';
    // export let data;
</script>

<svelte:head>
	<!-- General SEO -->
	<meta name="author" content="Bradley Walker">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	<meta property="og:url" content="https://bradleywalker.net/">
	<meta property="og:site_name" content="Bradley Walker Artist Portfolio">
	<!-- og:title, og:description, og:image will be overridden by specific pages -->
	<meta property="og:title" content="Bradley Walker / Amsterdam-based Artist">
	<meta property="og:description" content="Bradley Walker is an Amsterdam-based artist working with speculative virtual worlds and interactive installations.">
	<meta property="og:image" content="%sveltekit.assets%/logo-inverted.png"> <!-- Add a default social image -->

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image">
	<meta property="twitter:url" content="https://bradleywalker.net/">
	<!-- twitter:title, twitter:description, twitter:image will be overridden by specific pages -->
	<meta property="twitter:title" content="Bradley Walker / Amsterdam-based Artist">
	<meta property="twitter:description" content="Bradley Walker is an Amsterdam-based artist working with speculative virtual worlds and interactive installations.">
	<meta property="twitter:image" content="%sveltekit.assets%/logo-inverted.png"> <!-- Add a default social image -->
</svelte:head>

<div class="content">
    <header>
        <Intro />
    </header>
    <section>
        <!-- <Nav art_records={data.art_records} /> -->
        <!-- <div class="detail"><slot /></div> -->
        <slot />
        
    </section>
    <!-- <footer>
        <p>upcoming: group exhibition with <a href="https://www.mondag.org/" target="_blank">M O N D A G</a> at ateliers het hoofdkantoor in haarlem. 2, 3, 9, and 10 nov 2024 [<a href="https://www.kunstlijnhaarlem.nl/expositie/order/" target="_blank">link</a>]</p>
    </footer> -->
</div>

<style>
	.content{
        align-items: stretch;
        display: flex;
        flex-direction: column;
        gap: 24px;
        justify-content: space-between;
        min-height: calc(100vh);
        padding: 32px 24px;
    }
    section{
		display: flex;
        flex-direction: column;
        flex-grow: 10;
        gap: 24px;
		position: relative;
    }
    /* footer{
        background-color: var(--color-black);
        border-top: 1px solid var(--color-white);
        display: block;
        padding: 24px;
        margin: 0 -24px;
        width: 100vw;
        position: fixed;
        bottom: 0;
    } */
</style>