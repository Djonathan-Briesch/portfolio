import { Code2, FormInput, type LucideIcon, Server, Wrench } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
	FaCss3Alt,
	FaDocker,
	FaFigma,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaJs,
	FaLinux,
	FaNodeJs,
	FaReact,
} from 'react-icons/fa6'
import {
    SiCloudflare,
	SiMysql,
	SiNestjs,
	SiPostgresql,
	SiPrisma,
	SiTailwindcss,
	SiTypescript,
	SiVite,
	SiZod,
} from 'react-icons/si'

import { SECTION_ID } from '../constants/sections'
import Reveal from './Reveal'

type Technology = {
	name: string
	icon: IconType | LucideIcon
}

type TechnologyCategory = {
	title: string
	icon: LucideIcon
	technologies: Technology[]
	accent: {
		line: string
		border: string
		icon: string
	}
}

const technologyCategories: TechnologyCategory[] = [
	{
		title: 'Frontend',
		icon: Code2,
		accent: {
			line: 'via-primary',
			border: 'hover:border-primary/40',
			icon: 'group-hover/tech:text-primary',
		},
		technologies: [
			{ name: 'HTML', icon: FaHtml5 },
			{ name: 'CSS', icon: FaCss3Alt },
			{ name: 'JavaScript', icon: FaJs },
			{ name: 'TypeScript', icon: SiTypescript },
			{ name: 'React', icon: FaReact },
			{ name: 'Vite', icon: SiVite },
			{ name: 'Tailwind CSS', icon: SiTailwindcss },
			{ name: 'React Hook Form', icon: FormInput },
			{ name: 'Zod', icon: SiZod },
		],
	},
	{
		title: 'Backend',
		icon: Server,
		accent: {
			line: 'via-accent',
			border: 'hover:border-accent/40',
			icon: 'group-hover/tech:text-accent',
		},
		technologies: [
			{ name: 'Node.js', icon: FaNodeJs },
			{ name: 'NestJS', icon: SiNestjs },
			{ name: 'Prisma', icon: SiPrisma },
			{ name: 'PostgreSQL', icon: SiPostgresql },
			{ name: 'MySQL', icon: SiMysql },
		],
	},
	{
		title: 'Ferramentas',
		icon: Wrench,
		accent: {
			line: 'via-slate-500',
			border: 'hover:border-slate-500/40',
			icon: 'group-hover/tech:text-slate-600',
		},
		technologies: [
			{ name: 'Git', icon: FaGitAlt },
			{ name: 'GitHub', icon: FaGithub },
			{ name: 'Docker', icon: FaDocker },
			{ name: 'Linux', icon: FaLinux },
			{ name: 'Figma', icon: FaFigma },
			{ name: 'Cloudflare', icon: SiCloudflare },
		],
	},
]

const Skills = () => {
	return (
		<section
			id={SECTION_ID.SKILLS}
			className="relative scroll-mt-(--header-height) overflow-hidden py-16 md:py-24"
		>
			<div className="relative mx-auto max-w-6xl">
				<Reveal className="mb-12 text-center md:text-left">
					<p className="text-accent mb-2 text-sm font-medium tracking-[0.2em] uppercase">Stack</p>

					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">
						Tecnologias e Ferramentas
					</h2>

					<p className="text-text-secondary mt-4 max-w-2xl text-lg">
						Conjunto de tecnologias que utilizo para construir aplicações modernas, escaláveis e com
						ótima experiência de usuário.
					</p>
				</Reveal>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{technologyCategories.map(
						({ title, icon: CategoryIcon, technologies, accent }, index) => (
							<Reveal
								key={title}
								delay={(index + 1) * 100}
								className={index === 2 ? 'md:col-span-2 lg:col-span-1' : ''}
							>
								<div
									className={`group border-border bg-surface relative overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${accent.border} motion-reduce:transform-none motion-reduce:transition-none`}
								>
									<div
										className={`absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent ${accent.line} to-transparent opacity-70 transition-all duration-300 group-hover:inset-x-5 group-hover:opacity-100 motion-reduce:transition-none`}
									/>

									<div className="mb-5 flex items-center gap-3">
										<div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-xl">
											<CategoryIcon size={20} strokeWidth={1.5} aria-hidden="true" />
										</div>

										<h3 className="text-xl font-semibold">{title}</h3>
									</div>

									<ul className="grid grid-cols-3 gap-4">
										{technologies.map(({ name, icon: Icon }) => (
											<li
												key={name}
												className="group/tech hover:bg-background-secondary flex flex-col items-center gap-1.5 rounded-lg p-2 text-center transition-colors duration-200"
											>
												<Icon
													className={`text-text-secondary h-8 w-8 transition-all duration-200 group-hover/tech:scale-110 ${accent.icon} motion-reduce:transform-none motion-reduce:transition-none`}
													aria-hidden="true"
												/>

												<span className="text-text-secondary text-xs font-medium">{name}</span>
											</li>
										))}
									</ul>
								</div>
							</Reveal>
						),
					)}
				</div>
			</div>
		</section>
	)
}

export default Skills
