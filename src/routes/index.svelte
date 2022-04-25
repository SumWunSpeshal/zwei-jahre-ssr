<script>
  import Box from '$lib/Box.svelte'
  import Anchor from '$lib/Anchor.svelte'
  import {
    nextDate,
    latestMsgAlt as alt,
    latestMsgSrc as src,
    latestMsgDescription,
    latestMsgNo
  } from '$lib/stores/resources.js'
</script>

<svelte:head>
  <title>Zwei Jahre | Jahrestag 2020</title>
</svelte:head>

<section class='container'>
  <div class='mb-4'>
    <Box alt={$alt} src={$src}>
      {$latestMsgDescription}
    </Box>
  </div>
  <div class='mb-8'>
      <span class='text-gray-400 text-sm'>
        Nachricht #{$latestMsgNo}
        <br>
        Nächste Nachricht am {$nextDate}
      </span>
  </div>

  <div class='flex justify-center'>
    <Anchor href='/history'>Verlauf</Anchor>
  </div>
</section>
