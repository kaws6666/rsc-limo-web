import type { MetadataRoute } from "next"
import { getAllVehicles } from "@/lib/content"

const SITE_URL = "https://rsclimo.com.sg"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const vehicles = await getAllVehicles()

  const vehicleEntries: MetadataRoute.Sitemap = vehicles.map((v: { slug: string }) => ({
    url: `${SITE_URL}/fleet/${v.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...vehicleEntries,
    {
      url: `${SITE_URL}/terms`,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/privacy-driver`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
