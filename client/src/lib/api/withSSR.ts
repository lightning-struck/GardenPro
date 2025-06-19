import { GetServerSidePropsContext } from 'next'
import { serverFetch } from './api'

export function withSSR<T extends {}>(
  fetchData: (context: GetServerSidePropsContext) => Promise<T>
) {
  return async (context: GetServerSidePropsContext) => {
    try {
      const data = await fetchData(context)
      return {
        props: {
          ...data,
        },
      }
    } catch (error) {
      console.error('SSR Error:', error)
      return {
        props: {} as T,

      }
    }
  }
}