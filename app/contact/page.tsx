'use client';

import { useState } from 'react';
import EndpointHeader from '../components/EndpointHeader';
import ResponseBox from '../components/ResponseBox';
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';

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
  const [isSending, setIsSending] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const validateJSON = (value: string) => {
    try {
      const parsed = JSON.parse(value);
      const hasRequiredFields =
        parsed.name && parsed.email && parsed.message;

      setForm(parsed);
      setIsValid(hasRequiredFields);
    } catch {
      setIsValid(false);
    }
  };

  const handleSubmit = async () => {
    setIsSending(true);

    try {
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
      } else {
        setResponse({ status: '500 Error', data: 'Unknown error' });
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <EndpointHeader method="POST" path="/contact" description="Send me a message via email." />

      <textarea
        className="w-full bg-black text-white p-4 font-mono h-48 rounded"
        value={JSON.stringify(form, null, 2)}
        onChange={(e) => validateJSON(e.target.value)}
      />

      {!isValid && (
        <p className="text-red-500 text-sm mt-2">
          ❌ Invalid JSON or missing `name`, `email`, or `message` fields.
        </p>
      )}

      <button
        disabled={!isValid || isSending}
        className={`mt-4 px-5 py-2.5 rounded-full text-white font-medium transition ${
          !isValid || isSending
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700'
        }`}
        onClick={handleSubmit}
      >
        {isSending ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="w-4 h-4 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending...
          </span>
        ) : (
          'Send Request'
        )}
      </button>

      {response && <ResponseBox status={response.status} data={response.data} />}
    <Footer />
    </>
  );
}
