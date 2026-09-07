import { FolderKanban } from 'lucide-react'

import { SECTION_ID } from '../constants/sections'
import Reveal from './Reveal'

const Projects = () => {
	return (
		<section
			id={SECTION_ID.PROJECTS}
			className="relative scroll-mt-(--header-height) py-16 md:py-24"
		>
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center md:text-left">
					<p className="text-accent mb-2 text-sm font-medium tracking-[0.2em] uppercase">
						Portfólio
					</p>
					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Projetos em Destaque</h2>
					<p className="text-text-secondary mt-4 max-w-2xl text-lg">
						Em breve, esta seção exibirá projetos que demonstram minhas habilidades e experiência
						prática.
					</p>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{[0, 1, 2].map((index) => (
						<Reveal key={index} delay={index * 100}>
							<div className="group border-border bg-surface/50 relative overflow-hidden rounded-2xl border border-dashed p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transform-none motion-reduce:transition-none">
								<div className="bg-background-secondary/50 mb-5 flex h-32 items-center justify-center rounded-xl">
									<FolderKanban
										size={40}
										strokeWidth={1.5}
										className="text-text-secondary/60 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
										aria-hidden="true"
									/>
								</div>

								<h3 className="text-text mb-2 text-xl font-semibold">Projeto em desenvolvimento</h3>

								<p className="text-text-secondary text-sm leading-relaxed">
									Este espaço está reservado para um futuro projeto. Fique à vontade para voltar em
									breve!
								</p>
							</div>
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}

export default Projects
