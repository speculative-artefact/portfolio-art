<script>
    import Nav from '../components/Nav.svelte';
</script>

<div class="content">
    <header>
        <p>bradley walker is making virtual representations / recreations / rememberings of spaces / objects / moments. reimagining anthropocentric worlds and anxiety as murky, digitised archives for a future without us. distributed as software, prints, and interactive installations.</p>
    </header>
    <section>
        <Nav />
        <div class="detail"><slot /></div>
    </section>
    <footer>
        <p>upcoming: group exhibition with M O N D A G at werkpaard amsterdam, 24&mdash;26 nov [<a href="https://www.mondag.org/" target="_blank">link</a>]</p>
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