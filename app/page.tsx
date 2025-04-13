import Image from 'next/image';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">

      <Image
        src="/profile.jpg"
        alt="Padante"
        width={160}
        height={160}
        className="rounded-full border-4 border-blue-600 shadow mb-6 object-cover"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        🧑‍💻 Welcome to Kshitiz's Portfolio
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
        Explore my software engineering portfolio. Click on the endpoints in the sidebar to learn more about my experience, projects, and skills.
      </p>
      <div className="mt-12 border-t pt-8 w-full max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">Available Endpoints</h2>
        <ul className="text-left text-sm font-mono text-gray-700 space-y-2">
          <li><span className="text-green-600">GET</span> /about</li>
          <li><span className="text-green-600">GET</span> /experience</li>
          <li><span className="text-green-600">GET</span> /projects</li>
          <li><span className="text-green-600">GET</span> /skills</li>
          <li>
            <a href="/resume.pdf" className="text-green-600 hover:underline">
              GET /resume.pdf
            </a>
          </li>
          <li><span className="text-blue-600">POST</span> /contact</li>
        </ul>
      </div>
  </div>
  );
}
