<script>
    import { store } from "./store/store.js";
    let group;
    let student;

    $: {
        if (!group || (student && student.group != group._id))
            student = undefined;
    }
</script>

<div class="flex h-full">
    <div class="hidden md:block w-1/3">
        <h2>Groups</h2>
        {#each $store.groups as item, j (item._id)}
            <div on:click={() => (group = item)}>{item.name}</div>
        {/each}
    </div>
    {#if group}
        <div class="hidden md:block md:w-1/3">
            <button on:click={() => (group = undefined)}>close</button>
            <h2>{group.name}</h2>
            {#each $store.students.filter(s => s.group == group._id) as item, j (item._id)}
                <div on:click={() => (student = item)}>{item.name}</div>
            {/each}
        </div>
    {/if}
    {#if student}
        <div class="">
            <button on:click={() => (student = undefined)}>close</button>
            <h2>{student.name}</h2>
        </div>
    {/if}
</div>
