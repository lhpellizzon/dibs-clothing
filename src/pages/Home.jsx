import CategoryContainer from "../components/CategoryContainer";
import { useEffect } from "react";
import { setPageTitle } from "../hooks/setPageTitle";

function Home() {
  setPageTitle("Home title");
  return (
    <section id="home" className="home-container">
      <CategoryContainer />
    </section>
  );
}

export default Home;
