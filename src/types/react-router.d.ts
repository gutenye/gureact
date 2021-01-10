declare module 'history' {
  interface Location {
    query: { [key: string]: string }
  }

  interface LocationDescriptorObject {
    query?: { [key: string]: string }
    keep?: boolean
  }
}
