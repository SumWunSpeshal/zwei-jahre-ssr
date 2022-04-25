import { api } from '$lib/modules/api.js'

export const get = async () => {
  const { resources } = await api()
  const sortedMsgs = resources
    .filter(i => i?.context?.date)
    .sort((a, b) => {
      return a?.context?.date < b?.context?.date ? 1 : -1
    })
    .reverse()
  const pastMessages = sortedMsgs.filter(
    e => new Date(e?.context?.date) < new Date()
  )
  const [latestMsg, nextMsg] = sortedMsgs.slice(pastMessages.length - 1)
  const msgNo = pastMessages.length

  return {
    body: {
      sortedMsgs,
      latestMsg,
      nextMsg,
      msgNo
    }
  }
}
