import type { NextPage } from "next";
import ContactSection from "../../common/components/contact/ContactSection";

const Home: NextPage = () => {
  return (
    <div className="homepage">
      <ContactSection />
    </div>
  );
};

export default Home;
