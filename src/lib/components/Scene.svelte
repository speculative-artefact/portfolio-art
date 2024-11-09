<script>
    import { T, useTask } from '@threlte/core'
    import { interactivity } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import Map from '$lib/components/residual_vr1.svelte'

    interactivity()
    const scale = spring(1)

    let rotation = 0
    useTask((delta) => {
        rotation += delta
    })
</script>

<T.DirectionalLight position={[0, 10, 10]} />

<Map
    rotation.y={rotation}
    position.y={1}
    scale={$scale}
/>

<!-- <T.Mesh position.y={-1}>
    <T.BoxGeometry />
    <T.MeshStandardMaterial color="white" />
</T.Mesh> -->

<!-- <T.Mesh 
    rotation.y={rotation}
    position.y={1}
    scale={$scale}
    on:pointerenter={() => scale.set(1.5)}
    on:pointerleave={() => scale.set(1)}>
    <T.BoxGeometry args={[1, 2, 1]} />
    <T.MeshStandardMaterial color="hotpink" />
</T.Mesh> -->

<T.PerspectiveCamera
    makeDefault
    position={[10, 10, 10]}
    on:create={({ ref }) => {
        ref.lookAt(0, 1, 0)
    }}
/>