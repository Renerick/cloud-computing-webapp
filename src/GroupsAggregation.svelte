<script lang="ts">
    import { store, loadGroups } from "./store/GroupsAggregateStore.ts";
    import { onMount } from "svelte";
    onMount(() => loadGroups());
</script>

<div class="container mx-auto">
    <table class="w-full text-center">
        <tr class="border-b-2 border-light-blue-800">
            <th class="px-2 py-1 sm:px-8 sm:py-4">Group</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Students count</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Average score</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Debters</th>
        </tr>
        <tbody class="bg-white">
            {#each $store.groups as group}
                <tr class="border-b border-light-blue-500 last:border-b-0">
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        <a
                            class="text-light-blue-800 hover:underline"
                            href="/#/explore/{group._id}">
                            {group.name}
                        </a>
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">{group.students}</td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        {group.averageScore}
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">{group.debters}</td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
