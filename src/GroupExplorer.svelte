<script>
    import { location, replace } from "svelte-spa-router";
    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "./localization.js";

    import GroupExplorerGroupList from "./GroupExplorerGroupList.svelte";
    import GroupExplorerGroupInfo from "./GroupExplorerGroupInfo.svelte";
    import GroupExplorerStudentInfo from "./GroupExplorerStudentInfo.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent
    } from "./store/GroupExplorerStore.js";

    export let params;

    $: loadGroups();
    $: loadStudents(params.group);
    $: loadStudent(params.student);
</script>

<style>
    .tr-list {
        transition: opacity 400ms, right 400ms;
    }
</style>

<div class="h-full w-full overflow-hidden relative md:flex">

    <div
        class="absolute md:static w-full md:w-3/12 lg:w-1/5 h-full
        overflow-y-auto">
        <GroupExplorerGroupList />
    </div>

    <div
        class="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5
        bg-white {$store.selectedGroup ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100 border-l border-primary overflow-y-auto h-full">

        <GroupExplorerGroupInfo />
    </div>
    <div
        class="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5
        bg-white border-l border-primary {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100 overflow-y-auto h-full">

        <GroupExplorerStudentInfo />
    </div>
</div>
