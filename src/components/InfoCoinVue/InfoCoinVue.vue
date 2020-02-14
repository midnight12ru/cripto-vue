<template>
    <div>
        {{infoData}}
    </div>
</template>

<script>
    import {onUpdated} from '@vue/composition-api';

    export default {
        name: 'InfoCoinVue',
        props:{
            infoData: Array
        },
        setup(){
            onUpdated(()=>{
                console.log('qwe')
            })
        }
    }
</script>