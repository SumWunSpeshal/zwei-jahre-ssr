export function sortByDate(resources) {
  return resources
    .filter(i => i?.context?.date)
    .sort((a, b) => {
      return a?.context?.date < b?.context?.date ? 1 : -1
    })
}
