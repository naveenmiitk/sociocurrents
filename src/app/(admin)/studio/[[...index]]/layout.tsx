import type { Metadata } from 'next'

// export const metadata: Metadata = {
//     // title: 'Social Current | Sociology Optional UPSC',
//     // description: 'Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents',
//     // <Head>
//         {Object.entries(metadata).map(([key, value]) => (
//           <meta key={key} name={key} content={value} />
//         ))}
//     //   </Head>
//   }
  

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html>
        <body>
        {children}
        </body>
      </html>
    )
  }