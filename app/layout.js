import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import {Inter} from 'next/font/google'
import Header from "@/components/Header";
const inter = Inter({subsets : ["latin"]})
import {ClerkProvider} from '@clerk/nextjs'
import { shadesOfPurple } from "@clerk/themes";


export const metadata = {
  title: "Trackr",
  description: "Project Managment App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
    appearance={{baseTheme:shadesOfPurple,
    variables: {
      colorPrimary: "#3b82f6",
      colorBackgroud: "#1a202c",
      colorInputBackgroud: "#2D3748",
      colorInputText: "#F3F4F6"
    },
    elements:{
      formButtonPrimary:"text-white",
      card:"bg-gray-800",
      headerTitle:"text-blue-400",
      headerSubtitle:"text-gray-400"

    }
  }}
    >
    <html lang="en">
      <body className={`${inter.className} dotted-backgroud`}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
           <Header />
            <main className="min-h-screen">{children}</main>
          <footer className="bg-gray-900 py-12">
            <div className="container mx-auto px-4 text-center text-gray-200">
            <p>Made With 💖 By Gaurav Sharma</p>
            </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
