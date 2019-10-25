<script>
    import GroupListItem from "./GroupListItem.svelte";

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
</script>

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
