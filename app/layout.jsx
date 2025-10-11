import "./globals.css";

export const metadata = {
  title: "Muni: The Ultimate Municipal Customer Service Experience",
  description: "Muni is an AI-powered web and mobile application providing non-emergency municipal services to residents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white">
      <body className="font-general">{children}</body>
    </html>
  );
}
