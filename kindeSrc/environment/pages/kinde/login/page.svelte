<script>
  import "../../globals.css";
</script>

<svelte:head>
  <title>Sign In</title>
</svelte:head>

<div
  class="dark flex min-h-screen w-full items-center justify-center bg-background p-4"
>
  <div
    class="w-full max-w-md rounded-lg border border-border bg-card p-8 text-card-foreground shadow-lg"
  >
    {"{{kinde_login_form}}"}
  </div>
</div>
