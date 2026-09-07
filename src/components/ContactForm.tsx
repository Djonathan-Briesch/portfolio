import { useForm, ValidationError } from '@formspree/react'
import { CheckCircle } from 'lucide-react'

const ContactForm = () => {
	const [state, handleSubmit, reset] = useForm('mdeoarqy')

	if (state.succeeded) {
		return (
			<div
				role="status"
				aria-live="polite"
				className="border-border bg-surface flex min-h-100 flex-col items-center justify-center rounded-2xl border p-8 text-center shadow-sm"
			>
				<CheckCircle size={48} className="text-primary mb-4" aria-hidden="true" />
				<h3 className="text-text mb-2 text-xl font-semibold">Mensagem enviada!</h3>
				<p className="text-text-secondary mb-6">
					Obrigado pelo contato. Responderei o mais breve possível.
				</p>
				<button
					type="button"
					onClick={reset}
					className="bg-primary shadow-primary/20 hover:bg-primary-hover focus:ring-primary/50 cursor-pointer rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 focus:ring-2 focus:outline-none"
				>
					Enviar outra mensagem
				</button>
			</div>
		)
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="border-border bg-surface space-y-5 rounded-2xl border p-6 shadow-sm"
			aria-busy={state.submitting}
		>
			<div>
				<label htmlFor="name" className="text-text-secondary mb-1 block text-sm font-medium">
					Nome
				</label>

				<input
					type="text"
					id="name"
					name="name"
					required
					className="border-border bg-background text-text focus:border-primary focus:ring-primary/30 w-full rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:ring-2 focus:outline-none"
				/>

				<ValidationError prefix="Nome" field="name" errors={state.errors} />
			</div>
			<div>
				<label htmlFor="email" className="text-text-secondary mb-1 block text-sm font-medium">
					E-mail
				</label>

				<input
					type="email"
					id="email"
					name="email"
					required
					className="border-border bg-background text-text focus:border-primary focus:ring-primary/30 w-full rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:ring-2 focus:outline-none"
				/>

				<ValidationError prefix="E-mail" field="email" errors={state.errors} />
			</div>
			<div>
				<label htmlFor="subject" className="text-text-secondary mb-1 block text-sm font-medium">
					Assunto
				</label>

				<input
					type="text"
					id="subject"
					name="subject"
					required
					className="border-border bg-background text-text focus:border-primary focus:ring-primary/30 w-full rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:ring-2 focus:outline-none"
				/>

				<ValidationError prefix="Assunto" field="subject" errors={state.errors} />
			</div>
			<div>
				<label htmlFor="message" className="text-text-secondary mb-1 block text-sm font-medium">
					Mensagem
				</label>

				<textarea
					id="message"
					name="message"
					required
					rows={5}
					className="border-border bg-background text-text focus:border-primary focus:ring-primary/30 w-full resize-none rounded-lg border px-4 py-2.5 transition-colors duration-200 focus:ring-2 focus:outline-none"
				/>

				<ValidationError prefix="Mensagem" field="message" errors={state.errors} />
			</div>
			{state.errors && (
				<p className="rounded-lg bg-red-50 p-3 text-sm text-red-600" role="alert">
					Ocorreu um erro ao enviar a mensagem. Tente novamente.
				</p>
			)}

			<button
				type="submit"
				disabled={state.submitting}
				className="bg-primary shadow-primary/20 hover:bg-primary-hover focus:ring-primary/50 w-full cursor-pointer rounded-full px-6 py-3 font-semibold text-white shadow-lg transition-colors duration-200 focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60"
				aria-busy={state.submitting}
			>
				{state.submitting ? 'Enviando...' : 'Enviar mensagem'}
			</button>
		</form>
	)
}

export default ContactForm
