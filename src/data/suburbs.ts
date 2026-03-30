export interface SuburbData {
  slug: string;
  name: string;
  region: string;
  description: string;
  industries: string[];
}

export const regions = [
  "Gippsland",
  "Outer South East",
  "Greater Dandenong",
  "Frankston & Mornington Peninsula",
  "Outer East",
  "Outer North",
  "Outer West",
  "Greater Geelong",
  "Surf Coast & Bellarine",
  "Central Highlands",
  "Central Victoria & Macedon Ranges",
  "Greater Shepparton & Murray",
  "Northeast Victoria",
  "Wimmera & Western Districts",
  "Inner Melbourne",
  "Inner East & South East",
  "Regional Victoria",
] as const;

export type Region = (typeof regions)[number];

export const suburbs: SuburbData[] = [
  // ─── GIPPSLAND ─────────────────────────────────────────────────────
  {
    slug: "warragul",
    name: "Warragul",
    region: "Gippsland",
    description:
      "Warragul is the commercial heart of West Gippsland, a fast-growing service hub with a strong mix of trades, hospitality, and professional services.",
    industries: ["Trades", "Cafes & Restaurants", "Professional Services", "Retail"],
  },
  {
    slug: "drouin",
    name: "Drouin",
    region: "Gippsland",
    description:
      "Drouin is a thriving rural town with a loyal local customer base and rising demand for quality tradespeople and local services.",
    industries: ["Trades", "Retail", "Cafes & Restaurants", "Agriculture"],
  },
  {
    slug: "korumburra",
    name: "Korumburra",
    region: "Gippsland",
    description:
      "Korumburra is South Gippsland's service town, drawing customers from surrounding farming communities who rely on trusted local businesses.",
    industries: ["Trades", "Agriculture", "Retail", "Health Services"],
  },
  {
    slug: "traralgon",
    name: "Traralgon",
    region: "Gippsland",
    description:
      "Traralgon is the largest city in the Latrobe Valley with a strong commercial centre and a broad range of trades, retail, and professional services.",
    industries: ["Trades", "Professional Services", "Retail", "Health Services"],
  },
  {
    slug: "morwell",
    name: "Morwell",
    region: "Gippsland",
    description:
      "Morwell is a busy working town in the heart of the Latrobe Valley with strong demand for local trades and small business services.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "moe",
    name: "Moe",
    region: "Gippsland",
    description:
      "Moe is a compact Gippsland town with a tight-knit business community where word of mouth rules - and a professional website makes you stand out instantly.",
    industries: ["Trades", "Retail", "Cafes & Restaurants", "Health Services"],
  },
  {
    slug: "sale",
    name: "Sale",
    region: "Gippsland",
    description:
      "Sale is the commercial hub of East Gippsland, serving a wide catchment area of farming, trade, and professional services businesses.",
    industries: ["Professional Services", "Trades", "Agriculture", "Retail"],
  },
  {
    slug: "bairnsdale",
    name: "Bairnsdale",
    region: "Gippsland",
    description:
      "Bairnsdale is East Gippsland's largest town and a growing hub for trades, tourism, and professional services across the region.",
    industries: ["Trades", "Tourism", "Professional Services", "Retail"],
  },
  {
    slug: "leongatha",
    name: "Leongatha",
    region: "Gippsland",
    description:
      "Leongatha is a prosperous South Gippsland town with a strong agricultural and service economy and a growing range of local businesses.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "wonthaggi",
    name: "Wonthaggi",
    region: "Gippsland",
    description:
      "Wonthaggi is Bass Coast's commercial centre, a busy coastal town with strong trade and hospitality sectors serving both locals and visitors.",
    industries: ["Trades", "Hospitality", "Tourism", "Retail"],
  },

  // ─── OUTER SOUTH EAST MELBOURNE ────────────────────────────────────
  {
    slug: "pakenham",
    name: "Pakenham",
    region: "Outer South East",
    description:
      "Pakenham is one of Melbourne's fastest growing outer suburbs, with thousands of new residents every year creating huge demand for local services.",
    industries: ["Trades", "Cafes & Restaurants", "Real Estate", "Health Services"],
  },
  {
    slug: "berwick",
    name: "Berwick",
    region: "Outer South East",
    description:
      "Berwick is a well-established outer southeast suburb with affluent households and strong demand for quality local trades and professional services.",
    industries: ["Health Services", "Professional Services", "Cafes & Restaurants", "Trades"],
  },
  {
    slug: "cranbourne",
    name: "Cranbourne",
    region: "Outer South East",
    description:
      "Cranbourne is a rapidly expanding suburb with a booming residential population actively looking for trusted local tradespeople and businesses.",
    industries: ["Trades", "Food & Hospitality", "Mechanics", "Retail"],
  },
  {
    slug: "narre-warren",
    name: "Narre Warren",
    region: "Outer South East",
    description:
      "Narre Warren sits at the centre of Casey, one of Victoria's most populated LGAs - prime territory for local businesses wanting maximum reach.",
    industries: ["Trades", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "officer",
    name: "Officer",
    region: "Outer South East",
    description:
      "Officer is one of Melbourne's newest growth corridors, with rapid residential development creating strong demand for local businesses of all kinds.",
    industries: ["Trades", "Cafes & Restaurants", "Retail", "Health Services"],
  },
  {
    slug: "beaconsfield",
    name: "Beaconsfield",
    region: "Outer South East",
    description:
      "Beaconsfield is a thriving outer southeast community with strong family demographics and excellent opportunities for local service businesses.",
    industries: ["Trades", "Cafes & Restaurants", "Health Services", "Professional Services"],
  },
  {
    slug: "clyde",
    name: "Clyde",
    region: "Outer South East",
    description:
      "Clyde is one of Victoria's fastest growing new suburbs, with entire new communities actively searching for every type of local service business.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "clyde-north",
    name: "Clyde North",
    region: "Outer South East",
    description:
      "Clyde North is a booming growth suburb where thousands of new residents have recently moved and are actively looking for trusted local businesses.",
    industries: ["Trades", "Health Services", "Retail", "Cafes & Restaurants"],
  },
  {
    slug: "hampton-park",
    name: "Hampton Park",
    region: "Outer South East",
    description:
      "Hampton Park is a diverse and busy southeastern suburb with a strong small business community and consistent demand for local services.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "endeavour-hills",
    name: "Endeavour Hills",
    region: "Outer South East",
    description:
      "Endeavour Hills is an established family suburb in Casey with loyal local customers and strong competition among local service businesses.",
    industries: ["Trades", "Health Services", "Professional Services", "Retail"],
  },

  // ─── GREATER DANDENONG ─────────────────────────────────────────────
  {
    slug: "dandenong",
    name: "Dandenong",
    region: "Greater Dandenong",
    description:
      "Dandenong is a major commercial and industrial hub for southeast Melbourne, with one of the most active and diverse business communities in Victoria.",
    industries: ["Trades", "Manufacturing", "Retail", "Professional Services"],
  },
  {
    slug: "noble-park",
    name: "Noble Park",
    region: "Greater Dandenong",
    description:
      "Noble Park is a busy southeastern suburb with a strong mix of trades, retail, and small businesses serving a large and diverse local population.",
    industries: ["Trades", "Retail", "Cafes & Restaurants", "Mechanics"],
  },
  {
    slug: "springvale",
    name: "Springvale",
    region: "Greater Dandenong",
    description:
      "Springvale is a vibrant multicultural suburb with an exceptionally active local business scene and strong community loyalty to local providers.",
    industries: ["Cafes & Restaurants", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "keysborough",
    name: "Keysborough",
    region: "Greater Dandenong",
    description:
      "Keysborough is a growing southeastern suburb with a strong industrial and residential mix, creating consistent demand for trade and service businesses.",
    industries: ["Trades", "Manufacturing", "Retail", "Health Services"],
  },

  // ─── FRANKSTON & MORNINGTON PENINSULA ──────────────────────────────
  {
    slug: "frankston",
    name: "Frankston",
    region: "Frankston & Mornington Peninsula",
    description:
      "Frankston is the gateway to the Mornington Peninsula and home to a thriving mix of retail, hospitality, and trade businesses.",
    industries: ["Trades", "Hospitality", "Retail", "Health Services"],
  },
  {
    slug: "mornington",
    name: "Mornington",
    region: "Frankston & Mornington Peninsula",
    description:
      "Mornington is a vibrant coastal town on the Peninsula with a strong local business culture and year-round customer demand.",
    industries: ["Hospitality", "Retail", "Trades", "Health Services"],
  },
  {
    slug: "rosebud",
    name: "Rosebud",
    region: "Frankston & Mornington Peninsula",
    description:
      "Rosebud is a popular Peninsula destination with strong seasonal trade and a loyal year-round local business community.",
    industries: ["Hospitality", "Tourism", "Retail", "Trades"],
  },
  {
    slug: "mccrae",
    name: "McCrae",
    region: "Frankston & Mornington Peninsula",
    description:
      "McCrae is a quiet coastal community on the Mornington Peninsula with discerning local residents who support quality local businesses.",
    industries: ["Hospitality", "Trades", "Retail"],
  },
  {
    slug: "dromana",
    name: "Dromana",
    region: "Frankston & Mornington Peninsula",
    description:
      "Dromana is a growing Peninsula hub with excellent access to tourists and locals, making it ideal for hospitality and trade businesses.",
    industries: ["Hospitality", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "rye",
    name: "Rye",
    region: "Frankston & Mornington Peninsula",
    description:
      "Rye is a popular summer destination with strong seasonal demand and a year-round base of local residents supporting Peninsula businesses.",
    industries: ["Hospitality", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "sorrento",
    name: "Sorrento",
    region: "Frankston & Mornington Peninsula",
    description:
      "Sorrento is one of the Peninsula's most prestigious towns, where high-end hospitality and premium trade businesses thrive.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Retail"],
  },
  {
    slug: "portsea",
    name: "Portsea",
    region: "Frankston & Mornington Peninsula",
    description:
      "Portsea is Victoria's most exclusive coastal address, home to premium businesses serving affluent locals and visitors.",
    industries: ["Hospitality", "Accommodation", "Tourism"],
  },
  {
    slug: "hastings",
    name: "Hastings",
    region: "Frankston & Mornington Peninsula",
    description:
      "Hastings is the Peninsula's working town with a strong marine industry, trades sector, and growing residential community.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "somerville",
    name: "Somerville",
    region: "Frankston & Mornington Peninsula",
    description:
      "Somerville is a quiet rural-residential Peninsula community with strong demand for local tradies and service businesses.",
    industries: ["Trades", "Retail", "Health Services"],
  },

  // ─── OUTER EAST MELBOURNE ──────────────────────────────────────────
  {
    slug: "ringwood",
    name: "Ringwood",
    region: "Outer East",
    description:
      "Ringwood is a major outer-eastern hub with Eastland shopping precinct, strong commercial activity, and excellent local business demand.",
    industries: ["Trades", "Retail", "Professional Services", "Health Services"],
  },
  {
    slug: "croydon",
    name: "Croydon",
    region: "Outer East",
    description:
      "Croydon is a busy outer-eastern suburb with a strong local business community and consistent demand for trades and professional services.",
    industries: ["Trades", "Cafes & Restaurants", "Retail", "Health Services"],
  },
  {
    slug: "lilydale",
    name: "Lilydale",
    region: "Outer East",
    description:
      "Lilydale is the gateway to the Yarra Valley with strong commercial activity and a large residential catchment for local service businesses.",
    industries: ["Trades", "Hospitality", "Retail", "Tourism"],
  },
  {
    slug: "healesville",
    name: "Healesville",
    region: "Outer East",
    description:
      "Healesville is a thriving Yarra Valley gateway with strong tourism, hospitality, and local service business activity.",
    industries: ["Hospitality", "Tourism", "Trades", "Cafes & Restaurants"],
  },
  {
    slug: "yarra-glen",
    name: "Yarra Glen",
    region: "Outer East",
    description:
      "Yarra Glen is at the heart of the Yarra Valley wine region, with tourism and local residents creating consistent demand for local businesses.",
    industries: ["Hospitality", "Tourism", "Cafes & Restaurants", "Agriculture"],
  },
  {
    slug: "belgrave",
    name: "Belgrave",
    region: "Outer East",
    description:
      "Belgrave is a unique outer-eastern community with a strong local identity and loyal customers who support local businesses.",
    industries: ["Cafes & Restaurants", "Creative Services", "Trades", "Tourism"],
  },
  {
    slug: "ferntree-gully",
    name: "Ferntree Gully",
    region: "Outer East",
    description:
      "Ferntree Gully is a large outer-eastern suburb at the foot of the Dandenong Ranges with excellent local business demand.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "bayswater",
    name: "Bayswater",
    region: "Outer East",
    description:
      "Bayswater is a busy outer-eastern suburb with strong industrial and residential areas creating consistent demand for trades and services.",
    industries: ["Trades", "Manufacturing", "Retail", "Mechanics"],
  },
  {
    slug: "boronia",
    name: "Boronia",
    region: "Outer East",
    description:
      "Boronia is an established outer-eastern suburb with strong family demographics and consistent demand for local tradespeople and services.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "wantirna",
    name: "Wantirna",
    region: "Outer East",
    description:
      "Wantirna is a prosperous eastern suburb near Knox with high-income households and excellent demand for quality local services.",
    industries: ["Professional Services", "Health Services", "Trades", "Retail"],
  },
  {
    slug: "glen-waverley",
    name: "Glen Waverley",
    region: "Outer East",
    description:
      "Glen Waverley is a major outer-eastern hub with The Glen shopping centre and a large, affluent residential catchment for local businesses.",
    industries: ["Retail", "Cafes & Restaurants", "Professional Services", "Health Services"],
  },
  {
    slug: "mount-waverley",
    name: "Mount Waverley",
    region: "Outer East",
    description:
      "Mount Waverley is a prestigious eastern suburb with excellent local business demand from its large and affluent residential community.",
    industries: ["Professional Services", "Health Services", "Trades", "Retail"],
  },

  // ─── OUTER NORTH MELBOURNE ─────────────────────────────────────────
  {
    slug: "craigieburn",
    name: "Craigieburn",
    region: "Outer North",
    description:
      "Craigieburn is one of Melbourne's fastest growing northern suburbs, with a booming residential population and massive demand for local services.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "roxburgh-park",
    name: "Roxburgh Park",
    region: "Outer North",
    description:
      "Roxburgh Park is an established northern growth suburb with strong family demographics and consistent demand for local businesses.",
    industries: ["Trades", "Retail", "Health Services", "Mechanics"],
  },
  {
    slug: "epping",
    name: "Epping",
    region: "Outer North",
    description:
      "Epping is a major northern hub with Pacific Epping shopping centre, strong commercial activity, and excellent business opportunities.",
    industries: ["Trades", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "south-morang",
    name: "South Morang",
    region: "Outer North",
    description:
      "South Morang is a rapidly growing northern suburb with thousands of new residents creating strong demand for every type of local service.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "mernda",
    name: "Mernda",
    region: "Outer North",
    description:
      "Mernda is a fast-developing outer northern suburb where new residents are actively seeking reliable local tradespeople and service businesses.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "doreen",
    name: "Doreen",
    region: "Outer North",
    description:
      "Doreen is a growing outer northern community where strong residential development is creating consistent new demand for local businesses.",
    industries: ["Trades", "Health Services", "Retail", "Cafes & Restaurants"],
  },
  {
    slug: "thomastown",
    name: "Thomastown",
    region: "Outer North",
    description:
      "Thomastown is an established northern suburb with a strong industrial and residential mix creating reliable demand for trades and services.",
    industries: ["Trades", "Manufacturing", "Retail", "Mechanics"],
  },
  {
    slug: "bundoora",
    name: "Bundoora",
    region: "Outer North",
    description:
      "Bundoora is a busy northern suburb anchored by La Trobe University with strong local business activity across multiple sectors.",
    industries: ["Cafes & Restaurants", "Retail", "Health Services", "Trades"],
  },
  {
    slug: "mill-park",
    name: "Mill Park",
    region: "Outer North",
    description:
      "Mill Park is a large northern suburb with excellent local business demand from its substantial and growing residential population.",
    industries: ["Trades", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "lalor",
    name: "Lalor",
    region: "Outer North",
    description:
      "Lalor is a diverse and active northern suburb with a strong working-class community and consistent demand for trades and local services.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },

  // ─── OUTER WEST MELBOURNE ──────────────────────────────────────────
  {
    slug: "melton",
    name: "Melton",
    region: "Outer West",
    description:
      "Melton is one of Victoria's fastest growing cities, with explosive residential growth creating extraordinary demand for local businesses of every kind.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "melton-south",
    name: "Melton South",
    region: "Outer West",
    description:
      "Melton South is a well-established part of the growing Melton corridor with strong local demand for trades and service businesses.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "rockbank",
    name: "Rockbank",
    region: "Outer West",
    description:
      "Rockbank is a new growth suburb in Melbourne's western corridor where entirely new communities are actively seeking local service providers.",
    industries: ["Trades", "Retail", "Health Services"],
  },
  {
    slug: "sunbury",
    name: "Sunbury",
    region: "Outer West",
    description:
      "Sunbury is a large outer-western satellite town with a strong independent community spirit and excellent demand for quality local businesses.",
    industries: ["Trades", "Cafes & Restaurants", "Retail", "Health Services"],
  },
  {
    slug: "werribee",
    name: "Werribee",
    region: "Outer West",
    description:
      "Werribee is a major outer-western hub with strong residential growth and consistent demand for trades, hospitality, and professional services.",
    industries: ["Trades", "Hospitality", "Retail", "Professional Services"],
  },
  {
    slug: "hoppers-crossing",
    name: "Hoppers Crossing",
    region: "Outer West",
    description:
      "Hoppers Crossing is a busy western suburb with a large residential population and strong ongoing demand for local service businesses.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "point-cook",
    name: "Point Cook",
    region: "Outer West",
    description:
      "Point Cook is a premium western suburb with high household incomes and strong demand for quality local businesses and services.",
    industries: ["Professional Services", "Health Services", "Cafes & Restaurants", "Trades"],
  },
  {
    slug: "truganina",
    name: "Truganina",
    region: "Outer West",
    description:
      "Truganina is one of Melbourne's newest growth areas in the west, with rapidly expanding residential estates and huge demand for local services.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "tarneit",
    name: "Tarneit",
    region: "Outer West",
    description:
      "Tarneit is a booming western growth corridor where thousands of new families are establishing themselves and seeking trusted local businesses.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "wyndham-vale",
    name: "Wyndham Vale",
    region: "Outer West",
    description:
      "Wyndham Vale is a fast-growing western suburb where new communities are actively looking for reliable local tradespeople and service businesses.",
    industries: ["Trades", "Retail", "Health Services", "Mechanics"],
  },

  // ─── GREATER GEELONG ───────────────────────────────────────────────
  {
    slug: "geelong",
    name: "Geelong",
    region: "Greater Geelong",
    description:
      "Geelong is Victoria's second-largest city with a thriving business scene, strong trades sector, and a rapidly growing population driving demand for local services.",
    industries: ["Trades", "Hospitality", "Professional Services", "Retail"],
  },
  {
    slug: "geelong-west",
    name: "Geelong West",
    region: "Greater Geelong",
    description:
      "Geelong West is a vibrant inner suburb with a booming cafe and small business culture and strong local community support for independent businesses.",
    industries: ["Cafes & Restaurants", "Creative Services", "Retail", "Trades"],
  },
  {
    slug: "belmont",
    name: "Belmont",
    region: "Greater Geelong",
    description:
      "Belmont is one of Geelong's most established and affluent suburbs with strong demand for quality trades, health, and professional services.",
    industries: ["Health Services", "Professional Services", "Trades", "Retail"],
  },
  {
    slug: "highton",
    name: "Highton",
    region: "Greater Geelong",
    description:
      "Highton is a prestige Geelong suburb with high household incomes and consistent demand for quality local businesses and professional services.",
    industries: ["Professional Services", "Health Services", "Trades", "Retail"],
  },
  {
    slug: "newtown",
    name: "Newtown",
    region: "Greater Geelong",
    description:
      "Newtown is Geelong's most prestigious suburb with heritage homes, affluent residents, and strong demand for premium local services.",
    industries: ["Professional Services", "Cafes & Restaurants", "Health Services", "Retail"],
  },
  {
    slug: "norlane",
    name: "Norlane",
    region: "Greater Geelong",
    description:
      "Norlane is a working community on Geelong's north side with strong demand for affordable, reliable local trade and service businesses.",
    industries: ["Trades", "Mechanics", "Retail", "Health Services"],
  },
  {
    slug: "corio",
    name: "Corio",
    region: "Greater Geelong",
    description:
      "Corio is a large northern Geelong suburb with a strong working-class community and consistent demand for local trades and services.",
    industries: ["Trades", "Mechanics", "Retail", "Health Services"],
  },
  {
    slug: "lara",
    name: "Lara",
    region: "Greater Geelong",
    description:
      "Lara is a fast-growing Geelong-region suburb that blends suburban living with community spirit and strong local business demand.",
    industries: ["Trades", "Health Services", "Retail", "Cafes & Restaurants"],
  },
  {
    slug: "leopold",
    name: "Leopold",
    region: "Greater Geelong",
    description:
      "Leopold is a growing Geelong suburb with excellent local demographics and strong demand for trades, health, and professional services.",
    industries: ["Trades", "Health Services", "Professional Services", "Retail"],
  },

  // ─── SURF COAST & BELLARINE ────────────────────────────────────────
  {
    slug: "ocean-grove",
    name: "Ocean Grove",
    region: "Surf Coast & Bellarine",
    description:
      "Ocean Grove is a thriving Bellarine Peninsula coastal town with year-round residents and strong tourist trade supporting local businesses.",
    industries: ["Hospitality", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "barwon-heads",
    name: "Barwon Heads",
    region: "Surf Coast & Bellarine",
    description:
      "Barwon Heads is a sought-after coastal community with affluent residents and visitors creating strong demand for premium local businesses.",
    industries: ["Hospitality", "Tourism", "Trades", "Cafes & Restaurants"],
  },
  {
    slug: "torquay",
    name: "Torquay",
    region: "Surf Coast & Bellarine",
    description:
      "Torquay is the surf capital of Australia, a rapidly growing coastal city with excellent local business opportunities across hospitality, trades, and services.",
    industries: ["Hospitality", "Tourism", "Retail", "Trades"],
  },
  {
    slug: "anglesea",
    name: "Anglesea",
    region: "Surf Coast & Bellarine",
    description:
      "Anglesea is a beloved Surf Coast town with strong seasonal tourism and a loyal year-round community supporting local businesses.",
    industries: ["Hospitality", "Tourism", "Cafes & Restaurants", "Trades"],
  },
  {
    slug: "lorne",
    name: "Lorne",
    region: "Surf Coast & Bellarine",
    description:
      "Lorne is one of Victoria's most iconic coastal destinations with premium hospitality and tourism businesses thriving year-round.",
    industries: ["Hospitality", "Accommodation", "Tourism", "Cafes & Restaurants"],
  },
  {
    slug: "portarlington",
    name: "Portarlington",
    region: "Surf Coast & Bellarine",
    description:
      "Portarlington is a growing Bellarine Peninsula town with a strong local character and increasing demand for local businesses.",
    industries: ["Hospitality", "Trades", "Retail", "Tourism"],
  },
  {
    slug: "queenscliff",
    name: "Queenscliff",
    region: "Surf Coast & Bellarine",
    description:
      "Queenscliff is a heritage coastal town with premium tourism, hospitality, and local service businesses.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Retail"],
  },
  {
    slug: "drysdale",
    name: "Drysdale",
    region: "Surf Coast & Bellarine",
    description:
      "Drysdale is the commercial hub of the Bellarine Peninsula with a fast-growing residential population and strong local business demand.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "st-leonards",
    name: "St Leonards",
    region: "Surf Coast & Bellarine",
    description:
      "St Leonards is a popular Bellarine coastal community with loyal residents and seasonal visitors supporting local businesses.",
    industries: ["Hospitality", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "portsmith",
    name: "Portarlington",
    region: "Surf Coast & Bellarine",
    description:
      "A thriving Bellarine community with growing residential population and strong local service demand.",
    industries: ["Trades", "Retail", "Hospitality", "Health Services"],
  },
  {
    slug: "aireys-inlet",
    name: "Aireys Inlet",
    region: "Surf Coast & Bellarine",
    description:
      "Aireys Inlet is a popular Surf Coast village with strong seasonal tourism and a loyal permanent resident base supporting local businesses.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Trades"],
  },

  // ─── CENTRAL HIGHLANDS ─────────────────────────────────────────────
  {
    slug: "ballarat",
    name: "Ballarat",
    region: "Central Highlands",
    description:
      "Ballarat is Victoria's third-largest city, a dynamic regional centre with a strong and diverse local business community across all sectors.",
    industries: ["Trades", "Hospitality", "Professional Services", "Retail"],
  },
  {
    slug: "ballarat-east",
    name: "Ballarat East",
    region: "Central Highlands",
    description:
      "Ballarat East is an established suburb in Victoria's third-largest city with consistent demand for local trades and service businesses.",
    industries: ["Trades", "Retail", "Health Services", "Mechanics"],
  },
  {
    slug: "wendouree",
    name: "Wendouree",
    region: "Central Highlands",
    description:
      "Wendouree is Ballarat's commercial heart, home to major retail and strong local business activity across trades and services.",
    industries: ["Retail", "Trades", "Health Services", "Professional Services"],
  },
  {
    slug: "sebastopol",
    name: "Sebastopol",
    region: "Central Highlands",
    description:
      "Sebastopol is a thriving Ballarat suburb with strong local business activity and consistent demand for trades and professional services.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "daylesford",
    name: "Daylesford",
    region: "Central Highlands",
    description:
      "Daylesford is a premium spa and tourism town with a thriving hospitality and wellness economy attracting visitors from across Victoria.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Health Services"],
  },
  {
    slug: "clunes",
    name: "Clunes",
    region: "Central Highlands",
    description:
      "Clunes is a charming heritage town with a passionate local community and growing interest in artisan and service businesses.",
    industries: ["Creative Services", "Hospitality", "Trades", "Retail"],
  },
  {
    slug: "ararat",
    name: "Ararat",
    region: "Central Highlands",
    description:
      "Ararat is a charming Central Highlands town with a loyal local business community and growing interest in trade and service businesses.",
    industries: ["Trades", "Agriculture", "Retail", "Health Services"],
  },

  // ─── CENTRAL VICTORIA & MACEDON RANGES ─────────────────────────────
  {
    slug: "bendigo",
    name: "Bendigo",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Bendigo is one of Victoria's fastest growing regional cities with a booming economy and excellent opportunities for local businesses.",
    industries: ["Trades", "Hospitality", "Professional Services", "Retail"],
  },
  {
    slug: "flora-hill",
    name: "Flora Hill",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Flora Hill is a Bendigo suburb home to La Trobe University with strong local business activity and consistent residential demand.",
    industries: ["Cafes & Restaurants", "Retail", "Health Services", "Trades"],
  },
  {
    slug: "strathdale",
    name: "Strathdale",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Strathdale is a desirable Bendigo suburb with high household incomes and strong demand for quality local businesses and services.",
    industries: ["Professional Services", "Health Services", "Trades", "Retail"],
  },
  {
    slug: "california-gully",
    name: "California Gully",
    region: "Central Victoria & Macedon Ranges",
    description:
      "California Gully is an established Bendigo community with loyal local customers and consistent demand for trades and local services.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "castlemaine",
    name: "Castlemaine",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Castlemaine is a vibrant creative and trade town with a passionate local community actively supporting independent local businesses.",
    industries: ["Creative Services", "Cafes & Restaurants", "Trades", "Retail"],
  },
  {
    slug: "kyneton",
    name: "Kyneton",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Kyneton is a thriving Macedon Ranges town with premium hospitality and a growing base of affluent tree-changers supporting local businesses.",
    industries: ["Hospitality", "Cafes & Restaurants", "Professional Services", "Trades"],
  },
  {
    slug: "gisborne",
    name: "Gisborne",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Gisborne is a growing Macedon Ranges town with strong residential development and excellent local business demand.",
    industries: ["Trades", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "woodend",
    name: "Woodend",
    region: "Central Victoria & Macedon Ranges",
    description:
      "Woodend is a premium Macedon Ranges community with high household incomes and strong demand for quality local businesses.",
    industries: ["Hospitality", "Cafes & Restaurants", "Professional Services", "Trades"],
  },

  // ─── GREATER SHEPPARTON & MURRAY ───────────────────────────────────
  {
    slug: "shepparton",
    name: "Shepparton",
    region: "Greater Shepparton & Murray",
    description:
      "Shepparton is the commercial centre of the Goulburn Valley with a strong agricultural, food processing, and service business economy.",
    industries: ["Agriculture", "Trades", "Retail", "Professional Services"],
  },
  {
    slug: "mooroopna",
    name: "Mooroopna",
    region: "Greater Shepparton & Murray",
    description:
      "Mooroopna is a busy Goulburn Valley town adjacent to Shepparton with strong local business activity and community support.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "cobram",
    name: "Cobram",
    region: "Greater Shepparton & Murray",
    description:
      "Cobram is a Murray River border town with a strong agricultural economy and loyal local community supporting local businesses.",
    industries: ["Agriculture", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "echuca",
    name: "Echuca",
    region: "Greater Shepparton & Murray",
    description:
      "Echuca is one of Victoria's most popular tourism destinations on the Murray with thriving hospitality and local business sectors.",
    industries: ["Tourism", "Hospitality", "Trades", "Retail"],
  },
  {
    slug: "kyabram",
    name: "Kyabram",
    region: "Greater Shepparton & Murray",
    description:
      "Kyabram is a productive Goulburn Valley agricultural town with strong local business activity across trades and services.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "swan-hill",
    name: "Swan Hill",
    region: "Greater Shepparton & Murray",
    description:
      "Swan Hill is a thriving Murray River city with a strong agricultural economy and loyal local business community.",
    industries: ["Agriculture", "Tourism", "Trades", "Retail"],
  },

  // ─── NORTHEAST VICTORIA ────────────────────────────────────────────
  {
    slug: "benalla",
    name: "Benalla",
    region: "Northeast Victoria",
    description:
      "Benalla is a prosperous regional town in northeast Victoria with a strong local economy and consistent business demand.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "wangaratta",
    name: "Wangaratta",
    region: "Northeast Victoria",
    description:
      "Wangaratta is a thriving northeast Victorian city with strong commercial activity and excellent opportunities for local businesses.",
    industries: ["Trades", "Hospitality", "Professional Services", "Retail"],
  },
  {
    slug: "wodonga",
    name: "Wodonga",
    region: "Northeast Victoria",
    description:
      "Wodonga is one of the fastest growing regional cities in Australia, with booming residential and commercial development driving massive business demand.",
    industries: ["Trades", "Retail", "Professional Services", "Health Services"],
  },
  {
    slug: "albury-wodonga",
    name: "Albury-Wodonga",
    region: "Northeast Victoria",
    description:
      "The Albury-Wodonga region is one of Australia's fastest growing inland cities with exceptional opportunities for local businesses on both sides of the border.",
    industries: ["Trades", "Hospitality", "Professional Services", "Retail"],
  },
  {
    slug: "bright",
    name: "Bright",
    region: "Northeast Victoria",
    description:
      "Bright is one of Victoria's most beautiful alpine towns with exceptional hospitality and tourism business opportunities.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Cafes & Restaurants"],
  },
  {
    slug: "myrtleford",
    name: "Myrtleford",
    region: "Northeast Victoria",
    description:
      "Myrtleford is a thriving alpine valley town with a strong tobacco, hops, and tourism economy supporting local businesses.",
    industries: ["Agriculture", "Hospitality", "Tourism", "Trades"],
  },
  {
    slug: "mansfield",
    name: "Mansfield",
    region: "Northeast Victoria",
    description:
      "Mansfield is a four-season alpine destination with strong tourism year-round and a thriving local business economy.",
    industries: ["Tourism", "Hospitality", "Trades", "Accommodation"],
  },

  // ─── WIMMERA & WESTERN DISTRICTS ───────────────────────────────────
  {
    slug: "warracknabeal",
    name: "Warracknabeal",
    region: "Wimmera & Western Districts",
    description:
      "Warracknabeal is the Wimmera's commercial hub with strong agricultural and service business activity serving a wide rural catchment.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "horsham",
    name: "Horsham",
    region: "Wimmera & Western Districts",
    description:
      "Horsham is the Wimmera's largest city with a strong economy across agriculture, retail, trades, and professional services.",
    industries: ["Agriculture", "Trades", "Retail", "Professional Services"],
  },
  {
    slug: "hamilton",
    name: "Hamilton",
    region: "Wimmera & Western Districts",
    description:
      "Hamilton is the hub of southwest Victoria's wool and sheep country with a strong local business community serving the broader region.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "stawell",
    name: "Stawell",
    region: "Wimmera & Western Districts",
    description:
      "Stawell is a Grampians gateway town with a strong local economy supported by tourism, agriculture, and local service businesses.",
    industries: ["Tourism", "Agriculture", "Trades", "Retail"],
  },

  // ─── INNER MELBOURNE ───────────────────────────────────────────────
  {
    slug: "richmond",
    name: "Richmond",
    region: "Inner Melbourne",
    description:
      "Richmond is one of Melbourne's most vibrant inner suburbs with world-class dining, retail, and a huge density of independent businesses.",
    industries: ["Cafes & Restaurants", "Retail", "Hospitality", "Creative Services"],
  },
  {
    slug: "collingwood",
    name: "Collingwood",
    region: "Inner Melbourne",
    description:
      "Collingwood is a creative hub with a thriving independent business scene and some of Melbourne's most loyal local customers.",
    industries: ["Creative Services", "Cafes & Restaurants", "Retail", "Hospitality"],
  },
  {
    slug: "fitzroy",
    name: "Fitzroy",
    region: "Inner Melbourne",
    description:
      "Fitzroy is Melbourne's original creative suburb with a dense concentration of independent cafes, restaurants, and service businesses.",
    industries: ["Cafes & Restaurants", "Creative Services", "Retail", "Hospitality"],
  },
  {
    slug: "carlton",
    name: "Carlton",
    region: "Inner Melbourne",
    description:
      "Carlton is home to Melbourne's famous Italian precinct and university district with exceptional density of cafes, restaurants, and local businesses.",
    industries: ["Cafes & Restaurants", "Hospitality", "Retail", "Professional Services"],
  },
  {
    slug: "brunswick",
    name: "Brunswick",
    region: "Inner Melbourne",
    description:
      "Brunswick is Melbourne's inner-north heartland with an intensely loyal local customer base and a thriving independent business culture.",
    industries: ["Cafes & Restaurants", "Creative Services", "Retail", "Hospitality"],
  },
  {
    slug: "northcote",
    name: "Northcote",
    region: "Inner Melbourne",
    description:
      "Northcote is a desirable inner-north suburb with affluent households, boutique cafes, and strong demand for quality local businesses.",
    industries: ["Cafes & Restaurants", "Retail", "Health Services", "Professional Services"],
  },
  {
    slug: "coburg",
    name: "Coburg",
    region: "Inner Melbourne",
    description:
      "Coburg is an evolving inner-north suburb with growing cafe culture, residential development, and increasing local business competition.",
    industries: ["Cafes & Restaurants", "Retail", "Trades", "Health Services"],
  },
  {
    slug: "essendon",
    name: "Essendon",
    region: "Inner Melbourne",
    description:
      "Essendon is one of Melbourne's most prestigious northern suburbs with excellent local business demand from affluent residents.",
    industries: ["Professional Services", "Health Services", "Cafes & Restaurants", "Retail"],
  },
  {
    slug: "moonee-ponds",
    name: "Moonee Ponds",
    region: "Inner Melbourne",
    description:
      "Moonee Ponds is a thriving inner-northwest hub with a busy commercial strip and strong local business culture.",
    industries: ["Retail", "Cafes & Restaurants", "Professional Services", "Health Services"],
  },
  {
    slug: "footscray",
    name: "Footscray",
    region: "Inner Melbourne",
    description:
      "Footscray is a vibrant inner-west hub with a rapidly gentrifying food scene and growing demand for quality local businesses.",
    industries: ["Cafes & Restaurants", "Retail", "Hospitality", "Trades"],
  },
  {
    slug: "sunshine",
    name: "Sunshine",
    region: "Inner Melbourne",
    description:
      "Sunshine is an evolving western hub with strong multicultural business culture and growing demand for local services as the area develops.",
    industries: ["Trades", "Retail", "Cafes & Restaurants", "Health Services"],
  },
  {
    slug: "st-kilda",
    name: "St Kilda",
    region: "Inner Melbourne",
    description:
      "St Kilda is one of Melbourne's most iconic beachside precincts with exceptional hospitality business density and year-round visitors.",
    industries: ["Hospitality", "Cafes & Restaurants", "Tourism", "Retail"],
  },
  {
    slug: "prahran",
    name: "Prahran",
    region: "Inner Melbourne",
    description:
      "Prahran is a premium inner-south suburb with Chapel Street's famous strip and high demand for quality cafes and local businesses.",
    industries: ["Cafes & Restaurants", "Retail", "Hospitality", "Creative Services"],
  },
  {
    slug: "south-yarra",
    name: "South Yarra",
    region: "Inner Melbourne",
    description:
      "South Yarra is one of Melbourne's most affluent suburbs with a premium hospitality and retail scene and excellent local business demand.",
    industries: ["Hospitality", "Retail", "Professional Services", "Cafes & Restaurants"],
  },

  // ─── INNER EAST & SOUTH EAST ───────────────────────────────────────
  {
    slug: "malvern",
    name: "Malvern",
    region: "Inner East & South East",
    description:
      "Malvern is a prestigious inner-southeast suburb with high household incomes and strong demand for premium local services.",
    industries: ["Professional Services", "Health Services", "Cafes & Restaurants", "Retail"],
  },
  {
    slug: "box-hill",
    name: "Box Hill",
    region: "Inner East & South East",
    description:
      "Box Hill is a major eastern hub with a thriving multicultural business scene and one of Melbourne's most active commercial centres.",
    industries: ["Retail", "Cafes & Restaurants", "Health Services", "Professional Services"],
  },
  {
    slug: "doncaster",
    name: "Doncaster",
    region: "Inner East & South East",
    description:
      "Doncaster is a prestigious eastern suburb anchored by Westfield Doncaster with excellent local business demand from high-income residents.",
    industries: ["Retail", "Professional Services", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "templestowe",
    name: "Templestowe",
    region: "Inner East & South East",
    description:
      "Templestowe is one of Melbourne's most affluent eastern suburbs with premium residents and strong demand for quality local businesses.",
    industries: ["Professional Services", "Health Services", "Trades", "Retail"],
  },

  // ─── REGIONAL VICTORIA ─────────────────────────────────────────────
  {
    slug: "mildura",
    name: "Mildura",
    region: "Regional Victoria",
    description:
      "Mildura is the Sunraysia's major city with a strong agricultural and tourism economy supporting a wide range of local businesses.",
    industries: ["Agriculture", "Tourism", "Trades", "Retail"],
  },
  {
    slug: "donald",
    name: "Donald",
    region: "Regional Victoria",
    description:
      "Donald is a Wimmera Mallee agricultural town with a tight-knit business community and strong local service demand.",
    industries: ["Agriculture", "Trades", "Retail"],
  },
  {
    slug: "colac",
    name: "Colac",
    region: "Regional Victoria",
    description:
      "Colac is a prosperous regional city on the Otway coast with a strong mixed economy across farming, trades, and local services.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "apollo-bay",
    name: "Apollo Bay",
    region: "Regional Victoria",
    description:
      "Apollo Bay is a stunning Great Ocean Road town with thriving hospitality, tourism, and local service businesses.",
    industries: ["Hospitality", "Tourism", "Accommodation", "Cafes & Restaurants"],
  },
  {
    slug: "seymour",
    name: "Seymour",
    region: "Regional Victoria",
    description:
      "Seymour is a busy Hume Corridor town with strong trade activity serving both local residents and passing highway traffic.",
    industries: ["Trades", "Retail", "Mechanics", "Health Services"],
  },
  {
    slug: "kilmore",
    name: "Kilmore",
    region: "Regional Victoria",
    description:
      "Kilmore is a growing Mitchell Shire town on Melbourne's northern doorstep with strong residential and local business development.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "wallan",
    name: "Wallan",
    region: "Regional Victoria",
    description:
      "Wallan is one of Victoria's fastest growing outer-metropolitan towns with massive residential development driving local business demand.",
    industries: ["Trades", "Retail", "Health Services", "Cafes & Restaurants"],
  },
  {
    slug: "whittlesea",
    name: "Whittlesea",
    region: "Regional Victoria",
    description:
      "Whittlesea is an outer-northern town at the edge of Melbourne's growth boundary with strong agricultural and local service business activity.",
    industries: ["Agriculture", "Trades", "Retail", "Health Services"],
  },
  {
    slug: "warburton",
    name: "Warburton",
    region: "Regional Victoria",
    description:
      "Warburton is a charming Upper Yarra Valley town with growing tourism and strong demand for quality local businesses.",
    industries: ["Tourism", "Hospitality", "Trades", "Cafes & Restaurants"],
  },
];

// Lookup helpers
export const suburbsBySlug: Record<string, SuburbData> = {};
for (const s of suburbs) {
  suburbsBySlug[s.slug] = s;
}

export const suburbsByRegion: Record<string, SuburbData[]> = {};
for (const s of suburbs) {
  if (!suburbsByRegion[s.region]) suburbsByRegion[s.region] = [];
  suburbsByRegion[s.region].push(s);
}
