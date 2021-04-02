<script lang="ts">
    import { store, loadStudents } from "./store/StudentsAggregateStore.js";
    import { onMount } from "svelte";
    import { humanizeStudentType } from "./localization.ts";
    onMount(() => loadStudents());
</script>

<div class="container mx-auto">
    <table class="w-full text-center">
        <tr class="border-b-2 border-primary-dark">
            <th class="px-2 py-1 sm:px-8 sm:py-4">Group</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Students count</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Average score</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Group</th>
            <th class="px-2 py-1 sm:px-8 sm:py-4">Year</th>
        </tr>
        <tbody class="bg-white">
            {#each $store.students as student}
                <tr class="border-b border-primary last:border-b-0">
                    <td class=" px-2 py-1 sm:px-8 sm:py-4">
                        <a
                            class="text-primary-dark hover:underline"
                            href="/#/explore/{student.group}/{student._id}">
                            {student.name}
                        </a>
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        {humanizeStudentType(student.type)}
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        {student.averageScore}
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        <a
                            class="text-primary-dark hover:underline"
                            href="/#/explore/{student.groupObj._id}">
                            {student.groupObj.name}
                        </a>
                    </td>
                    <td class="px-2 py-1 sm:px-8 sm:py-4">
                        {student.groupObj.year}
                    </td>
                </tr>
            {/each}
        </tbody>
    </table>
</div>
