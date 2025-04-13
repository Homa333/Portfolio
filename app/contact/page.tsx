'use client';

import { useState } from 'react';
import EndpointHeader from '../components/EndpointHeader';
import ResponseBox from '../components/ResponseBox';
import emailjs from '@emailjs/browser';

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

type ApiResponse = {
  status: string;
  data: Record<string, unknown> | string;
};

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState<ApiResponse | null>(null);

  const handleSubmit = async () => {
    try {
      // 1. Send to server (Resend)
      const apiRes = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!apiRes.ok) throw new Error('Failed to contact server');

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_JS_PUB_KEY!
      );

      setResponse({ status: '200 OK', data: form });
    } catch (error: unknown) {
      if (error instanceof Error) {
        setResponse({ status: '500 Error', data: error.message });
        console.error('Email error:', error.message);
      } else {
        setResponse({ status: '500 Error', data: 'Unknown error' });
        console.error('Unknown error');
      }
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
          } catch {
            console.error('Invalid JSON');
          }
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
