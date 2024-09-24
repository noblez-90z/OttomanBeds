import ItemList from "../MainShopping/ItemList";
import ItemListThree from "../MainShopping/ItemListThree";
import ItemListTwo from "../MainShopping/ItemListTwo";
import MainHomePage from "../MainShopping/MainHome";
import Center from "./Center";
import Collection from "./Collection";
import Hero from "./Hero";
import Layout from "./Layout";

const Homepage = () => {
  return (
    <div className="">
      <Layout>
        <Hero />
        <Collection />

        <ItemListTwo />
        <Center />
        <ItemList />
      </Layout>
    </div>
  );
};

export default Homepage;
