import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { getBandProfile } from "@/lib/content-loader";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { GoogleTagManager } from "@/components/GoogleTagManager";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Generate metadata from band profile
async function generateMetadata(): Promise<Metadata> {
  try {
    const profile = await getBandProfile();
    return {
      title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
      description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
      keywords: profile.seo?.keywords || [],
      openGraph: {
        title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
        description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
        images: profile.seo?.ogImage ? [profile.seo.ogImage] : [],
      },
      twitter: {
        card: 'summary_large_image',
        title: profile.seo?.metaTitle || `${profile.name} | Official Website`,
        description: profile.seo?.metaDescription || `Official website of ${profile.name}`,
      },
    };
  } catch {
    return {
      title: "Band Website",
      description: "Official band website",
    };
  }
}

export const metadata = await generateMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-black text-white`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
