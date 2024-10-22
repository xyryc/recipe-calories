import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";
import Recipes from "./components/Recipes";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header section */}
      <Header/>
      {/* Banner section */}
      <Banner/>
      {/* Our Recipes section */}
      <OurRecipes/>
      {/* Recipe Card section */}
      <section className="flex flex-col md:flex-row gap-6 pb-24">
        {/* Card section */}
        <Recipes/>
        {/* Sidebar section */}
        <Sidebar/>
      </section>
    </div>
  );
};

export default App;
