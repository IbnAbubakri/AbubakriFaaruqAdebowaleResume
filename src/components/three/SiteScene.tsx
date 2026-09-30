// © 2026 Abubakri Faaruq Adebowale (IbnAbubakri). All rights reserved.
// Faruqsuzay@gmail.com | +2349061345507

'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import useMediaQuery from '@/hooks/useMediaQuery'
import { supportsWebGL } from '@/lib/webgl'
import {
  DARK,
  LIGHT,
  type Palette,
  SceneLightRig,
  useIsDarkTheme,
} from '@/components/three/scene-kit'

/**
 * A single fixed canvas that carries the same metal-and-amber language behind
 * every section, not just the hero.
 *
 * Why one canvas: browsers cap live WebGL contexts (roughly 8-16), and nine
 * per-section canvases would fight for that budget and thrash the compositor.
 * One fixed canvas, one context, one shared light rig.
 *
 * Why it stays subtle: the forms are semi-transparent, the light rig matches the
 * hero exactly, and the field drifts at ~0.9x the page scroll so it reads as
 * depth behind the content instead of objects flying past it. Most text sits on
 * opaque `bg-card` surfaces, so the geometry only shows through the gutters and
 * the gaps between cards, which is what keeps body copy perfectly legible.
 */

/** Distance the field travels per viewport of scroll, in world units. */
const DRIFT = 0.66
/** Camera distance and focal length, matched to the hero for a continuous feel. */
const CAM_Z = 9.5
/**
 * Half the tallest visible slice of world, used to make the field span every
 * position the camera will ever look at. Without it the top of the page looks
 * into empty space and the bottom is over-populated.
 */
const VIEW_HALF = 4.6
/** Ghosts per world unit of field, so density stays constant as the page grows. */
const PER_UNIT_DESKTOP = 2.6
const PER_UNIT_MOBILE = 1.5

interface Ghost {
  kind: 'ring' | 'node'
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  accent: boolean
  tier: 0 | 1 | 2
  spin: number
  bob: number
  phase: number
  thin: boolean
}

interface Patch {
  center: [number, number, number]
  extent: [number, number, number]
  count: number
  reach: number
}

/**
 * Deterministic scatter, so the composition is identical on every load and the
 * SSR/CSR boundary can never reshuffle it.
 */
function buildField(isMobile: boolean, span: number, aspect: number) {
  // Half the visible width at the camera plane, so nothing lands off-screen. The
  // aspect ratio matters a lot: it is ~1.6 on desktop but under 0.5 on a phone, so
  // ignoring it pushed the whole field outside a mobile viewport.
  const tanHalf = Math.tan(((isMobile ? 46 : 40) / 2) * (Math.PI / 180))
  let seed = 20260930
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  const count = Math.round(span * (isMobile ? PER_UNIT_MOBILE : PER_UNIT_DESKTOP))
  const ghosts: Ghost[] = []

  for (let i = 0; i < count; i++) {
    const y = -VIEW_HALF + rand() * span
    const z = -1.6 - rand() * 3.4
    // Bias toward the outer thirds: the centre column carries the text.
    const side = rand() < 0.5 ? -1 : 1
    const halfW = tanHalf * (CAM_Z - z) * aspect
    const x = side * (0.3 + rand() * 0.68) * halfW
    const isRing = rand() < 0.42
    const roll = rand()

    ghosts.push({
      kind: isRing ? 'ring' : 'node',
      position: [x, y, z],
      rotation: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      scale: isRing ? 0.5 + roll * 1.5 : 0.12 + roll * 0.26,
      accent: rand() < 0.34,
      tier: roll > 0.72 ? 2 : roll > 0.4 ? 1 : 0,
      spin: (rand() - 0.5) * 0.06,
      bob: 0.05 + rand() * 0.09,
      phase: rand() * Math.PI * 2,
      thin: roll > 0.6,
    })
  }

  const patches: Patch[] = []
  const patchCount = Math.round((span / 3) * (isMobile ? 0.35 : 0.7))
  for (let i = 0; i < patchCount; i++) {
    patches.push({
      center: [
        (rand() < 0.5 ? -1 : 1) *
          (0.3 + rand() * 0.62) * tanHalf * (CAM_Z - (2.4 + rand() * 2.6)) * aspect,
        -VIEW_HALF + rand() * span,
        -2.4 - rand() * 2.6,
      ],
      extent: [1.4 + rand() * 1.4, 0.7 + rand() * 0.8, 0.8],
      count: 14 + Math.floor(rand() * 10),
      reach: 0.95 + rand() * 0.35,
    })
  }

  return { ghosts, patches }
}

