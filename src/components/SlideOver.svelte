<script lang="ts">
    import { portal } from "svelte-portal/src/Portal.svelte";
    import { fly, fade } from "svelte/transition";

    export let title;
    export let show = false;
    export let close = () => show = false;
</script>

{#if show}

    <section use:portal={"body"} class="fixed inset-0 overflow-hidden" role="dialog" aria-modal="true">
        <!--overlay-->
        <div transition:fade={{duration: 200, }} on:click={close} class="absolute inset-0 bg-gray-800 opacity-50" aria-hidden="true"></div>

        <!-- All the classes will be applied to the slot's main element, in this case, the div below -->
        <div class="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 pointer-events-none">
            <!--
              Slide-over panel, show/hide based on slide-over state.

              Entering: "transform transition ease-in-out duration-500 sm:duration-700"
                From: "translate-x-full"
                To: "translate-x-0"
              Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
                From: "translate-x-0"
                To: "translate-x-full"
            -->
            <div transition:fly={{x: 499, duration: 250}} class="w-screen max-w-2xl h-full flex flex-col py-6 bg-white shadow-xl overflow-y-auto pointer-events-auto">
                <div class="px-4 sm:px-6 flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                        {title}
                    </h2>
                    <button
                        on:click={close}
                        class="ml-3 h-7 bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500">
                        <span class="sr-only">Close panel</span>
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 relative flex-1 px-4 sm:px-6">
                    <slot />
                </div>
            </div>
        </div>

    </section>
{/if}
