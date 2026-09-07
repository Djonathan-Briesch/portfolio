import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'

const App = () => {
	const year = new Date().getFullYear()

	return (
		<div className="flex min-h-screen flex-col">
			<Header />

			<main className="relative flex-1 overflow-x-hidden px-6">
				<Hero />
				<Skills />
				<Projects />
				<Contact />
			</main>

			<footer className="border-border border-t py-6 text-center">
				<p className="text-text-secondary text-sm">
					© {year} Djonathan Briesch — Desenvolvedor Web
				</p>
			</footer>
		</div>
	)
}

export default App
