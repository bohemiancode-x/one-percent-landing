import type React from "react"
interface FeatureItemProps {
  children: React.ReactNode
}

export default function FeatureItem({ children }: FeatureItemProps) {
  return (
    <div className="flex items-center p-4 bg-[#1A1B1F] bg-opacity-75 backdrop-blur-sm border border-white/40">
      <div className="mr-3 mt-1 text-white">✓</div>
      <p className="text-gray-300">{children}</p>
    </div>
  )
}

