import { Link } from 'react-router-dom'
import { contacts, navLinks, products } from '../shared/db'

export default function Footer() {
  return (
    <footer className="bg-amber-950 px-4 py-12 text-amber-50" id='#contacts'>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="text-xl font-bold text-white">Кофейня</span>
          <p className="mt-3 text-sm text-amber-200">
            Уютная кофейня рядом с домом. Свежий кофе и выпечка каждый день.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white">Навигация</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-200">
            {navLinks.map((link) => (
              <li>
                <Link
                  key={link.to}
                  to={link.to}
                  className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Меню</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-200">
            {products.map((p) => (
              <li>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Контакты</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-200">
            {contacts.map((i) => (
              <li>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
