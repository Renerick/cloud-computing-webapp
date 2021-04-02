<script lang="ts">
    import Nav from "./Nav.svelte";
    import GroupExplorer from "./Explorer/GroupExplorer.svelte";
    import GroupsAggregation from "./GroupsAggregation.svelte";
    import StudentsAggregation from "./StudentsAggregation.svelte";
    import Router from "svelte-spa-router";
    import { location, replace } from "svelte-spa-router";

    const routes = {
        "/explore": GroupExplorer,
        "/explore/:group/:student?": GroupExplorer,
        "/groups": GroupsAggregation,
        "/students": StudentsAggregation
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
