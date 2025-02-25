import { nanoid } from 'nanoid'
import Asset from 'Types/Asset'
import IIronfishAssetManager from 'Types/IronfishManager/IIronfishAssetManager'
export const DEFAULT_ASSET: Asset = {
  createdTransactionHash: nanoid(64),
  id: nanoid(64),
  metadata: 'Ironfish coin',
  name: '$IRON',
  owner: 'Iron fish',
  supply: BigInt(0),
}
export const DEMO_ASSETS: Asset[] = [
  DEFAULT_ASSET,
  {
    createdTransactionHash: nanoid(64),
    id: nanoid(64),
    metadata: 'Demo coin',
    name: '$DEMO',
    owner: 'Demo user',
    supply: BigInt(0),
  },
  {
    createdTransactionHash: nanoid(64),
    id: nanoid(64),
    metadata: 'Test coin',
    name: '$TEST',
    owner: 'Test user',
    supply: BigInt(0),
  },
]

class DemoAssetManager implements IIronfishAssetManager {
  list(search?: string, offset?: number, max?: number): Promise<Asset[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(
          DEMO_ASSETS.filter(
            asset =>
              !search ||
              asset.name.includes(search) ||
              asset.id.includes(search) ||
              asset.owner.includes(search) ||
              asset.metadata.includes(search)
          ).slice(offset, max)
        )
      }, 1000)
    })
  }
  get(id: string): Promise<Asset> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(DEMO_ASSETS.find(asset => asset.id === id))
      }, 1000)
    })
  }
  default(): Promise<Asset> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(DEFAULT_ASSET)
      }, 1000)
    })
  }
}

export default DemoAssetManager
