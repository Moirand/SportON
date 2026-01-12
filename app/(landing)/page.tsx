import { getCategories } from "../services/category.service";
import { getProducts } from "../services/product.service";
import { CategoriesSection } from "./components/home/categories";
import { HeroSection } from "./components/home/hero";
import { ProductsSection } from "./components/home/products";

export default async function Home() {
  const categories = await getCategories();
  const products = await getProducts();

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}