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
        <i class="zi zi-add-outline bg-primary-dark" />
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
