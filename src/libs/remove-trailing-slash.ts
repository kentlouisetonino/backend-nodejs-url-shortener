export default function removeTrailingSlash(url: string | undefined) {
  if (!url) {
    return ''
  }

  // * repllace the the slash in the end with empty space
  return url.replace(/\/$/, '')
}
