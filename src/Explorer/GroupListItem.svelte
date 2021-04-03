<script lang="ts">
    import { humanizeStudyingForm } from "../localization.ts";

    export let group;
    export let active;
</script>

<!--<div-->
<!--    class="p-4 hover:bg-gray-100 cursor-pointer border-l-2 border-light-blue-800 {active ? 'bg-gray-100' : 'bg-white'}">-->
<!--    <div class="flex justify-between items-baseline">-->
<!--        <h2 class="text-xl">{group.name}</h2>-->
<!--        <p class="text-light-blue-800">Year: {group.year}</p>-->
<!--    </div>-->
<!--    <p class="text-light-blue-500">{humanizeStudyingForm(group.studyingForm)}</p>-->
<!--</div>-->
<!-- Extend touch target to entire panel -->
<span class="absolute inset-0" aria-hidden="true"></span>
<div class="flex justify-between items-baseline">

    <p class="text-sm font-medium text-gray-900">
        {group.name}
    </p>
    <p class="text-sm text-gray-700">Year: {group.year}</p>
</div>
<p class="text-sm text-gray-500 truncate">
    {humanizeStudyingForm(group.studyingForm)}
</p>
