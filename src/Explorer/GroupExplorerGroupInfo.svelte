<script lang="ts">
    import { location, replace, push } from "svelte-spa-router";
    import { scale, fly, fade } from "svelte/transition";
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
    import SlideOver from "../components/SlideOver.svelte";
    import GroupExplorerStudentInfo from "./GroupExplorerStudentInfo.svelte";

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
    <div class="h-full w-full ">
        <div class="flex px-4 pt-5 items-baseline lg:justify-between pb-4 border-b border-gray-300">
            <div class="self-center lg:hidden mr-4">
                <a href="/#/explore/">
                    <svg class="w-5 h-5 text-light-blue-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span class="sr-only">Back</span>
                </a>
            </div>
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-xl sm:truncate">{$store.selectedGroup.name}</h2>
                <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Year {$store.selectedGroup.year}
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500">
                        <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        {humanizeStudyingForm($store.selectedGroup.studyingForm)}
                    </div>
                </div>
            </div>
            <div class="flex space-x-2">
                <button type="button"
                        class="button button-sm button-ghost">
                    <svg class="button-sm-icon" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path
                            d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                </button>

                <button
                    class="button button-sm button-ghost"
                    on:click={() => createStudent($store.selectedGroup._id)}>
                    <svg class="button-sm-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                         viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Add student
                </button>

                <Popover arrow={false} placement="left-start" preventDefault={true}>
                    <button slot="target" class="button button-ghost button-sm text-red-800">
                        <svg class="button-sm-icon" xmlns="http://www.w3.org/2000/svg" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete
                    </button>
                    <div class="bg-white overflow-hidden shadow rounded-lg mr-20" slot="content">
                        <div class="px-4 py-5 sm:p-6">
                            <p class="mb-4">This action cannot be undone!</p>
                            <button
                                class="button button-md button-danger text-white py-2 px-4"
                                on:click={() => {
                                deleteGroup($store.selectedGroup);
                                replace('/explore');
                            }}>
                                Delete group {$store.selectedGroup.name} anyway?
                            </button>
                        </div>
                    </div>
                </Popover>
            </div>
        </div>

        {#if $store.selectedGroup.students}
            <h3 class="px-4 pt-6 text-lg">Students</h3>
            <div class="bg-white rounded shadow mx-4 mt-1">
                <ul class="divide-y divide-gray-200">
                    {#each $store.selectedGroup.students as item (item._id)}
                        <li class="">
                            <a
                                href="/#/explore/{$store.selectedGroup._id}/{item._id}">
                                <StudentListItem student={item} />
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>
        {/if}
    </div>

{/if}
