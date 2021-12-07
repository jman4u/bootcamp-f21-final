import React from "react";
import Link from "next/link";
import AnimalCard from "../../components/AnimalCard/AnimalCard";
import { getCats } from "../../../server/mongodb/actions/Adopt";

const AdoptPage = ({ cats }) => {
  return (
    <div>
      <h1>Adopt Page</h1>
      {cats &&
        cats.length > 0 &&
        cats.map((cat) => (
          <Link href={"/cats/" + cat._id} key={cat._id}>
            <AnimalCard key={cat._id} cat={cat} />
          </Link>
        ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const data = await getCats();
  return {
    props: {
      cats: data,
    },
  };
}

export default AdoptPage;
