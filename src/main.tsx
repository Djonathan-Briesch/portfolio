import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'

const root = document.getElementById('root')

if (!root) {
	throw new Error('Elemento raiz "#root" não encontrado.')
}

createRoot(root).render(
	<StrictMode>
		<></>
	</StrictMode>,
)
