export default (list, inputVal) => {
    return list.filter(el => {
        return el.Symbol.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1 || el.CoinName.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1 || el.FullName.toLowerCase().indexOf(inputVal.toLowerCase()) !== -1
    })
}