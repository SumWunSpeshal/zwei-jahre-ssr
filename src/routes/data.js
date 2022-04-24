import { api } from '$lib/api.js'
import { sortByDate } from '$lib/api-helper.js'

export const get = async () => {
  const { resources } = await api()
  const sortedResources = sortByDate(resources).reverse()
  const pastMessages = sortedResources.filter(
    e => new Date(e?.context?.date) < new Date('2021-04-27')
  )
  const [latestMsg, nextMsg] = sortedResources.slice(pastMessages.length - 1)
  const msgNo = pastMessages.length

  return {
    body: {
      sortedResources,
      latestMsg,
      nextMsg,
      msgNo
    }
  }
}
