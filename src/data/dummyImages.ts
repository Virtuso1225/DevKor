export const importAll = () => {
  const modules = import.meta.glob('@/assets/*webp')
  const images = []
  for (const path in modules) {
    images.push(path)
  }
  return images
}
