<script>
    import { location, replace } from "svelte-spa-router";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import {
        humanizeStudentType,
        humanizeStudyingForm,
        getStudyingFormTranslation,
        getStudentTypeTranslation
    } from "../localization.js";

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
    } from "../store/GroupExplorerStore.js";

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
                <i class="text-4xl bg-primary-dark zi zi-cheveron-left" />
            </a>
            <PropertyGroup
                value={$store.student.name}
                on:submit={e => updateStudent($store.student, 'name', e.detail)}
                outputClass="w-full text-3xl"
                let:output />
            <button
                on:click={() => {
                    deleteStudent($store.student);
                    replace('/explore/' + $store.selectedGroup.group._id);
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
