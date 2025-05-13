/**
 * Sample brands data for European and Polish outdoor gear companies
 */
import { calculateSimilarity } from '../utils/searchUtils';

const brands = [
  {
    id: 'fjallraven',
    name: 'Fjällräven',
    country: 'Sweden',
    website: 'https://www.fjallraven.com',
    logo: '/images/brands/fjallraven.png',
    description: 'Swedish outdoor equipment supplier known for durable and functional clothing and equipment.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear'],
    featured: true
  },
  {
    id: 'alpkit',
    name: 'Alpkit',
    country: 'United Kingdom',
    website: 'https://alpkit.com',
    logo: '/images/brands/alpkit.png',
    description: 'UK-based manufacturer of outdoor gear specializing in lightweight equipment for activities like climbing, hiking, and camping.',
    categories: ['shelter', 'sleep', 'stoves', 'clothes'],
    subcategories: ['tents', 'tarps', 'bags', 'mats', 'gas', 'tops', 'bottoms'],
    featured: true
  },
  {
    id: 'atompacks',
    name: 'Atom Packs',
    country: 'United Kingdom',
    website: 'https://atompacks.co.uk',
    logo: '/images/brands/atompacks.png',
    description: 'UK-based manufacturer specializing in lightweight, custom ultralight backpacks, including their versatile Prospector collection designed for hiking and backpacking.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: true
  },
  {
    id: 'berghaus',
    name: 'Berghaus',
    country: 'United Kingdom',
    website: 'https://www.berghaus.com',
    logo: '/images/brands/berghaus.png',
    description: 'Pioneering British outdoor clothing and equipment brand with over 50 years of experience developing innovative gear for mountaineering and hiking.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'tops', 'bottoms', 'daypack', 'multiday'],
    featured: true
  },
  {
    id: 'teranova',
    name: 'Terra Nova',
    country: 'United Kingdom',
    website: 'https://www.terra-nova.co.uk',
    logo: '/images/brands/teranova.png',
    description: 'British manufacturer of lightweight tents and expedition equipment, holding multiple Guinness World Records for the lightest tents.',
    categories: ['shelter', 'sleep'],
    subcategories: ['tents', 'bags'],
    featured: false
  },
  {
    id: 'craghoppers',
    name: 'Craghoppers',
    country: 'United Kingdom',
    website: 'https://www.craghoppers.com',
    logo: '/images/brands/craghoppers.png',
    description: 'British brand specializing in travel and outdoor clothing with innovative technologies for insect protection and sun safety.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'snugpak',
    name: 'Snugpak',
    country: 'United Kingdom',
    website: 'https://www.snugpak.com',
    logo: '/images/brands/snugpak.png',
    description: 'UK manufacturer of high-performance sleeping bags, insulated clothing and equipment for military and outdoor use.',
    categories: ['sleep', 'clothes'],
    subcategories: ['bags', 'outerwear'],
    featured: false
  },
  {
    id: 'buffalosystems',
    name: 'Buffalo Systems',
    country: 'United Kingdom',
    website: 'https://www.buffalosystems.co.uk',
    logo: '/images/brands/buffalosystems.png',
    description: 'British maker of the revolutionary Pertex and pile clothing system, providing exceptional protection in extreme mountain conditions.',
    categories: ['clothes'],
    subcategories: ['outerwear'],
    featured: false
  },
  {
    id: 'omm',
    name: 'OMM',
    country: 'United Kingdom',
    website: 'https://theomm.com',
    logo: '/images/brands/omm.png',
    description: 'Original Mountain Marathon brand creating ultralight equipment and packs for mountain runners and fastpacking enthusiasts.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: false
  },
  {
    id: 'cumulus',
    name: 'Cumulus',
    country: 'Poland',
    website: 'https://cumulus.equipment',
    logo: '/images/brands/cumulus.png',
    description: 'Polish manufacturer of high-quality down sleeping bags, jackets, and quilts.',
    categories: ['sleep', 'clothes'],
    subcategories: ['bags', 'quilts', 'outerwear'],
    featured: true
  },
  {
    id: 'deuter',
    name: 'Deuter',
    country: 'Germany',
    website: 'https://www.deuter.com',
    logo: '/images/brands/deuter.png',
    description: 'German backpack manufacturer with over 120 years of experience, known for innovative carrying systems and high-quality hiking, trekking and mountaineering packs.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: true
  },
  {
    id: 'vaude',
    name: 'Vaude',
    country: 'Germany',
    website: 'https://www.vaude.com',
    logo: '/images/brands/vaude.png',
    description: 'German manufacturer committed to sustainability, producing eco-friendly outdoor clothing, backpacks, and camping equipment.',
    categories: ['backpacks', 'shelter', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tents', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'jackwolfskin',
    name: 'Jack Wolfskin',
    country: 'Germany',
    website: 'https://www.jack-wolfskin.com',
    logo: '/images/brands/jackwolfskin.png',
    description: 'German outdoor clothing and equipment brand known for functional and durable products for hiking and everyday outdoor activities.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['tops', 'bottoms', 'outerwear', 'daypack'],
    featured: false
  },
  {
    id: 'ortlieb',
    name: 'Ortlieb',
    country: 'Germany',
    website: 'https://www.ortlieb.com',
    logo: '/images/brands/ortlieb.png',
    description: 'German brand specializing in waterproof bags, backpacks and bicycle panniers, renowned for their completely waterproof welded construction.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: true
  },
  {
    id: 'edelrid',
    name: 'Edelrid',
    country: 'Germany',
    website: 'https://www.edelrid.de',
    logo: '/images/brands/edelrid.png',
    description: 'German climbing equipment manufacturer with a focus on sustainable production of ropes, harnesses and mountaineering gear.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'meindl',
    name: 'Meindl',
    country: 'Germany',
    website: 'https://www.meindl.de',
    logo: '/images/brands/meindl.png',
    description: 'Traditional German bootmaker creating premium hiking and mountain boots with handcrafted quality and exceptional durability.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'lowa',
    name: 'Lowa',
    country: 'Germany',
    website: 'https://www.lowa.com',
    logo: '/images/brands/lowa.png',
    description: 'German manufacturer of high-quality outdoor boots with a century of expertise in creating performance footwear for hiking and mountaineering.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: true
  },
  {
    id: 'schoffel',
    name: 'Schöffel',
    country: 'Germany',
    website: 'https://www.schoeffel.com',
    logo: '/images/brands/schoffel.png',
    description: 'Traditional German outdoor clothing brand specializing in technical apparel for hiking, skiing and outdoor activities.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'hanwag',
    name: 'Hanwag',
    country: 'Germany',
    website: 'https://www.hanwag.com',
    logo: '/images/brands/hanwag.png',
    description: 'Traditional German bootmaker specializing in high-quality hiking and mountaineering footwear crafted using traditional techniques.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'tatonka',
    name: 'Tatonka',
    country: 'Germany',
    website: 'https://www.tatonka.com',
    logo: '/images/brands/tatonka.png',
    description: 'German manufacturer of high-quality backpacks, travel equipment, and outdoor gear known for exceptional durability and functionality.',
    categories: ['backpacks'],
    subcategories: ['daypack', 'multiday'],
    featured: false
  },
  {
    id: 'rab',
    name: 'Rab',
    country: 'United Kingdom',
    website: 'https://rab.equipment',
    logo: '/images/brands/rab.png',
    description: 'UK brand specializing in technical mountaineering clothing and sleeping bags, renowned for high-performance insulation and weather protection.',
    categories: ['clothes', 'sleep'],
    subcategories: ['outerwear', 'bags'],
    featured: true
  },
  {
    id: 'montane',
    name: 'Montane',
    country: 'United Kingdom',
    website: 'https://www.montane.com',
    logo: '/images/brands/montane.png',
    description: 'British manufacturer of lightweight, breathable clothing and equipment designed for extreme environments and mountain sports.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'mountainequipment',
    name: 'Mountain Equipment',
    country: 'United Kingdom',
    website: 'https://www.mountain-equipment.co.uk',
    logo: '/images/brands/mountainequipment.png',
    description: 'British company developing high-performance clothing and equipment for mountaineering, climbing and winter sports.',
    categories: ['clothes', 'sleep'],
    subcategories: ['outerwear', 'bags'],
    featured: false
  },
  {
    id: 'paramo',
    name: 'Páramo',
    country: 'United Kingdom',
    website: 'https://www.paramo-clothing.com',
    logo: '/images/brands/paramo.png',
    description: 'UK brand creating innovative, ethical outdoor clothing using Nikwax technology instead of traditional waterproof membranes for superior moisture management.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'salewa',
    name: 'Salewa',
    country: 'Italy',
    website: 'https://www.salewa.com',
    logo: '/images/brands/salewa.png',
    description: 'Italian alpine equipment manufacturer specializing in technical mountaineering gear, clothing and footwear for climbing and mountain sports.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'footwear', 'multiday'],
    featured: false
  },
  {
    id: 'salomon',
    name: 'Salomon',
    country: 'France',
    website: 'https://www.salomon.com',
    logo: '/images/brands/salomon.png',
    description: 'French outdoor sports brand specializing in trail running footwear, hiking equipment and winter sports gear with innovative technologies.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['footwear', 'daypack', 'outerwear'],
    featured: true
  },
  {
    id: 'lasportiva',
    name: 'La Sportiva',
    country: 'Italy',
    website: 'https://www.lasportiva.com',
    logo: '/images/brands/lasportiva.png',
    description: 'Italian manufacturer producing high-performance footwear for climbing, hiking, mountaineering and trail running with innovative designs and materials.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: true
  },
  {
    id: 'scarpa',
    name: 'Scarpa',
    country: 'Italy',
    website: 'https://www.scarpa.com',
    logo: '/images/brands/scarpa.png',
    description: 'Italian footwear company crafting premium boots for mountaineering, climbing, hiking and ski touring with a focus on performance and quality.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'ferrino',
    name: 'Ferrino',
    country: 'Italy',
    website: 'https://www.ferrino.it',
    logo: '/images/brands/ferrino.png',
    description: 'Historic Italian manufacturer designing tents, backpacks and outdoor equipment since 1870, combining tradition with innovation.',
    categories: ['shelter', 'backpacks'],
    subcategories: ['tents', 'daypack', 'multiday'],
    featured: false
  },
  {
    id: 'camp',
    name: 'CAMP',
    country: 'Italy',
    website: 'https://www.camp.it',
    logo: '/images/brands/camp.png',
    description: 'Italian manufacturer of climbing and mountaineering equipment, producing lightweight technical hardware for alpinists and climbers since 1889.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'grivel',
    name: 'Grivel',
    country: 'Italy',
    website: 'https://www.grivel.com',
    logo: '/images/brands/grivel.png',
    description: 'Historic Italian brand producing ice axes, crampons and climbing equipment since 1818, with deep roots in alpine climbing history.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'aku',
    name: 'AKU',
    country: 'Italy',
    website: 'https://www.aku.it',
    logo: '/images/brands/aku.png',
    description: 'Italian footwear company specializing in handcrafted hiking and mountaineering boots with a focus on quality and sustainability.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'zamberlan',
    name: 'Zamberlan',
    country: 'Italy',
    website: 'https://www.zamberlan.com',
    logo: '/images/brands/zamberlan.png',
    description: 'Family-owned Italian bootmaker crafting premium hiking and mountaineering footwear with traditional craftsmanship since 1929.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'boreal',
    name: 'Boreal',
    country: 'Spain',
    website: 'https://www.borealoutdoor.com',
    logo: '/images/brands/boreal.png',
    description: 'Spanish pioneer in climbing shoe technology, creating performance footwear for rock climbing and mountaineering with innovative rubber compounds.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'buff',
    name: 'Buff',
    country: 'Spain',
    website: 'https://www.buff.com',
    logo: '/images/brands/buff.png',
    description: 'Spanish brand that invented the multifunctional tubular headwear, now producing a wide range of accessories for outdoor activities and sports.',
    categories: ['clothes'],
    subcategories: ['tops'],
    featured: true
  },
  {
    id: 'petzl',
    name: 'Petzl',
    country: 'France',
    website: 'https://www.petzl.com',
    logo: '/images/brands/petzl.png',
    description: 'French company pioneering climbing equipment and headlamps with a focus on safety, innovation and quality for vertical sports and rescue operations.',
    categories: ['lighting', 'trekking'],
    subcategories: ['headlamps', 'navigation'],
    featured: true
  },
  {
    id: 'millet',
    name: 'Millet',
    country: 'France',
    website: 'https://www.millet.fr',
    logo: '/images/brands/millet.png',
    description: 'French brand developing technical mountaineering clothing and equipment since 1921, with expertise in alpine packs and performance apparel.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'multiday'],
    featured: false
  },
  {
    id: 'julbo',
    name: 'Julbo',
    country: 'France',
    website: 'https://www.julbo.com',
    logo: '/images/brands/julbo.png',
    description: 'French eyewear specialist with over 130 years of experience designing high-performance sunglasses for mountaineering and outdoor sports.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'simond',
    name: 'Simond',
    country: 'France',
    website: 'https://www.simond.com',
    logo: '/images/brands/simond.png',
    description: 'French climbing equipment manufacturer (now part of Decathlon) producing affordable, quality gear for mountaineering and ice climbing.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: false
  },
  {
    id: 'quechua',
    name: 'Quechua',
    country: 'France',
    website: 'https://www.quechua.com',
    logo: '/images/brands/quechua.png',
    description: 'Decathlon\'s hiking and camping brand offering affordable outdoor equipment and clothing for all levels of outdoor enthusiasts.',
    categories: ['shelter', 'backpacks', 'clothes'],
    subcategories: ['tents', 'daypack', 'outerwear'],
    featured: false
  },
  {
    id: 'mammut',
    name: 'Mammut',
    country: 'Switzerland',
    website: 'https://www.mammut.com',
    logo: '/images/brands/mammut.png',
    description: 'Swiss premium mountaineering and outdoor brand with over 160 years of history, creating high-quality equipment, clothing and safety gear for alpine activities.',
    categories: ['clothes', 'backpacks', 'trekking'],
    subcategories: ['outerwear', 'multiday', 'navigation'],
    featured: true
  },
  {
    id: 'wenger',
    name: 'Wenger',
    country: 'Switzerland',
    website: 'https://www.wenger.ch',
    logo: '/images/brands/wenger.png',
    description: 'Swiss company known for high-quality pocket knives, multi-tools and outdoor equipment with precision craftsmanship and functionality.',
    categories: ['knives'],
    subcategories: ['multitools'],
    featured: false
  },
  {
    id: 'carinthia',
    name: 'Carinthia',
    country: 'Austria',
    website: 'https://www.carinthia.eu',
    logo: '/images/brands/carinthia.png',
    description: 'Austrian manufacturer specializing in high-performance sleeping bags and insulated clothing using advanced synthetic materials for extreme conditions.',
    categories: ['sleep', 'clothes'],
    subcategories: ['bags', 'outerwear'],
    featured: false
  },
  {
    id: 'dynafit',
    name: 'Dynafit',
    country: 'Austria',
    website: 'https://www.dynafit.com',
    logo: '/images/brands/dynafit.png',
    description: 'Austrian brand specializing in lightweight ski touring and mountain endurance sports equipment with innovative design and technology.',
    categories: ['clothes', 'trekking'],
    subcategories: ['outerwear', 'footwear', 'navigation'],
    featured: false
  },
  {
    id: 'klattermusen',
    name: 'Klättermusen',
    country: 'Sweden',
    website: 'https://www.klattermusen.com',
    logo: '/images/brands/klattermusen.png',
    description: 'Swedish brand creating sustainable, high-performance outdoor clothing and equipment with thoughtful design and environmental responsibility.',
    categories: ['clothes', 'backpacks'],
    subcategories: ['outerwear', 'multiday'],
    featured: false
  },
  {
    id: 'lundhags',
    name: 'Lundhags',
    country: 'Sweden',
    website: 'https://www.lundhags.com',
    logo: '/images/brands/lundhags.png',
    description: 'Traditional Swedish brand producing durable Nordic outdoor boots, clothing and equipment with timeless functionality for Nordic conditions.',
    categories: ['clothes'],
    subcategories: ['footwear', 'outerwear'],
    featured: false
  },
  {
    id: 'icebug',
    name: 'Icebug',
    country: 'Sweden',
    website: 'https://icebug.com',
    logo: '/images/brands/icebug.png',
    description: 'Swedish footwear brand pioneering traction technology with innovative grip solutions for trail running and winter conditions.',
    categories: ['clothes'],
    subcategories: ['footwear'],
    featured: false
  },
  {
    id: 'aclima',
    name: 'Aclima',
    country: 'Norway',
    website: 'https://www.aclima.no',
    logo: '/images/brands/aclima.png',
    description: 'Norwegian manufacturer specialized in high-quality merino wool base layers and underwear for outdoor activities in all conditions.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms'],
    featured: false
  },
  {
    id: 'daleofnorway',
    name: 'Dale of Norway',
    country: 'Norway',
    website: 'https://www.daleofnorway.com',
    logo: '/images/brands/daleofnorway.png',
    description: 'Historic Norwegian brand crafting premium wool knitwear and sweaters combining traditional patterns with technical performance for outdoor use.',
    categories: ['clothes'],
    subcategories: ['tops'],
    featured: false
  },
  {
    id: 'savotta',
    name: 'Savotta',
    country: 'Finland',
    website: 'https://finn-savotta.fi',
    logo: '/images/brands/savotta.png',
    description: 'Finnish manufacturer of military-grade backpacks, tents and shelters known for exceptional durability and functionality in extreme conditions.',
    categories: ['backpacks', 'shelter'],
    subcategories: ['multiday', 'tents'],
    featured: false
  },
  {
    id: 'sasta',
    name: 'Sasta',
    country: 'Finland',
    website: 'https://www.sasta.fi',
    logo: '/images/brands/sasta.png',
    description: 'Finnish brand creating durable, functional outdoor and hunting clothing designed for the demanding Nordic wilderness conditions.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'suunto',
    name: 'Suunto',
    country: 'Finland',
    website: 'https://www.suunto.com',
    logo: '/images/brands/suunto.png',
    description: 'Finnish manufacturer of premium sports watches, dive computers and navigation instruments for outdoor adventures and training.',
    categories: ['trekking'],
    subcategories: ['navigation'],
    featured: true
  },
  {
    id: 'ternua',
    name: 'Ternua',
    country: 'Spain',
    website: 'https://www.ternua.com',
    logo: '/images/brands/ternua.png',
    description: 'Spanish sustainable outdoor clothing brand emphasizing environmental responsibility and performance in technical apparel for mountain sports.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'robens',
    name: 'Robens',
    country: 'Denmark',
    website: 'https://www.robens.de/en-gb',
    logo: '/images/brands/robens.png',
    description: 'Danish manufacturer of camping equipment including tents, sleeping bags, and mattresses.',
    categories: ['shelter', 'sleep'],
    subcategories: ['tents', 'hammocks', 'bags', 'mats'],
    featured: false
  },
  {
    id: 'lesovik',
    name: 'Lesovik',
    country: 'Poland',
    website: 'https://lesovik.pl',
    logo: '/images/brands/lesovik.png',
    description: 'Polish manufacturer specializing in hammocks and lightweight camping gear.',
    categories: ['shelter'],
    subcategories: ['hammocks', 'tarps'],
    featured: true
  },
  {
    id: 'primus',
    name: 'Primus',
    country: 'Sweden',
    website: 'https://primus.eu',
    logo: '/images/brands/primus.png',
    description: 'Swedish manufacturer of camping stoves and cooking equipment.',
    categories: ['stoves'],
    subcategories: ['gas', 'liquid'],
    featured: false
  },
  {
    id: 'nordisk',
    name: 'Nordisk',
    country: 'Denmark',
    website: 'https://nordisk.eu',
    logo: '/images/brands/nordisk.png',
    description: 'Danish outdoor equipment manufacturer focused on lightweight tents, sleeping bags, and clothing.',
    categories: ['shelter', 'sleep', 'clothes'],
    subcategories: ['tents', 'bags', 'outerwear'],
    featured: false
  },
  {
    id: 'hilleberg',
    name: 'Hilleberg',
    country: 'Sweden',
    website: 'https://hilleberg.com',
    logo: '/images/brands/hilleberg.png',
    description: 'Swedish tent manufacturer renowned for high-quality, durable all-season tents.',
    categories: ['shelter'],
    subcategories: ['tents'],
    featured: true
  },
  {
    id: 'nortent',
    name: 'Nortent',
    country: 'Norway',
    website: 'https://nortent.com',
    logo: '/images/brands/nortent.png',
    description: 'Norwegian manufacturer of high-quality tents designed for Scandinavian conditions.',
    categories: ['shelter'],
    subcategories: ['tents'],
    featured: false
  },
  {
    id: 'haglofs',
    name: 'Haglöfs',
    country: 'Sweden',
    website: 'https://www.haglofs.com',
    logo: '/images/brands/haglofs.png',
    description: 'Swedish outdoor equipment supplier specializing in technical clothing, footwear, and hardware for outdoor enthusiasts.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear', 'footwear'],
    featured: false
  },
  {
    id: 'norrona',
    name: 'Norrøna',
    country: 'Norway',
    website: 'https://www.norrona.com',
    logo: '/images/brands/norrona.png',
    description: 'Norwegian high-end outdoor brand known for durable and functional clothing and equipment for hiking, skiing, and other outdoor activities.',
    categories: ['backpacks', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'helsport',
    name: 'Helsport',
    country: 'Norway',
    website: 'https://www.helsport.com',
    logo: '/images/brands/helsport.png',
    description: 'Norwegian manufacturer of high-quality tents, sleeping bags, and outdoor equipment designed for harsh Nordic conditions.',
    categories: ['shelter', 'sleep'],
    subcategories: ['tents', 'bags'],
    featured: false
  },
  {
    id: 'bergans',
    name: 'Bergans',
    country: 'Norway',
    website: 'https://www.bergans.com',
    logo: '/images/brands/bergans.png',
    description: 'Norwegian outdoor brand producing backpacks, tents, and technical clothing known for durability and functionality.',
    categories: ['backpacks', 'shelter', 'clothes'],
    subcategories: ['daypack', 'multiday', 'tents', 'tops', 'bottoms', 'outerwear'],
    featured: false
  },
  {
    id: 'exped',
    name: 'Exped',
    country: 'Switzerland',
    website: 'https://www.exped.com',
    logo: '/images/brands/exped.png',
    description: 'Swiss company focusing on high-quality sleeping mats, backpacks, and tents with innovative designs for outdoor adventures.',
    categories: ['backpacks', 'sleep', 'shelter'],
    subcategories: ['daypack', 'multiday', 'mats', 'bags', 'tents'],
    featured: false
  },
  {
    id: 'optimus',
    name: 'Optimus',
    country: 'Sweden',
    website: 'https://www.optimusstoves.com',
    logo: '/images/brands/optimus.png',
    description: 'Swedish manufacturer of outdoor cooking equipment, specializing in camping stoves and related accessories since 1899.',
    categories: ['stoves'],
    subcategories: ['gas', 'liquid'],
    featured: false
  },
  {
    id: 'mora',
    name: 'Morakniv',
    country: 'Sweden',
    website: 'https://morakniv.se',
    logo: '/images/brands/mora.png',
    description: 'Swedish knife manufacturer producing high-quality and affordable outdoor knives trusted by craftsmen and outdoor enthusiasts worldwide.',
    categories: ['knives'],
    subcategories: ['knives'],
    featured: false
  },
  {
    id: 'fallkniven',
    name: 'Fällkniven',
    country: 'Sweden',
    website: 'https://fallkniven.se',
    logo: '/images/brands/fallkniven.png',
    description: 'Swedish knife manufacturer specializing in high-end, premium quality survival and outdoor knives.',
    categories: ['knives'],
    subcategories: ['knives'],
    featured: false
  },
  {
    id: 'gransfors',
    name: 'Gränsfors Bruk',
    country: 'Sweden',
    website: 'https://www.gransforsbruk.com',
    logo: '/images/brands/gransfors.png',
    description: 'Swedish axe manufacturer crafting premium hand-forged axes for forestry, woodworking, and outdoor activities.',
    categories: ['knives'],
    subcategories: ['axes'],
    featured: false
  },
  {
    id: 'trangia',
    name: 'Trangia',
    country: 'Sweden',
    website: 'https://trangia.se',
    logo: '/images/brands/trangia.png',
    description: 'Swedish manufacturer of alcohol stove systems and outdoor cookware, known for their reliable and versatile cooking solutions.',
    categories: ['stoves'],
    subcategories: ['liquid'],
    featured: false
  },
  {
    id: 'hellyhansen',
    name: 'Helly Hansen',
    country: 'Norway',
    website: 'https://www.hellyhansen.com',
    logo: '/images/brands/hellyhansen.png',
    description: 'Norwegian manufacturer of technical sailing and skiing outerwear and clothing, popular for both professional and casual outdoor use.',
    categories: ['clothes'],
    subcategories: ['tops', 'bottoms', 'outerwear'],
    featured: true
  },
  {
    id: 'silva',
    name: 'Silva',
    country: 'Sweden',
    website: 'https://silva.se',
    logo: '/images/brands/silva.png',
    description: 'Swedish manufacturer of compasses, headlamps, and other navigation equipment essential for outdoor exploration.',
    categories: ['lighting', 'trekking'],
    subcategories: ['headlamps', 'navigation'],
    featured: false
  },
  {
    id: 'katadyn',
    name: 'Katadyn',
    country: 'Switzerland',
    website: 'https://www.katadyn.com',
    logo: '/images/brands/katadyn.png',
    description: 'Swiss manufacturer specializing in portable water filtration systems and purification products for outdoor activities, emergency preparedness, and global travel.',
    categories: ['trekking'],
    subcategories: ['hydration'],
    featured: true
  },
  {
    id: 'leki',
    name: 'Leki',
    country: 'Germany',
    website: 'https://www.leki.com',
    logo: '/images/brands/leki.png',
    description: 'German manufacturer specializing in high-quality trekking poles, ski poles, and gloves for outdoor activities.',
    categories: ['trekking'],
    subcategories: ['poles'],
    featured: false
  },
  {
    id: 'ddhammocks',
    name: 'DD Hammocks',
    country: 'United Kingdom',
    website: 'https://www.ddhammocks.com',
    logo: '/images/brands/ddhammocks.png',
    description: 'UK-based company specializing in lightweight hammocks, tarps, and camping equipment for bushcraft and outdoor enthusiasts.',
    categories: ['shelter', 'sleep'],
    subcategories: ['hammocks', 'tarps', 'bags'],
    featured: false
  },
  {
    id: 'vango',
    name: 'Vango',
    country: 'United Kingdom',
    website: 'https://www.vango.co.uk',
    logo: '/images/brands/vango.png',
    description: 'Scottish outdoor equipment manufacturer known for their tents, sleeping bags, and camping accessories with innovative designs for all conditions.',
    categories: ['shelter', 'sleep', 'backpacks'],
    subcategories: ['tents', 'bags', 'mats', 'daypack'],
    featured: false
  },
  {
    id: 'oex',
    name: 'OEX',
    country: 'United Kingdom',
    website: 'https://www.gooutdoors.co.uk/brands/oex',
    logo: '/images/brands/oex.png',
    description: 'GO Outdoors\' in-house budget brand offering value-focused camping and hiking equipment including tents, sleeping bags, and clothing.',
    categories: ['shelter', 'sleep', 'clothes', 'backpacks'],
    subcategories: ['tents', 'bags', 'mats', 'outerwear', 'daypack'],
    featured: false
  },
{
  id: 'bonfus',
  name: 'Bonfus UL',
  country: 'Italy',
  website: 'https://www.bonfus.com',
  logo: '/images/brands/bonfus.png',
  description: 'Italian manufacturer specializing in ultralight backpacking equipment including custom shelters, packs, and premium down products for lightweight hiking and thru-hiking.',
  categories: ['shelter', 'backpacks', 'sleep', 'ultralight'],
  subcategories: ['tents', 'multiday', 'quilts', 'bags', 'ul-shelter', 'ul-packs', 'down-products', 'ul-sleep'],
  featured: true
},
{
  id: 'liteway',
  name: 'Liteway',
  country: 'Italy',
  website: 'https://liteway.equipment',
  logo: '/images/brands/liteway.png',
  description: 'European ultralight hiking gear manufacturer producing lightweight shelters, packs and accessories with minimalist design for hikers and backpackers.',
  categories: ['shelter', 'backpacks', 'ultralight'],
  subcategories: ['tents', 'tarps', 'multiday', 'ul-shelter', 'ul-packs', 'ul-accessories'],
  featured: false
}
];

