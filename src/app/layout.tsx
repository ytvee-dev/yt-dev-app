import type { Metadata } from "next";
import { Fira_Sans, Fira_Code } from "next/font/google";
import "./styles/globals.css";
import React from "react";

if (typeof window !== 'undefined') {
  import('@/utils/suppressWarnings').then(({ suppressDevelopmentWarnings }) => {
    suppressDevelopmentWarnings();
  });
}

const firaSans = Fira_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["300", "400", "500", "600", "700"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "YT | Web Application Development",
  description: "Professional web application development services. We create scalable web applications that grow with your business.",
  keywords: "web development, application development, software development, YT DEV",
  authors: [{ name: "ytvee" }],
  creator: "YT DEV",
  publisher: "YT DEV",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://ytvee.com",
    title: "YT | Web Application Development",
    description: "Professional web application development services. We create scalable web applications that grow with your business.",
    siteName: "YT DEV",
  },
  twitter: {
    card: "summary_large_image",
    title: "YT DEV - Web Application Development",
    description: "Professional web application development services. We create scalable web applications that grow with your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" data-theme="light">
      <body className={`${firaSans.variable} ${firaCode.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
