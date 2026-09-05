import type { Metadata } from 'next';import './globals.css';
export const metadata:Metadata={title:'UID Lab — Elin Drop Simulator',description:'CSVを使わず、UIDからElinの装備ドロップをブラウザ内で予測する実験版。',openGraph:{title:'UID Lab — Elin Drop Simulator',description:'CSV不要。UIDからその場で装備ドロップを予測。',images:['/og.png']},twitter:{card:'summary_large_image',images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="ja"><body>{children}</body></html>}
