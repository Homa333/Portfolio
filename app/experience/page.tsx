
import { experiences } from '../lib/data';
import EndpointHeader from '../components/EndpointHeader';
import ResponseBox from '../components/ResponseBox';
import Footer from '../components/Footer';

export default function ExperiencePage() {
  return (
    <>
      <EndpointHeader method="GET" path="/experience" description="A list of my work experience." />
      <ResponseBox status="200 OK" data={experiences} />
        <Footer />
    </>
  );
}
