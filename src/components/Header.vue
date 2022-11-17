<template>
    <header>
        <h1>{{ title }}</h1>
        <AddButton text='Add task' color="green"/>
    </header>
</template>

<script>
import AddButton from '@/components/Button.vue';

export default {
    name: 'TaskHeader',
    props: {
        title: {
            type: String,
            required: true,
    
        },
    },
    components: {
        AddButton,
    },
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: red;
}
</style>