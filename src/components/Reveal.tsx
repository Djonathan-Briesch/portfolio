import type { ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'

type RevealProps = {
	children: ReactNode
	className?: string
	delay?: number
}

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const element = ref.current

		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting)
			},
			{
				threshold: 0.1,
				rootMargin: '0px 0px -50px 0px',
			},
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [])

	return (
		<div
			ref={ref}
			className={[
				'transform-gpu transition-all duration-600 ease-out',
				'motion-reduce:transform-none motion-reduce:transition-none',
				isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
				'motion-reduce:translate-y-0 motion-reduce:opacity-100',
				className,
			].join(' ')}
			style={{
				transitionDelay: isVisible ? `${delay}ms` : '0ms',
			}}
		>
			{children}
		</div>
	)
}

export default Reveal
