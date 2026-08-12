import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import ParallaxBackground from "@/components/ParallaxBackground";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StateNext Labs — Build. Innovate. Automate. Scale.",
  description:
    "StateNext Labs is a technology and digital solutions company helping organizations build, modernize, automate, and scale their digital operations.",
  icons: {
    icon: "/statenext-logo.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-navy-900">
        <ParallaxBackground />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
