import { useState } from 'react'
import { Mail, Github, Linkedin, CheckCircle2 } from 'lucide-react'
import { site } from '../data/site.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  function validate() {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10) e.message = 'Please write at least 10 characters.'
    return e
  }

  function submit(ev) {
    ev.preventDefault()
    const e = validate()
    setErrors(e)
    // No backend yet: this only checks the form. To really send messages, connect a service
    // (e.g. Formspree or EmailJS) inside this function.
    if (Object.keys(e).length === 0) setDone(true)
  }

  const field = (err) => `mt-1 w-full rounded-xl border bg-white px-4 py-2.5 ${err ? 'border-red-600' : 'border-ink'}`
  const link = 'flex items-center gap-3 font-bold hover:underline'

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">Let's build something <span className="marker">useful.</span></h1>
        <p className="mt-5 max-w-md text-ink/75">Got an internship, a junior role or a project idea? Send me a message and I'll reply as soon as I can.</p>
        <div className="mt-8 space-y-3">
          <a className={link} href="mailto:samudinipremachandra@gmail.com"><Mail size={20} />{site.email}</a>
          <a className={link} href="https://github.com/samudinipremachandra" target="_blank" rel="noreferrer"><Github size={20} />GitHub</a>
          <a className={link} href="https://www.linkedin.com/in/samudini-premachandra-046167379" target="_blank" rel="noreferrer"><Linkedin size={20} />LinkedIn</a>
        </div>
      </div>

      <div className="rounded-3xl border-2 border-ink bg-white p-6 shadow-[6px_6px_0_#B8F28A] sm:p-8">
        {done ? (
          <div role="status" className="py-6 text-center">
            <CheckCircle2 className="mx-auto mb-3" size={36} />
            <h2 className="text-xl font-extrabold">Form looks good!</h2>
            <p className="mt-2 text-ink/70">This site isn't connected to an email service yet, so nothing was sent. Please email me directly at <a className="font-bold underline" href="mailto:samudinipremachandra@gmail.com">samudinipremachandra@gmail.com</a>.</p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            {[['name', 'Name', 'text'], ['email', 'Email', 'email']].map(([n, label, type]) => (
              <div key={n} className="mb-4">
                <label htmlFor={n} className="text-sm font-bold">{label}</label>
                <input id={n} name={n} type={type} value={form[n]} onChange={update} aria-invalid={!!errors[n]} className={field(errors[n])} />
                {errors[n] && <p className="mt-1 text-sm text-red-700">{errors[n]}</p>}
              </div>
            ))}
            <div className="mb-5">
              <label htmlFor="message" className="text-sm font-bold">Message</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={update} aria-invalid={!!errors.message} className={field(errors.message)} />
              {errors.message && <p className="mt-1 text-sm text-red-700">{errors.message}</p>}
            </div>
            <button type="submit" className="w-full rounded-full bg-ink px-5 py-3 font-bold text-white transition hover:bg-ink/80">Send Message</button>
          </form>
        )}
      </div>
    </div>
  )
}
