import { SECTION_ID } from '../constants/sections'
import NavBar from './Navbar'

const Header = () => {
	return (
		<header className="sticky inset-x-0 top-0 z-50 h-(--header-height)">
			<div className="border-border/50 bg-background/80 relative h-full border-b backdrop-blur-md">
				<div className="pointer-events-none absolute inset-0 overflow-hidden">
					<div className="bg-primary/10 absolute -top-20 -right-20 h-72 w-72 rounded-full blur-3xl" />
					<div className="bg-accent/10 absolute -bottom-32 left-1/4 h-64 w-64 rounded-full blur-3xl" />
				</div>

				<div className="relative mx-auto flex h-full max-w-6xl items-center justify-between px-6">
					<a
						href={`#${SECTION_ID.HOME}`}
						className="focus-visible:ring-primary/50 rounded-sm focus-visible:ring-2 focus-visible:outline-none"
					>
						<p className="text-xl font-bold tracking-tight">
							Djonathan{' '}
							<span className="from-primary to-accent bg-linear-to-r bg-clip-text text-transparent">
								Briesch
							</span>
						</p>

						<p className="text-text-secondary text-xs">Desenvolvedor web</p>
					</a>

					<NavBar />
				</div>
			</div>
		</header>
	)
}

export default Header
