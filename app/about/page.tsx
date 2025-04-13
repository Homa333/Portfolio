import EndpointHeader from "../components/EndpointHeader";
import ResponseBox from "../components/ResponseBox";
import { about } from "../lib/data";

export default function AboutPage() {
  return (
    <>
      <EndpointHeader method="GET" path="/about" description="Returns personal profile info." />
      <ResponseBox
        status="200 OK"
        data={{about}}
      />
    </>
  );
}