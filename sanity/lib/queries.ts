/**
 * Vehicle + site-settings queries — backed by local static data.
 * Sanity CMS has been removed; all content lives in lib/vehicles-data.ts
 * and lib/site-settings-data.ts. Edit those files to update the site.
 *
 * The function signatures are unchanged so no page files need to be touched.
 */

import { VEHICLES } from "@/lib/vehicles-data"
import { SITE_SETTINGS } from "@/lib/site-settings-data"

export async function getAllVehicles() {
  return VEHICLES
}

export async function getVehicleBySlug(slug: string) {
  return VEHICLES.find((v) => v.slug === slug) ?? null
}

export async function getSiteSettings() {
  return SITE_SETTINGS
}
