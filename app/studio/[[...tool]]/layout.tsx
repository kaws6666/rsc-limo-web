export const metadata = {
  title: 'RSC Limo — CMS Studio',
  robots: { index: false, follow: false },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
