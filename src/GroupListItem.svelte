<script>
    export let group;
    console.log(group);
</script>

<div class="p-4 bg-white hover:bg-active cursor-pointer border-l-2 border-primary-dark" class:bg-active={group.active}>
    <div class="flex justify-between items-baseline">
        <h2 class="text-xl">{group.name}</h2>
        <p class="text-primary-dark">{group.year}st year</p>
    </div>
    <p class="text-primary">{group.studyingForm}</p>
</div>
