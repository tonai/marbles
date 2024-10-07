import { useEffect, useMemo, useState } from "react"
import CheckBoard from "../CheckBoard"
import { ICollectionModel, loadGLTFCollection } from "../../helpers/collection"

interface IViewerProps {
  collection: string[][]
  path?: string
  xGap?: number
  zGap?: number
}

export default function Viewer(props: IViewerProps) {
  const { collection, path = "/", xGap = 0, zGap = 0 } = props
  const [models, setModels] = useState<ICollectionModel[]>([])

  useEffect(() => {
    loadGLTFCollection(collection, path).then(setModels)
  }, [collection, path])

  const { components, maxXSize, maxZSize } = useMemo(() => {
    let xOffset = 0
    let zOffset = 0
    let prevX = null
    let maxXSize = 0
    const maxZSizes = []
    const components = []
    for (const { gltf, vector, x, z } of models) {
      if (prevX !== x) {
        maxZSizes.push(zOffset - zGap)
        xOffset += maxXSize + xGap
        zOffset = 0
        maxXSize = 0
      }
      prevX = x
      maxXSize = Math.max(maxXSize, Math.ceil(vector.x))
      components.push(
        <primitive
          key={x + "-" + z}
          object={gltf.scene}
          position={[xOffset + vector.x / 2, 0, zOffset + vector.z / 2]}
        />
      )
      zOffset += Math.ceil(vector.z) + zGap
    }
    maxZSizes.push(zOffset - zGap)
    const maxZSize = Math.max(...maxZSizes)
    return { components, maxXSize: xOffset + maxXSize, maxZSize }
  }, [models, xGap, zGap])

  if (models.length === 0) {
    return null
  }

  return (
    <>
      {components}
      <CheckBoard x={maxXSize} z={maxZSize} />
    </>
  )
}
