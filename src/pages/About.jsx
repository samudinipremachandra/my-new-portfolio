import { Trophy } from 'lucide-react'
import Button from '../components/Button.jsx'
import SectionTitle from '../components/SectionTitle.jsx'

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
  Backend: ['Node.js', 'Express.js', 'Java', 'Spring Boot'],
  Database: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'GitHub', 'VS Code', 'REST APIs'],
}
// EDIT ME: your real education
const education = [
  { when: 'Now', title: 'National Diploma in Technology (NDT),', place: 'Institute of Technology, University of Moratuwa', note: 'TODO:  Currently studying the National Diploma in Technology with a focus on software engineering, application development, databases, and practical technology projects.' },
  { when: 'Before', title: 'G.C.E. Advanced Level – Physical Science', place: 'MR/Palatuwa Central College', note: 'TODO: Completed Advanced Level studies in the Physical Science stream.' },
  { when: 'Before', title: 'G.C.E. Ordinary Level', place: 'MR/Thelijjawila Royal College', note: 'TODO:Completed Ordinary Level education with a strong foundation in academic and analytical subjects.' },
  
]
// EDIT ME: add year or details if you like
const achievements = [
  {
    result: 'Champion',
    title: 'Freshers Elle Championship',
    place: 'University of Moratuwa',
  },
  {
    result: '2nd Place',
    title: 'University Sports Meet: Volleyball',
    place: 'Institute of Technology, University of Moratuwa',
  },
  {
    result: '1st Place',
    title: 'University Sports Meet: Cricket',
    place: 'Institute of Technology, University of Moratuwa',
  },
]
const learning = ['TypeScript', 'Next.js', 'Spring Boot', 'Python', 'System design basics','Linux', 'Docker', 'Cloude computing']

export default function About() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">A student who learns by <span className="marker">building things.</span></h1>
      <div className="mt-8 max-w-2xl space-y-4 text-lg text-ink/80">
        {/* EDIT ME: rewrite this in your own words */}
        <p>I'm studying software engineering and I learn best when there's a real project in front of me. Most of what I know came from getting stuck, searching, fixing it and trying again.</p>
        <p>I enjoy both sides of the stack: designing a screen people understand, and building the API and database that make it work. I'm looking for an internship or junior role where I can keep learning from a team.</p>
      </div>

      <section className="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <SectionTitle title="Education" />
          <ol className="relative ml-2 border-l-2 border-ink">
            {education.map((e) => (
              <li key={e.title} className="relative mb-8 pl-6">
                <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full border-2 border-ink bg-lime" aria-hidden="true" />
                <p className="text-xs font-bold text-ink/50">{e.when}</p>
                <h3 className="font-extrabold">{e.title}</h3>
                <p className="text-sm font-medium">{e.place}</p>
                <p className="mt-1 text-sm text-ink/70">{e.note}</p>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <SectionTitle title="Currently learning & building" />
          <ul className="flex flex-wrap gap-2">
            {learning.map((t) => <li key={t} className="rounded-full bg-lime px-3 py-1 text-sm font-bold">{t}</li>)}
          </ul>
          <h3 className="mb-2 mt-8 font-extrabold">How I approach a project</h3>
          <p className="text-ink/75">Start small, get one thing working end to end, then improve it. I'd rather ship a simple feature that works than plan a big one that never does.</p>
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle title="Skills" note="Tools I've used in my projects and coursework." />
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-2xl border border-ink p-5">
              <h3 className="mb-3 font-extrabold">{group}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className="cursor-default rounded-md border border-ink/25 px-2.5 py-1 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-lime">{s}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionTitle title="Off the keyboard" note="Team sports taught me a lot about working with other people." />
        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((a, i) => (
            <div key={a.title} className={`rounded-2xl border border-ink p-5 ${i === 0 ? 'bg-lime' : 'bg-white'}`}>
              <Trophy size={20} />
              <p className="mt-3 text-2xl font-extrabold">{a.result}</p>
              <p className="font-medium">{a.title}</p>
              <p className="text-sm text-ink/60">{a.place}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-16"><Button to="/projects" variant="solid">See what I've built</Button></div>
    </div>
  )
}
