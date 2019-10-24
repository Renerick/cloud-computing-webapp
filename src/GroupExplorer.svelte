<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import { location, replace } from "svelte-spa-router";
    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation,
    } from "./localization.js";

    import GroupListItem from "./GroupListItem.svelte";
    import StudentListItem from "./StudentListItem.svelte";
    import EditGroup from "./EditGroup.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent,
        updateGroup,
        deleteGroup,
        updateStudent,
        deleteStudent
    } from "./store/GroupExplorerStore.js";

    export let params;

    onMount(() => loadGroups());

    $: loadStudents(params.group);
    $: loadStudent(params.student);
</script>

<style>
    .tr-list {
        transition: opacity 400ms, right 400ms;
    }
</style>

<div class="h-full w-full overflow-hidden relative md:flex">
    <ul
        class="absolute md:static w-full md:w-3/12 lg:w-1/5 h-full
        overflow-y-auto">
        {#each $store.groups as item (item._id)}
            <li class="border-b border-primary last:border-b-0">
                <a href="/#/explore/{item._id}">
                    <GroupListItem
                        group={item}
                        active={$store.selectedGroup && item === $store.selectedGroup.group} />
                </a>
            </li>
        {/each}
    </ul>
    <div
        class="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5 h-full
        bg-white {$store.selectedGroup ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100 border-l border-primary">
        {#if $store.selectedGroup}
            <div
                class="pl-4 pt-4 h-full"
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <div class="mb-6">
                    <div class="flex items-center mb-2">
                        <a href="#/explore" class="mr-4">
                            <i
                                class="text-4xl bg-primary-dark zi
                                zi-cheveron-left" />
                        </a>
                        <EditGroup
                            value={$store.selectedGroup.group.name}
                            on:submit={e => updateGroup($store.selectedGroup.group, 'name', e.detail)}
                            outputClass="w-full text-3xl"
                            let:output />
                        <button
                            on:click={() => {
                                deleteGroup($store.selectedGroup.group);
                                replace('/explore');
                            }}
                            class="mr-8">
                            <i class="text-xl bg-primary-dark zi zi-trash" />
                        </button>
                    </div>

                    <div class="table w-full">
                        <div class="table-row">
                            <EditGroup
                                value={$store.selectedGroup.group.year}
                                on:submit={e => updateGroup($store.selectedGroup.group, 'year', e.detail)}
                                let:output
                                inputType="number"
                                labelClass="table-cell border-b border-active
                                w-1/4 text-right pr-4 font-bold"
                                label="Year"
                                outputClass="table-cell border-b border-active
                                hover:bg-active py-2 px-4 cursor-pointer" />
                        </div>
                        <div class="table-row">
                            <EditGroup
                                value={$store.selectedGroup.group.studyingForm}
                                on:submit={e => updateGroup($store.selectedGroup.group, 'studyingForm', e.detail)}
                                let:output
                                inputType="select"
                                selectOptions={[{ key: 'fullTime', value: 'Full time' }, { key: 'extramural', value: 'Extramural' }]}
                                labelClass="table-cell text-right pr-4 font-bold
                                border-b border-active"
                                renderer={humanizeStudyingForm}
                                label="Studying form"
                                outputClass="table-cell hover:bg-active py-2
                                px-4 cursor-pointer border-b border-active" />
                        </div>
                    </div>
                </div>
                {#if $store.selectedGroup.students}
                    <h3 class="text-2xl mb-4">Students</h3>
                    <ul class="overflow-y-auto h-full">
                        {#each $store.selectedGroup.students as item (item._id)}
                            <li class="border-b border-primary last:border-b-0">
                                <a href="/#/explore/{params.group}/{item._id}">
                                    <StudentListItem student={item} />
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/if}
    </div>
    <div
        class="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5 h-full
        bg-white border-l border-primary {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100">
        {#if $store.student}
            <div
                class="pl-4 pt-4 h-full"
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <div class="flex items-center mb-2">
                    <a href="#/explore/{params.group}" class="mr-4">
                        <i
                            class="text-4xl bg-primary-dark zi zi-cheveron-left" />
                    </a>
                    <EditGroup
                        value={$store.student.name}
                        on:submit={e => updateStudent($store.student, 'name', e.detail)}
                        outputClass="w-full text-3xl"
                        let:output />
                    <button
                        on:click={() => {
                            deleteStudent($store.student);
                            replace('/explore/' + params.group);
                        }}
                        class="mr-8">
                        <i class="text-xl bg-primary-dark zi zi-trash" />
                    </button>
                </div>
                <img
                    class="mx-auto"
                    alt="Full size photo of {$store.student.avatar}"
                    src={$store.student.avatar} />
                <div class="table w-full">
                    <div class="table-row">
                        <EditGroup
                            value={$store.student.averageScore}
                            on:submit={e => updateStudent($store.student, 'averageScore', e.detail)}
                            let:output
                            inputType="number"
                            labelClass="table-cell border-b border-active w-1/4
                            text-right pr-4 font-bold"
                            label="Average score"
                            outputClass="table-cell border-b border-active
                            hover:bg-active py-2 px-4 cursor-pointer" />
                    </div>
                    <div class="table-row">
                        <EditGroup
                            value={$store.student.type}
                            on:submit={e => updateStudent($store.student, 'type', e.detail)}
                            inputType="select"
                            selectOptions={getStudentTypeTranslation()}
                            renderer={humanizeStudentType}
                            labelClass="table-cell text-right pr-4 font-bold
                            border-b border-active"
                            label="Type"
                            outputClass="table-cell hover:bg-active py-2 px-4
                            cursor-pointer border-b border-active" />
                    </div>
                    <div class="table-row">
                        <EditGroup
                            value={$store.student.academicalDebt}
                            on:submit={e => updateStudent($store.student, 'academicalDebt', e.detail)}
                            inputType="checkbox"
                            labelClass="table-cell text-right pr-4 font-bold
                            border-b border-active"
                            label="Academical debt"
                            alwaysActive={true}
                            outputClass="table-cell hover:bg-active py-2 px-4
                            cursor-pointer border-b border-active" />
                    </div>
                </div>
            </div>
        {/if}
    </div>
</div>
