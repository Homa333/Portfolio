import { socials } from "../lib/data";


export default function Footer() {
  return (
    <footer className="w-full border-t mt-8 py-6 px-4 text-center text-sm text-gray-600">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        {Object.entries(socials).map(([key, value]) => (
          <a
            key={key}
            href={key === "email" ? `mailto:${value}` : value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline transition"
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </a>
        ))}
      </div>
      <p className="mt-2 text-gray-400">© {new Date().getFullYear()} Kshitiz</p>
    </footer>
  );
}
