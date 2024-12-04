import { getPokemonData } from './modules/HttpRequest';
import { extractData, showData } from './modules/PokemonData';

window.addEventListener("load", () => alert("きをつけろ！ ここのポケモンは みんな 耳がとおい！"));

const getInputName = (e) => {
  const form = new FormData(e.target);
  const pokeName = form.get("pokeName").toLowerCase();
  console.log(pokeName);
  return pokeName;
}

const submitHandler = async (e) => {
  e.preventDefault();
  const inputName = getInputName(e);
  const pokemonData = await getPokemonData(inputName);
  const extractedData = extractData(pokemonData);
  showData(extractedData);
}

document.querySelector("#js-form").addEventListener("submit", (e) => submitHandler(e));
