import "./globals.css"
import Providers from "@/providers/providers"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>
        <div className="w-[1280px] mx-auto flex flex-col items-stretch p-12">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
