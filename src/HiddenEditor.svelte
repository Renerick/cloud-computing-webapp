<script>
    export let value;

    let input;

    let editing = false;

    $: if (input) input.focus();
</script>

<div on:click={() => (editing = true)} class="cursor-pointer">
    {#if !editing}
        <slot output={value} />
    {:else}
        <input
            bind:this={input}
            class="w-full"
            focused
            on:blur={() => (editing = false)}
            on:keyup={e => {
                if (e.key === 'Enter') editing = false;
            }}
            type="text"
            bind:value />
    {/if}
</div>
