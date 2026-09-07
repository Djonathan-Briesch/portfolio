import profileImage from '../assets/images/profile.jpg'
import { SECTION_ID } from '../constants/sections'
import { socialLinks } from '../data/social-links'
import Reveal from './Reveal'

const Hero = () => {
	return (
		<section
			id={SECTION_ID.HOME}
			className="relative mx-auto grid max-w-6xl scroll-mt-(--header-height) items-center gap-12 overflow-hidden py-16 md:grid-cols-[1.5fr_1fr] md:py-24"
		>
			<Reveal className="relative z-10">
				<div className="flex flex-col items-start">
					<h1 className="text-display mb-4">
						Olá, eu sou
						<br />
						<span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
							Djonathan Briesch
						</span>
					</h1>

					<div className="mb-6 flex items-center gap-3">
						<span
							className="inline-block h-2.5 w-2.5 animate-pulse rounded-full bg-green-500 motion-reduce:animate-none"
							aria-hidden="true"
						/>

						<p className="text-text-secondary text-xl font-medium md:text-2xl">
							Desenvolvedor Web Front-end
						</p>
					</div>

					<p className="text-text-secondary mb-8 max-w-2xl text-lg">
						Transformo ideias em experiências digitais elegantes e funcionais. Foco em{' '}
						<span className="text-primary font-semibold">Front-end</span>, performance e detalhes
						que fazem a diferença.
					</p>

					<div className="mb-10 flex flex-wrap gap-4">
						<a
							href={`#${SECTION_ID.PROJECTS}`}
							className="bg-primary shadow-primary/20 hover:bg-primary-hover focus-visible:ring-primary/50 rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
						>
							Ver projetos
						</a>

						<a
							href={`#${SECTION_ID.CONTACT}`}
							className="border-border text-text hover:border-primary hover:text-primary focus-visible:ring-primary/50 rounded-full border-2 px-6 py-3 font-semibold transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
						>
							Entrar em contato
						</a>
					</div>

					<nav aria-label="Redes sociais">
						<ul className="flex gap-3">
							{socialLinks.map(({ name, href, icon: Icon }) => (
								<li key={name}>
									<a
										href={href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={name}
										className="group text-text-secondary hover:text-primary focus-visible:ring-primary/50 flex items-center gap-2 text-sm transition-colors duration-200 focus-visible:ring-2 focus-visible:outline-none"
									>
										<span className="border-border bg-surface group-hover:border-primary flex h-11 w-11 items-center justify-center rounded-full border shadow-sm transition-all duration-200 group-hover:-translate-y-0.5">
											<Icon className="h-5 w-5" aria-hidden="true" />
										</span>

										<span>{name}</span>
									</a>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Reveal>

			<Reveal delay={200} className="relative z-10 flex justify-center md:justify-end">
				<div className="relative">
					<div className="from-primary/20 to-accent/20 absolute inset-0 -z-10 scale-105 rotate-6 rounded-4xl bg-linear-to-br" />

					<img
						src={profileImage}
						alt="Foto de Djonathan Briesch"
						className="mx-auto aspect-square max-w-xs rounded-4xl object-cover shadow-xl md:max-w-sm"
					/>
				</div>
			</Reveal>
		</section>
	)
}

export default Hero