/**
 * Dense sections (certificates, achievements) cover the middle of the viewport
 * with opaque tiles, leaving only the outer margins free. This rail guarantees a
 * visible metal presence there at every scroll position instead of leaving holes.
 */
function buildRail(isMobile: boolean, span: number, aspect: number) {
  let seed = 20261001
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }
  const tanHalf = Math.tan(((isMobile ? 46 : 40) / 2) * (Math.PI / 180))
  const step = isMobile ? 2.1 : 1.15
  const rail: Ghost[] = []

  for (let y = -VIEW_HALF; y < span; y += step) {
    const side = (rail.length % 2 === 0) ? -1 : 1
    const z = -1.9 - rand() * 1.6
    const halfW = tanHalf * (CAM_Z - z) * aspect
    const roll = rand()
    rail.push({
      kind: roll > 0.62 ? 'ring' : 'node',
      position: [side * (0.88 + rand() * 0.14) * halfW, y + (rand() - 0.5) * step, z],
      rotation: [rand() * Math.PI, rand() * Math.PI, rand() * Math.PI],
      scale: roll > 0.62 ? 0.42 + rand() * 0.3 : 0.11 + rand() * 0.1,
      accent: rand() < 0.4,
      tier: roll > 0.7 ? 2 : 1,
      spin: (rand() - 0.5) * 0.05,
      bob: 0.05 + rand() * 0.07,
      phase: rand() * Math.PI * 2,
      thin: true,
    })
  }

  return rail
}

function GhostMesh({ g, materials }: { g: Ghost; materials: THREE.Material[] }) {
  const geometry = useMemo<THREE.BufferGeometry>(
    () =>
      g.kind === 'ring'
        ? new THREE.TorusGeometry(1, g.thin ? 0.028 : 0.06, 10, 64)
        : new THREE.SphereGeometry(1, 24, 16),
    [g.kind, g.thin],
  )

  return (
    <mesh
      geometry={geometry}
      material={materials[g.accent ? 3 + g.tier : g.tier]}
      position={g.position}
      rotation={g.rotation}
      scale={g.scale}
    />
  )
}

/** Faint node-and-link constellations, the same motif the hero uses. */
function NetworkPatch({
  patch,
  p,
  isDark,
}: {
  patch: Patch
  p: Palette
  isDark: boolean
}) {
  const { nodes, links } = useMemo(() => {
    let seed = Math.floor(patch.center[1] * 100000) + 7919
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < patch.count; i++) {
      pts.push(
        new THREE.Vector3(
          patch.center[0] + (rand() - 0.5) * patch.extent[0] * 2,
          patch.center[1] + (rand() - 0.5) * patch.extent[1] * 2,
          patch.center[2] + (rand() - 0.5) * patch.extent[2] * 2,
        ),
      )
    }
    const seg: number[] = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < patch.reach) {
          seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }
    return {
      nodes: new Float32Array(pts.flatMap((v) => [v.x, v.y, v.z])),
      links: new Float32Array(seg),
    }
  }, [patch])

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={p.accent}
          size={0.03}
          sizeAttenuation
          transparent
          opacity={p.node * 0.5}
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[links, 3]} />
        </bufferGeometry>
        <lineBasicMaterial
          color={p.accent}
          transparent
          opacity={p.link * 0.8}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  )
}

/**
 * Scroll driver. Reads the document height once, then follows the window scroll
 * every frame with a damped lerp so the field glides instead of ticking.
 */
