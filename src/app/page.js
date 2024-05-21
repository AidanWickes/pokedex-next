import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const { results } = await res.json();

  const pokemonData = results.map((pokemon, index) => ({
    id: index + 1,
    name: pokemon.name,
    image: `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(index + 1).toString().padStart(3, '0')}.png`,
  }));

  return pokemonData;
};

export default async function Home() {
  const data = await getData();

  return (
    <main className="container mx-auto max-w-xl pt-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">NEXTJS</h1>
      <ul>
        {data.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${pokemon.id}`} className="border p-4 border-gray my-2 hover:shadow-md capitalize flex items-center text-lg bg-gray-200 rounded-md">
              <img src={pokemon.image} alt={pokemon.name} className="w-20 h-20 mr-4" />
              <span className="mr-2 font-bold">{pokemon.id}</span>
              {pokemon.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}