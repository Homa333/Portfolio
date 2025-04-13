import EndpointHeader from "../components/EndpointHeader";
import ResponseBox from "../components/ResponseBox";
import { skills } from "../lib/data";

export default function SkillsPage() {
  return (
    <>
      <EndpointHeader method="GET" path="/skills" description="Returns grouped technical skills." />
      <ResponseBox status="200 OK" data={skills} />
    </>
  );
}