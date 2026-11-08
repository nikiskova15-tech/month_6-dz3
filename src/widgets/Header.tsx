import { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../shared/db'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-amber-50 px-4 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="text-xl font-bold text-amber-950">
          Кофейня
        </Link>

        <nav className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-amber-950 hover:text-amber-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded border border-amber-900 px-3 py-2 text-amber-950 md:hidden"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="mt-4 flex flex-col gap-3 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className="text-amber-950"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
