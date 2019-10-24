<script>
    import { onMount } from "svelte";
    import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";

    import GroupListItem from "./GroupListItem.svelte";
    import HiddenEditor from "./HiddenEditor.svelte";
    import {
        store,
        loadGroups,
        loadStudents,
        loadStudent,
        updateGroup
    } from "./store/GroupExplorerStore.js";

    export let params;

    $: loadStudents(params.group);
    $: loadStudent(params.student);

    onMount(() => loadGroups());
</script>

<style>
    .tr-list {
        transition: opacity 400ms, right 400ms;
    }
</style>

<div class="h-full w-full overflow-hidden relative md:flex">
    <ul
        class="absolute md:static w-full md:w-3/12 lg:w-1/5 h-full
        overflow-y-auto">
        {#each $store.groups as item (item._id)}
            <li class="border-b border-primary last:border-b-0">
                <a href="/#/explore/{item._id}">
                    <GroupListItem
                        group={item}
                        active={$store.selectedGroup && item === $store.selectedGroup.group} />
                </a>
            </li>
        {/each}
    </ul>
    <div
        class="tr-list absolute md:static w-full md:w-4/12 lg:w-2/5 h-full
        bg-white {$store.selectedGroup ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100 border-l border-primary">
        {#if $store.selectedGroup}
            <div
                class="p-2"
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <div class="mb-2">
                    <div class="flex items-center">
                        <a href="#/explore" class="mr-4">
                            <i
                                class="text-4xl bg-primary-dark zi
                                zi-cheveron-left" />
                        </a>
                        <HiddenEditor
                            value={$store.selectedGroup.group.name}
                            on:submit={e => updateGroup('name', e.detail)}
                            inputClass="w-full text-3xl"
                            let:output>
                            <h2 class="text-3xl">{output}</h2>
                        </HiddenEditor>
                    </div>

                    <div class="table w-full">
                        <div class="table-row">
                            <HiddenEditor
                                value={$store.selectedGroup.group.year}
                                on:submit={e => updateGroup('year', e.detail)}
                                let:output
                                inputType="number"
                                inputClass="w-full"
                                labelClass="table-cell w-1/4"
                                label="Year:"
                                containerClass="table-cell">
                                <p>{output}</p>
                            </HiddenEditor>
                        </div>
                        <div class="table-row">
                            <HiddenEditor
                                value={$store.selectedGroup.group.studyingForm}
                                on:submit={e => updateGroup('studyingForm', e.detail)}
                                let:output
                                inputType="select"
                                selectOptions="{['fullTime', 'extramural']}"
                                inputClass="w-full"
                                labelClass="table-cell"
                                label="Form:"
                                containerClass="table-cell">
                                <p>{output}</p>
                            </HiddenEditor>
                        </div>
                    </div>

                </div>
                {#if $store.selectedGroup.students}
                    <ul class="overflow-y-auto h-full">
                        {#each $store.selectedGroup.students as item (item._id)}
                            <li>
                                <a href="/#/explore/{params.group}/{item._id}">
                                    <div>{item.name}</div>
                                </a>
                            </li>
                        {/each}
                    </ul>
                {/if}
            </div>
        {/if}
    </div>
    <div
        class="tr-list absolute md:static w-full md:w-5/12 lg:w-2/5 h-full
        bg-white border-l border-primary {$store.student ? 'opacity-100 right-0' : 'opacity-0 -right-full'}
        md:opacity-100">
        {#if $store.student}
            <div
                transition:fly={{ delay: 0, duration: 250, x: 100, y: 0, opacity: 0, easing: cubicOut }}>
                <div let:obj class="flex">
                    <a href="/#/explore/{params.group}">
                        <i
                            class="text-4xl bg-primary-dark zi zi-cheveron-left" />
                    </a>
                    <h2 class="text-xl">{$store.student.name}</h2>
                </div>
            </div>
        {/if}
    </div>
</div>
