<script>
    import Nav from '$lib/components/Nav.svelte';
    import Intro from '$lib/components/Intro.svelte';

    export let data;
</script>

<div class="content">
    <header>
        <Intro />
    </header>
    <section>
        <!-- <Nav art_records={data.art_records} /> -->
        <div class="detail"><slot /></div>
    </section>
    <footer>
        <p>upcoming: group exhibition with M O N D A G at de klenke 4 amsterdam, 26 nov [<a href="https://www.mondag.org/" target="_blank">link</a>]</p>
    </footer>
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
        flex-grow: 10;
        gap: 24px;
		position: relative;
    }
</style>