import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const title = "Md Fahim Faysal — Bioinformatics Researcher & Full-Stack Developer";
const description =
  "Personal portfolio of Md Fahim Faysal, a Bioinformatics Researcher, Full-Stack Developer, and Competitive Programmer based in Rajshahi, Bangladesh. Research in drug discovery, OMICS analysis, and competitive programming.";
const url = "https://faysalfahim.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    "Md Fahim Faysal",
    "Bioinformatics",
    "Drug Discovery",
    "Full-Stack Developer",
    "Competitive Programming",
    "RUET",
    "Rajshahi",
    "Bangladesh",
    "Research",
  ],
  authors: [{ name: "Md Fahim Faysal", url }],
  creator: "Md Fahim Faysal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url,
    title,
    description,
    siteName: "Md Fahim Faysal",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
