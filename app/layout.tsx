import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: { default: 'Donnah Arts | Contemporary Visual Artist · Kampala, Uganda', template: '%s | Donnah Arts' },
  description: 'Donnah Ntibankundiye is a Ugandan figurative and contemporary visual artist creating paintings, pencil works, mixed media and meaningful commissions.',
  keywords: ['Donnah Arts','Ugandan artist','Kampala artist','contemporary art Uganda','African art','portrait commissions','mixed media artist'],
  openGraph: { title: 'Donnah Arts', description: 'Every story deserves to be remembered.', type: 'website' }
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Navbar/>{children}<Footer/></body></html>}
