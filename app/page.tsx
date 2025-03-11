
import { ProductCard } from './components/ProductCard';
import HeroSection from './components/HeroSection';
import FeaturedCategories from './components/FeaturedCategories';
export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <FeaturedCategories></FeaturedCategories>
      <ProductCard></ProductCard>
      
    </div>
  );
}
