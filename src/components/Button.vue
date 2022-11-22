<template>
    <button class="baseButton" @click="onClick()" :style="{background: color}">{{text}}</button>
</template>

<script>
export default {
    name: 'FirstButton',
    props: {
        text: String,
        color: String,
    },
    methods: {
        onClick() {
            this.$emit('btn-click');
        }
    }
};
</script>
