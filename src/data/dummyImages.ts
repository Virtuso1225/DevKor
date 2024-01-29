export const importAll = () => {
  //   const modules = import.meta.glob('@/assets/*webp')
  const images = []
  //   for (const path in modules) {
  //     // console.log(new URL(path.replace('/src/', '../'), import.meta.url).href)
  //     images.push(new URL('../assets/P1122597.webp', import.meta.url).href)
  //   }
  images.push(new URL('../assets/P1122597.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122780-2.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122919.jpg', import.meta.url).href)
  images.push(new URL('../assets/profile.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1121676.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1121886.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122009.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122014.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122022.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122122.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122160.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122340.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122558-2.jpg', import.meta.url).href)
  images.push(new URL('../assets/P1122754.jpg', import.meta.url).href)
  return images
}
