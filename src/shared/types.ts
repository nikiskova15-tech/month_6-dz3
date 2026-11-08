
export type ButtonProps = {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: string
  onClick?: () => void
}

export type PricingCardProps = {
    title: string
    price: string
    description: string
    popular?: boolean
}

export type BenefitCardProps = {
    icon: string
    title: string
    description: string
}
