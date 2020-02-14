<template>
    <div>
        <input
                autofocus
                type="text"
                :placeholder="pl"
                v-model="inputValue"
                @input="handelFilter(inputValue)"
                v-on:keypress.shift.enter="quickSetVal"
        >
        <div v-if="">
            shift+enter
            <span>{{preSelection.FullName}}</span>
        </div>
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
        setup(props) {
            let inputValue = ref('');
            let test = ref(true);

            let handelFilter = inject('filteredList');

            let quickSetVal = () => {
                if (props.preSelection.hasOwnProperty('FullName')) {
                    inputValue.value = props.preSelection.FullName;
                    handelFilter(props.preSelection.FullName)
                }
            };
            return {handelFilter, inputValue, quickSetVal, test}
        }
    }
</script>

<style scoped>

</style>