"use client";
import React from "react";
import { Grandstander } from "next/font/google";
import Header from "@/components/header";
import "./globals.css";
import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

const grandstander = Grandstander({ subsets: ["latin"] });

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Meta tags for SEO */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="$QZAT is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          name="keywords"
          content="duck, funny, crypto, pumpfun, raydium, memecoin, telegram mini app, telegram app, duck app, pekky, pekkycoin"
        />
        <meta name="author" content="$QZAT" />
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="$QZAT" />
        <meta
          property="og:description"
          content="$QZAT is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          property="og:image"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        <meta
          property="og:url"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        {/* Twitter card meta tags */}
        <meta name="twitter:card" content="" />
        <meta name="twitter:title" content="$QZAT" />
        <meta
          name="twitter:description"
          content="$QZAT is a funny cartoon duck mascot. Join the community now and dive into the meme magic!"
        />
        <meta
          name="twitter:image"
          content="https://pekk-yweb-site.vercel.app/pekky.png"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Theme color */}
        <meta name="theme-color" content="#fafaf2" />
        <title>$QZAT - Dive into the meme magic!</title>
      </head>
      <body
        className={
          "dark:bg-background-dark max-w-[100vw] overflow-x-hidden bg-background-light text-background-dark dark:text-background-light " +
          grandstander.className
        }
      >
        <motion.div
          initial={{ opacity: 0, x: -0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Toaster
            toastOptions={{
              className: "!z-[9999] !bg-[#fefce8] !border !border-[#fafaf2]",
            }}
            containerClassName="md:mt-14 mt-24"
          />
          <Header />
          {children}
        </motion.div>
      </body>
    </html>
  );
}