export default brands;

/**
 * Get a brand by its ID
 */
export const getBrandById = (id) => {
  return brands.find(brand => brand.id === id) || null;
};

/**
 * Get all featured brands
 */
export const getFeaturedBrands = () => {
  return brands.filter(brand => brand.featured);
};

/**
 * Filter brands by category and subcategory
 */
export const filterBrands = (categoryId = null, subcategoryId = null) => {
  let filtered = [...brands];
  
  if (categoryId) {
    filtered = filtered.filter(brand => brand.categories.includes(categoryId));
  }
  
  if (subcategoryId) {
    filtered = filtered.filter(brand => brand.subcategories.includes(subcategoryId));
  }
  
  return filtered;
};

/**
 * Search brands by name, description, or country with similarity matching
 */
export const searchBrands = (query) => {
  if (!query) return brands;
  
  const searchTerm = query.toLowerCase();
  
  // First do a simple includes check for exact matches
  const exactMatches = brands.filter(brand => 
    brand.name.toLowerCase().includes(searchTerm) ||
    brand.description.toLowerCase().includes(searchTerm) ||
    brand.country.toLowerCase().includes(searchTerm)
  );
  
  // If we have exact matches, return them
  if (exactMatches.length > 0) {
    return exactMatches;
  }
  
  // Otherwise, do a fuzzy search with similarity scoring
  const SIMILARITY_THRESHOLD = 0.3; // Adjust as needed
  
  return brands.filter(brand => {
    // Calculate similarity scores for name, description and country
    const nameSimilarity = calculateSimilarity(brand.name, searchTerm);
    const descriptionSimilarity = calculateSimilarity(brand.description, searchTerm);
    const countrySimilarity = calculateSimilarity(brand.country, searchTerm);
    
    // Return brands with at least one field exceeding the threshold
    return nameSimilarity > SIMILARITY_THRESHOLD || 
           descriptionSimilarity > SIMILARITY_THRESHOLD || 
           countrySimilarity > SIMILARITY_THRESHOLD;
  }).sort((a, b) => {
    // Sort by similarity to brand name
    const aScore = calculateSimilarity(a.name, searchTerm);
    const bScore = calculateSimilarity(b.name, searchTerm);
    return bScore - aScore;
  });
};
