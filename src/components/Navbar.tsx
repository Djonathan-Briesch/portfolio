import { ArrowRight, Code2, FolderKanban, Home, type LucideIcon, Mail, Menu, X } from 'lucide-react'
import { useState } from 'react'

import { SECTION_ID } from '../constants/sections'

type MenuButtonProps = {
	isMenuOpen: boolean
	onClick: () => void
}

type NavBarItem = {
	name: string
	href: (typeof SECTION_ID)[keyof typeof SECTION_ID]
	Icon: LucideIcon
}

const navBarItems: NavBarItem[] = [
	{ name: 'Início', href: SECTION_ID.HOME, Icon: Home },
	{ name: 'Tecnologias', href: SECTION_ID.SKILLS, Icon: Code2 },
	{ name: 'Projetos', href: SECTION_ID.PROJECTS, Icon: FolderKanban },
	{ name: 'Contato', href: SECTION_ID.CONTACT, Icon: Mail },
]

const MenuButton = ({ isMenuOpen, onClick }: MenuButtonProps) => {
	return (
		<button
			type="button"
			aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
			aria-expanded={isMenuOpen}
			aria-controls="mobile-navigation"
			onClick={onClick}
			className="hover:bg-primary/5 rounded-lg p-2 transition-all duration-200 active:scale-90 md:hidden"
		>
			{isMenuOpen ? (
				<X size={30} strokeWidth={1.5} aria-hidden="true" />
			) : (
				<Menu size={30} strokeWidth={1.5} aria-hidden="true" />
			)}
		</button>
	)
}

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const closeMenu = () => setIsMenuOpen(false)

	return (
		<nav aria-label="Navegação principal">
			<div className="hidden md:block">
				<ul className="text-text-secondary flex gap-2 text-sm">
					{navBarItems.map(({ name, href, Icon }) => (
						<li key={name}>
							<a
								href={`#${href}`}
								className="hover:bg-primary/5 hover:text-primary focus-visible:ring-primary/50 after:bg-primary relative flex items-center gap-1.5 rounded-lg px-3 py-2 transition-colors duration-200 after:absolute after:right-3 after:bottom-0 after:left-3 after:h-px after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100 focus-visible:ring-2 focus-visible:outline-none"
							>
								<Icon size={16} strokeWidth={1.5} aria-hidden="true" />
								<span>{name}</span>
							</a>
						</li>
					))}
				</ul>
			</div>

			<MenuButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen((prev) => !prev)} />

			<div
				id="mobile-navigation"
				aria-hidden={!isMenuOpen}
				inert={!isMenuOpen}
				className={`border-border/40 from-background/95 via-background/85 to-primary/5 fixed inset-x-0 top-(--header-height) z-40 h-[calc(100dvh-var(--header-height))] border-t bg-linear-to-b backdrop-blur-2xl transition-all duration-300 md:hidden ${isMenuOpen ? 'visible opacity-100' : 'pointer-events-none invisible opacity-0'} `}
			>
				<div className="flex min-h-0 flex-1 flex-col items-center">
					<div className="w-full max-w-md flex-1 px-8 pt-8">
						<p className="text-text-secondary mb-6 text-xs font-medium tracking-[0.2em] uppercase">
							Navegação
						</p>

						<ul>
							{navBarItems.map(({ name, href, Icon }, index) => (
								<li
									key={name}
									className={`transition-[transform,opacity] duration-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} motion-reduce:transform-none motion-reduce:transition-none`}
									style={{
										transitionDelay: isMenuOpen ? `${index * 75}ms` : '0ms',
									}}
								>
									<a
										href={`#${href}`}
										onClick={closeMenu}
										className="border-border/50 hover:text-primary focus-visible:ring-primary/50 flex items-center gap-4 border-b py-5 text-2xl transition-colors focus-visible:ring-2 focus-visible:outline-none active:scale-[0.98] active:opacity-80"
									>
										<Icon
											size={24}
											strokeWidth={1.5}
											className="text-text-secondary"
											aria-hidden="true"
										/>

										<span className="flex-1">{name}</span>

										<ArrowRight
											size={22}
											strokeWidth={1.5}
											className="text-text-secondary"
											aria-hidden="true"
										/>
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default NavBar
