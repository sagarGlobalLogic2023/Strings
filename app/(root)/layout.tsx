import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'
import Bottombar from '@/components/shared/Bottombar'
import Topbar from "@/components/shared/Topbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Strings',
  description: 'A Next.js 13 Meta Strings Application',
  icons: {
    icon: "/assets/logo.svg"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />

        <main>
          <LeftSidebar />

          <section className='main-container'>
            <div className="w-full max-w-4xl">
              {children}
            </div>
          </section>

          <RightSidebar />
        </main>
        <Bottombar />
        
      </body>
    </html>
  )
}
