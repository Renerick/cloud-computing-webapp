<script>
    export let type = "text";
    export let size = undefined;
    export let bsSize = undefined;
    export let checked = false;
    export let valid = false;
    export let invalid = false;
    export let plaintext = false;
    export let addon = false;
    export let value;
    export let files = "";
    export let readonly;
    export let id = "";
    export let name = "";
    export let placeholder = "";
    export let disabled = false;
    export let selectOptions;

    export let classes;

    let tag;
    let inputElement;

    $: checked = !!value;

    export function focus() {
        inputElement.focus();
    }

    export function blur() {
        inputElement.blur();
    }

    $: {
        const checkInput = ["radio", "checkbox"].indexOf(type) > -1;
        const fileInput = type === "file";
        const textareaInput = type === "textarea";
        const selectInput = type === "select";
        tag = selectInput || textareaInput ? type : "input";

        let formControlClass = "form-control";
        if (plaintext) {
            formControlClass = `${formControlClass}-plaintext`;
            tag = "input";
        }
    }
</script>

{#if tag === 'input'}
    {#if type === 'text'}
        <input
            bind:this={inputElement}
            {id}
            type="text"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'password'}
        <input
            bind:this={inputElement}
            {id}
            type="password"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'email'}
        <input
            bind:this={inputElement}
            {id}
            type="email"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'file'}
        <input
            bind:this={inputElement}
            {id}
            type="file"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:files
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'checkbox'}
        <input
            bind:this={inputElement}
            {id}
            type="checkbox"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:checked
            on:change={() => (value = checked)}
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'radio'}
        <input
            bind:this={inputElement}
            {id}
            type="radio"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change={() => (value = checked)}
            on:input
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'url'}
        <input
            bind:this={inputElement}
            {id}
            type="url"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'number'}
        <input
            bind:this={inputElement}
            {id}
            type="number"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'date'}
        <input
            bind:this={inputElement}
            {id}
            type="date"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'time'}
        <input
            bind:this={inputElement}
            {id}
            type="time"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'datetime'}
        <input
            bind:this={inputElement}
            {id}
            type="datetime"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'color'}
        <input
            bind:this={inputElement}
            {id}
            type="color"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {:else if type === 'search'}
        <input
            bind:this={inputElement}
            {id}
            type="search"
            on:blur
            on:focus
            on:keydown
            on:keypress
            on:keyup
            on:change
            on:input
            bind:value
            {readonly}
            class={classes}
            {name}
            {disabled}
            {placeholder} />
    {/if}
{:else if tag === 'textarea'}

    <textarea
        bind:this={inputElement}
        {id}
        class={classes}
        on:blur
        on:focus
        on:keydown
        on:keypress
        on:keyup
        on:change
        on:input
        bind:value
        {name}
        {disabled} />
{:else if tag === 'select'}

    <select
        bind:this={inputElement}
        {id}
        class={classes}
        on:blur
        on:focus
        on:change
        on:input
        {name}
        {disabled}
        bind:value>
        {#each selectOptions as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
{/if}
