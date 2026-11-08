import type { PricingCardProps } from "../shared/types"

const PricingCard = ({
  title,
  price,
  description,
  popular = false,
}: PricingCardProps) => {
  return (
    <div
      className={`rounded-2xl border p-6 ${
        popular
          ? 'border-amber-800 bg-amber-50'
          : 'border-gray-200 bg-white'
      }`}
    >
      {popular && (
        <span className="rounded-full bg-amber-800 px-3 py-1 text-sm text-white">
          Популярный
        </span>
      )}

      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
      <p className="mt-6 text-3xl font-bold">{price}</p>

      <button className="mt-6 w-full rounded-lg bg-amber-800 px-5 py-3 text-white hover:bg-amber-900">
        Выбрать тариф
      </button>
    </div>
  )
}

export default PricingCard