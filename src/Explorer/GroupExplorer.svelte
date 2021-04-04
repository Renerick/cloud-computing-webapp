<script lang="ts">
    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "../localization.ts";
    import { location, replace, push } from "svelte-spa-router";
    import { scale, fly, fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import SlideOver from "../components/SlideOver.svelte";

    import GroupExplorerGroupList from "./GroupExplorerGroupList.svelte";
    import GroupExplorerGroupInfo from "./GroupExplorerGroupInfo.svelte";
    import GroupExplorerStudentInfo from "./GroupExplorerStudentInfo.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent
    } from "../store/GroupExplorerStore.ts";

    export let params;

    $: loadGroups();
    $: loadStudents(params?.group);
    $: loadStudent(params?.student);
</script>

<div class="flex-1 relative lg:flex xl:overflow-hidden">
    <!-- Primary column -->
    {#if $store.selectedGroup}
        <section aria-labelledby="primary-heading"
                 transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}
                 class="lg:block bg-gray-50 min-w-0 flex-1 h-full z-30 w-full absolute lg:relative overflow-hidden lg:order-last">
            <h1 id="primary-heading" class="sr-only">Account</h1>
            <!-- Your content -->
            <GroupExplorerGroupInfo />
        </section>
    {/if}

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="absolute w-full lg:w-96 top-0 h-full lg:relative lg:flex-shrink-0 lg:order-first ">
        <!-- Your content -->
        <GroupExplorerGroupList />
    </aside>
    <SlideOver title={"Student"} show={$store.student}
               close={() => push(`/explore/${$store.selectedGroup?.group._id}`)}>
        <GroupExplorerStudentInfo />
    </SlideOver>
</div>

