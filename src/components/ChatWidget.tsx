import { useEffect, useRef, useState, type FormEvent } from 'react'
import { useUI } from '../ui'
import { askBrain } from '../lib/brain'

interface Msg {
  who: 'user' | 'bot'
  text: string
}

export default function ChatWidget() {
  const { t, lang } = useUI()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const startedFor = useRef<string | null>(null)

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight)
  }, [messages, typing, open])

  // restart the greeting in the active language when it changes
  useEffect(() => {
    if (startedFor.current && startedFor.current !== lang) {
      startedFor.current = lang
      setMessages([{ who: 'bot', text: t.chat.greeting }])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  // preview helper: ?chat opens the widget with a sample question
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has('chat')) {
      openChat()
      sendQuestion(lang === 'ar' ? 'إيه مهاراته؟' : 'What are his skills?')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openChat = () => {
    setOpen(true)
    if (!startedFor.current) {
      startedFor.current = lang
      setMessages([{ who: 'bot', text: t.chat.greeting }])
    }
  }

  const sendQuestion = async (q: string) => {
    setMessages((m) => [...m, { who: 'user', text: q }])
    setTyping(true)
    const answer = await askBrain(q, lang, t.chat.fallback)
    setTimeout(() => {
      setTyping(false)
      setMessages((m) => [...m, { who: 'bot', text: answer }])
    }, 500)
  }

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const q = input.trim()
    if (!q) return
    setInput('')
    sendQuestion(q)
  }

  return (
    <>
      <button
        aria-label={t.chat.title}
        title={t.chat.title}
        onClick={() => (open ? setOpen(false) : openChat())}
        className="fixed bottom-5 start-4 md:bottom-6 md:start-6 z-40 flex items-center gap-2.5 rounded-full border border-acc/60 bg-card/90 backdrop-blur ps-1.5 pe-4 py-1.5 shadow-[0_8px_28px_rgba(45,212,191,0.4)] hover:border-acc hover:scale-105 transition"
      >
        <img src="/ibrahem.jpg" alt="" className="w-9 h-9 rounded-full object-cover border border-acc/60" />
        <span className="text-start leading-tight">
          <span className="block font-bold text-[0.85rem]">{t.chat.pillTitle}</span>
          <span className="block text-muted text-[0.68rem]">{t.chat.pillSub}</span>
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-acc">
          <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
        </svg>
      </button>

      {open && (
        <div
          role="dialog"
          aria-label={t.chat.title}
          className="fixed z-40 start-4 end-4 bottom-[90px] md:end-auto md:start-6 md:w-[360px] md:bottom-[92px] h-[520px] max-h-[calc(100vh-130px)] bg-card border border-line rounded-[18px] flex flex-col overflow-hidden shadow-[0_18px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex items-center justify-between px-4 py-3.5 border-b border-line">
            <div>
              <div className="font-bold text-[0.98rem]">{t.chat.title}</div>
              <div className="text-muted text-[0.78rem]">{t.chat.subtitle}</div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-muted hover:text-fg text-xl">
              &times;
            </button>
          </div>

          <div ref={bodyRef} className="flex-1 overflow-y-auto p-3.5 flex flex-col gap-2.5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] px-[13px] py-2.5 rounded-[14px] text-[0.9rem] leading-normal ${
                  m.who === 'user'
                    ? 'bg-acc text-white self-end rounded-ee'
                    : 'bg-bg border border-line self-start rounded-es'
                }`}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div className="bg-bg border border-line self-start rounded-[14px] rounded-es px-4 py-3.5 flex gap-[5px]">
                <i className="w-[7px] h-[7px] rounded-full bg-muted animate-dot" />
                <i className="w-[7px] h-[7px] rounded-full bg-muted animate-dot" style={{ animationDelay: '0.15s' }} />
                <i className="w-[7px] h-[7px] rounded-full bg-muted animate-dot" style={{ animationDelay: '0.3s' }} />
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 px-3.5 pb-2.5">
            {t.chat.suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => sendQuestion(s)}
                className="bg-acc/15 text-acc rounded-full px-3 py-1.5 text-[0.78rem] hover:bg-acc hover:text-white transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="flex gap-2 px-3.5 py-3 border-t border-line">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.chat.placeholder}
              autoComplete="off"
              className="flex-1 bg-bg border border-line rounded-full text-fg px-3.5 py-2.5 text-[0.9rem] focus:outline-none focus:border-acc"
            />
            <button type="submit" className="bg-acc text-white rounded-full px-4 py-2.5 font-bold hover:brightness-110 transition">
              {t.chat.send}
            </button>
          </form>

          <div className="px-3.5 py-2 text-muted text-[0.72rem] border-t border-line text-center">
            {t.chat.disclaimer}
          </div>
        </div>
      )}
    </>
  )
}
