import Button from '../shared/Button'

function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="bg-[#f7f3eb] px-4 py-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        
        <div className="flex flex-col items-center text-center lg:hidden">
          <span className="rounded-full bg-white px-4 py-2 text-sm text-amber-900">
            Кофейня рядом с домом
          </span>

          <h1 className="mt-5 text-4xl font-bold text-amber-950">
            Хороший кофе — хорошее начало дня
          </h1>

          <p className="mt-4 max-w-md text-base text-stone-600">
            Заходи за любимым напитком, свежей выпечкой и хорошим настроением.
          </p>

          <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
            <Button variant="primary" size="md" onClick={() => scrollToSection('menu')}>
              Посмотреть меню
            </Button>
            <Button variant="secondary" size="md" onClick={() => scrollToSection('contacts')}>
              Найти кофейню
            </Button>
          </div>

          <div className="relative mt-8 w-full max-w-md">
            <img
              src=""
              alt="Кофе в уютной кофейне"
              className="h-64 w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute bottom-3 left-3 rounded-xl bg-white px-3 py-2 text-left shadow-md">
              <p className="text-sm font-semibold text-amber-950">Сварено с заботой</p>
              <p className="text-xs text-stone-600">Каждый день с 8:00</p>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-between gap-12 lg:flex">
          <div className="max-w-lg text-left">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm text-amber-900">
              Кофейня рядом с домом
            </span>

            <h1 className="mt-5 text-5xl font-bold text-amber-950">
              Хороший кофе — хорошее начало дня
            </h1>

            <p className="mt-4 text-lg text-stone-600">
              Заходи за любимым напитком, свежей выпечкой и хорошим настроением.
            </p>

            <div className="mt-8 flex gap-4">
              <Button variant="primary" size="md" onClick={() => scrollToSection('menu')}>
                Посмотреть меню
              </Button>
              <Button variant="secondary" size="md" onClick={() => scrollToSection('contacts')}>
                Найти кофейню
              </Button>
            </div>
          </div>

          <div className="relative w-full max-w-lg">
            <img
              src=""
              alt="Кофе в уютной кофейне"
              className="h-96 w-full rounded-3xl object-cover shadow-lg"
            />
            <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-3 shadow-md">
              <p className="font-semibold text-amber-950">Сварено с заботой</p>
              <p className="text-sm text-stone-600">Каждый день с 8:00</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
