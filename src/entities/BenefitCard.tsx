import type { BenefitCardProps } from "../shared/types"

const BenefitCard = ({
  icon,
  title,
  description,
}: BenefitCardProps) => {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="text-3xl" aria-hidden="true">
        {icon}
      </div>

      <h3 className="mt-4 text-xl font-bold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  )
}

export default BenefitCard