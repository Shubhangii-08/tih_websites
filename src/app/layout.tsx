import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TIH Website',
  description: 'iHub Drishti Foundation Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add Font Awesome for icons used in Footer */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
      </head>
      <body className="bg-white">
        {children}
      </body>
    </html>
  )
} 