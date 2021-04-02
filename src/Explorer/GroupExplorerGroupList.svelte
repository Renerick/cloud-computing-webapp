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

<div class="flex justify-end items-center bg-white p-4">
    <button
        on:click={() => {
            var id = createGroup();
            replace('/explore/' + id);
        }}>
        <svg class="text-primary-dark w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
</div>
<ul>
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
