interface SectionDividerProps {
  text: string
  className?: string
}

export default function SectionDivider({ text, className = "" }: SectionDividerProps) {
  return (
    <div className={`relative bg-[#1A1B1F] py-8 ${className}`}>
      {/* Top gradient border */}
      <div className="absolute top-0 left-0 right-0 h-px" 
           style={{ 
             background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.976) 39.37%, rgba(255, 255, 255, 0) 100%)"
           }} />
      
      {/* Bottom gradient border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" 
           style={{ 
             background: "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.976) 39.37%, rgba(255, 255, 255, 0) 100%)"
           }} />
      
      <div className="relative flex justify-center">
        <span className="px-4 text-sm text-white uppercase tracking-widest">{text}</span>
      </div>
    </div>
  )
}