export default function SectionTitle({ title, note }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-extrabold sm:text-3xl"><span className="marker">{title}</span></h2>
      {note && <p className="mt-3 max-w-xl text-ink/70">{note}</p>}
    </div>
  )
}
