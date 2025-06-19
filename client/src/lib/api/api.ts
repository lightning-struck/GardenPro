// lib/api.ts
type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

interface FetchOptions {
  method?: HttpMethod
  headers?: Record<string, string>
  body?: any
  cache?: RequestCache
  next?: {
    revalidate?: number
    tags?: string[]
  }
}

export async function serverFetch<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API
  if (!apiUrl) {
    throw new Error('NEXT_PUBLIC_API is not defined')
  }

  const url = `${apiUrl}${endpoint}`
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  const config: RequestInit = {
    method: options.method || 'GET',
    headers,
    cache: options.cache,
    next: options.next,
  }

  if (options.body) {
    config.body = JSON.stringify(options.body)
  }

  const response = await fetch(url, config)

  if (!response.ok) {
    const errorData = await response.json().catch(() => null)
    throw new Error(
      errorData?.message || `Request failed with status ${response.status}`
    )
  }

  return response.json() as Promise<T>
}