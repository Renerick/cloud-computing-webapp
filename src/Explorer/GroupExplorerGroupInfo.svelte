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

    import StudentListItem from "./StudentListItem.svelte";
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
</script>

{#if $store.selectedGroup}
    <div
        class="pl-4 pt-4 h-full"
        transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
        <div class="mb-6">
            <div class="flex items-center mb-2">
                <a href="#/explore" class="mr-4">
                    <i class="text-4xl bg-primary-dark zi zi-cheveron-left" />
                </a>
                <PropertyGroup
                    value={$store.selectedGroup.group.name}
                    on:submit={e => updateGroup($store.selectedGroup.group, 'name', e.detail)}
                    outputClass="w-full text-3xl hover:bg-active cursor-pointer h-12"
                    let:output />
                <Popover arrow={false} placement="left-start" preventDefault={true}>
                    <div slot="target" class="mr-8 cursor-pointer">
                        <i class="text-xl bg-primary-dark zi zi-trash" />
                    </div>
                    <div class="bg-white p-4 w-64 text-center" slot="content">
                        <p class="mb-4">This action cannot be undone!</p>
                        <button
                            class="bg-primary text-white py-2 px-4"
                            on:click={() => {
                                deleteGroup($store.selectedGroup.group);
                                replace('/explore');
                            }}>
                            Delete group {$store.selectedGroup.group.name} anyway?
                        </button>
                    </div>
                </Popover>
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
            <ul>
                {#each $store.selectedGroup.students as item (item._id)}
                    <li class="border-b border-primary last:border-b-0">
                        <a
                            href="/#/explore/{$store.selectedGroup.group._id}/{item._id}">
                            <StudentListItem student={item} />
                        </a>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
{/if}
