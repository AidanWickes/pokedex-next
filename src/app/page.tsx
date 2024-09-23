import PokemonCard from "@/app/ui/card/Card";
import { getAllPokemon } from "@/lib/api";
import Link from "next/link";
import { Key } from "react";

export default async function Home() {
  const data = await getAllPokemon();

  return (
    <main>
      <h1 className="mb-8 text-center text-4xl font-bold">NextJS</h1>

      <ul className="grid-cols-1 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map(
          (
            pokemon: { id: number; image: string; name: string },
            index: Key,
          ) => (
            <li key={index}>
              <Link href={`page/pokemon/${pokemon.id}`} className="flex justify-center">
                <PokemonCard id={pokemon.id} />
              </Link>
            </li>
          ),
        )}
      </ul>
    </main>
  );
}
