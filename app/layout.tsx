import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My portfolio Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen text-sm text-gray-900 bg-gray-100`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 flex flex-col p-4 md:p-6">
          {children}
        </main>
        </div>
      </body>
    </html>
  );
}