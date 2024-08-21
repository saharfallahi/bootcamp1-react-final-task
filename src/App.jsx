import { useState } from "react";
import AddNewCategory from "./components/AddNewCategory";
import AddNewProduct from "./components/AddNewProduct";
import ProductList from "./components/ProductList";
import Filters from "./components/Filters";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // const [currentProduct, setCurrentProduct] = useState({});
  const [products, setProducts] = useLocalStorage("PRODUCTS", []);
  const [categories, setCategories] = useLocalStorage("CATEGORIES", []);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("created_desc");
  const [category, setCategory] = useState("ALL");

  console.log(products);
  console.log(categories);

  const mapCategories = categories.map((c) => {
    return {
      value: c.title,
      label: c.title,
    };
  });
  const transformedCategories = [
    {
      value: "ALL",
      label: "ALL",

    },
    ...mapCategories,
  ];


  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleChangeSort = (e) => {
    console.log(e.target.value);
    
    setSort(e.target.value);
  };
  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSort = (a, b) => {
    switch (sort) {
      case "created_desc": // latest
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case "created_asc": // earliest
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      default:
        throw new Error("No Matching Sort!");
    }
  };

  const filteredProducts = products
    .filter((p) => p.title.toLowerCase().includes(search?.toLowerCase()))
    .filter((p) => (category === "ALL" ? true : p.category === category))
    .sort(handleSort);

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) => prevProducts.filter((p) => p.id !== id));
  };

  return (
    <div className="container mt-10 flex flex-col gap-y-8 lg:flex-row lg:gap-x-8">
      <div className="flex flex-col gap-y-8 lg:w-1/2">
        <AddNewCategory setCategories={setCategories} />
        <AddNewProduct categories={categories} setProducts={setProducts} mapCategories={mapCategories}/>
      </div>
      <div className="flex flex-col gap-y-8 lg:w-1/2">
        <div>
          <h2 className="text-secondary-400">Filters</h2>
          <hr className="border-secondary-500" />
          <Filters
            transformedCategories={transformedCategories}
            search={search}
            onChangeSearch={handleChangeSearch}
            sort={sort}
            onChangeSort={handleChangeSort}
            category={category}
            onChangeCategory={handleChangeCategory}
          />
        </div>
        <div>
          <h2 className="text-secondary-300 text-xl">ProductList</h2>
          <hr className="border-secondary-500" />
          <ProductList
            filteredProducts={filteredProducts}
            onDeleteProduct={handleDeleteProduct}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
