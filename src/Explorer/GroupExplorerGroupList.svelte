<script lang="ts">
    import GroupListItem from "./GroupListItem.svelte";
    import { location, replace } from "svelte-spa-router";

    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent,
        createStudent,
        createGroup,
        updateGroup,
        deleteGroup
    } from "../store/GroupExplorerStore.ts";
</script>

<div class="flex justify-between items-center bg-white px-6 py-5 ">
    <h1 class="text-lg">Groups</h1>
    <button type="button"
            class="button button-ghost button-sm text-light-blue-800"
            on:click={() => {
            const id = createGroup();
            replace('/explore/' + id);
        }}>
        <svg class="-ml-0.5 mr-1  h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        New
    </button>
</div>
<ul>
    {#each $store.groups as item (item._id)}
        <li class="bg-white">
            <div
                class="relative px-6 py-5 flex items-center space-x-3 hover:bg-gray-50 focus-within:ring-2 focus-within:ring-inset focus-within:ring-light-blue-500">
                <div class="flex-1 min-w-0">
                    <a href="/#/explore/{item._id}" class="focus:outline-none">
                        <GroupListItem
                            group={item}
                            active={$store.selectedGroup && item === $store.selectedGroup.group} />
                    </a>
                </div>
            </div>
        </li>
    {/each}
</ul>
