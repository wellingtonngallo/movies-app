import "./globals.css"
import { Providers } from "@/providers/providers"
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap"
})

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="w-[1280px] mx-auto flex flex-col items-stretch p-12">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
