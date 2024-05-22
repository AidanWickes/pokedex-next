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
    <main className="container mx-auto pt-8 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 text-center">NEXTJS</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((pokemon, index) => (
          <li key={index}>
            <Link href={`/pokemon/${pokemon.id}`} className="flex flex-col justify-center items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img src={pokemon.image} alt={pokemon.name} className="rounded-t-lg" />
              <div className="p-5">
                <h5 className=" capitalize mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}