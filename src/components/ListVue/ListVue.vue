<template>
    <div>
        <span v-for="item in list" :key="item.Id">
            {{item.FullName}}
        </span>
    </div>
</template>

<script>
    import {} from '@vue/composition-api'

    export default {
        name: "ListVue",
        props:{
            list: Array
        },
        setup(){

        }
    }
</script>

<style scoped>
    div{
        text-align: left;
    }
span{
    padding: 10px 15px;
    margin: 5px;
    border: 1px solid lightblue;
    display: inline-block;
}
</style>