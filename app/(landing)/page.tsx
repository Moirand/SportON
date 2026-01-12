import { getCategories } from "../services/category.service";
import { CategoriesSection } from "./components/home/categories";
import { HeroSection } from "./components/home/hero";
import { ProductsSection } from "./components/home/products";

export default async function Home() {
  const categories = await getCategories();

  return (
    <main>
      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection />
    </main>
  );
}