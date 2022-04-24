<script>
  export let src
  export let alt
</script>

<div class='bg-white border-gray-200 border rounded-md shadow-xl overflow-hidden'>
  <div class='relative aspect-square overflow-hidden'>
    <img
      {src}
      {alt}
      class='absolute object-cover inset-1/2 -translate-x-1/2 -translate-y-1/2 min-h-full'
    />
  </div>
  <p class='text-center p-4 font-medium'>
    <slot />
  </p>
</div>
