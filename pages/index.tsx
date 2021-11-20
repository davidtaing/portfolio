import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
    </div>
  );
};

export default Home;
