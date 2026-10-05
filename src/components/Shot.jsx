import { useState } from 'react'

// Shows a project screenshot. If the file is missing it shows a clear placeholder instead of a broken image.
export default function Shot({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center bg-mist p-4 text-center text-sm text-ink/60 ${className}`}>
        <span className="font-bold">Screenshot goes here</span>
        <code className="mt-1 text-xs">public{src}</code>
      </div>
    )
  }
  const imageSrc = `${import.meta.env.BASE_URL}${src.replace(/^\/+/, '')}`
  return <img src={imageSrc} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
