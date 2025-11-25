import Navbar from '@/components/molecules/Navbar/Navbar';
import MainSection from '@/components/organisms/MainSection/MainSection';
import AdvantagesSection from '@/components/organisms/AdvantagesSection/AdvantagesSection';
import WorkProcessSection from '@/components/organisms/WorkProcessSection/WorkProcessSection';
import ProjectsSection from '@/components/organisms/ProjectsSection/ProjectsSection';
import TestimonialsSection from '@/components/organisms/TestimonialsSection/TestimonialsSection';
import ComparisonSection from '@/components/organisms/ComparisonSection/ComparisonSection';
import BlogSection from '@/components/organisms/BlogSection/BlogSection';
import FAQSection from '@/components/organisms/FAQSection/FAQSection';
import Footer from '@/components/organisms/Footer/Footer';
import './Home.scss';
import Welcome from '@/components/molecules/Welcome/Welcome';
import AboutUsSection from '../../components/organisms/AboutUsSection/AboutUsSection';
import ContactFormSection from '@/components/organisms/ContactFormSection/ContactFormSection';
const Home = () => {
  return (
    <>
{/*     <Welcome /> */}
      <Navbar />
      <MainSection />
      <AboutUsSection />
      <AdvantagesSection />
{/*       <WorkProcessSection /> */}
      <ComparisonSection />
      <ProjectsSection />
      <TestimonialsSection />

      <BlogSection />
      <FAQSection />
      <ContactFormSection />
      <Footer />
    </>
  );
};

export default Home;
