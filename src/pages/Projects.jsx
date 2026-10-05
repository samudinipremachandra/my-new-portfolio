import { projects } from '../data/projects.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const featured = projects.find((p) => p.featured)
  const others = projects.filter((p) => !p.featured)
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="text-4xl font-extrabold sm:text-5xl"><span className="marker">Projects</span></h1>
      <p className="mt-4 max-w-xl text-ink/70">Things I've built while learning. Open any of them for the full story.</p>
      {featured && <div className="mt-10"><ProjectCard project={featured} layout="featured" /></div>}
      {/* Staggered grid: the middle card sits lower on large screens */}
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {others.map((p, i) => (
          <div key={p.slug} className={i === 1 ? 'lg:mt-10' : ''}><ProjectCard project={p} /></div>
        ))}
      </div>
    </div>
  )
}
