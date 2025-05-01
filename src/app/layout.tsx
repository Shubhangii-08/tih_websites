import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TIH Website',
  description: 'iHub Drishti Foundation Website',
<<<<<<< HEAD
=======
  viewport: 'width=device-width, initial-scale=1.0',
>>>>>>> 3755027 (Initial commit)
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<<<<<<< HEAD
    <html lang="en">
=======
    <html lang="en" className="scroll-smooth">
>>>>>>> 3755027 (Initial commit)
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add Font Awesome for icons used in Footer */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" 
        />
      </head>
<<<<<<< HEAD
      <body className="bg-white">
        {children}
=======
      <body className="bg-white min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
>>>>>>> 3755027 (Initial commit)
      </body>
    </html>
  )
} 