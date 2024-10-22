import Banner from "./components/Banner";
import Header from "./components/Header";
import OurRecipes from "./components/OurRecipes";

const App = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Header section */}
      <Header/>
      {/* Banner Section */}
      <Banner/>
      {/* Our Recipes section */}
      <OurRecipes/>
    </div>
  );
};

export default App;
