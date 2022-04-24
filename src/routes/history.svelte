<script>
  import { resources } from '$lib/stores/resources.js'
  import Box from '$lib/Box.svelte'
  import Anchor from '$lib/Anchor.svelte'
</script>

<svelte:head>
  <title>Verlauf | Jahrestag 2020</title>
</svelte:head>

<section class='container'>
  <div class='flex justify-center mb-4'>
    <Anchor href='/'>Zurück</Anchor>
  </div>
  <div class='flex flex-col gap-8'>
    {#each $resources.sortedResources as resource}
      {@const alt = resource?.context?.caption}
      {@const src = resource?.secure_url}
      {@const description = resource?.context?.alt}
      <Box {alt} {src}>
        {description}
      </Box>
    {/each}
  </div>
</section>
