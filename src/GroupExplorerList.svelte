<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let object;
    export let array;
</script>

<slot name="listHeader" obj={object} />
{#if array}
    {#each array as item, j (item._id)}
        <div on:click={() => dispatch('selected', item)}>
            <slot name="item" {item} />
        </div>
    {/each}
{/if}
