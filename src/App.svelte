<script>
    import Nav from "./Nav.svelte";
    import GroupExplorer from "./GroupExplorer.svelte";
    import Router from "svelte-spa-router";

    const routes = {
        "/explore": GroupExplorer,
        "/explore/:group/:student?": GroupExplorer
    };
</script>

<style>

</style>

<div class="h-screen pl-4 flex flex-col">
    <div class="h-20">
        <Nav />
    </div>
    <div class="h-full">
        <Router {routes} />
    </div>
</div>
