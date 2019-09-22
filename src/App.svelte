<script>
    import Tree from "./components/Tree.svelte";
    import { draggable, droppable } from "./components/svelte-dnd.js";
    import { store, move } from "./store/store.js";
</script>

<style>
    .tree :global(ul) {
        list-style: none;
        padding-left: 10px;
        margin: 0;
    }

    .list-item {
        border-left: solid orange;
        padding: 10px 20px;
    }
</style>

<div class="tree">
    <Tree item={$store} let:item let:path>
        <div
            use:draggable={{ item: item, path: path }}
            use:droppable
            on:dropped={e => {
                move(e.detail.data.path, path);
            }}
            class="list-item">
            {path} {item.name}
        </div>
    </Tree>
</div>
