import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SleepDev — Track how code quality correlates with sleep patterns",
  description: "Connect sleep tracking data with Git commits to reveal how your rest impacts your code quality, bug rates, and productivity."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="7ad7ee58-06ec-4fc0-b350-74eeacd38b83"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
