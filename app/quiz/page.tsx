import Quiz from '@/components/Quiz'

export default function QuizPage() {
  return (
    <section style={{ background: 'var(--bg)', minHeight: '80vh' }}>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <Quiz />
      </div>
    </section>
  )
}
