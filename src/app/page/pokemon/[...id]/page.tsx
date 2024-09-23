import Link from "next/link";

export default async function Page() {
    return (
      <>
        <h1>Could not find data, please check again later or navigate back to the home page</h1>
        <Link href={"/"}>Home</Link>
      </>
    );
  }