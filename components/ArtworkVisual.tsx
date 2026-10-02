'use client';
import { useState } from 'react';

export default function ArtworkVisual({ title, image, variant = 'p0', className = '' }: { title: string; image?: string; variant?: string; className?: string }) {
  const [failed, setFailed] = useState(false);
  const showImage = image && !failed;
  return <div className={`art-visual ${variant} ${className}`}>
    {showImage && <img src={image} alt={title} onError={() => setFailed(true)} />}
    {!showImage && <span>{title}</span>}
  </div>;
}
