import EndpointHeader from "../components/EndpointHeader";
import Footer from "../components/Footer";
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
      <div className="mt-6 border-t pt-6">
        <h3 className="text-lg font-semibold mb-2">Download Resume</h3>

        <div className="flex items-center justify-between bg-[#1e1e1e] text-white font-mono rounded px-4 py-3">
          <span className="text-green-400">GET</span>
          <code className="text-sm overflow-auto">/resume.pdf</code>
          <a
            href="/resume.pdf"
            download
            className="ml-4 px-4 py-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white text-xs transition font-medium"
          >
            Download
          </a>
        </div>
      </div>
      <Footer/>
    </>
  );
}