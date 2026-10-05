import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { site } from '../data/site.js'
import Button from './Button.jsx'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const linkCls = ({ isActive }) => `rounded-full px-3 py-1.5 text-sm font-bold transition ${isActive ? 'bg-lime' : 'hover:bg-mist'}`
  return (
    <header className="sticky top-0 z-50 border-b border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2 text-lg font-extrabold">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-lime">SP</span>
          Samudini Premachandra
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkCls}>{l.label}</NavLink>)}
          <span className="ml-3"><Button to="/projects" variant="lime">View Projects</Button></span>
        </nav>
        <button className="rounded-lg p-2 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {/* Mobile menu slides open by animating max-height */}
      <nav aria-label="Mobile" className={`overflow-hidden border-ink bg-paper transition-all duration-300 md:hidden ${open ? 'max-h-80 border-t' : 'max-h-0'}`}>
        <div className="flex flex-col gap-1 p-4">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)} className={linkCls} tabIndex={open ? 0 : -1}>{l.label}</NavLink>)}
        </div>
      </nav>
    </header>
  )
}
