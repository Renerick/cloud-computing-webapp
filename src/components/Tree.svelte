<script>
    export let item;
    export let childrenMember = "children";
    export let visible = true;
    export let renderRoot = false;
    export let path = "";
</script>

{#if renderRoot}
    <div on:click={() => (visible = !visible)}>
        <slot {item} {path} />
    </div>
{/if}

{#if visible && item[childrenMember]}
    <ul>
        {#each item[childrenMember] as child (child._id)}
            <li>
                <svelte:self
                    bind:item={child}
                    renderRoot={true}
                    path={path + '/' + child._id}
                    let:item={nestedItem}
                    let:path={nestedPath}>
                    <slot item={nestedItem} path={nestedPath} />
                </svelte:self>
            </li>
        {/each}
    </ul>
{/if}
