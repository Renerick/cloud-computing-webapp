<script>
    import PropertyGroup from "./PropertyGroup.svelte";
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let object;
    export let fieldsDescription;
</script>

<div class="table w-full">
    {#each fieldsDescription as field}
        <div class="table-row">
            <PropertyGroup
                bind:value={object[field.key]}
                on:submit={e => dispatch('updated', {
                        key: field.key,
                        value: object[field.key]
                    })}
                inputType={field.inputType}
                selectOptions={field.inputType === 'select' ? field.getSelectOptions() : []}
                labelClass="table-cell w-1/3 text-right pr-4 font-bold border-b
                border-active"
                label={field.label}
                renderer={field.renderer}
                alwaysActive={field.alwaysActive}
                outputClass="table-cell hover:bg-active py-2 px-4 cursor-pointer
                border-b border-active" />
        </div>
    {/each}
</div>
