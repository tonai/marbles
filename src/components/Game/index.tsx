import { useState } from "react"

import Scene from "../Scene"

import GameHeader from "../GameHeader"
import { defaultLevel } from "../../constants/blocks"
import { serializeLevel } from "../../helpers/level"

export default function Game() {
  const [camera, setCamera] = useState<"free" | "fp">("free")

  function handleCamera() {
    setCamera((cam) => (cam === "free" ? "fp" : "free"))
  }

  function handleStart() {
    Rune.actions.start(serializeLevel(defaultLevel))
  }

  return (
    <>
      <GameHeader
        camera={camera}
        onCamera={handleCamera}
        onStart={handleStart}
      />
      <Scene camera={camera} />
    </>
  )
}
