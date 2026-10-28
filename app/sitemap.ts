import type { MetadataRoute } from "next"
import { getAllVehicles } from "@/lib/content"
import { LANDING_PAGES } from "@/lib/landing-pages"
import { SITE_URL } from "@/lib/seo"

const CONTENT_UPDATED = new Date("2026-10-28")

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const vehicles = await getAllVehicles()

  const vehicleEntries: MetadataRoute.Sitemap = vehicles.map((v: { slug: string }) => ({
    url: `${SITE_URL}/fleet/${v.slug}`,
    lastModified: CONTENT_UPDATED,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  const landingEntries: MetadataRoute.Sitemap = LANDING_PAGES.map((p) => ({
    url: `${SITE_URL}/${p.slug}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: "monthly",
    priority: 0.9,
  }))

  return [
    { url: SITE_URL, lastModified: CONTENT_UPDATED, changeFrequency: "weekly", priority: 1 },
    ...landingEntries,
    ...vehicleEntries,
    { url: `${SITE_URL}/terms`, lastModified: CONTENT_UPDATED, changeFrequency: "yearly", priority: 0.3 },
  ]
}
