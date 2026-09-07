import { Mail, MapPin } from 'lucide-react'

import { SECTION_ID } from '../constants/sections'
import { socialLinks } from '../data/social-links'
import ContactForm from './ContactForm'
import Reveal from './Reveal'

const Contact = () => {
	return (
		<section
			id={SECTION_ID.CONTACT}
			className="relative scroll-mt-(--header-height) py-16 md:py-24"
		>
			<div className="mx-auto max-w-6xl">
				<Reveal className="mb-12">
					<p className="text-accent mb-2 text-sm font-medium tracking-[0.2em] uppercase">Contato</p>

					<h2 className="text-3xl font-bold tracking-tight md:text-4xl">Vamos conversar?</h2>

					<p className="text-text-secondary mt-4 max-w-2xl text-lg">
						Preencha o formulário abaixo ou entre em contato diretamente pelas redes sociais.
						Responderei o mais breve possível.
					</p>
				</Reveal>

				<div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
					<Reveal delay={100} className="space-y-6">
						<div className="border-border bg-surface rounded-2xl border p-6 shadow-sm">
							<h3 className="mb-3 text-lg font-semibold">Informações</h3>

							<ul className="text-text-secondary space-y-3">
								<li className="flex items-center gap-3">
									<Mail size={18} className="text-primary" aria-hidden="true" />
									<a
										href="mailto:djonathanvinicius@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-primary transition-colors"
									>
										djonathanvinicius@gmail.com
									</a>
								</li>

								<li className="flex items-center gap-3">
									<MapPin size={18} className="text-primary" aria-hidden="true" />
									<span>Brasil</span>
								</li>
							</ul>
						</div>

						<div className="border-border bg-surface rounded-2xl border p-6 shadow-sm">
							<h3 className="mb-3 text-lg font-semibold">Redes sociais</h3>

							<div className="flex gap-4">
								{socialLinks.map(({ name, href, icon: Icon }) => (
									<a
										key={name}
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
								))}
							</div>
						</div>
					</Reveal>

					<Reveal delay={200}>
						<ContactForm />
					</Reveal>
				</div>
			</div>
		</section>
	)
}

export default Contact
