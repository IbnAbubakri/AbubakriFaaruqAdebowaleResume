// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useEffect, useState } from 'react'
import { Environment, Lightformer } from '@react-three/drei'
import { isDarkTheme } from '@/lib/webgl'

/**
 * One visual language for every canvas on the site: brushed metal and amber
 * anodised metal, lit by a single key from the upper left plus one warm rim from
 * behind. The hero and the page-wide ambient scene both mount this rig so the
 * whole document reads as one world rather than two unrelated scenes.
 */

export interface Palette {
  bg: string
  accent: string
  metal: string
  link: number
  node: number
  /** opacity ceiling for the ambient field behind page content */
  ghost: number
}

export const DARK: Palette = {
  bg: '#020617',
  accent: '#f59e0b',
  metal: '#cbd5e1',
  link: 0.15,
  node: 0.55,
  ghost: 0.26,
}

export const LIGHT: Palette = {
  bg: '#f8fafc',
  accent: '#b45309',
  metal: '#b6c2d1',
  link: 0.12,
  node: 0.38,
  ghost: 0.2,
}

export function useIsDarkTheme() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    setDark(isDarkTheme())
    const observer = new MutationObserver(() => setDark(isDarkTheme()))
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  return dark
}

interface LightRigProps {
  p: Palette
  isMobile: boolean
  themeKey: string
}

export function SceneLightRig({ p, isMobile, themeKey }: LightRigProps) {
  const isDark = themeKey === 'dark'

  return (
    <>
      <ambientLight intensity={0.22} />
      {/* single key from the upper left, matching the portrait's studio light */}
      <directionalLight position={[-5, 6, 7]} intensity={1.7} />
      {/* one warm rim from behind so every form shares the same light logic */}
      <directionalLight position={[6, -1, -5]} intensity={0.6} color={p.accent} />

      <Environment key={themeKey} resolution={isMobile ? 128 : 256} frames={1}>
        <color attach="background" args={[p.bg]} />
        <Lightformer
          form="rect"
          intensity={isDark ? 1.5 : 2.2}
          position={[-4, 5, 6]}
          rotation-y={Math.PI / 4}
          scale={[7, 7, 1]}
          color="#ffffff"
        />
        <Lightformer
          form="rect"
          intensity={0.9}
          position={[6, 0, -4]}
          rotation-y={-Math.PI / 4}
          scale={[6, 5, 1]}
          color={p.accent}
        />
        <Lightformer
          form="rect"
          intensity={0.6}
          position={[0, -6, 1]}
          scale={[8, 3, 1]}
          color="#ffffff"
        />
      </Environment>
    </>
  )
}
