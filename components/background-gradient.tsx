import Image from "next/image"

interface BackgroundGradientProps {
  gradient: "1" | "2" | "3" | "4" | "5" | string
  className?: string
  fadeDirection?: "top" | "bottom" | "both" | "none"
  fadeIntensity?: number // 0 to 100, controls how intense the fade effect is
  fadeHeight?: string // Control the height of the fade area (e.g., "6rem", "120px")
}

export default function BackgroundGradient({ 
  gradient, 
  className = "", 
  fadeDirection = "none", 
  fadeIntensity = 40,
  fadeHeight = "10rem" // Increased default fade height for more gradual transition
}: BackgroundGradientProps) {
  // Generate the appropriate fade overlay class based on direction
  const getFadeOverlay = () => {
    if (fadeDirection === "none") return null;
    
    const intensity = Math.min(Math.max(fadeIntensity, 0), 100); // Ensure value is between 0-100
    
    if (fadeDirection === "top") {
      return (
        <div className="absolute inset-x-0 top-0 z-10" 
             style={{ 
               height: fadeHeight,
               background: `linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)` 
             }} 
        />
      );
    } else if (fadeDirection === "bottom") {
      return (
        <div className="absolute inset-x-0 bottom-0 z-10" 
             style={{ 
               height: fadeHeight,
               background: `linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)` 
             }} 
        />
      );
    } else if (fadeDirection === "both") {
      return (
        <>
          <div className="absolute inset-x-0 top-0 z-10" 
               style={{ 
                 height: fadeHeight,
                 background: `linear-gradient(to bottom, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)` 
               }} 
          />
          <div className="absolute inset-x-0 bottom-0 z-10" 
               style={{ 
                 height: fadeHeight,
                 background: `linear-gradient(to top, rgb(0,0,0) 0%, rgba(0,0,0,0) 100%)` 
               }} 
          />
        </>
      );
    }
    
    return null;
  };

  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}>
      <Image src={`/images/gradient-${gradient}.png`} alt="" fill priority className="object-cover" />
      {getFadeOverlay()}
      {/* <div className="absolute inset-0 bg-grid-pattern opacity-10"></div> */}
    </div>
  )
}