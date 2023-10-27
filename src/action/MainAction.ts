export function resetDelta () {
  return { type: 'main/resetDelta' }
}

export function addDelta () {
  return { type: 'main/addDelta' }
}

export function minusDelta () {
  return { type: 'main/minusDelta' }
}

export function toggleDarkMode (isDark) {
  return { type: 'main/toggleDarkMode', payload: isDark }
}
