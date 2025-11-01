import "./globals.css";

export const metadata = {
  title: "Muni: The Ultimate Municipal Customer Service Experience",
  description: "Muni is an AI-powered web and mobile application providing non-emergency municipal services to residents.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-white max-w-[1440px] mx-auto">
      <body className="font-general ">{children}</body>
    </html>
  );
}


