<script>
    export let student;
</script>

<div class="h-16 w-full flex items-center hover:bg-active">
    <img class="h-full w-16" alt="Photo of {student.name}" src={student.avatar} />
    <h3 class="text-xl ml-4">{student.name}</h3>
</div>
