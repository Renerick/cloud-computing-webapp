<script>
    import Tree from "./components/Tree.svelte";
    import Header from "./Header.svelte";

    let items = {
        name: "root",
        children: [
            {
                name: "test",
                children: [
                    {
                        name: "test2",
                        children: [{ name: "test3" }]
                    }
                ]
            },
            {
                name: "test2",
                children: [
                    {
                        name: "test2",
                        children: [{ name: "test3" }]
                    },
                    {
                        name: "test2",
                        children: [{ name: "test3" }]
                    }
                ]
            }
        ]
    };
</script>

<style>

</style>

<h1>hello world</h1>
<Tree item={items} let:item let:leaf>
    <div class="list-item" class:leaf>{item.name}</div>
</Tree>
