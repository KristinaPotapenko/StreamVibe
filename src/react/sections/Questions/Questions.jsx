import { ROUTES } from "../../../utils/routes";
import { SectionHeader } from "../../components/Section/SectionHeader/sectionHeader";
import { Link } from "../../components/ui/Link/Link";
import { QuestionsList } from "./QuestionsList/QuestionsList";

export const Questions = () => {
  return (
    <section className="section container">
      <SectionHeader
        title="Frequently Asked Questions"
        description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
      >
        <Link to={ROUTES.SUPPORT}>Ask a Question</Link>
      </SectionHeader>
      <QuestionsList />
    </section>
  );
};
