<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import GroupExplorerList from "./GroupExplorerList.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent
    } from "./store/GroupExplorerStore.js";

    onMount(() => loadGroups());
</script>

<style>
    .tr-list {
        transition: opacity 400ms, right 400ms;
    }
</style>

<div class="h-full w-full overflow-hidden relative sm:flex">
    <div class="absolute sm:static w-full sm:w-1/5 h-full bg-red-500">
        <GroupExplorerList
            array={$store.groups}
            on:selected={e => loadStudents(e.detail)}>
            <div slot="item" let:item>{item.name}</div>
        </GroupExplorerList>
    </div>
    <div
        class="tr-list absolute sm:static w-full sm:w-2/5 h-full bg-gray-600 {$store.group ? 'opacity-100 right-0' : 'opacity-0 -right-full'} sm:opacity-100">
        {#if $store.group}
            <div
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <GroupExplorerList
                    object={$store.group.group}
                    array={$store.group.students}
                    on:selected={e => loadStudent(e.detail)}>
                    <div slot="listHeader" let:obj class="flex">
                        <button
                            on:click={() => store.set({
                                    ...$store,
                                    group: null
                                })}>
                            Close
                        </button>
                        <h2 class="text-xl">{obj.name}</h2>
                    </div>
                    <div slot="item" let:item>{item.name}</div>
                </GroupExplorerList>
            </div>
        {/if}
    </div>
    <div
        class="tr-list absolute sm:static w-full sm:w-2/5 h-full bg-green-800 {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'} sm:opacity-100">
        {#if $store.student}
        <div transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
            <GroupExplorerList object={$store.student}>
                <div slot="listHeader" let:obj class="flex">
                    <button
                        on:click={() => store.set({
                                ...$store,
                                student: null
                            })}>
                        Close
                    </button>
                    <h2 class="text-xl">{obj.name}</h2>
                </div>
            </GroupExplorerList>
        </div>
        {/if}
    </div>
</div>
