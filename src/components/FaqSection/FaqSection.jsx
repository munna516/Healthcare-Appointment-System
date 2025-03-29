import Questions from "./Questions";
import FaqVisual from "./FaqVisual";
// import SectionTitle from "@components/SectionTitle/SectionTitle";
import SectionSubTitle from "@components/SectionSubTitle/SectionSubTitle";

const FaqSection = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="flex items-center justify-center flex-col mb-6">
        <SectionSubTitle text={"FAQ"} />
        {/* <SectionTitle text={"frequently asked questions"} /> */}
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-4">
        <Questions />
        <FaqVisual />
      </div>
    </div>
  );
};

export default FaqSection;
