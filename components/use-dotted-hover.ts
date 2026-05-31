'use client'

import { useState } from 'react'
import {
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

export function useDottedHover() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const x = useSpring(mouseX, { stiffness: 140, damping: 24, mass: 0.3 })
  const y = useSpring(mouseY, { stiffness: 140, damping: 24, mass: 0.3 })

  const [showTrail, setShowTrail] = useState(false)
  const trailPresence = useMotionValue(0)
  const pulse = useMotionValue(0)

  const trailPresenceSpring = useSpring(trailPresence, {
    stiffness: 170,
    damping: 22,
    mass: 0.35,
  })

  const trailRadius = useTransform([trailPresenceSpring, pulse], (values) => {
    const [presence, pulseValue] = values as [number, number]
    const baseRadius = 72 + presence * 26
    const pulseAmount = ((pulseValue * 2 - 1) * 10) * presence
    return baseRadius + pulseAmount
  })

  const trailOpacity = useTransform(trailPresenceSpring, [0, 1], [0, 1])

  useAnimationFrame((time) => {
    if (!showTrail) {
      pulse.set(0)
      return
    }

    pulse.set((Math.sin(time / 220) + 1) / 2)
  })

  const litDotsMask = useMotionTemplate`radial-gradient(${trailRadius}px circle at ${x}px ${y}px, black 0%, black 65%, transparent 100%)`

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    mouseX.set(event.clientX - rect.left)
    mouseY.set(event.clientY - rect.top)
    trailPresence.set(1)

    if (!showTrail) {
      setShowTrail(true)
    }
  }

  const onPointerLeave = () => {
    trailPresence.set(0)
    setShowTrail(false)
  }

  return {
    onPointerMove,
    onPointerLeave,
    overlayStyle: {
      backgroundImage: 'radial-gradient(oklch(0.78 0.12 87 / 0.65) 1.55px, transparent 1.55px)',
      backgroundSize: '28px 28px',
      maskImage: litDotsMask,
      WebkitMaskImage: litDotsMask,
      opacity: trailOpacity,
    },
  }
}
