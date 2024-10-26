<script>
    // Define an array of image URLs
    let images = [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg'
    ];    
</script>

<div>
    {#each images as image}
        <img src={image} alt="Artwork" class="image">
    {/each}
</div>

<style>
    /* Add any custom styles for your images here */
    .image {
        width: 200px;
        height: 200px;
        object-fit: cover;
        margin: 10px;
    }
</style>