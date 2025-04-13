import EndpointHeader from "../components/EndpointHeader";
import Footer from "../components/Footer";
import ResponseBox from "../components/ResponseBox";
import { projects } from "../lib/data";

export default function ProjectsPage() {
  return (
    <>
      <EndpointHeader method="GET" path="/projects" description="Returns list of my personal and freelance projects." />
      <ResponseBox status="200 OK" data={projects} />
      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
}