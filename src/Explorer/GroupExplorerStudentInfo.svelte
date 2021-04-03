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
    import { onMount } from "svelte";

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
    <div class="pl-4 pt-4 h-full">
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
