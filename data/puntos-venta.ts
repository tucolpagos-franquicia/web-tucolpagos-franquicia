/**
 * Imágenes de corresponsales TuColpagos en public/puntos-venta/
 *
 * Convención de nombres: ciudad-departamento.webp
 * - Variante numérica (ej. montería-2-córdoba): el número no se muestra en la UI
 * - Barrio: ciudad-departamento-b-nombre-barrio.webp (todo después de "b")
 */

export const PUNTOS_VENTA_FOLDER = '/puntos-venta'

/** Todas las sedes (18 archivos en public/puntos-venta/) */
export const PUNTOS_VENTA_IMAGES = [
  'ayapel-córdoba.webp',
  'ayapel-2-córdoba.webp',
  'cali-valle-del-cauca.webp',
  'chinu-córdoba.webp',
  'chinú-córdoba.webp',
  'el-roble-sucre.webp',
  'la-loma-cesar.webp',
  'montelibano-córdoba.jpg',
  'montería-córdoba.webp',
  'montería-2-córdoba.webp',
  'montería-córdoba-b-alfonso-lopez.webp',
  'montería-córdoba-b-la-gloria.webp',
  'montería-córdoba-b-la-granja.webp',
  'montería-córdoba-b-p-5.webp',
  'montería-córdoba-b-rancho-grande.webp',
  'purísima-córdoba.webp',
  'sahagún-córdoba.webp',
  'sahagún-2-córdoba.webp',
] as const

export type PuntoVentaImage = (typeof PUNTOS_VENTA_IMAGES)[number]

const WORD_LABELS: Record<string, string> = {
  ayapel: 'Ayapel',
  cali: 'Cali',
  chinu: 'Chinú',
  chinú: 'Chinú',
  cordoba: 'Córdoba',
  córdoba: 'Córdoba',
  cesar: 'Cesar',
  cauca: 'Cauca',
  del: 'del',
  el: 'El',
  la: 'La',
  loma: 'Loma',
  montelibano: 'Montelíbano',
  monteria: 'Montería',
  montería: 'Montería',
  purisima: 'Purísima',
  purísima: 'Purísima',
  roble: 'Roble',
  sahagun: 'Sahagún',
  sahagún: 'Sahagún',
  sucre: 'Sucre',
  valle: 'Valle',
  alfonso: 'Alfonso',
  lopez: 'López',
  gloria: 'Gloria',
  granja: 'Granja',
  rancho: 'Rancho',
  grande: 'Grande',
  p: 'P',
}

export interface PuntoVentaLocation {
  city: string
  department: string
  neighborhood?: string
}

function formatWord(word: string): string {
  const key = word.toLowerCase()
  if (WORD_LABELS[key]) return WORD_LABELS[key]
  return key.charAt(0).toUpperCase() + key.slice(1)
}

/** Omite segmentos solo numéricos (variantes como "2" en ayapel-2-córdoba) */
function formatCityDeptPhrase(parts: string[]): string {
  return parts
    .filter((part) => !/^\d+$/.test(part))
    .map(formatWord)
    .join(' ')
}

function formatNeighborhoodPhrase(parts: string[]): string {
  return parts.map(formatWord).join(' ')
}

function splitCityAndDepartment(parts: string[]): { cityParts: string[]; deptParts: string[] } {
  if (parts.length >= 3 && parts.slice(-3).join('-') === 'valle-del-cauca') {
    return { cityParts: parts.slice(0, -3), deptParts: parts.slice(-3) }
  }
  if (parts.length < 2) {
    return { cityParts: parts, deptParts: [] }
  }
  return { cityParts: parts.slice(0, -1), deptParts: [parts[parts.length - 1]] }
}

/** Parsea el nombre de archivo a ciudad, departamento y barrio opcional */
export function parsePuntoVentaLocation(filename: string): PuntoVentaLocation {
  const base = filename.replace(/\.(webp|jpg|jpeg)$/i, '')
  let neighborhood: string | undefined
  let mainSlug = base

  const barrioIndex = base.indexOf('-b-')
  if (barrioIndex !== -1) {
    mainSlug = base.slice(0, barrioIndex)
    neighborhood = formatNeighborhoodPhrase(base.slice(barrioIndex + 3).split('-').filter(Boolean))
  }

  const parts = mainSlug.split('-').filter(Boolean)
  const { cityParts, deptParts } = splitCityAndDepartment(parts)

  return {
    city: formatCityDeptPhrase(cityParts),
    department: formatCityDeptPhrase(deptParts),
    neighborhood: neighborhood || undefined,
  }
}

/** Etiqueta para carrusel, lightbox y alt (sin números de variante) */
export function formatPuntoVentaLabel(filename: string): string {
  const { city, department, neighborhood } = parsePuntoVentaLocation(filename)
  const main = department ? `${city}, ${department}` : city
  if (neighborhood) {
    return `${main} · ${neighborhood}`
  }
  return main
}

/** Ciudad y departamento para testimonios (sin barrio en la línea principal) */
export function formatPuntoVentaCity(filename: string): string {
  const { city, department, neighborhood } = parsePuntoVentaLocation(filename)
  const main = department ? `${city}, ${department}` : city
  if (neighborhood) {
    return `${main} · Barrio ${neighborhood}`
  }
  return main
}

export function getPuntoVentaSrc(filename: string) {
  return `${PUNTOS_VENTA_FOLDER}/${encodeURIComponent(filename)}`
}
