import { derived, writable } from 'svelte/store'

export const resources = writable([])

export const latestMsg = derived(resources, $resources => $resources?.latestMsg)
export const sortedMsgs = derived(
  resources,
  $resources => $resources?.sortedMsgs
)
export const latestMsgNo = derived(resources, $resources => $resources?.msgNo)
export const latestMsgSrc = derived(
  latestMsg,
  $latestMsg => $latestMsg?.secure_url
)
export const latestMsgDescription = derived(
  latestMsg,
  $latestMsg => $latestMsg?.context?.alt
)
export const latestMsgAlt = derived(
  latestMsg,
  $latestMsg => $latestMsg?.context?.caption
)
export const nextDate = derived(resources, $resources =>
  new Date(
    $resources?.nextMsg?.context?.date ?? $resources?.latestMsg?.context?.date
  ).toLocaleDateString('de-DE', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  })
)
