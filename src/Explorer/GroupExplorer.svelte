<script lang="ts">
    import { location, replace } from "svelte-spa-router";
    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "../localization.ts";

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

<div class="flex-1 flex xl:overflow-hidden">
    <!-- Primary column -->
    <section aria-labelledby="primary-heading" class="min-w-0 flex-1 h-full relative overflow-hidden lg:order-last">
        <h1 id="primary-heading" class="sr-only">Account</h1>
        <!-- Your content -->
        <GroupExplorerGroupInfo />
    </section>

    <!-- Secondary column (hidden on smaller screens) -->
    <aside class="hidden lg:block lg:flex-shrink-0 lg:order-first overflow-y-auto overflow-x-hidden">
        <div class="h-full relative flex flex-col w-96 border-r border-gray-200 bg-white">
            <!-- Your content -->
            <GroupExplorerGroupList />
        </div>
    </aside>
</div>

<!--    <div-->
<!--        class="tr-list absolute md:static w-full md:w-5/12-->
<!--        bg-white border-l border-light-blue-500 {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'}-->
<!--        md:opacity-100 overflow-y-auto overflow-x-hidden h-full">-->

<!--        <GroupExplorerStudentInfo />-->
<!--    </div>-->
