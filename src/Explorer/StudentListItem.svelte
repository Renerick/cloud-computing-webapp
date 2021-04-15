<script lang="ts">
    export let student;
</script>

<div class="group py-4 px-6 w-full flex items-center hover:bg-gray-100">
    <img class="transition transition-transform transform ease-out group-hover:scale-110 rounded-full w-12 h-12" alt="Photo of {student.name}" src={student.avatar} />
    <h3 class="ml-4">{student.name}</h3>
</div>
