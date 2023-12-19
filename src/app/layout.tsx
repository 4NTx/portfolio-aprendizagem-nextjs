export const metadata = {
  title: "Artur - Portfólio",
  description: "Portfólio desenvolvedor Full-Stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
