<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import GroupExplorerList from "./GroupExplorerList.svelte";
    import GroupListItem from "./GroupListItem.svelte";
    import HiddenEditor from "./HiddenEditor.svelte";
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

<div class="h-full w-full overflow-hidden relative md:flex">
    <div class="absolute md:static w-full md:w-3/12 lg:w-1/5 h-full">
        <GroupExplorerList
            array={$store.groups}
            on:selected={e => loadStudents(e.detail)}
            itemsClass="border-b border-primary last:border-b-0">
            <div slot="item" let:item>
                <GroupListItem group={item}/>
            </div>
        </GroupExplorerList>
    </div>
    <div
        class="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5 h-full bg-white {$store.selectedGroup ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100 border-l border-primary-dark">
        {#if $store.selectedGroup}
            <div
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <GroupExplorerList
                    object={$store.selectedGroup.group}
                    array={$store.selectedGroup.students}
                    on:selected={e => loadStudent(e.detail)}>
                    <div slot="listHeader" let:obj class="p-2">
                        <button
                            on:click={() => store.set({
                                    ...$store,
                                    selectedGroup: null
                                })}>
                            Close
                        </button>
                        <HiddenEditor value={obj.name} let:output>
                            <h2 class="text-3xl">{output}</h2>
                        </HiddenEditor>

                    </div>
                    <div slot="item" let:item>{item.name}</div>
                </GroupExplorerList>
            </div>
        {/if}
    </div>
    <div
        class="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5 h-full bg-white border-l border-primary-dark {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100">
        {#if $store.student}
            <div
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
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