function AmbientField({
  isMobile,
  p,
  isDark,
  prefersReduced,
}: {
  isMobile: boolean
  p: Palette
  isDark: boolean
  prefersReduced: boolean
}) {
  const group = useRef<THREE.Group>(null)
  const [span, setSpan] = useState(18)
  const [aspect, setAspect] = useState(1.6)

  useEffect(() => {
    const measure = () => {
      const vh = window.innerHeight || 1
      const pages = Math.max(1, document.documentElement.scrollHeight / vh)
      // The camera looks one screen above its starting point and one screen
      // below where the scroll ends, so the field has to cover both ends.
      setSpan(DRIFT * pages + VIEW_HALF * 2)
      setAspect((window.innerWidth || vh) / vh)
    }
    measure()
    window.addEventListener('resize', measure)
    const t = window.setTimeout(measure, 400)
    return () => {
      window.removeEventListener('resize', measure)
      window.clearTimeout(t)
    }
  }, [])

  const { ghosts, patches } = useMemo(
    () => buildField(isMobile, span, aspect),
    [isMobile, span, aspect],
  )

  const rail = useMemo(
    () => buildRail(isMobile, span, aspect),
    [isMobile, span, aspect],
  )

  const materials = useMemo(() => {
    // Phones have far less free space around the content, so the same forms need
    // more presence there to register at all.
    const boost = isMobile ? 1.7 : 1
    const tiers = [0.38 * boost, 0.46 * boost, 0.58 * boost]
    const make = (color: string, mult: number) =>
      new THREE.MeshStandardMaterial({
        color,
        metalness: 0.92,
        roughness: 0.24,
        envMapIntensity: 1.3,
        transparent: true,
        opacity: p.ghost * mult,
        depthWrite: false,
      })
    return [
      make(p.metal, tiers[0]),
      make(p.metal, tiers[1]),
      make(p.metal, tiers[2]),
      make(p.accent, tiers[0] * 1.15),
      make(p.accent, tiers[1] * 1.15),
      make(p.accent, tiers[2] * 1.15),
    ]
  }, [p])

  useEffect(() => () => materials.forEach((m) => m.dispose()), [materials])

  const { camera } = useThree()
  const travel = useRef(0)

  useFrame(({ clock }, delta) => {
    const g = group.current
    if (!g) return

    const t = clock.elapsedTime
    g.rotation.y = prefersReduced ? 0 : Math.sin(t * 0.05) * 0.05

    if (!prefersReduced) {
      for (let i = 0; i < g.children.length; i++) {
        const child = g.children[i]
        const spec = ghosts[i] ?? rail[i - ghosts.length]
        if (!spec) continue
        child.rotation.z += spec.spin * delta
        child.position.y = spec.position[1] + Math.sin(t * spec.bob + spec.phase) * 0.05
      }
    }

    const vh = window.innerHeight || 1
    const target = (window.scrollY / vh) * DRIFT
    travel.current = prefersReduced
      ? target
      : travel.current + (target - travel.current) * (1 - Math.pow(0.001, delta))

    g.position.y = -travel.current
    // The hero owns its own scene; stay out of its way.
    g.visible = window.scrollY > vh * 0.45

    camera.position.set(0, 0, CAM_Z)
    camera.lookAt(0, 0, 0)
  })

  return (
    <group ref={group} key={`${isDark ? 'd' : 'l'}-${isMobile ? 'm' : 'd'}`}>
      {ghosts.map((g, i) => (
        <GhostMesh key={`g${i}`} g={g} materials={materials} />
      ))}
      {rail.map((g, i) => (
        <GhostMesh key={`r${i}`} g={g} materials={materials} />
      ))}
      {patches.map((patch, i) => (
        <NetworkPatch key={i} patch={patch} p={p} isDark={isDark} />
      ))}
    </group>
  )
}

function Scene({
  isMobile,
  prefersReduced,
}: {
  isMobile: boolean
  prefersReduced: boolean
}) {
  const isDark = useIsDarkTheme()
  const p = isDark ? DARK : LIGHT

  return (
    <>
      <fog attach="fog" args={[p.bg, 12, 32]} />
      <SceneLightRig p={p} isMobile={isMobile} themeKey={isDark ? 'dark' : 'light'} />
      <AmbientField
        isMobile={isMobile}
        p={p}
        isDark={isDark}
        prefersReduced={prefersReduced}
      />
    </>
  )
}

export default function SiteScene() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dpr = isMobile ? [1, 1.5] : [1, 1.75]

  if (prefersReduced || !supportsWebGL()) return null

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    >
      <Canvas
        frameloop="always"
        dpr={dpr as [number, number]}
        gl={{
          antialias: false,
          alpha: true,
          stencil: false,
          depth: true,
          powerPreference: 'high-performance',
        }}
        camera={{ position: [0, 0, CAM_Z], fov: isMobile ? 46 : 40 }}
        performance={{ min: 0.5 }}
      >
        <Scene isMobile={isMobile} prefersReduced={prefersReduced} />
      </Canvas>
    </div>
  )
}
