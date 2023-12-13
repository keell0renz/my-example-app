import Navbar from "../ui/main/navbar"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <Navbar />
            {children}
        </body>
      </html>
    )
  }

