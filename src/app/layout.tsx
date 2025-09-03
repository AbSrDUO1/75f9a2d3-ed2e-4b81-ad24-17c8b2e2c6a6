import type { Metadata } from "next";

const metadata: Metadata = {
  title: "NebulaFlow",
  description: "Single-page SaaS landing designed in a futuristic style to drive conversions."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-hero-gradient text-white font-sans">
        {children}
      </body>
    </html>
  );
}
