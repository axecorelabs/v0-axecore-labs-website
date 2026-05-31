import { MongoClient, type Db } from 'mongodb'

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB || 'axecore'

if (!MONGODB_URI) {
  throw new Error('Missing MONGODB_URI environment variable')
}

type GlobalMongoCache = {
  clientPromise?: Promise<MongoClient>
}

const globalForMongo = globalThis as typeof globalThis & GlobalMongoCache

const clientPromise =
  globalForMongo.clientPromise ??
  new MongoClient(MONGODB_URI, {
    appName: 'axecore-labs-website',
  }).connect()

if (process.env.NODE_ENV !== 'production') {
  globalForMongo.clientPromise = clientPromise
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise
  return client.db(MONGODB_DB)
}
