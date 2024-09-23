export async function getIndividualPokemon(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const results = await res.json();
  const pokemonData = {
    id: results.id,
    name: results.name,
    image: {
      src: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id.toString().padStart(3, "0")}.png`,
      alt: results.name,
    },
    types: Object.keys(results.types).map(
      (key) => results.types[key].type.name,
    ),
  };
  return pokemonData;
}

export async function getAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const { results } = await res.json();
  const pokemonData = results.map(
    (pokemon: { name: string }, index: number) => ({
      id: index + 1,
      name: pokemon.name,
      image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(index + 1).toString().padStart(3, "0")}.png`,
    }),
  );
  return pokemonData;
}

export async function getIndividualType(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch type");
  }

  const { results } = await res.json();
  const typeData = {
    id: results.id,
    name: results.name,
    defense_damage_relations: {
      resistances: results.damage_relations.half_damage_from,
      weaknesses: results.damage_relations.double_damage_from,
      immunities: results.damage_relations.no_damage_from,
    },
    attack_damage_relations: {
      weak: results.damage_relations.half_damage_to,
      strength: results.damage_relations.double_damage_to,
      negated: results.damage_relations.no_damage_to,
    },
  };
  return typeData;
}

export async function getAllTypes() {
  const res = await fetch("https://pokeapi.co/api/v2/type/");
  if (!res.ok) {
    throw new Error("Failed to fetch types");
  }

  const { results } = await res.json();
  const types = results.map((type: { name: string }, index: number) => ({
    id: index + 1,
    type: type.name,
  }));
  return types;
}
