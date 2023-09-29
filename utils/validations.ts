export function ValidationCard(source: string) {
  return source
    .replace(/screen/g, 'full')
    .replace(/type=/g, 'type=')
    .replace(/z-/g, '')
    .replace(/relative/g, '')
    .replace(/className=/g, 'class=')
    .replace(/absolute/g, '')
    .replace(/email=/g, '')
    .replace(/md:w-1\/3/g, '')
    .replace(/max-w-md/g, 'max-w-sm')
}

export function validationSource(source: string) {
  if (source.includes("w-screen") || source.includes("h-screen")) {
    return;
  } else if (source.includes("type=")) {
    return;
  }
}
