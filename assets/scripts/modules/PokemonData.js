export const extractData = (pokemonData) => {
    // デバッグのために追加のエラーチェック
    if (!pokemonData) {
        throw new Error("Pokemon data is undefined");
    }

    const id = pokemonData.id;
    const name = pokemonData.name;
    const img = pokemonData.sprites.front_default;
    const cry = pokemonData.cries.latest;
    const types =[];
    pokemonData.types.forEach(typeItem => {
        types.push(typeItem.type.name);
    });
    console.log(cry);
    return {id, name, img, cry, types};
}

export const showData = (data) => {
    const htmlData = `<dl>
        <dt>Name: ${data.name}</dt>
        <dd><img src="${data.img}" alt=""></dd>
        <dd>ID: ${data.id}</dd>
        <dt>Types: ${data.types.join(",")}</dd>
        <audio id="pokemon-cry" src="${data.cry}" autoplay></audio>
        </dl>`
    document.querySelector("#js-result").innerHTML = htmlData;
}