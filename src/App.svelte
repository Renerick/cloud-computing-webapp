<script lang="ts">
    import Nav from "./Nav.svelte";
    import GroupExplorer from "./Explorer/GroupExplorer.svelte";
    import GroupsAggregation from "./GroupsAggregation.svelte";
    import StudentsAggregation from "./StudentsAggregation.svelte";
    import Router from "svelte-spa-router";
    import { location, replace } from "svelte-spa-router";

    const routes = {
        "/explore/:group?/:student?": GroupExplorer,
        "/groups": GroupsAggregation,
        "/students": StudentsAggregation
    };

    if ($location == "/") replace("/explore");
</script>

<style>

</style>

<div class="h-screen flex overflow-hidden items-stretch">
    <Nav />
    <main class="flex-1 overflow-y-auto overflow-x-hidden">
        <Router {routes} />
    </main>
</div>
