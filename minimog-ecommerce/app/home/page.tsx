import { Button } from "@/components/ui/button";
import BestSellers from "@/Sections/BestSeller";
import MixMatchSection from "@/Sections/CheckOutMixMatch";
import HeroBanner from "@/Sections/HeroBanner"; 
import ReLeatherSection from "@/Sections/ReLeatherSection";
import ShopCategories from "@/Sections/ShopByCategories";
import HotThisWeekSection from "@/Sections/BeautifullyFunctional";

export default function HomePage() {
    return (
        <div>
            <HeroBanner />
            <ShopCategories/>
            <BestSellers/>
            <ReLeatherSection/>
            <MixMatchSection/>
            <HotThisWeekSection/>
        </div>
    )
}