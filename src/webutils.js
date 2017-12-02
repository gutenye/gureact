// getImageInfo(file).then({width, height})
export function getImageInfo(file) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => {
      URL.revokeObjectURL(image.src)
      resolve({
        width: image.naturalWidth,
        height: image.naturalHeight,
      })
    })
    image.src = URL.createObjectURL(file)
  })
}
