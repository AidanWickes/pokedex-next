import { getIndividualPokemon } from "@/lib/api";
import { Card } from "@/components/card/Card";

export default async function PokemonCard({ id }) {
  const pokemon = await getIndividualPokemon(id);
  return (
    <Card id={id} name={pokemon.name} types={pokemon.types} image={pokemon.image} />
  );
}
