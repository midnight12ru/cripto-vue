<template>
    <div class="list__items" v-if="dataComp.showListItems">
        <span v-for="item in list" :key="item.Id" v-on:click="handelItemClick(item.CoinName)">
            {{item.FullName}}
        </span>
    </div>
</template>

<script>
    import {computed, inject, reactive} from '@vue/composition-api'

    export default {
        name: "ListVue",
        props: {
            list: Array,
            showlist: Boolean
        },
        setup(props) {
            let dataComp = reactive({
                showListItems: computed(() => {
                    return props.list.length > 1;
                })
            });
            let filteredList = inject('filteredList');
            let handelItemClick = (val) => filteredList(val);
            return {handelItemClick, dataComp}
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