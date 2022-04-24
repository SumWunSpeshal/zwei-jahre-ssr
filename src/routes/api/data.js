import { api } from '$lib/modules/api.js'

export const get = async () => {
  const { resources } = await api()
  const sortedResources = resources
    .filter(i => i?.context?.date)
    .sort((a, b) => {
      return a?.context?.date < b?.context?.date ? 1 : -1
    })
    .reverse()
  const pastMessages = sortedResources.filter(
    e => new Date(e?.context?.date) < new Date()
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
