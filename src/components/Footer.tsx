import { contact } from '../data'
import { useUI } from '../ui'

export default function Footer() {
  const { t } = useUI()
  return (
    <footer className="border-t border-line py-7 text-muted text-[0.88rem] flex justify-center gap-2 flex-wrap">
      <div>&copy; 2026 {t.footer.name}</div>
      <div>&middot;</div>
      <div>
        {t.footer.contactLabel}{' '}
        <a href={`mailto:${contact.email}`} className="text-acc">
          {contact.email}
        </a>
      </div>
      <div>&middot;</div>
      <div>
        <a href={contact.linkedin} target="_blank" rel="noopener" className="text-acc">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
