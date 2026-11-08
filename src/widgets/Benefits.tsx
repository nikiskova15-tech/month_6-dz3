import { benefits } from "../shared/db"

function Benefits() {
  return (
    <section className="bg-amber-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-amber-950">
          Почему к нам приходят
        </h2>

        <div className="flex flex-wrap gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="w-full rounded-2xl bg-white p-6 shadow-sm sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <div className="text-4xl" aria-hidden="true">
                {benefit.icon}
              </div>

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
