import AboutSection from "../../components/home/abouts";
import AwardsSection from '../../components/home/awards';
import ExperiencesSection from "../../components/home/experiences";
import LinksSection from "../../components/home/links";
//import ProductsSection from '../../components/home/products';
import SkillsSection from "../../components/home/skills";
import WorksSection from "../../components/home/works";
//import { products } from '../../util/articles';

export default function Home() {
  return (
    <>
      <AboutSection />
      <LinksSection />
      
      <AwardsSection />
      <SkillsSection />
      <WorksSection />
      <ExperiencesSection />
    </>
  );
}
