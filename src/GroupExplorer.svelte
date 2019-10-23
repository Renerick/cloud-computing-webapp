<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { quadIn } from "svelte/easing";
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
    .tr-flex-grow {
        transition: flex-grow 550ms;
    }
</style>

<div class="flex h-full overflow-hidden justify-start">
    <div
        class="tr-flex-grow relative overflow-hidden {$store.group ? 'sm:flex-grow-1 flex-grow-eps' : 'flex-grow-1'} sm:max-w-1/5 bg-red-500">
        <div class="absolute">
            <GroupExplorerList
                array={$store.groups}
                on:selected={e => loadStudents(e.detail)}>
                <div slot="item" let:item>{item.name}</div>
            </GroupExplorerList>
        </div>
    </div>
    <div
        class="tr-flex-grow relative overflow-hidden bg-gray-600 sm:max-w-2/5 {$store.student ? 'sm:flex-grow-1 flex-grow-eps' : $store.group ? 'flex-grow-1' : 'flex-grow-eps sm:flex-grow-1'}">
        {#if $store.group}
            <div class="absolute">
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
        class="tr-flex-grow relative overflow-hidden sm:max-w-2/5 {$store.student ? 'flex-grow-1' : 'flex-grow-eps sm:flex-grow-1'}">
        <div class="absolute">
            {#if $store.student}
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
            {/if}
        </div>
    </div>
</div>
