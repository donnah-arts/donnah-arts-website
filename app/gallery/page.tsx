import Link from 'next/link';
import ArtworkVisual from '@/components/ArtworkVisual';
import { artworks } from '@/data/artworks';
export default function Gallery(){return <main className="page"><div className="container page-title"><p className="eyebrow">THE COLLECTION</p><h1>The Gallery</h1><p>Selected works by Donnah Ntibankundiye.</p></div><div className="work-grid container gallery-grid">{artworks.map((artwork,i)=><Link className="work-card" href={`/artworks/${artwork.slug}`} key={artwork.slug}><ArtworkVisual title={artwork.title} image={artwork.image} variant={`p${i%3}`}/><div className="work-meta"><span>{artwork.title}</span><small>{artwork.category} · {artwork.status}</small></div></Link>)}</div></main>}
