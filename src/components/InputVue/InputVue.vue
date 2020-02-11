<template>
    <input
            type="text"
            :placeholder="pl"
            @input="handelFilter(inputValue)"
            v-model="inputValue"
            autofocus
    >
</template>

<script>
    import {inject, ref} from '@vue/composition-api'

    export default {
        name: "InputVue",
        props: {
            pl: String
        },
        setup() {
            let inputValue = ref('');
            let handelFilter = inject('filteredList');

            return{handelFilter, inputValue}
        }
    }
</script>

<style scoped>

</style>