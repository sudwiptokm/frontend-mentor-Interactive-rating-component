import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "../src/Components/Card";
import Confirmation from "../src/Components/Confirmation";

const Home: NextPage = () => {
  const [page, setPage] = useState(true);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/public/favicon.ico" />
      </Head>
      <div className="w-screen h-screen bg-black">
        <div className="flex justify-center items-center text-white h-full w-full">
          <div>
            {page ? (
              <Card
                handleSubmit={setPage}
                selected={selected}
                setSelected={setSelected}
              />
            ) : (
              <Confirmation rating={selected} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
