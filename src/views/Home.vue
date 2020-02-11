<template>
    <div class="home">
        <InputVue ref="inputRoot"/>
        <ListVue :list="MD.filteredList"/>
    </div>
</template>

<script>
    import {onMounted, provide, reactive, ref} from "@vue/composition-api";
    import {fetchFunc, filterFunc} from "../func";
    import {InputVue, ListVue} from "../components";

    export default {
        name: "Home",
        components: {InputVue, ListVue},
        setup() {
            let MD = reactive({
                listCoin: [],
                filteredList: []
            });

            const inputRoot = ref(null);

            let filteredList = (val) => {
                if (val.length) {
                    let newList = filterFunc(MD.listCoin, val)
                    MD.filteredList=newList
                } else {
                    MD.filteredList = []
                }
            };

            provide('filteredList', filteredList)

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
            });

            return {
                inputRoot, MD
            }
        }
    };
</script>
