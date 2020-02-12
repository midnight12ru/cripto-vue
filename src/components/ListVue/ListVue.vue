<template>
    <div>
        <span v-for="item in list" :key="item.Id" v-on:click="handelItemClick(item.CoinName)">
            {{item.FullName}}
        </span>
    </div>
</template>

<script>
    import {inject} from '@vue/composition-api'

    export default {
        name: "ListVue",
        props: {
            list: Array
        },
        setup() {
            let filteredList = inject('filteredList');
            let handelItemClick = (val) => filteredList(val);
            return { handelItemClick }
        }
    }
</script>

<style scoped>
    div {
        text-align: left;
    }

    span {
        padding: 10px 15px;
        margin: 5px;
        border: 1px solid lightblue;
        display: inline-block;
    }
</style>