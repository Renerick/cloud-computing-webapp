<script>
    import { store } from "./store/store.js";
    let root = $store;
    let path = [];

    $: objectPath = path.map((n, i) => {
        if (i === 0) return root.children[n];
        return objectPath[i - 1].children[n];
    });

    function setPath(length, value) {
        path = [...path.slice(0, length), value];
    }
</script>

<div class="flex h-full">
    <div class="w-full">
        {#each root.children as item, i (item._id)}
            <div class="cursor-pointer" on:click={() => setPath(0, i)}>
                {item.name}
            </div>
        {/each}
    </div>
    {#each objectPath as node, i}
        <div class="w-full">
            {#each node.children as item, j (item._id)}
                <div on:click={() => item.children && setPath(i + 1, j)}>
                    {item.name}
                </div>
            {/each}
        </div>
    {/each}
</div>
