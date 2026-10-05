import { Link } from 'react-router-dom'
import { Github, ExternalLink } from 'lucide-react'
import Shot from './Shot.jsx'
import Button from './Button.jsx'

// layout="featured" = big image beside the text. layout="card" = compact card.
export default function ProjectCard({ project: p, layout = 'card' }) {
  const featured = layout === 'featured'
  return (
    <article className={`group overflow-hidden rounded-3xl border border-ink bg-white transition hover:shadow-[6px_6px_0_#B8F28A] ${featured ? 'grid md:grid-cols-5' : 'flex h-full flex-col'}`}>
      <Link to={`/projects/${p.slug}`} tabIndex={-1} aria-hidden="true" className={`block overflow-hidden border-ink ${featured ? 'md:col-span-3 md:border-r' : 'border-b'}`}>
        <Shot src={p.image} alt={`Screenshot of ${p.name}`} className={`w-full transition duration-500 group-hover:scale-105 ${featured ? 'h-64 md:h-full' : 'h-48'}`} />
      </Link>
      <div className={`flex flex-col p-6 ${featured ? 'md:col-span-2 md:p-8' : 'flex-1'}`}>
        <span className="mb-3 w-fit rounded-full bg-lime px-3 py-1 text-xs font-bold">{p.category}</span>
        <h3 className={`font-extrabold ${featured ? 'text-3xl' : 'text-xl'}`}>{p.name}</h3>
        <p className="mt-1 text-sm font-medium text-ink/60">{p.tagline}</p>
        <p className="mt-3 text-ink/80">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tech.map((t) => <li key={t} className="rounded-md border border-ink/20 px-2 py-0.5 text-xs font-medium">{t}</li>)}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          <Button to={`/projects/${p.slug}`} variant="solid">View Project</Button>
          {p.github && <Button href={p.github} variant="outline" aria-label={`${p.name} on GitHub`}><Github size={16} />Code</Button>}
          {p.live && <Button href={p.live} variant="outline"><ExternalLink size={16} />Live</Button>}
        </div>
      </div>
    </article>
  )
}
