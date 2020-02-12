export default async () => {
    return await fetch(`https://www.cbr-xml-daily.ru/daily_json.js`)
        .then(r => r.json())
        .then(r => {
                let {Valute} = r;
                let list = [];
                for (let key in Valute) {
                    list.push({CharCode: Valute[key].CharCode, Name: Valute[key].Name})
                }
                list.push({CharCode: 'RUB', Name: 'Российский рубль'});

                return list.sort((a, b) => {
                    return a.Name > b.Name ? 1 : -1
                })
            }
        )
}