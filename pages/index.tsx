import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import TabBar from "../components/TabBar";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <TabBar />
    </div>
  );
};

export default Home;
