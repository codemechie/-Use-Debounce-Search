import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' // Import createRoot
import './index.css'
import { FootballerSearch } from './App.jsx'

// Create a root and render into it
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <FootballerSearch />
    </StrictMode>,
)   