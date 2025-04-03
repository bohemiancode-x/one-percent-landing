import Image from "next/image"

interface BackgroundGradientProps {
  gradient: "1" | "2" | "3" | "4" | "5" | string
  className?: string
}

export default function BackgroundGradient({ gradient, className = "" }: BackgroundGradientProps) {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <Image src={`/images/gradient-${gradient}.png`} alt="" fill priority className="object-cover" />
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> */}
    </div>
  )
}

