export default async (url) => {
    return await fetch(url, {
        headers: {authorization: 'Apikey 9370729ad39a2b051188c47094766913a02fabfc904dc2535edd8a24112cadc5'}
    }).then(r => r.json()).then(r => r)
}