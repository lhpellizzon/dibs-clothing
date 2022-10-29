import CategoryContainer from "../components/CategoryContainer";

function Home() {
  return (
    <section
      id="home"
      className="flex justify-center items-center min-h-screen"
    >
      <div className="container mx-auto px-5 py-5">
        <CategoryContainer />
      </div>
    </section>
  );
}

export default Home;
