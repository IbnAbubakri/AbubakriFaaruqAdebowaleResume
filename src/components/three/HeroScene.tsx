'use client'

import { useMemo, useRef, type ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'
import useMediaQuery from '@/hooks/useMediaQuery'
import { supportsWebGL } from '@/lib/webgl'

interface FloatingObjectProps {
  position: [number, number, number]
  scale: number
  color: string
  wireframe?: boolean
  opacity?: number
  shape: 'torusKnot' | 'icosahedron' | 'octahedron' | 'dodecahedron' | 'torus' | 'sphere' | 'box' | 'cone'
  rotSpeed: [number, number, number]
  emissive?: string
}

const accent = '#00e5ff'
const primary = '#5b8cff'
const emerald = '#34d399'
const violet = '#a78bfa'
const slate = '#94a3b8'

function FloatingObject({
  position,
  scale,
  color,
  wireframe = false,
  opacity = 0.9,
  shape,
  rotSpeed,
  emissive,
}: FloatingObjectProps) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return
    mesh.rotation.x += rotSpeed[0] * delta
    mesh.rotation.y += rotSpeed[1] * delta
    mesh.rotation.z += rotSpeed[2] * delta
  })

  const geometry = useMemo(() => {
    switch (shape) {
      case 'torusKnot':
        return new THREE.TorusKnotGeometry(1, 0.32, 128, 24)
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1, wireframe ? 1 : 0)
      case 'octahedron':
        return new THREE.OctahedronGeometry(1, 0)
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(1, 0)
      case 'torus':
        return new THREE.TorusGeometry(1, 0.32, 20, 48)
      case 'sphere':
        return new THREE.SphereGeometry(1, 24, 16)
      case 'box':
        return new THREE.BoxGeometry(1.4, 1.4, 1.4)
      case 'cone':
        return new THREE.ConeGeometry(1, 1.6, 24)
    }
  }, [shape, wireframe])

  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={1.2} floatingRange={[-0.35, 0.35]}>
      <mesh ref={ref} geometry={geometry} position={position} scale={scale}>
        {wireframe ? (
          <meshBasicMaterial color={color} wireframe transparent opacity={opacity} />
        ) : (
          <meshStandardMaterial
            color={color}
            metalness={0.55}
            roughness={0.35}
            emissive={emissive ?? color}
            emissiveIntensity={0.22}
          />
        )}
      </mesh>
    </Float>
  )
}

function MouseParallax({ children }: { children: ReactNode }) {
  const group = useRef<THREE.Group>(null)

  useFrame((state, delta) => {
    const g = group.current
    if (!g) return
    const damp = 1 - Math.pow(0.001, delta)
    const tx = state.pointer.x * 0.22
    const ty = state.pointer.y * 0.14
    g.rotation.y += (tx - g.rotation.y) * damp
    g.rotation.x += (-ty - g.rotation.x) * damp
    g.position.x += (state.pointer.x * 0.18 - g.position.x) * damp
    g.position.y += (-state.pointer.y * 0.14 - g.position.y) * damp
  })

  return <group ref={group}>{children}</group>
}

function HeroMesh({ isMobile }: { isMobile: boolean }) {
  const objects = isMobile ? mobileObjects : desktopObjects
  const sparkleCount = isMobile ? 36 : 90

  return (
    <>
      <MouseParallax>
        {objects.map((o, i) => (
          <FloatingObject key={i} {...o} />
        ))}
      </MouseParallax>

      <Sparkles
        count={sparkleCount}
        scale={isMobile ? [2.8, 8, 4] : [16, 9, 6]}
        size={isMobile ? 1.4 : 2.2}
        speed={isMobile ? 0.25 : 0.35}
        opacity={0.6}
        color={accent}
      />
      <Sparkles
        count={Math.round(sparkleCount / 2)}
        scale={isMobile ? [2.2, 7, 3] : [14, 8, 5]}
        size={isMobile ? 1.1 : 1.6}
        speed={0.2}
        opacity={0.35}
        color="#ffffff"
      />

      <ContactShadows
        position={[0, isMobile ? -3.4 : -3.1, 0]}
        opacity={0.4}
        scale={isMobile ? 8 : 16}
        blur={2.6}
        far={3.2}
        resolution={isMobile ? 160 : 320}
        frames={1}
        color={accent}
      />
    </>
  )
}

const desktopObjects: Omit<FloatingObjectProps, 'floatSpeed' | 'floatIntensity'>[] = [
  { shape: 'torusKnot', position: [4.4, 1.5, -1.5], scale: 0.55, color: accent, rotSpeed: [0.35, 0.6, 0.15], emissive: accent },
  { shape: 'icosahedron', position: [3.2, -1.9, 0.2], scale: 0.7, color: primary, wireframe: true, rotSpeed: [0.25, 0.4, 0.1] },
  { shape: 'octahedron', position: [-5.0, 1.8, -0.6], scale: 0.5, color: emerald, rotSpeed: [0.5, 0.3, 0.2] },
  { shape: 'dodecahedron', position: [-5.2, -1.8, 0.4], scale: 0.6, color: violet, wireframe: true, opacity: 0.5, rotSpeed: [0.2, 0.35, 0.1] },
  { shape: 'torus', position: [2.2, 2.6, -2.2], scale: 0.42, color: slate, rotSpeed: [0.4, 0.25, 0.15] },
  { shape: 'sphere', position: [-2.6, 2.9, -1.6], scale: 0.3, color: accent, rotSpeed: [0.3, 0.3, 0.2] },
  { shape: 'box', position: [0.4, -2.9, 0.1], scale: 0.34, color: primary, rotSpeed: [0.45, 0.55, 0.25] },
  { shape: 'cone', position: [4.6, -1.0, -1.1], scale: 0.4, color: emerald, rotSpeed: [0.35, 0.4, 0.15] },
  { shape: 'icosahedron', position: [-3.1, 0.1, -3.4], scale: 1.7, color: accent, wireframe: true, opacity: 0.32, rotSpeed: [0.05, 0.08, 0.03] },
]

const mobileObjects: Omit<FloatingObjectProps, 'floatSpeed' | 'floatIntensity'>[] = [
  { shape: 'torusKnot', position: [0.88, 2.75, -1.0], scale: 0.4, color: accent, rotSpeed: [0.3, 0.55, 0.15], emissive: accent },
  { shape: 'octahedron', position: [-0.88, 2.75, -1.1], scale: 0.3, color: emerald, rotSpeed: [0.4, 0.25, 0.18] },
  { shape: 'icosahedron', position: [-0.95, -2.4, 0.4], scale: 0.42, color: primary, wireframe: true, rotSpeed: [0.22, 0.35, 0.1] },
  { shape: 'torus', position: [0.95, -2.2, -0.4], scale: 0.26, color: slate, rotSpeed: [0.35, 0.22, 0.12] },
  { shape: 'sphere', position: [0, 1.95, -2.7], scale: 1.15, color: accent, wireframe: true, opacity: 0.18, rotSpeed: [0.05, 0.06, 0.02] },
]

export default function HeroScene() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const prefersReduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const dpr = isMobile ? [1, 1.75] : [1, 2]

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
        camera={{ position: [0, 0, 7.5], fov: 42 }}
        performance={{ min: 0.5 }}
        style={{ opacity: isMobile ? 0.95 : 1 }}
      >
        <ambientLight intensity={0.55} />
        <directionalLight position={[5, 7, 6]} intensity={1.6} />
        <directionalLight position={[-5, -3, 3]} intensity={0.5} color={accent} />
        <HeroMesh isMobile={isMobile} />
      </Canvas>
    </div>
  )
}