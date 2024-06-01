<script lang="ts">
    export let name: string;
    export let period: string;
</script>

<div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
        <h3 class="text-xl font-semibold">{name}</h3>
        <span class="italic">{period}</span>
    </div>
    <div class="flex flex-col gap-6">
        <slot />
    </div>
</div>
