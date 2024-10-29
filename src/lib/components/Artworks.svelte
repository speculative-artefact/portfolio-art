<script>
    // import { gsap } from 'gsap';
    // import { fly } from 'svelte/transition';
    import { writable } from 'svelte/store';

    let artworks = [
        { id: 1, title: 'residual/2', year: '2023', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/residual-2_interaction.webm',  visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/residual-2_interaction.mp4' },
        { id: 2, title: 'residual/2', year: '2023', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/residual-2_poem.webm',         visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/residual-2_poem.mp4' },
        // { id: 3, title: 'residual/2', year: '2024', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-waste.webm' },
        { id: 4, title: 'residual/1', year: '2022', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-stairs.webm',   visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-stairs.mp4' },
        { id: 5, title: 'residual/1', year: '2022', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-farm.webm',     visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-farm.mp4' },
        { id: 6, title: 'residual/1', year: '2022', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-waste.webm',    visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_residual-1-waste.mp4?t=2024-10-29T00%3A50%3A56.319Z' },
        { id: 7, title: 'void_echo_02', year: '2020', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_void-echo_02_05.webm',   visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_void-echo_02_05.mp4' },
        { id: 8, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_beach-01.webp' },
        { id: 9, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_home-01.webp' },
        { id: 10, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_home-02.webp' },
        { id: 11, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_home-03.webp' },
        { id: 12, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_home-04.webp' },
        { id: 12, title: 'void_echo_02', year: '2022', type: 'image', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/void-echo-02_office-01.webp' },
        { id: 14, title: 'set-object', year: '2019', type: 'video', visualSRC: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_new.webm',                visualSRC_MP4: 'https://zsbqtqognaiogrpqaoot.supabase.co/storage/v1/object/public/art-records/art_new.mp4' },
        // Add more artworks here
    ];



    let selectedArtwork = writable(null);

    function openLightbox(artwork) {
        selectedArtwork.set(artwork);
    }

    function closeLightbox() {
        selectedArtwork.set(null);
    }

    function nextArtwork() {
        selectedArtwork.update(current => {
            const currentIndex = artworks.findIndex(a => a.id === current.id);
            const nextIndex = (currentIndex + 1) % artworks.length;
            animateFwdTransition(artworks[nextIndex]);
            return artworks[nextIndex];
        });
    }

    function previousArtwork() {
        selectedArtwork.update(current => {
            const currentIndex = artworks.findIndex(a => a.id === current.id);
            const prevIndex = (currentIndex - 1 + artworks.length) % artworks.length;
            animateRvsTransition(artworks[prevIndex]);
            return artworks[prevIndex];
        });
    }

    function animateFwdTransition(newArtwork) {
        const lightboxContent = document.querySelector('.lightbox-content img');
        gsap.to(lightboxContent, {
            x: '-20%',
            duration: 0.25,
            onComplete: () => {
                selectedArtwork.set(newArtwork);
                gsap.fromTo(lightboxContent, { x: '20%' }, { x: '0%', duration: 0.25 });
            }
        });
    }

    function animateRvsTransition(newArtwork) {
        const lightboxContent = document.querySelector('.lightbox-content img');
        gsap.to(lightboxContent, {
            x: '20%',
            duration: 0.25,
            onComplete: () => {
                selectedArtwork.set(newArtwork);
                gsap.fromTo(lightboxContent, { x: '-20%' }, { x: '0%', duration: 0.25 });
            }
        });
    }

    // function onKeydown(e) {
    //     switch(e.keyCode) {
    //         case 27: // escape
    //             closeLightbox();
    //             break;
    //         case 37: // left
    //             previousArtwork();
    //             break;
    //         case 39: // right  
    //             nextArtwork();
    //             break;
    //     }
    // }
</script>

<div class="grid">
    {#each artworks as artwork (artwork.id)}
        <!-- <div class="tile" on:click={() => openLightbox(artwork)} in:fly={{ x: 200, duration: 500 }}> -->
        <div class="tile">
            {#if artwork.type === 'video'}
                <video autoplay loop muted controls={false}>
                    <source src={artwork.visualSRC} type="video/webm">
                    <source src={artwork.visualSRC_MP4} type="video/mp4">
                    <!-- <track kind="captions" src="path/to/captions.vtt" srclang="en" label="English"> -->
                </video>
            {:else if artwork.type === 'image'}
                <img src={artwork.visualSRC} alt="photo image of {artwork.title}, {artwork.year}" />
            {/if}
            <div class="title">
                <p>{artwork.title}, {artwork.year}</p>
            </div>
        </div>
    {/each}
</div>

{#if $selectedArtwork}
    <div class="lightbox" on:click={closeLightbox}>
        <div class="lightbox-content" on:click|stopPropagation>
            <button class="nav-button prev-button" on:click={previousArtwork}>&lt;</button>
            <img src={$selectedArtwork.visualSRC} alt={$selectedArtwork.title} />
            <button class="nav-button next-button" on:click={nextArtwork}>&gt;</button>
            <p>{$selectedArtwork.title}</p>
        </div>
    </div>
{/if}

<!-- <svelte:window on:keydown|preventDefault={onKeydown} /> -->

<style>
    .grid {
        /* display: grid;
        grid-template-columns: repeat(auto-fill, 400px);
        gap: 16px; */
        margin: 0 auto 80px auto;
        max-width: 90vw;
    }

    .tile {
        /* width: 400px;
        height: 400px;
        cursor: pointer; */
        position: relative;
        margin: 80px auto;
    }

    .tile img,
    .tile video {
        max-width: 70vw;
        max-height: 60vh;
        margin: 0 auto;
        /* object-fit: cover; */
    }

    .title {
        font-size: 16px;
        padding: 24px;
        text-align: center;
    }

    .lightbox {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.5s ease;
    }

    .lightbox img {
        max-width: 90%;
        max-height: 90%;
    }

    .lightbox-content {
        position: relative;
    }

    .nav-button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.5);
        border: none;
        padding: 10px;
        cursor: pointer;
        font-size: 18px;
    }

    .prev-button {
        left: 10px;
    }

    .next-button {
        right: 10px;
    }
</style>