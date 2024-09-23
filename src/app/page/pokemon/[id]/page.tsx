import { getIndividualPokemon } from "@/lib/api";

export default async function Page({ params }) {
  const data = await getIndividualPokemon(params.id);
  return (
    <>
      <h1>{data.name}</h1>
    </>
  );
}
