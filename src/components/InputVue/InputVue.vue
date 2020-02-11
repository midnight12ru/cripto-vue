<template>
    <div>
        <input
                type="text"
                :placeholder="pl"
                @input="handelFilter(inputValue)"
                v-model="inputValue"
                autofocus
                v-on:keypress.shift.enter="test"
        >
        <span>{{preSelection.FullName}}</span>
    </div>
</template>

<script>
    import {inject, ref} from '@vue/composition-api'

    export default {
        name: "InputVue",
        props: {
            pl: String,
            preSelection: Object
        },
        updated(){
          console.log(this.props)
        },

        setup({preSelection}) {
            let inputValue = ref('');
            let handelFilter = inject('filteredList');



            let test = () => {
                console.log(preSelection);
                inputValue.value = preSelection.FullName;
                console.log('shift enter')
            }

            return {handelFilter, inputValue, test}
        }
    }
</script>

<style scoped>

</style>