import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-amber-950 px-4 py-12 text-amber-50">
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
            <li><Link to="/#about" className="hover:text-white">О нас</Link></li>
            <li><Link to="/#menu" className="hover:text-white">Меню</Link></li>
            <li><Link to="/#contacts" className="hover:text-white">Контакты</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Меню</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-200">
            <li>Классический кофе</li>
            <li>Авторские напитки</li>
            <li>Свежая выпечка</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white">Контакты</h4>
          <ul className="mt-3 space-y-2 text-sm text-amber-200">
            <li>ул. Кофейная, 15</li>
            <li>Ежедневно: 08:00 – 22:00</li>
            <li>+7 (999) 123-45-67</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
