import { KB, type Lang } from '../data'

// To upgrade to a real AI model later: deploy a small serverless proxy that
// accepts POST {question, lang} and returns {answer}, keep your API key on the
// server, and set PORTFOLIO_AI_ENDPOINT to its URL. No key ever goes here.
export const PORTFOLIO_AI_ENDPOINT: string | null = null

export function localAnswer(question: string, lang: Lang, fallback: string): string {
  const text = ' ' + question.toLowerCase() + ' '
  let best: (typeof KB)[number] | null = null
  let bestScore = 0
  for (const entry of KB) {
    let score = 0
    for (const kw of entry.keywords) if (text.includes(kw)) score += kw.length
    if (score > bestScore) {
      bestScore = score
      best = entry
    }
  }
  return best ? best[lang] : fallback
}

export async function askBrain(question: string, lang: Lang, fallback: string): Promise<string> {
  if (PORTFOLIO_AI_ENDPOINT) {
    try {
      const res = await fetch(PORTFOLIO_AI_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, lang }),
      })
      if (res.ok) {
        const data = (await res.json()) as { answer?: string }
        if (data && data.answer) return data.answer
      }
    } catch {
      // fall through to local answers
    }
  }
  return localAnswer(question, lang, fallback)
}
