import type { Metadata } from "next";
import "@/index.css";
import Providers from "./providers";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  title: "Leather Line - Premium High-End Footwear | Luxury Shoes",
  description:
    "Discover our curated collection of premium leather shoes, sneakers, boots, and oxfords. Unmatched craftsmanship and luxury footwear designed for comfort and style.",
  keywords: [
    "leather shoes",
    "premium footwear",
    "luxury sneakers",
    "leather boots",
    "formal oxfords",
    "high-end shoes",
    "leather line",
    "handcrafted shoes",
    "designer footwear",
    "comfortable luxury shoes",
    "buy shoes online",
  ],
  authors: [{ name: "Leather Line" }],
  robots: "index, follow",
  icons: {
    icon: "/leather-line.jpg",
    shortcut: "/leather-line.jpg",
    apple: "/leather-line.jpg",
  },
  openGraph: {
    title: "Leather Line - Premium High-End Footwear | Luxury Shoes",
    description:
      "Discover our curated collection of premium leather shoes, sneakers, boots, and oxfords. Unmatched craftsmanship and luxury footwear designed for comfort and style.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/leather-line.jpg",
        alt: "Leather Line Logo - Premium Footwear",
      },
    ],
    siteName: "Leather Line",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leather Line - Premium High-End Footwear",
    description:
      "Discover our curated collection of premium leather shoes, sneakers, boots, and oxfords. Unmatched craftsmanship and luxury.",
    images: [
      {
        url: "/leather-line.jpg",
        alt: "Leather Line Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth selection:bg-white selection:text-black">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Leather Line",
              description:
                "Premium footwear brand offering an elegant collection of leather shoes, sneakers, boots, and oxfords crafted with the finest materials.",
              url: "/",
              logo: "/leather-line.webp",
              image: "/leather-line.webp",
              priceRange: "$$$",
              sameAs: [],
              offers: {
                "@type": "AggregateOffer",
                category: "Clothing & Shoes",
                itemCondition: "https://schema.org/NewCondition",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Footwear Collection",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Product",
                      name: "Premium Leather Shoes",
                      category: "Luxury Footwear",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-[#111] text-white font-sans antialiased">
        <CustomCursor />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
