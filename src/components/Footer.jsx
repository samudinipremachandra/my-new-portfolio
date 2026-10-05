import { Link } from 'react-router-dom'
import { Github, Linkedin, Mail } from 'lucide-react'
import { site } from '../data/site.js'

const nav = [['/', 'Home'], ['/about', 'About'], ['/projects', 'Projects'], ['/contact', 'Contact']]

export default function Footer() {
  const icon = 'rounded-full border border-white/30 p-2 transition hover:bg-lime hover:text-ink'
  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold">Samudini Premachandra</p>
          <p className="mt-2 max-w-xs text-sm text-white/70">Software engineering student building web apps, one project at a time.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col gap-1 text-sm">
          {nav.map(([to, label]) => <Link key={to} to={to} className="w-fit hover:text-lime">{label}</Link>)}
        </nav>
        <div className="flex gap-3 md:justify-end">
          <a className={icon} href="https://github.com/samudinipremachandra" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a className={icon} href="https://www.linkedin.com/in/samudini-premachandra-046167379/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a className={icon} href={`mailto:samudinipremachandra@gmail.com`} aria-label="Email"><Mail size={18} /></a>
        </div>
      </div>
      <p className="border-t border-white/15 py-4 text-center text-xs text-white/60">© {new Date().getFullYear()} {site.name}. Designed &amp; built with React.</p>
    </footer>
  )
}
