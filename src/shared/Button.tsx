import type { ButtonProps } from "./types"

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-amber-800 text-white hover:bg-amber-900',
    secondary: 'border border-amber-800 text-amber-900 hover:bg-amber-100',
  }

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3 text-lg',
  }

  return (
    <button
      className={`rounded-lg font-medium transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}
