'use client'

import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
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
 * One visual language only: brushed metal and amber anodised metal, in two shapes
 * (ring + node) that read as an orbit/topology motif. Everything is lit by a single
 * key from the upper left plus one warm rim from behind, so the forms share a world.
 */

type Shape = 'ring' | 'node'

interface Spec {
  shape: Shape
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  accent: boolean
  rotSpeed: [number, number, number]
}

/**
 * Screen-space safe zones at 1440x900: nav y<56, headline x109-829 y229-388,
 * bio x109-829 y400-650, CTAs x109-397 y657-707, portrait x907-1327 y239-659.
 * Forms are anchored only in the true margins: left x<109, right x>1327,
 * bottom y>707, and the band above the portrait.
 */
const desktopSpecs: Spec[] = [
  {
    shape: 'ring',
    position: [-6.68, -3.21, -2.2],
    rotation: [0.5, 0.4, 0.3],
    scale: 0.6,
    accent: true,
    rotSpeed: [0.02, 0.06, 0.015],
  },
  {
    shape: 'node',
    position: [-6.61, 1.49, -2.8],
    rotation: [0, 0, 0],
    scale: 0.52,
    accent: false,
    rotSpeed: [0.02, 0.05, 0.01],
  },
  {
    shape: 'ring',
    position: [6.11, 1.84, -1.9],
    rotation: [1.35, 0.3, 0.1],
    scale: 0.37,
    accent: false,
    rotSpeed: [0.03, 0.07, 0.02],
  },
  {
    shape: 'node',
    position: [4.96, 2.98, -3.2],
    rotation: [0, 0, 0],
    scale: 0.41,
    accent: true,
    rotSpeed: [0.04, 0.06, 0.02],
  },
]

const mobileSpecs: Spec[] = [
  {
    shape: 'ring',
    position: [1.0, 3.15, -1.4],
    rotation: [1.2, 0.3, 0.1],
    scale: 0.3,
    accent: true,
    rotSpeed: [0.05, 0.1, 0.03],
  },
  {
    shape: 'node',
    position: [-1.02, 3.2, -1.9],
    rotation: [0, 0, 0],
    scale: 0.26,
    accent: false,
    rotSpeed: [0.05, 0.08, 0.02],
  },
  {
    shape: 'node',
    position: [-0.98, -3.25, -1.1],
    rotation: [0, 0, 0],
    scale: 0.3,
    accent: false,
    rotSpeed: [0.04, 0.07, 0.02],
  },
  {
    shape: 'ring',
    position: [1.0, -3.5, -2.3],
    rotation: [1.2, 0.3, 0.1],
    scale: 0.26,
    accent: true,
    rotSpeed: [0.05, 0.09, 0.03],
  },
]

function FormMaterial({ accent, p }: { accent: boolean; p: Palette }) {
  if (accent) {
    return (
      <meshStandardMaterial
        color={p.accent}
        metalness={0.9}
        roughness={0.28}
        envMapIntensity={1.2}
      />
    )
  }
  return (
    <meshStandardMaterial
      color={p.metal}
      metalness={0.92}
      roughness={0.22}
      envMapIntensity={1.5}
    />
  )
}

function FloatingForm({ spec, p }: { spec: Spec; p: Palette }) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return
    mesh.rotation.x += spec.rotSpeed[0] * delta
    mesh.rotation.y += spec.rotSpeed[1] * delta
    mesh.rotation.z += spec.rotSpeed[2] * delta
  })

  const geometry = useMemo<THREE.BufferGeometry>(
    () =>
      spec.shape === 'ring'
        ? new THREE.TorusGeometry(1, 0.16, 20, 96)
        : new THREE.SphereGeometry(1, 56, 36),
    [spec.shape],
  )

  return (
    <Float speed={0.4} rotationIntensity={0.08} floatIntensity={0.4} floatingRange={[-0.14, 0.14]}>
      <mesh
        ref={ref}
        geometry={geometry}
        position={spec.position}
        rotation={spec.rotation}
        scale={spec.scale}
      >
        <FormMaterial accent={spec.accent} p={p} />
      </mesh>
    </Float>
  )
}

/**
 * A faint node-and-link constellation: on-theme for infrastructure work, and it
 * reads as depth rather than clutter because it is 1px geometry at low opacity.
 */
function NetworkField({ p }: { p: Palette }) {
  const { nodes, links } = useMemo(() => {
    let seed = 20260929
    const rand = () => {
      seed = (seed * 1664525 + 1013904223) % 4294967296
      return seed / 4294967296
    }
    const center = new THREE.Vector3(4.9, -3.5, -3.4)
    const extent = new THREE.Vector3(2.8, 1.3, 1.2)
    const count = 26
    const pts: THREE.Vector3[] = []
    for (let i = 0; i < count; i++) {
      pts.push(
        new THREE.Vector3(
          center.x + (rand() - 0.5) * extent.x * 2,
          center.y + (rand() - 0.5) * extent.y * 2,
          center.z + (rand() - 0.5) * extent.z * 2,
        ),
      )
    }
    const seg: number[] = []
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        if (pts[i].distanceTo(pts[j]) < 1.15) {
          seg.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z)
        }
      }
    }
    return {
      nodes: new Float32Array(pts.flatMap((v) => [v.x, v.y, v.z])),
      links: new Float32Array(seg),
    }
  }, [])

  return (
    <group>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial
          color={p.accent}
          size={0.035}
          sizeAttenuation
          transparent
          opacity={p.node}
          depthWrite={false}
        />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[links, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color={p.accent} transparent opacity={p.link} depthWrite={false} />
      </lineSegments>
    </group>
  )
}

function CameraRig({ isMobile }: { isMobile: boolean }) {
  const { camera } = useThree()

  useFrame((state, delta) => {
    const damp = 1 - Math.pow(0.001, delta)
    const ampX = isMobile ? 0.1 : 0.24
    const ampY = isMobile ? 0.06 : 0.14
    camera.position.x += (state.pointer.x * ampX - camera.position.x) * damp
    camera.position.y += (state.pointer.y * ampY - camera.position.y) * damp
    camera.position.z = 9.5
    camera.lookAt(0, 0, 0)
  })

  return null
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const isDark = useIsDarkTheme()
  const p = isDark ? DARK : LIGHT
  const specs = isMobile ? mobileSpecs : desktopSpecs

  return (
    <>
      <fog attach="fog" args={[p.bg, 9, 26]} />

      <SceneLightRig
        p={p}
        isMobile={isMobile}
        themeKey={isDark ? 'dark' : 'light'}
      />

      {specs.map((spec, i) => (
        <FloatingForm key={`${isDark ? 'd' : 'l'}-${i}`} spec={spec} p={p} />
      ))}

      <NetworkField p={p} />

      <CameraRig isMobile={isMobile} />
    </>
  )
}

export default function HeroScene() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dpr = isMobile ? [1, 1.5] : [1, 2]

  if (prefersReduced || !supportsWebGL()) return null

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
        camera={{ position: [0, 0, 9.5], fov: isMobile ? 46 : 40 }}
        performance={{ min: 0.5 }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
