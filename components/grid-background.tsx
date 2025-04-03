interface GridBackgroundProps {
  className?: string
}

export default function GridBackground({ className = "" }: GridBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-radial from-[#131b2c] to-transparent opacity-70"></div>
    </div>
  )
}

