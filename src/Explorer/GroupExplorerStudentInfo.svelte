<script lang="ts">
    import { location, replace } from "svelte-spa-router";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "../localization.ts";

    import PropertyGroup from "./PropertyGroup.svelte";
    import PropertiesForm from "./PropertiesForm.svelte";
    import Popover from "../Popover/Popover.svelte";

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
    } from "../store/GroupExplorerStore.ts";

    const studentParameters = [
        {
            key: "group",
            inputType: "select",
            getSelectOptions: () =>
                $store.groups.map(g => ({
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

{#if $store.student}
    <div
        class="pl-4 pt-4 h-full"
        transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
        <div class="flex items-center mb-2">
            <a href="#/explore/{$store.selectedGroup.group._id}" class="mr-4">
                <svg class="text-primary-dark w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </a>
            <PropertyGroup
                value={$store.student.name}
                on:submit={e => updateStudent($store.student, 'name', e.detail)}
                outputClass="w-full text-3xl h-12 hover:bg-active cursor-pointer"
                let:output />
            <Popover arrow={false} placement="left-start" preventDefault={true}>
                <div slot="target" class="mr-8 cursor-pointer">
                    <svg class="text-primary-dark w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </div>
                <div class="bg-white p-4 w-64 text-center" slot="content">
                    <p class="mb-4">This action cannot be undone!</p>
                    <button
                        class="bg-primary text-white py-2 px-4"
                        on:click={() => {
                            deleteStudent($store.student);
                            replace('/explore/' + $store.selectedGroup.group._id);
                        }}>
                        Delete student {$store.student.name} anyway?
                    </button>
                </div>
            </Popover>
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
