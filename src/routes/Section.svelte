<script lang="ts">
    export let title: string;
</script>

<div class="flex flex-col gap-4">
    <h2 class="border-b border-gray-800 text-3xl font-semibold leading-loose dark:border-gray-300">{title}</h2>
    <slot />
</div>
