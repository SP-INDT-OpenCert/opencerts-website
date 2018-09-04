import AboutSection from "./ContentPage/AboutSection";
import DropZoneSection from "./ContentPage/DropZoneSection";
import PartnerSection from "./ContentPage/PartnersSection";

const MainPageContainer = () => (
  <div
    className="container-fluid"
    style={{ fontFamily: "sans-serif", fontWeight: 100 }}
  >
    <DropZoneSection />
    <AboutSection />
    <PartnerSection />
  </div>
);

export default MainPageContainer;
