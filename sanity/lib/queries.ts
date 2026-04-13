import { client } from './client'

export async function getAllVehicles() {
  return client.fetch(`
    *[_type == "vehicle"] | order(order asc) {
      "slug": slug.current,
      name,
      nameZh,
      category,
      categoryZh,
      passengers,
      luggage,
      startingPrice,
      description,
      descriptionZh,
      features,
      featuresZh,
      pricing,
    }
  `)
}

export async function getVehicleBySlug(slug: string) {
  return client.fetch(`
    *[_type == "vehicle" && slug.current == $slug][0] {
      "slug": slug.current,
      name,
      nameZh,
      category,
      categoryZh,
      passengers,
      luggage,
      startingPrice,
      description,
      descriptionZh,
      features,
      featuresZh,
      pricing,
    }
  `, { slug })
}

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0] {
      surcharges,
      surchargesZh,
    }
  `)
}
