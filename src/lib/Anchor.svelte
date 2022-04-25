<script>
  export let href
</script>

<a
  {href}
  class='inline-block rounded py-2 px-4 outline-0 text-lg no-underline cursor-pointer text-center transition-all bg-gray-300 text-gray-800 font-bold'
>
  <slot />
</a>
