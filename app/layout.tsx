import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://marcy0216.github.io/UIDLiveSimulator/'),title:'装備抽選シミュレーター — Elin',description:'装備とレアリティを選んで、条件に合うUIDを検索できます。',openGraph:{title:'装備抽選シミュレーター — Elin',description:'装備とレアリティからUIDを検索。',images:['og.png']},twitter:{card:'summary_large_image',images:['og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
