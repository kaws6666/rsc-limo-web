/**
 * Vehicle + site-settings content, served from local static data.
 *
 * These were Sanity CMS queries once; the CMS was removed and content now
 * lives in `lib/vehicles-data.ts` and `lib/site-settings-data.ts`. Edit those
 * files to update the site. The functions stay async so callers can keep
 * awaiting them if content ever moves back behind a network call.
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
