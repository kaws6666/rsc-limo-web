/**
 * One-time Sanity migration — vehicle data updates
 *
 * What this does:
 *   1. Toyota Alphard: 6 pax / 4 luggage  →  5 pax / 2 luggage
 *   2. Mercedes S-Class: 3 pax            →  2 pax / 3 luggage
 *   3. Mercedes E-Class: 3 pax            →  2 pax / 3 luggage
 *   4. Toyota HiAce: rename "13-Seater Toyota Hiace" → "13 Seater Toyota Hi-Ace"
 *   5. Create new "20 Seater Mini Coach Bus" document
 *
 * How to run:
 *   1. Go to https://www.sanity.io/manage/personal/project/wwhsr4vs/api/tokens
 *   2. Create a token with "Editor" permissions
 *   3. Run: $env:SANITY_TOKEN="your-token-here"; node scripts/sanity-update-vehicles.mjs
 */

const PROJECT_ID = 'wwhsr4vs';
const DATASET    = 'production';
const TOKEN      = process.env.SANITY_TOKEN;

if (!TOKEN) {
  console.error('');
  console.error('  Missing SANITY_TOKEN environment variable.');
  console.error('  Get a token at: https://www.sanity.io/manage/personal/project/wwhsr4vs/api/tokens');
  console.error('  Then run:  $env:SANITY_TOKEN="sk..." ; node scripts/sanity-update-vehicles.mjs');
  console.error('');
  process.exit(1);
}

const mutations = [
  // 1. Toyota Alphard / Vellfire — comfort-correct pax + luggage
  {
    patch: {
      id: 'vehicle-toyota-alphard',
      set: { passengers: 5, luggage: 2 },
    },
  },
  // 2. Mercedes-Benz S-Class — executive 2-pax config
  {
    patch: {
      id: 'vehicle-mercedes-s-class',
      set: { passengers: 2, luggage: 3 },
    },
  },
  // 3. Mercedes-Benz E-Class — executive 2-pax config
  {
    patch: {
      id: 'vehicle-mercedes-e-class',
      set: { passengers: 2, luggage: 3 },
    },
  },
  // 4. Toyota HiAce — rename to correct spelling
  {
    patch: {
      id: 'vehicle-toyota-hiace',
      set: { name: '13 Seater Toyota Hi-Ace' },
    },
  },
  // 5. New: 20 Seater Mini Coach Bus
  {
    createIfNotExists: {
      _id:   'vehicle-mini-coach-bus',
      _type: 'vehicle',
      name:  '20 Seater Mini Coach Bus',
      slug:  { _type: 'slug', current: 'mini-coach-bus' },
      category: 'GROUP TRANSPORT',
      passengers: 20,
      luggage: 10,
      startingPrice: 'From $180',
      description:
        'Ideal for corporate events, airport group transfers, and private outings. ' +
        'The 20-seater Mini Coach Bus combines spacious seating with ample luggage storage, ' +
        'delivering a comfortable and professional group travel experience.',
      features: [
        '20 Passenger Seats',
        'Air-Conditioning',
        'Luggage Compartment',
        'Professional Chauffeur',
        'Corporate & Event Transfers',
      ],
      order: 7,
    },
  },
];

console.log(`Applying ${mutations.length} mutations to Sanity (${PROJECT_ID}/${DATASET})...`);

const res = await fetch(
  `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${DATASET}`,
  {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  }
);

const json = await res.json();

if (!res.ok) {
  console.error('Sanity API error:');
  console.error(JSON.stringify(json, null, 2));
  process.exit(1);
}

console.log('Done! Results:');
(json.results ?? []).forEach((r, i) => {
  console.log(`  [${i + 1}] ${r.operation} → ${r.id} (${r.status})`);
});
console.log('\nAll changes applied. Redeploy the marketing site to pick up Sanity updates.');
