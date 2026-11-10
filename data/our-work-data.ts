export interface WorkItem {
  id: string;
  title: string;
  category: string;
  division: string;
  client: string;
  location: string;
  description: string;
  image: string;
  thumb: string;
  finalSizeKB: number;
  thumbSizeKB: number;
  isEnhanced?: boolean;
  tags: string[];
}

export interface WorkVideo {
  id: string;
  title: string;
  videoPath: string;
  sizeMB: string;
  category: string;
}

export const WORK_CATEGORIES = [
  'All',
  'Sugar Machinery & Towers',
  'High-Pressure Piping',
  'Steel Structures & Rigging',
  'Machinery & Process Tanks',
  'On-Site Execution'
] as const;

export const OUR_WORK_GALLERY: WorkItem[] = [
  {
    "id": "work-01",
    "title": "TADANO Mobile Crane Hoisting Process Column Assembly",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "TADANO heavy mobile crane hoisting flanged vapor nozzle assemblies alongside riggers working atop elevated pan tower platforms.",
    "image": "/images/our-work/work-01.webp",
    "thumb": "/images/our-work/thumbs/work-01-thumb.webp",
    "finalSizeKB": 150,
    "thumbSizeKB": 35,
    "isEnhanced": false,
    "tags": [
      "TADANO Crane",
      "Continuous Pan",
      "Tower Erection",
      "Ranipur Sugar Mills"
    ]
  },
  {
    "id": "work-02",
    "title": "Boiling House Base Process Piping & Pump Manifold Fit-Up",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "Ground-level process piping tie-ins, flanged reducer spools, and centrifugal pump assembly beneath vertical pan vessel.",
    "image": "/images/our-work/work-02.webp",
    "thumb": "/images/our-work/thumbs/work-02-thumb.webp",
    "finalSizeKB": 425,
    "thumbSizeKB": 82,
    "isEnhanced": false,
    "tags": [
      "Process Piping",
      "Boiling House",
      "Pump Fit-Up",
      "Mechanical"
    ]
  },
  {
    "id": "work-03",
    "title": "Heavy Transfer Pump & Discharge Pipe Installation Crew",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "Field mechanics installing industrial transfer pump baseframe and inclined discharge piping line inside sugar processing bay.",
    "image": "/images/our-work/work-03.webp",
    "thumb": "/images/our-work/thumbs/work-03-thumb.webp",
    "finalSizeKB": 364,
    "thumbSizeKB": 69,
    "isEnhanced": false,
    "tags": [
      "Pump Installation",
      "Discharge Piping",
      "Baseframe",
      "Sugar Processing"
    ]
  },
  {
    "id": "work-04",
    "title": "Dual Vertical Continuous Pan Columns & Access Walkways",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "Twin erected cylindrical process towers interconnected via bolted access platforms, safety guardrails, and caged vertical ladders.",
    "image": "/images/our-work/work-04.webp",
    "thumb": "/images/our-work/thumbs/work-04-thumb.webp",
    "finalSizeKB": 180,
    "thumbSizeKB": 38,
    "isEnhanced": false,
    "tags": [
      "Dual Towers",
      "Access Platforms",
      "Caged Ladder",
      "Vertical Continuous Pan"
    ]
  },
  {
    "id": "work-05",
    "title": "Vertical Continuous Pan Twin Towers (First in Pakistan)",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "Milestone fabrication and erection of Pakistan's first indigenous Vertical Continuous Pan installation featuring wrap-around structural stairways.",
    "image": "/images/our-work/work-05.webp",
    "thumb": "/images/our-work/thumbs/work-05-thumb.webp",
    "finalSizeKB": 237,
    "thumbSizeKB": 54,
    "isEnhanced": false,
    "tags": [
      "First in Pakistan",
      "Vertical Continuous Pan",
      "Ranipur Sugar Mills",
      "Spiral Staircase"
    ]
  },
  {
    "id": "work-06",
    "title": "Night-Shift Floodlit Erection of Dual Continuous Pan Towers",
    "category": "On-Site Execution",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "24/7 continuous shutdown execution under high-intensity site floodlights to deliver mechanical erection ahead of crushing schedule.",
    "image": "/images/our-work/work-06.webp",
    "thumb": "/images/our-work/thumbs/work-06-thumb.webp",
    "finalSizeKB": 304,
    "thumbSizeKB": 35,
    "isEnhanced": false,
    "tags": [
      "Night Shift",
      "Shutdown Turnaround",
      "24/7 Execution",
      "Floodlit Erection"
    ]
  },
  {
    "id": "work-07",
    "title": "Twin Stainless Steel Indian Design Jet Condensers",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Sugar & Power Industry Clients",
    "location": "PIS Workshop Yard",
    "description": "Completed pair of stainless steel conical Indian Design Jet Condensers with precision-machined flanged vapor inlet nozzles.",
    "image": "/images/our-work/work-07.webp",
    "thumb": "/images/our-work/thumbs/work-07-thumb.webp",
    "finalSizeKB": 163,
    "thumbSizeKB": 19,
    "isEnhanced": false,
    "tags": [
      "Indian Design",
      "Jet Condenser",
      "Stainless Steel",
      "Workshop Fabrication"
    ]
  },
  {
    "id": "work-08",
    "title": "Workshop Craftsmanship on Perforated Conical Internals",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Sugar & Power Industry Clients",
    "location": "PIS Workshop Yard",
    "description": "Skilled metal fabricator assembling custom perforated stainless steel internal spray cone on workshop floor.",
    "image": "/images/our-work/work-08.webp",
    "thumb": "/images/our-work/thumbs/work-08-thumb.webp",
    "finalSizeKB": 249,
    "thumbSizeKB": 62,
    "isEnhanced": false,
    "tags": [
      "Perforated Cone",
      "Internal Baffle",
      "Stainless Fabrication",
      "Workshop"
    ]
  },
  {
    "id": "work-09",
    "title": "Precision-Cut Heavy Circular Tube-Sheet & Sieve Plate",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Sugar Mill Equipment",
    "location": "PIS Workshop Yard",
    "description": "Heavy-gauge carbon steel circular tube-sheet / condenser distribution plate machined with uniform precision perforations.",
    "image": "/images/our-work/work-09.webp",
    "thumb": "/images/our-work/thumbs/work-09-thumb.webp",
    "finalSizeKB": 73,
    "thumbSizeKB": 22,
    "isEnhanced": false,
    "tags": [
      "Tube Sheet",
      "Precision Cutting",
      "Condenser Internals",
      "Heavy Plate"
    ]
  },
  {
    "id": "work-10",
    "title": "Overhead Steel Girders & Elevated Piping Framing Crew",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Industrial Complex Partners",
    "location": "Plant Jobsite",
    "description": "Fabrication crew installing primed structural steel support girders and elevated piping network inside industrial building.",
    "image": "/images/our-work/work-10.webp",
    "thumb": "/images/our-work/thumbs/work-10-thumb.webp",
    "finalSizeKB": 143,
    "thumbSizeKB": 77,
    "isEnhanced": false,
    "tags": [
      "Steel Girders",
      "Overhead Piping",
      "Elevated Work",
      "Structural Steel"
    ]
  },
  {
    "id": "work-11",
    "title": "Multi-Stage Process Column & Orange Storage Tanks Daylight View",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Ranipur Sugar Mills Limited",
    "location": "Ranipur, Sindh",
    "description": "Integrated process column structural framing, vertical staircases, and adjacent storage vessels at sugar manufacturing complex.",
    "image": "/images/our-work/work-11.webp",
    "thumb": "/images/our-work/thumbs/work-11-thumb.webp",
    "finalSizeKB": 149,
    "thumbSizeKB": 48,
    "isEnhanced": false,
    "tags": [
      "Process Column",
      "Stair Tower",
      "Storage Vessels",
      "Turnkey Plant"
    ]
  },
  {
    "id": "work-12",
    "title": "Bulk Oil Storage Tank Nozzle & Flanged Isolation Gate Valve",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Fossil fuel storage tank shell connection fitted with heavy bolted flange isolation gate valve and reinforced concrete pipe pier.",
    "image": "/images/our-work/work-12.webp",
    "thumb": "/images/our-work/thumbs/work-12-thumb.webp",
    "finalSizeKB": 99,
    "thumbSizeKB": 55,
    "isEnhanced": false,
    "tags": [
      "Oil Storage Tank",
      "Gate Valve",
      "Hascol Petroleum",
      "Terminal Piping"
    ]
  },
  {
    "id": "work-13",
    "title": "Tank Farm Export Pipeline & Twin Gate Valve Station",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Sweeping bulk oil terminal export pipeline mounted on concrete support piers leading to twin flanged shutoff valves at tank bund.",
    "image": "/images/our-work/work-13.webp",
    "thumb": "/images/our-work/thumbs/work-13-thumb.webp",
    "finalSizeKB": 121,
    "thumbSizeKB": 60,
    "isEnhanced": false,
    "tags": [
      "Export Pipeline",
      "Twin Gate Valves",
      "Bulk Oil Tank",
      "Concrete Piers"
    ]
  },
  {
    "id": "work-14",
    "title": "Electric Centrifugal Pump Skid & Field Welding Unit",
    "category": "On-Site Execution",
    "division": "Mechanical",
    "client": "Industrial Facility Partners",
    "location": "Site Pump House",
    "description": "Heavy-duty electric motor centrifugal transfer pump aligned on grouted baseplate alongside PIS welding unit and primed piping.",
    "image": "/images/our-work/work-14.webp",
    "thumb": "/images/our-work/thumbs/work-14-thumb.webp",
    "finalSizeKB": 65,
    "thumbSizeKB": 33,
    "isEnhanced": false,
    "tags": [
      "Pump Skid",
      "Field Welding",
      "Transfer Pump",
      "Pump House"
    ]
  },
  {
    "id": "work-15",
    "title": "Terminal Twin Header Pipeline on Concrete Sleeper Pad",
    "category": "High-Pressure Piping",
    "division": "Multi-Disciplinary",
    "client": "Hascol Petroleum / Power Infrastructure",
    "location": "Terminal Site",
    "description": "Dual carbon steel pipelines anchored along poured concrete sleeper pad equipped with blue flanged isolation valves and industrial shed backdrop.",
    "image": "/images/our-work/work-15.webp",
    "thumb": "/images/our-work/thumbs/work-15-thumb.webp",
    "finalSizeKB": 113,
    "thumbSizeKB": 63,
    "isEnhanced": false,
    "tags": [
      "Concrete Sleeper",
      "Twin Pipeline",
      "Flanged Valves",
      "Civil & Mechanical"
    ]
  },
  {
    "id": "work-16",
    "title": "Elevated Structural Column Rack & Storage Tank Valve Manifold",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Multi-valve manifold header anchored along raised concrete footing facing bulk petroleum storage tanks inside terminal containment yard.",
    "image": "/images/our-work/work-16.webp",
    "thumb": "/images/our-work/thumbs/work-16-thumb.webp",
    "finalSizeKB": 111,
    "thumbSizeKB": 59,
    "isEnhanced": false,
    "tags": [
      "Valve Manifold",
      "Oil Terminal",
      "Concrete Footing",
      "Storage Tanks"
    ]
  },
  {
    "id": "work-17",
    "title": "Prefabricated Carbon Steel Pipe Spools & Elbow Manifolds",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Terminal Fabrication Yard",
    "description": "Staged field laydown of red-oxide primed welded process pipe spools, long-radius elbows, and branch tees ready for hoisting.",
    "image": "/images/our-work/work-17.webp",
    "thumb": "/images/our-work/thumbs/work-17-thumb.webp",
    "finalSizeKB": 177,
    "thumbSizeKB": 91,
    "isEnhanced": false,
    "tags": [
      "Pipe Spools",
      "Carbon Steel",
      "Prefabrication",
      "Primer Coated"
    ]
  },
  {
    "id": "work-18",
    "title": "Floodlit Night Commissioning of High-Capacity Pump & OS&Y Valve",
    "category": "On-Site Execution",
    "division": "Electrical",
    "client": "Hascol Petroleum / Industrial Complex",
    "location": "Firefighting Pump Yard",
    "description": "Nighttime illuminated installation of high-capacity centrifugal fire/process pump, flanged OS&Y gate valve, and powered reservoir line.",
    "image": "/images/our-work/work-18.webp",
    "thumb": "/images/our-work/thumbs/work-18-thumb.webp",
    "finalSizeKB": 88,
    "thumbSizeKB": 55,
    "isEnhanced": false,
    "tags": [
      "Night Commissioning",
      "Fire Pump",
      "OS&Y Valve",
      "Electrical Drive"
    ]
  },
  {
    "id": "work-19",
    "title": "Certified Welder Joining Flanged High-Pressure Pipe Spool",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum / Industrial Clients",
    "location": "Field Fabrication Yard",
    "description": "Experienced PIS welder wearing protective welding hood and leather gauntlets performing root-and-cap welding on flanged spool.",
    "image": "/images/our-work/work-19.webp",
    "thumb": "/images/our-work/thumbs/work-19-thumb.webp",
    "finalSizeKB": 182,
    "thumbSizeKB": 103,
    "isEnhanced": false,
    "tags": [
      "Certified Welder",
      "Flanged Spool",
      "SMAW Welding",
      "Craftsmanship"
    ]
  },
  {
    "id": "work-20",
    "title": "Pipe Fitter Grinding & Preparing Flanged Concentric Reducer",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum / Industrial Clients",
    "location": "Field Fabrication Yard",
    "description": "Precision mechanical grinding and bevel preparation on heavy carbon steel flanged reducer spool ahead of weld inspection.",
    "image": "/images/our-work/work-20.webp",
    "thumb": "/images/our-work/thumbs/work-20-thumb.webp",
    "finalSizeKB": 160,
    "thumbSizeKB": 87,
    "isEnhanced": false,
    "tags": [
      "Weld Preparation",
      "Pipe Reducer",
      "Grinding",
      "QA/QC"
    ]
  },
  {
    "id": "work-21",
    "title": "On-Site Pipeline Welding & Structural Fit-Up Along Yard",
    "category": "On-Site Execution",
    "division": "Mechanical",
    "client": "Hascol Petroleum / Industrial Clients",
    "location": "Pipeline Corridor",
    "description": "Mechanical crew preparing branch tee connection and tack-welding primed heavy carbon steel pipe string on site.",
    "image": "/images/our-work/work-21.webp",
    "thumb": "/images/our-work/thumbs/work-21-thumb.webp",
    "finalSizeKB": 122,
    "thumbSizeKB": 63,
    "isEnhanced": false,
    "tags": [
      "Pipeline String",
      "Centerline Alignment",
      "Field Execution",
      "Welding"
    ]
  },
  {
    "id": "work-22",
    "title": "Mobile Crane Constructing Steel Building Roof & Stair Deck",
    "category": "Steel Structures & Rigging",
    "division": "Civil",
    "client": "Industrial Complex Partners",
    "location": "Plant Site",
    "description": "Heavy mobile crane hoisting structural roof trusses over masonry civil walls, raised mezzanine platform, and steel stairway.",
    "image": "/images/our-work/work-22.webp",
    "thumb": "/images/our-work/thumbs/work-22-thumb.webp",
    "finalSizeKB": 125,
    "thumbSizeKB": 68,
    "isEnhanced": false,
    "tags": [
      "Mobile Crane",
      "Steel Building",
      "Civil Masonry",
      "Mezzanine Deck"
    ]
  },
  {
    "id": "work-23",
    "title": "Multi-Level Structural Steel Pipe Gallery Inside Facility",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Karachi Industrial Complex",
    "description": "Multi-tier bolted and welded structural steel framework carrying parallel process pipe runs across clear-span building bay.",
    "image": "/images/our-work/work-23.webp",
    "thumb": "/images/our-work/thumbs/work-23-thumb.webp",
    "finalSizeKB": 145,
    "thumbSizeKB": 89,
    "isEnhanced": false,
    "tags": [
      "Pipe Gallery",
      "Multi-Tier Steel",
      "Industrial Shed",
      "Structural Framing"
    ]
  },
  {
    "id": "work-24",
    "title": "High-Elevation Rigger Installing Overhead Pipe Rack Array",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Karachi Industrial Complex",
    "description": "Skilled rigger positioning closely spaced process pipelines atop elevated steel support beams inside plant building.",
    "image": "/images/our-work/work-24.webp",
    "thumb": "/images/our-work/thumbs/work-24-thumb.webp",
    "finalSizeKB": 147,
    "thumbSizeKB": 80,
    "isEnhanced": false,
    "tags": [
      "Overhead Pipe Rack",
      "Rigging",
      "High Elevation",
      "Process Piping"
    ]
  },
  {
    "id": "work-25",
    "title": "Two-Tier Structural Steel Manifold Platform & Safety Staircase",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Plant Bay",
    "description": "Heavy grey-painted structural steel operating gallery complete with guardrail handrails, caged vertical pipe risers, and sloped stair access.",
    "image": "/images/our-work/work-25.webp",
    "thumb": "/images/our-work/thumbs/work-25-thumb.webp",
    "finalSizeKB": 154,
    "thumbSizeKB": 85,
    "isEnhanced": false,
    "tags": [
      "Manifold Platform",
      "Access Staircase",
      "Guardrails",
      "Structural Steel"
    ]
  },
  {
    "id": "work-26",
    "title": "Multi-Line Overhead Utility & Process Piping Bridge",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Plant Bay",
    "description": "Wide view inside industrial shed illustrating multi-pipe overhead rack run supported cleanly across roof steel beams.",
    "image": "/images/our-work/work-26.webp",
    "thumb": "/images/our-work/thumbs/work-26-thumb.webp",
    "finalSizeKB": 115,
    "thumbSizeKB": 63,
    "isEnhanced": false,
    "tags": [
      "Utility Bridge",
      "Parallel Piping",
      "Industrial Shed",
      "Mechanical"
    ]
  },
  {
    "id": "work-27",
    "title": "Night View of Oil Terminal Receipt Line U-Bend Expansion Loop",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Vertical thermal expansion loop labeled \"RECEIPT LINE\" illuminated at night beside isolation gate valves and storage tanks.",
    "image": "/images/our-work/work-27.webp",
    "thumb": "/images/our-work/thumbs/work-27-thumb.webp",
    "finalSizeKB": 80,
    "thumbSizeKB": 49,
    "isEnhanced": false,
    "tags": [
      "Receipt Line",
      "Expansion Loop",
      "Hascol Petroleum",
      "Night Execution"
    ]
  },
  {
    "id": "work-28",
    "title": "Roof-Level Structural Steel I-Beam Welding Crew",
    "category": "On-Site Execution",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Plant Bay",
    "description": "Welder wearing harness and helmet assembling overhead structural I-beam cross-bracing and roof-level piping supports.",
    "image": "/images/our-work/work-28.webp",
    "thumb": "/images/our-work/thumbs/work-28-thumb.webp",
    "finalSizeKB": 104,
    "thumbSizeKB": 52,
    "isEnhanced": false,
    "tags": [
      "I-Beam Assembly",
      "Structural Crew",
      "Safety Harness",
      "Roof Welding"
    ]
  },
  {
    "id": "work-29",
    "title": "Top-Down View of Vertical Piping Riser Bank & Concrete Trench",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Plant Bay",
    "description": "Overhead perspective looking down vertical red-primed piping array entering floor-level manifold trench with field team below.",
    "image": "/images/our-work/work-29.webp",
    "thumb": "/images/our-work/thumbs/work-29-thumb.webp",
    "finalSizeKB": 126,
    "thumbSizeKB": 72,
    "isEnhanced": false,
    "tags": [
      "Vertical Risers",
      "Pipe Trench",
      "Manifold Array",
      "Structural Steel"
    ]
  },
  {
    "id": "work-30",
    "title": "Completed Horizontal Pipe Array Turning Into Vertical Risers",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Industrial Process Facility",
    "location": "Plant Bay",
    "description": "Clean 90-degree transition of multi-line overhead process pipe bank dropping vertically down structural bay wall.",
    "image": "/images/our-work/work-30.webp",
    "thumb": "/images/our-work/thumbs/work-30-thumb.webp",
    "finalSizeKB": 120,
    "thumbSizeKB": 66,
    "isEnhanced": false,
    "tags": [
      "90-Degree Transition",
      "Pipe Array",
      "Vertical Bank",
      "Precision Fit"
    ]
  },
  {
    "id": "work-31",
    "title": "Dual Vertical Process Vessels, Lattice Tower & Crane Rigging",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Sugar & Bio-Energy Complex",
    "location": "Sindh Project Site",
    "description": "Tall cylindrical process column paired with structural steel lattice frame housing elevated vessel and mobile crane support.",
    "image": "/images/our-work/work-31.webp",
    "thumb": "/images/our-work/thumbs/work-31-thumb.webp",
    "finalSizeKB": 54,
    "thumbSizeKB": 28,
    "isEnhanced": true,
    "tags": [
      "Process Vessels",
      "Lattice Tower",
      "Crane Rigging",
      "Heavy Erection"
    ]
  },
  {
    "id": "work-32",
    "title": "KATO Crane Hoisting Tall Structural Steel Column Frame",
    "category": "Steel Structures & Rigging",
    "division": "Mechanical",
    "client": "Sugar & Industrial Complexes",
    "location": "Plant Jobsite",
    "description": "Heavy yellow KATO crane lifting tall steel column framework adjacent to erected cylindrical process tower.",
    "image": "/images/our-work/work-32.webp",
    "thumb": "/images/our-work/thumbs/work-32-thumb.webp",
    "finalSizeKB": 47,
    "thumbSizeKB": 24,
    "isEnhanced": true,
    "tags": [
      "KATO Crane",
      "Column Hoisting",
      "Steel Erection",
      "Rigging"
    ]
  },
  {
    "id": "work-33",
    "title": "Fabricated Cylindrical Conical-Roof Process Storage Tank",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Industrial Clients",
    "location": "Fabrication Site",
    "description": "Site-fabricated vertical cylindrical process tank shell fitted with welded conical roof cap ready for testing.",
    "image": "/images/our-work/work-33.webp",
    "thumb": "/images/our-work/thumbs/work-33-thumb.webp",
    "finalSizeKB": 50,
    "thumbSizeKB": 17,
    "isEnhanced": true,
    "tags": [
      "Storage Tank",
      "Conical Roof",
      "Tank Fabrication",
      "Plate Welding"
    ]
  },
  {
    "id": "work-34",
    "title": "Precision-Cut Rectangular Perforated Steel Grid Screen Plate",
    "category": "Machinery & Process Tanks",
    "division": "Mechanical",
    "client": "Sugar Mill Equipment",
    "location": "PIS Workshop Yard",
    "description": "Heavy-duty primed steel screen plate machined with uniform grid matrix of square apertures for process separation.",
    "image": "/images/our-work/work-34.webp",
    "thumb": "/images/our-work/thumbs/work-34-thumb.webp",
    "finalSizeKB": 236,
    "thumbSizeKB": 106,
    "isEnhanced": true,
    "tags": [
      "Perforated Plate",
      "Grid Screen",
      "Profile Cutting",
      "Sugar Equipment"
    ]
  },
  {
    "id": "work-35",
    "title": "Boiling House Yellow Hoppers & Crane Rigging Operations",
    "category": "Sugar Machinery & Towers",
    "division": "Mechanical",
    "client": "Sugar Refinery Partners",
    "location": "Sindh Project Site",
    "description": "Multi-discipline mechanical crew hoisting structural steel beside elevated process hoppers and multi-level boiling house walkways.",
    "image": "/images/our-work/work-35.webp",
    "thumb": "/images/our-work/thumbs/work-35-thumb.webp",
    "finalSizeKB": 173,
    "thumbSizeKB": 92,
    "isEnhanced": false,
    "tags": [
      "Boiling House",
      "Process Hoppers",
      "Crane Lifting",
      "Shutdown Work"
    ]
  },
  {
    "id": "work-36",
    "title": "Storage Tank Bolted Manhole Hatch & Flanged Discharge Line",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Open inspection hatch bolted manhole on bulk oil storage tank beside red flanged gate valve and export pipeline on concrete piers.",
    "image": "/images/our-work/work-36.webp",
    "thumb": "/images/our-work/thumbs/work-36-thumb.webp",
    "finalSizeKB": 139,
    "thumbSizeKB": 75,
    "isEnhanced": false,
    "tags": [
      "Manhole Hatch",
      "Discharge Valve",
      "Storage Tank",
      "Hascol Petroleum"
    ]
  },
  {
    "id": "work-37",
    "title": "Twin Process Pipelines & Multi-Valve Station Along Tank Wall",
    "category": "High-Pressure Piping",
    "division": "Mechanical",
    "client": "Hascol Petroleum Limited",
    "location": "Qasba Gujrat Terminal",
    "description": "Dual process piping headers mounted on reinforced concrete supports with cluster of manual flanged gate valves at tank base.",
    "image": "/images/our-work/work-37.webp",
    "thumb": "/images/our-work/thumbs/work-37-thumb.webp",
    "finalSizeKB": 124,
    "thumbSizeKB": 63,
    "isEnhanced": false,
    "tags": [
      "Twin Piping",
      "Valve Cluster",
      "Tank Base",
      "Petroleum Terminal"
    ]
  }
];

export const OUR_WORK_VIDEOS: WorkVideo[] = [
  {
    "id": "vid-1",
    "title": "On-Site Fabrication & Rigging Video Highlight",
    "videoPath": "/videos/our-work/work-video-1.mp4",
    "sizeMB": "3.6",
    "category": "Site Footage"
  },
  {
    "id": "vid-2",
    "title": "Plant Erection & Machinery Motion Clip",
    "videoPath": "/videos/our-work/work-video-2.mp4",
    "sizeMB": "1.0",
    "category": "Site Footage"
  }
];
