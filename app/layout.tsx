
// app/layout.tsx
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { site } from "@/config/site";
import { fontSans } from "@/config/fonts";
import StarfieldBackground from "@/components/StarfieldBackground";
import { Sidebar } from "@/components/Sidebar";

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s - ${site.name}`,
  },
  description: site.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className="dark">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <StarfieldBackground />
            <div className="absolute inset-0 flex flex-col">
              <Sidebar />
              <main
  className={clsx(
    "ml-[80px] md:ml-[80px] flex-1 p-6 transition-all duration-300",
    "cursor-[url('/leaf-cursor.svg')_8_24,_default]",
    "hover:cursor-[url('/leaf-cursor.svg')_8_24,_pointer]"
  )}
>
  {children}
</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}