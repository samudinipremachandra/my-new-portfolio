import { useState } from 'react'
import { Github, Linkedin, Layout, Server, Database, Puzzle } from 'lucide-react'
import { site } from '../data/site.js'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const focus = [
  { icon: Layout, title: 'Frontend', text: 'React interfaces that are clean, responsive and easy to use.' },
  { icon: Server, title: 'Backend', text: 'Node.js, Express and Spring Boot services behind the screen.' },
  { icon: Database, title: 'Databases & APIs', text: 'MongoDB and MySQL, plus REST APIs that connect everything.' },
  { icon: Puzzle, title: 'Problem solving', text: 'Breaking a messy idea into small steps I can actually build.' },
]

export default function Home() {
  // If /profile.jpg is missing we show a hint instead of a broken image
  const [noPhoto, setNoPhoto] = useState(false)
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-12 md:py-24">
        <div className="md:col-span-7">
          <p className="mb-4 inline-block rounded-full border border-ink px-3 py-1 text-xs font-bold tracking-wide">FULL-STACK DEVELOPER</p>
          <h1 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            I build web apps that <span className="marker">make everyday tasks easier.</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink/75">
            I'm Samudini Premachandra, a software engineering student. I like taking an idea from a rough sketch to something people can really use, front to back.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects" variant="solid">View My Projects</Button>
            <Button to="/contact" variant="lime">Let's Connect</Button>
          </div>
          <div className="mt-8 flex gap-4">
            <a href="https://github.com/samudinipremachandra" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:-translate-y-0.5"><Github /></a>
            <a href="https://www.linkedin.com/in/samudini-premachandra-046167379/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:-translate-y-0.5"><Linkedin /></a>
          </div>
        </div>

        {/* PHOTO: tilted lime block behind a rounded-corner frame. Put your photo at public/profile.jpg */}
        <div className="relative mx-auto w-full max-w-sm md:col-span-5">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rotate-3 rounded-[2.5rem_1rem_2.5rem_1rem] bg-lime" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem_1rem_2.5rem_1rem] border-2 border-ink bg-mist">
            {noPhoto ? (
              <div className="grid h-full place-items-center text-center text-sm text-ink/60">Add your photo at<br /><code>public/profile.jpg</code></div>
            ) : (
              <img src={`${import.meta.env.BASE_URL}${site.photo.replace(/^\/+/, '')}`} alt={`Portrait of ${site.name}`} onError={() => setNoPhoto(true)} className="h-full w-full object-cover object-top" />
            )}
          </div>
          <span className="absolute -left-3 bottom-8 flex items-center gap-2 rounded-full border border-ink bg-white px-3 py-1.5 text-xs font-bold shadow-[2px_2px_0_#111]">
            <span className="h-2 w-2 rounded-full bg-green-500" aria-hidden="true" /> Open to Work
          </span>
          <span className="absolute -right-2 -top-3 grid h-12 w-12 rotate-12 place-items-center rounded-xl bg-ink font-mono text-lime" aria-hidden="true">{'</>'}</span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5">
        <SectionTitle title="What I work on" />
        <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map(({ icon: Icon, title, text }) => (
            <div key={title} className="group border-t-2 border-ink pt-4">
              <Icon className="mb-3 transition group-hover:-rotate-6" />
              <h3 className="font-extrabold">{title}</h3>
              <p className="mt-1 text-sm text-ink/70">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
