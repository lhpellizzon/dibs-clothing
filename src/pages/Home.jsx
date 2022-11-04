import CategoryContainer from "../components/CategoryContainer";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <>
      <Helmet>
        <title>Dibs Clothing</title>
      </Helmet>
      <section id="home" className="home-container">
        <CategoryContainer />
      </section>
    </>
  );
}

export default Home;
