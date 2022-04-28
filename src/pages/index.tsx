import type { NextPage } from "next";
import { Header } from "../features/Header";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <Header />
    </div>
  );
};

export default Home;
