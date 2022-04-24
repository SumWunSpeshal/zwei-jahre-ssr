<script context='module'>
  export async function load({ fetch }) {
    const response = await fetch('/api/data')
    const data = await response.json()

    return {
      props: {
        data
      }
    }
  }
</script>

<script>
  import '../app.css'
  import { resources } from '$lib/stores/resources.js'

  export let data
  resources.update(() => data)
</script>

<main class='text-md text-gray-700'>
  <div class='pt-4'>
    <slot />
  </div>
</main>
