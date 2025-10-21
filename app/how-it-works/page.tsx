import PageTitleComponent from "@/components/PageTitleComponent";
import CardUsageSteps from "./partials/CardUsageSteps";
import Referral from "./partials/Referral";

const HowItWorks = () => {
  return (
    <div>
      <PageTitleComponent title="How it Works" />
      <CardUsageSteps />
      <Referral />
    </div>
  );
};

export default HowItWorks;
