import Link from "next/link";
async function getData(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const pokemon = await res.json();
    pokemon.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${(id).toString().padStart(3, '0')}.png`;
    return pokemon
}

export default async function Page({ params }) {
    const data = await getData(params.id)
    return (
        <>
            <h1 className="text-4xl font-bold mb-8 text-center capitalize">{data.name}</h1>
            <div className="flex flex-col items-center bg-purple-50 rounded-md p-8">
                <img src={data.image} alt={data.name} />
                <p className="text-lg font-bold">ID: {data.id}</p>
                <p>
                    <span className="font-bold mr-2">Weight:</span> {data.weight}
                </p>
                <p>
                    <span className="font-bold mr-2">Height:</span>
                    {data.height}
                </p>
                <h2 className="text-2xl mt-6 mb-2">Types</h2>
                {data.types.map((type, index) => (
                    <p className="capitalize" key={index}>{type.type.name}</p>
                ))}
            </div>
            <p className="mt-10 text-center">
                <Link href="/">
                        <span className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg">Home</span>
                </Link>
            </p>
        </>
    )
}