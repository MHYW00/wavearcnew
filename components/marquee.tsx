"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: ReactNode
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal"
}: MarqueeProps) {
  const speeds = {
    slow: "60s",
    normal: "40s",
    fast: "20s"
  }

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden",
        className
      )}
    >
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speeds[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
      >
        {children}
      </div>
      <div
        className={cn(
          "flex min-w-full shrink-0 items-center justify-around gap-8",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={{
          animation: `marquee ${speeds[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal"
        }}
        aria-hidden="true"
      >
        {children}
      </div>

      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - 2rem));
          }
        }
      `}</style>
    </div>
  )
}
