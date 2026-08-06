import React, { forwardRef } from "react"
import { cn } from "@/lib/utils"

const fitMap = { fill: "object-fill", fit: "object-contain", contain: "object-contain", cover: "object-cover", crop: "object-cover", none: "object-none", scaleDown: "object-scale-down" }
/** @typedef {React.ImgHTMLAttributes<HTMLImageElement> & { fittingType?: keyof typeof fitMap, aspectRatio?: string | number, focalPointX?: number, focalPointY?: number }} ImageProps */
/** @type {React.ForwardRefExoticComponent<ImageProps & React.RefAttributes<HTMLImageElement>>} */
const Image = forwardRef(function Image({ src, alt = "", className, fittingType = "cover", aspectRatio, style, focalPointX = 50, focalPointY = 50, loading = "lazy", decoding = "async", ...props }, ref) {
  const objectFitClass = fitMap[fittingType] || fitMap.cover
  const resolvedStyle = { ...style, ...(aspectRatio ? { aspectRatio } : {}), objectPosition: `${focalPointX}% ${focalPointY}%` }
  return <img ref={ref} src={src} alt={alt} className={cn("block max-w-full", objectFitClass, className)} style={resolvedStyle} loading={loading} decoding={decoding} {...props} />
})
Image.displayName = "Image"
export { Image }
export default Image