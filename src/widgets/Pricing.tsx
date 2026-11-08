import { plans } from '../shared/db'
import Button from '../shared/Button'

function Pricing() {
  return (
    <section className="bg-amber-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-amber-950">
          Кофе с собой
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-center text-gray-600">
          Выбери абонемент, который подходит именно тебе.
        </p>

        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          {plans.map((plan) => (
            <article
              key={plan.title}
              className={`relative flex flex-1 flex-col rounded-2xl border bg-white p-6 ${
                plan.popular ? 'border-amber-800 shadow-lg' : 'border-amber-100'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-800 px-4 py-1 text-sm text-white">
                  Популярный
                </span>
              )}

              <h3 className="text-xl font-bold text-amber-950">
                {plan.title}
              </h3>

              <p className="mt-2 flex-1 text-gray-600">
                {plan.description}
              </p>

              <p className="mt-5 text-3xl font-bold text-amber-950">
                {plan.price}
              </p>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                className="mt-6 w-full"
              >
                Выбрать тариф
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
