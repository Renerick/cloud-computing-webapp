<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    export let object;
    export let array;
    export let itemsClass;
</script>

<slot name="listHeader" obj={object} />
{#if array}
    <ul class="overflow-y-auto h-full">
        {#each array as item (item._id)}
            <li on:click={() => dispatch('selected', item)} class={itemsClass}>
                <slot name="item" {item} />
            </li>
        {/each}
    </ul>
{/if}
