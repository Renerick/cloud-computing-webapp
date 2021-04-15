<script lang="ts">
    import { humanizeStudyingForm } from "../localization.ts";

    export let group;
    export let active;
</script>

<div class="flex justify-between items-baseline">

    <p class="text-sm font-semibold text-gray-900">
        {group.name}
    </p>
    <p class="text-sm text-gray-700">Year: {group.year}</p>
</div>
<p class="text-sm text-gray-500 truncate">
    {humanizeStudyingForm(group.studyingForm)}
</p>
