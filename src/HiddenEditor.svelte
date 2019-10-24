<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Input from "./Input.svelte";

    let dispatch = createEventDispatcher();

    export let value;
    export let inputType = "text";
    export let inputClass = "";
    export let label;
    export let labelClass = "";
    export let containerClass ="";
    export let selectOptions;

    const inputTypeConts = inputType;

    let input;

    let editing = false;

    $: if (input) input.focus();

    function submit() {
        editing = false;
        dispatch("submit", value);
    }
</script>

{#if label}
    <label class={labelClass}>{label}</label>
{/if}
<div on:click={() => (editing = true)} class="{containerClass}">
    {#if !editing}
        <slot output={value} />
    {:else}
        <Input
            bind:this={input}
            classes={inputClass}
            on:blur={submit}
            on:keyup={e => {
                if (e.key === 'Enter') input.blur();
            }}
            type={inputType}
            {selectOptions}
            bind:value />
    {/if}
</div>
