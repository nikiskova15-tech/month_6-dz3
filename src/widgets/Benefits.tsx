import { benefits } from '../shared/db'

function Benefits() {
  return (
    <section className="bg-amber-50 px-4 py-12 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-amber-950">
          Почему выбирают нас
        </h2>

        {/* Сетка на Flex: 1 колонка -> 2 на md (768px) -> 3 на lg (1024px) */}
        <div className="mt-10 flex flex-wrap gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="w-full rounded-2xl border border-amber-100 bg-white p-6 shadow-sm md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <span className="text-4xl">{benefit.icon}</span>

              <h3 className="mt-4 text-xl font-semibold text-amber-950">
                {benefit.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
