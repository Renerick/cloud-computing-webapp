<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let object;
    export let array;
    export let itemsClass;
</script>


<slot name="listHeader" obj={object} />
<div class="overflow-y-auto h-full">
    {#if array}
        {#each array as item (item._id)}
            <div on:click={() => dispatch('selected', item)} class={itemsClass}>
                <slot name="item" {item} />
            </div>
        {/each}
    {/if}
</div>
