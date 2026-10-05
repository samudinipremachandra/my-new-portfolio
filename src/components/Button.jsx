import { Link } from 'react-router-dom'

// variant: 'solid' (black) | 'lime' | 'outline'. Pass `to` for page links, `href` for outside links.
const styles = {
  solid: 'bg-ink text-white hover:bg-ink/80',
  lime: 'bg-lime text-ink hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#111]',
  outline: 'border border-ink text-ink hover:bg-ink hover:text-white',
}

export default function Button({ to, href, variant = 'solid', children, ...rest }) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition duration-200 ${styles[variant]}`
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} target="_blank" rel="noreferrer" className={cls} {...rest}>{children}</a>
  return <button className={cls} {...rest}>{children}</button>
}
