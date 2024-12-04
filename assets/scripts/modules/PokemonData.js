export const extractData = (pokemonData) => {
    // デバッグのために追加のエラーチェック
    if (!pokemonData) {
        throw new Error("Pokemon data is undefined");
    }

    const id = pokemonData.id;
    const name = pokemonData.name;
    const img = pokemonData.sprites.front_default;
    const cry = pokemonData.cries.latest;
    const gameTitles = [];
    pokemonData.game_indices.forEach(titleItem => {
        gameTitles.push(titleItem.version.name);
    });
    const gameImageFilePaths = gameTitles.map(path => {
        return `<dt><img class="gameImage" src="../../../public/images/${path}.png" alt="">`;
    });
    console.log(gameImageFilePaths);
    const types =[];
    pokemonData.types.forEach(typeItem => {
        types.push(typeItem.type.name);
    });
    return {id, name, img, cry, gameTitles, gameImageFilePaths, types};
}

export const showData = (data) => {
    const htmlData = `<dl>
        <dt>Name: ${data.name}</dt>
        <dd><img src="${data.img}" alt=""></dd>
        <dd>ID: ${data.id}</dd>
        <dt>Types: ${data.types.join(",")}</dd>
        <dt>Titles: ${data.gameTitles.join(",")}</dd>
        <dt class="gameImages">${data.gameImageFilePaths.join("")}</dt></dd>
        <audio id="pokemon-cry" src="${data.cry}" autoplay></audio>
        </dl>`
    document.querySelector("#js-result").innerHTML = htmlData;
}