<template>
    <button class="baseButton" @click="onClick()" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
    name: 'AddButton',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('toggle-add-task');
        }
    }
};
</script>
