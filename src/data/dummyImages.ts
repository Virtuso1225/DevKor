export const importAll = () => {
  //   const modules = import.meta.glob('@/assets/*webp')
  const images = []
  //   for (const path in modules) {
  //     // console.log(new URL(path.replace('/src/', '../'), import.meta.url).href)
  //     images.push(new URL('../assets/P1122597.webp', import.meta.url).href)
  //   }
  images.push(new URL('../assets/P1122597.webp', import.meta.url).href)
  images.push(new URL('../assets/P1122780-2.webp', import.meta.url).href)
  images.push(new URL('../assets/P1122919.webp', import.meta.url).href)
  images.push(new URL('../assets/profile.webp', import.meta.url).href)
  return images
}
