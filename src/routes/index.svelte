<script>
  import Box from '$lib/Box.svelte'
  import Anchor from '$lib/Anchor.svelte'
  import { resources } from '../lib/stores/resources.js'

  export let sortedResources, latestMsg, nextMsg, msgNo

  resources.update(() => sortedResources)

  $: alt = latestMsg?.context?.caption
  $: src = latestMsg?.secure_url
  $: description = latestMsg?.context?.alt
  $: nextDate = new Date(nextMsg?.context?.date ?? latestMsg?.context?.date).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
</script>

<svelte:head>
  <title>Zwei Jahre | Jahrestag 2020</title>
</svelte:head>

<section class='container'>
  <div class='mb-4'>
    <Box {alt} {src}>
      {description}
    </Box>
  </div>
  <div class='mb-8'>
    <span class='text-gray-400 text-sm'>
      Nachricht #{msgNo}
      <br>
      Nächste Nachricht am {nextDate}
    </span>
  </div>

  <div class='flex justify-center'>
    <Anchor href='/history'>Verlauf</Anchor>
  </div>
</section>
