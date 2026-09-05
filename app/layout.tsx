import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://marcy0216.github.io/UIDLiveSimulator/'),title:'UID装備検索 — Elin',description:'欲しい装備とレアリティを選んで、条件に合うUIDを検索できます。',openGraph:{title:'UID装備検索 — Elin',description:'欲しい装備が出るUIDをかんたん検索。',images:['og.png']},twitter:{card:'summary_large_image',images:['og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
