import TestUserLogin from "../elements/testUserLogin/testUserLogin";
import BenefitsSection from "../molecules/homePageSections/benefitsSection";
import CommunitySection from "../molecules/homePageSections/communitySection";
import HeroScene from "../molecules/homePageSections/heroScene";
import ServicesSection from "../molecules/homePageSections/servicesSection";
import ShareSection from "../molecules/homePageSections/shareSection";
import SocialSection from "../molecules/homePageSections/socialSection";

/************* Tribbum website homePage ************/
const HomePage = () => {
  return (
    <div className="flex flex-col mx-auto items-center gap-12 ">
      <div className="flex flex-col w-full h-auto ">
        <HeroScene className="z-30" />
      </div>
      <div className="flex flex-col w-full h-auto bg-secondary-100">
        <ShareSection />
      </div>
      <div className="flex flex-col w-full h-auto ">
        <BenefitsSection className="z-30" />
      </div>
      <div className="flex flex-col w-full h-auto ">
        <ServicesSection className="z-30" />
      </div>
      <div className="flex flex-col w-full h-auto ">
        <CommunitySection className="z-30" />
      </div>
      <div className="flex flex-col w-full h-auto ">
        <SocialSection className="z-30" />
      </div>
      {/* <div>
        <TestUserLogin />
      </div> */}
    </div>
  );
};
export default HomePage;
