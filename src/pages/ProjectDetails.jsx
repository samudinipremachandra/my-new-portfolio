import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Github, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import Shot from '../components/Shot.jsx'
import Button from '../components/Button.jsx'

function Block({ title, children }) {
  return (
    <section className="grid gap-3 border-t border-ink py-8 md:grid-cols-4">
      <h2 className="font-extrabold">{title}</h2>
      <div className="text-ink/80 md:col-span-3">{children}</div>
    </section>
  )
}

export default function ProjectDetails() {
  const { slug } = useParams()
  const p = projects.find((x) => x.slug === slug)
  if (!p) {
    return <div className="mx-auto max-w-6xl px-5 py-24"><p className="mb-4 text-xl font-bold">Project not found.</p><Button to="/projects">Back to Projects</Button></div>
  }
  return (
    <article className="mx-auto max-w-5xl px-5 py-12">
      <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-bold hover:underline"><ArrowLeft size={16} />Back to Projects</Link>
      <p className="mt-8 w-fit rounded-full bg-lime px-3 py-1 text-xs font-bold">{p.category}</p>
      <h1 className="mt-3 text-4xl font-extrabold sm:text-6xl">{p.name}</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">{p.description}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        {p.github && <Button href={p.github} variant="solid"><Github size={16} />GitHub</Button>}
        {p.live && <Button href={p.live} variant="lime"><ExternalLink size={16} />Live demo</Button>}
      </div>

      <div className="relative mt-10 mr-3 mb-3">
        <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-lime" aria-hidden="true" />
        <Shot src={p.image} alt={`Screenshot of ${p.name}`} className="relative aspect-video w-full rounded-3xl border-2 border-ink" />
      </div>

      <div className="mt-14">
        <Block title="Built with">
          <ul className="flex flex-wrap gap-2">{p.tech.map((t) => <li key={t} className="rounded-md border border-ink/25 px-2.5 py-1 text-sm font-medium">{t}</li>)}</ul>
        </Block>
        <Block title="The problem"><p>{p.problem}</p></Block>
        <Block title="The solution"><p>{p.solution}</p></Block>
        <Block title="Key features">
          <ul className="list-disc space-y-1 pl-5">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
        </Block>
        <Block title="My contribution"><p>{p.contribution}</p></Block>
        <Block title="Challenges"><p>{p.challenges}</p></Block>
        <Block title="What I learned"><p>{p.learned}</p></Block>
      </div>
    </article>
  )
}
