<script lang="ts">
  import type { PageData } from './$types';
  export let data: PageData; 


</script>
<h1>Welcome to SvelteKit</h1>
<p>{data.value}</p>
<p>Visit <a href="/sub">sub route</a></p>
