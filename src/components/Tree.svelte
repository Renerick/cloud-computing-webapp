<script>
    export let item;
    export let childrenMember = "children";
    export let visible = true;
    export let renderRoot = false;

    let leaf;
    $: leaf = !item[childrenMember];
</script>

{#if renderRoot}
    <div on:click={() => (visible = !visible)}>
        <slot {item} {leaf} />
    </div>
{/if}

{#if visible && !leaf}
    <ul>
        {#each item[childrenMember] as child}
            <li>
                <svelte:self
                    item={child}
                    let:item={nestedItem}
                    let:leaf={nestedLeaf}
                    renderRoot={true}>
                    <slot item={nestedItem} leaf={nestedLeaf} />
                </svelte:self>
            </li>
        {/each}
    </ul>
{/if}
