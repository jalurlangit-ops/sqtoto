'use client';

import { Inter } from 'next/font/google';
import './globals.css';

const nameDomain = "https://www.maillotsbasketpascher.com";

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

function rank() {
    return {
      __html: `{
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "https://www.maillotsbasketpascher.com",
    "operatingSystem": "ANDROID",
    "applicationCategory": "GameApplication",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "ratingCount": "7143729"
    },
	"review": {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5",
            "worstRating": "1"
          },
	"author": {
            "@type": "Person",
            "name": "Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya",
            "reviewBody": "Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!"
          }
        },
    "offers": {
      "@type": "Offer",
      "price": "10000",
      "priceCurrency": "IDR"
    }
  }
  `,
    };
  }

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" data-browser="chrome">
      <head>
        <meta charSet="utf-8" />
        <title>Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya</title>
        <meta name="description" content="Sqtoto adalah platform togel online yang menawarkan pengalaman bermain dengan kemudahan dan kenyamanan. Dengan sistem deposit pulsa tanpa potongan, pemain dapat melakukan transaksi dengan cepat dan tanpa biaya tambahan, menjadikannya pilihan ideal bagi para penggemar togel yang mencari cara praktis dan efisien untuk bermain" />
        <meta name="keywords" content="Sqtoto, Togel Deposit Pulsa Tanpa Potongan, Daftar Togel Terpercaya, Situs Judi Online, Togel Online, Deposit Dana 5000, Slot Online, Agen Togel Online, Bandar Togel 77, Togel Deposit Pulsa 10RB Tanpa Potongan, Situs Togel Resmi Toto" />
        <meta name="google-site-verification" content="nuajGrI2NNHzJ36PDMUxGf9FrLSe3sBXkghWB7o-nBY" />
        <meta name="application-name" content="sqtoto" />
        <link rel="author" href={nameDomain} />
        <link rel="canonical" href={nameDomain} />
        <meta name="author" content="sqtoto" />
        <meta name="publisher" content="sqtoto" />
        <meta name="copyright" content="sqtoto" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="category" content="slot" />
        <meta name="geo.region" content="ID" />
        <meta name="geo.placename" content="Indonesia" />
        <meta name="language" content="id-ID" />
        <meta name="rating" content="general" />
        <meta name="geo.country" content="ID" />
        <meta name="page-locale" content="id,en" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />
        <meta name="distribution" content="global" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />
        <meta property="og:title" content="Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya" />
        <meta property="og:description" content="Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta property="og:url" content={nameDomain} />
        <meta property="og:site_name" content="sqtoto" />
        <meta property="og:locale" content="id_ID" />
        <meta property="og:image" content={nameDomain} />
        <meta property="og:image:width" content="840" />
        <meta property="og:image:height" content="480" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="sqtoto" />
        <meta name="twitter:title" content="Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya" />
        <meta name="twitter:description" content="Sqtoto : Togel Deposit Pulsa Tanpa Potongan Dan Daftar Togel Terpercaya, menawarkan pengalaman bermain slot gacor terbaik dengan keamanan terjamin. Nikmati pasaran Toto hongkong lotto lengkap dengan peluang menang tinggi, serta transaksi yang cepat dan aman. Menangkan hadiah besar di situs terpercaya ini!" />
        <meta name="twitter:image" content={nameDomain} />
        <link rel="icon" href="/favicon.ico?favicon.088e6c96.ico" sizes="256x256" type="image/x-icon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="next-size-adjust" content="" />
        <script type="application/ld+json" dangerouslySetInnerHTML={rank()} key="product-jsonld" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
