import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artur - Portifólio',
  description: 'Portifólio Simples para demonstração de habilidades e projetos full stack',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/imagens/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/imagens/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/imagens/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#f4dc26" />
      </head>
      <body className={inter.className}>{children}</body>
    </html >
  )
}
