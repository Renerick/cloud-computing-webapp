<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import { location, replace } from "svelte-spa-router";
    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "./localization.js";

    import GroupListItem from "./GroupListItem.svelte";
    import StudentListItem from "./StudentListItem.svelte";
    import PropertyGroup from "./PropertyGroup.svelte";
    import PropertiesForm from "./PropertiesForm.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent,
        createStudent,
        updateGroup,
        deleteGroup,
        updateStudent,
        deleteStudent
    } from "./store/GroupExplorerStore.js";

    export let params;

    $: loadGroups();
    $: loadStudents(params.group);
    $: loadStudent(params.student);

    const groupParameters = [
        {
            key: "year",
            inputType: "number",
            label: "Year"
        },
        {
            key: "studyingForm",
            inputType: "select",
            label: "Studying form",
            renderer: humanizeStudyingForm,
            getSelectOptions: getStudyingFormTranslation
        }
    ];

    $: console.log(studentParameters[0]);
    

    const studentParameters = [
        {
            key: "group",
            inputType: "select",
            getSelectOptions: () => $store.groups.map(g => ({
                key: g._id,
                value: g.name
            })),
            renderer: s => $store.groups.find(g => g._id === s).name,
            label: "Group"
        },
        {
            key: "averageScore",
            inputType: "number",
            label: "Average score"
        },
        {
            key: "type",
            inputType: "select",
            getSelectOptions: getStudentTypeTranslation,
            renderer: humanizeStudentType,
            label: "Type"
        },
        {
            key: "academicalDebt",
            inputType: "checkbox",
            label: "Academical debt",
            alwaysActive: true
        }
    ];
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
                        <PropertyGroup
                            value={$store.selectedGroup.group.name}
                            on:submit={e => updateGroup($store.selectedGroup.group, 'name', e.detail)}
                            outputClass="w-full text-3xl hover:bg-active
                            cursor-pointer"
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

                    <PropertiesForm
                        object={$store.selectedGroup.group}
                        fieldsDescription={groupParameters}
                        on:updated={e => updateGroup($store.selectedGroup.group, e.detail.key, e.detail.value)} />
                </div>
                {#if $store.selectedGroup.students}
                    <div class="flex justify-between align-middle mb-4">
                        <h3 class="text-2xl">Students</h3>
                        <button
                            class="mr-8"
                            on:click={() => createStudent($store.selectedGroup.group._id)}>
                            <i class="zi zi-user-add bg-primary-dark" />
                        </button>
                    </div>
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
                    <PropertyGroup
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
                    alt="Full size photo of {$store.student.name}"
                    src={$store.student.avatar} />

                <PropertiesForm
                    object={$store.student}
                    on:updated={e => updateStudent($store.student, e.detail.key, e.detail.value)}
                    fieldsDescription={studentParameters} />
            </div>
        {/if}
    </div>
</div>
