<script>

    export let object;
    export let array;
    export let itemsClass;
</script>

<slot name="listHeader" obj={object} />
{#if array}
    <ul class="overflow-y-auto h-full">
        {#each array as item (item._id)}
            <li class={itemsClass}>
                <a href="/#/explore/{item._id}">
                    <slot name="item" {item} />
                </a>
            </li>
        {/each}
    </ul>
{/if}
