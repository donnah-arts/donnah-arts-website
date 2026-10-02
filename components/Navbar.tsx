'use client';
import Link from 'next/link';
import { useState } from 'react';
const links=[['Gallery','/gallery'],['About','/about'],['Commissions','/commissions'],['Journal','/journal'],['Contact','/contact']];
export default function Navbar(){const [open,setOpen]=useState(false);return <header><div className="nav container"><Link className="brand" href="/" onClick={()=>setOpen(false)}>DONNAH <span>ARTS</span></Link><nav className="desktop-nav">{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</nav><button className="menu-button" aria-label="Open menu" onClick={()=>setOpen(!open)}><span/><span/></button></div>{open&&<nav className="mobile-menu">{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}</nav>}</header>}
