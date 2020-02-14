<template>
    <div class="home">
        <InputVue ref="inputRoot" :preSelection="MD.preSelection"/>
        <ListVue :list="MD.filteredList"/>
        <InfoCoinVue :infoData="infoCoin"/>
    </div>
</template>

<script>
    import {computed, onMounted, provide, reactive, ref} from "@vue/composition-api";
    import {fetchFunc, filterFunc, charCodeValute} from "../func";
    import {InputVue, ListVue, InfoCoinVue} from "../components";

    export default {
        name: "Home",
        components: {InputVue, ListVue, InfoCoinVue},
        setup() {
            let MD = reactive({
                listCoin: [],
                filteredList: [],
                preSelection: computed(() => MD.filteredList[0] || {})
            });

            let  infoCoin = ref([]);

            const inputRoot = ref(null);

            let filteredList = (val) => {
                if (val.length) {
                    let newList = filterFunc(MD.listCoin, val);
                    let {inputValue, preSelection:{FullName}} = inputRoot.value;
                    MD.filteredList = newList;

                    if (inputValue === FullName) {
                        infoCoin = [newList[0].Symbol, ['EUR', 'RUB']];
                        MD.filteredList = []
                    }
                } else {
                    inputRoot.value.test = false;
                    MD.filteredList = []
                }
            };

            provide('filteredList', filteredList);

            onMounted(() => {
                fetchFunc(`https://min-api.cryptocompare.com/data/all/coinlist`)
                    .then(r => {
                        let {Data} = r;
                        let newList = [];
                        for (let key in Data) {
                            let {Id, Url, ImageUrl, Name, Symbol, CoinName, FullName, Algorithm, ProofType, TotalCoinSupply, IsTrading, TotalCoinsMined} = Data[key];
                            newList.push({
                                Id,
                                Url,
                                ImageUrl,
                                Name,
                                Symbol,
                                CoinName,
                                FullName,
                                Algorithm,
                                ProofType,
                                TotalCoinSupply,
                                IsTrading,
                                TotalCoinsMined
                            })
                        }
                        MD.listCoin = newList;
                    });

                console.log(charCodeValute())
            });

            return {
                inputRoot, MD, infoCoin
            }
        }
    };
</script>
