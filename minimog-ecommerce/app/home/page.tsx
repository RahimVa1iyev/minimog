import { Button } from "@/components/ui/button";
import BestSellers from "@/Sections/BestSeller";
import HeroBanner from "@/Sections/HeroBanner"; 
import ShopCategories from "@/Sections/ShopByCategories";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <ShopCategories/>
            <BestSellers/>
        </div>
    )
}