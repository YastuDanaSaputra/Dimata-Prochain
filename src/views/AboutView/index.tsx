import JumbotronAbout from "@/components/layout/About/jumbotron";
import StoryAbout from "@/components/layout/About/story";
import VisionAbout from "@/components/layout/About/vision";
import TeamAbout from "@/components/layout/About/team";
import ExperienceAbout from "@/components/layout/About/experience";
import OfficeAbout from "@/components/layout/About/office";
import Schedule from "@/components/layout/Home/schedule";
import Footer from "@/components/layout/Footer";

const AboutView = () => {
  return (
    <>
      <JumbotronAbout />
      <StoryAbout />
      <VisionAbout />
      <TeamAbout />
      <ExperienceAbout />
      <OfficeAbout />
      <Schedule />
      <Footer />
    </>
  );
};
export default AboutView;
