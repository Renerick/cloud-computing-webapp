<script>
    import { createEventDispatcher, onMount } from "svelte";
    import Input from "./Input.svelte";

    let dispatch = createEventDispatcher();

    export let value;
    export let inputType = "text";
    export let inputClass = "";
    export let label;
    export let labelClass = "";
    export let outputClass = "";
    export let selectOptions;
    export let alwaysActive = false;

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
{#if !editing && !alwaysActive}
    <p on:click={() => (editing = true)} class={outputClass}>{value}</p>
{:else}
    <div class={outputClass}>
        <Input
            bind:this={input}
            classes={inputType != 'checkbox' && inputType != 'radio' ? 'w-full h-full' : ''}
            on:blur={submit}
            on:keyup={e => {
                if (e.key === 'Enter') input.blur();
            }}
            type={inputType}
            {selectOptions}
            bind:value/>
    </div>
{/if}
