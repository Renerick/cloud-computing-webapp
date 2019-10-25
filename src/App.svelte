<script>
    import Nav from "./Nav.svelte";
    import GroupExplorer from "./GroupExplorer.svelte";
    import GroupsAggregation from "./GroupsAggregation.svelte";
    import Router from "svelte-spa-router";
    import { location, replace } from "svelte-spa-router";

    const routes = {
        "/explore": GroupExplorer,
        "/explore/:group/:student?": GroupExplorer,
        "/groups": GroupsAggregation,
    };

    if ($location == "/") replace("/explore");
</script>

<style>

</style>

<div class="h-screen pl-4 flex flex-col">
    <Nav />
    <div class="h-full">
        <Router {routes} />
    </div>
</div>
