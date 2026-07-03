import type { Metadata } from 'next'
import { Poppins, Montserrat } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import ScrollProgress from '@/components/ui/scroll-progress'
import BackToTop from '@/components/ui/back-to-top'
import './globals.css'

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'JMC Media Club | Amplify Your Voice | Green University of Bangladesh',
  description: "Official website of JMC Media Club — Bangladesh's premier student media organization at Green University. Journalism, photography, filmmaking, and storytelling.",
  keywords: ['journalism', 'media club', 'communication', 'photography', 'documentary', 'green university', 'JMC', 'Bangladesh'],
  authors: [{ name: 'JMC Media Club' }],
  icons: {
    icon: '/favicon.png',
    apple: '/android-chrome-192x192.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jmc.green.edu.bd',
    title: 'JMC Media Club — Amplify Your Voice',
    description: 'Official website of JMC Media Club at Green University of Bangladesh',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JMC Media Club — Amplify Your Voice',
    description: 'Official website of JMC Media Club at Green University of Bangladesh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} ${montserrat.variable} font-poppins bg-white dark:bg-jmc-bg-dark text-jmc-navy dark:text-white transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />
          {children}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
