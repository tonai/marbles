import { useEffect, useRef } from "react"
import { OrbitControls } from "@react-three/drei"
import { OrbitControls as OrbitControlsImpl } from "three-stdlib"

import { useGame } from "../../store/game"

export default function FreeCamera() {
  const orbitControls = useRef<OrbitControlsImpl | null>(null)
  const setOrbitControls = useGame((state) => state.setOrbitControls)

  useEffect(() => {
    setOrbitControls(orbitControls)
  }, [setOrbitControls])

  return <OrbitControls ref={orbitControls} makeDefault />
}
