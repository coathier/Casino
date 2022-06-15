<script>
  import "../app.css";
  import { base } from '$app/paths';
</script>

<div class="navbar bg-base-100 border-b border-accent sticky top-0 z-10">
  <div class="navbar-start">
    <a href="{base}/" class="btn btn-ghost">Home</a>
    <a href="{base}/slots" class="btn btn-ghost">Slots</a>
  </div>
</div>

<slot/>