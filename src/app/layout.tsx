import type { Metadata } from "next";
import { ThemeProvider } from "@/provider/theme.provider";
import { Salsa, Roboto_Condensed } from "next/font/google";
import "../style/globals.css";
import Redux from "@/provider/redux.provider";
import StoreProvider from "@/provider/store.provider";

const salsa = Salsa({
  variable: "--font-salsa",
  subsets: ["latin"],
  weight: "400",
});

const roboto = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: "500",
});

export const metadata: Metadata = {
  title: "Next.js Starter Template",
  description:
    "A production-ready Next.js starter template with TypeScript, Tailwind CSS, and shadcn/ui",
};

interface IProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<IProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${salsa.variable} ${roboto.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <StoreProvider>
            <Redux>{children}</Redux>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
