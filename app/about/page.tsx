import EndpointHeader from "../components/EndpointHeader";
import ResponseBox from "../components/ResponseBox";

export default function AboutPage() {
  return (
    <>
      <EndpointHeader method="GET" path="/about" description="Returns personal profile info." />
      <ResponseBox
        status="200 OK"
        data={{
          name: "Padante",
          title: "Software Engineer II & Tech Lead",
          location: "India",
          summary: "Experienced backend engineer with a focus on system design, scalable web applications, and blockchain integrations. Passionate about building elegant developer-first tools and crypto-enabled platforms."
        }}
      />
    </>
  );
}