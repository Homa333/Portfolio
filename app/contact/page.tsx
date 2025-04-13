'use client';

import { useState } from 'react';
import EndpointHeader from '../components/EndpointHeader';
import ResponseBox from '../components/ResponseBox';



export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState<any>(null);

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    console.log("Here");
    try {


    } catch (error) {
      setResponse({ status: '500 Error', data: error });
    }
  };

  return (
    <>
      <EndpointHeader method="POST" path="/contact" description="Send me a message via email." />
      <textarea
        className="w-full bg-black text-white p-4 font-mono h-48 rounded"
        value={JSON.stringify(form, null, 2)}
        onChange={(e) => {
          try {
            setForm(JSON.parse(e.target.value));
          } catch {}
        }}
      />
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Send Request
      </button>
      {response && <ResponseBox status={response.status} data={response.data} />}
    </>
  );
}
