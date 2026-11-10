const fs = require('fs');
const path = require('path');

const processed = JSON.parse(fs.readFileSync(path.join(__dirname, 'processed_work.json'), 'utf8'));

// Verified engineering metadata keyed strictly by original filename in "Our work"
const METADATA_BY_FILE = {
  '20180228_210826.jpg.jpeg': {
    title: 'TADANO Mobile Crane Hoisting Process Column Assembly',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'TADANO heavy mobile crane hoisting flanged vapor nozzle assemblies alongside riggers working atop elevated pan tower platforms.',
    tags: ['TADANO Crane', 'Continuous Pan', 'Tower Erection', 'Ranipur Sugar Mills']
  },
  '20180228_210905.jpg.jpeg': {
    title: 'Boiling House Base Process Piping & Pump Manifold Fit-Up',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'Ground-level process piping tie-ins, flanged reducer spools, and centrifugal pump assembly beneath vertical pan vessel.',
    tags: ['Process Piping', 'Boiling House', 'Pump Fit-Up', 'Mechanical']
  },
  '20180228_210915.jpg.jpeg': {
    title: 'Heavy Transfer Pump & Discharge Pipe Installation Crew',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'Field mechanics installing industrial transfer pump baseframe and inclined discharge piping line inside sugar processing bay.',
    tags: ['Pump Installation', 'Discharge Piping', 'Baseframe', 'Sugar Processing']
  },
  '20180228_211228.jpg.jpeg': {
    title: 'Dual Vertical Continuous Pan Columns & Access Walkways',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'Twin erected cylindrical process towers interconnected via bolted access platforms, safety guardrails, and caged vertical ladders.',
    tags: ['Dual Towers', 'Access Platforms', 'Caged Ladder', 'Vertical Continuous Pan']
  },
  '20180401_183034.jpg.jpeg': {
    title: 'Vertical Continuous Pan Twin Towers (First in Pakistan)',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'Milestone fabrication and erection of Pakistan\'s first indigenous Vertical Continuous Pan installation featuring wrap-around structural stairways.',
    tags: ['First in Pakistan', 'Vertical Continuous Pan', 'Ranipur Sugar Mills', 'Spiral Staircase']
  },
  '20180401_190745.jpg.jpeg': {
    title: 'Night-Shift Floodlit Erection of Dual Continuous Pan Towers',
    category: 'On-Site Execution',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: '24/7 continuous shutdown execution under high-intensity site floodlights to deliver mechanical erection ahead of crushing schedule.',
    tags: ['Night Shift', 'Shutdown Turnaround', '24/7 Execution', 'Floodlit Erection']
  },
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (1).jpeg': {
    title: 'Twin Stainless Steel Indian Design Jet Condensers',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Sugar & Power Industry Clients',
    location: 'PIS Workshop Yard',
    description: 'Completed pair of stainless steel conical Indian Design Jet Condensers with precision-machined flanged vapor inlet nozzles.',
    tags: ['Indian Design', 'Jet Condenser', 'Stainless Steel', 'Workshop Fabrication']
  },
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (4).jpeg': {
    title: 'Workshop Craftsmanship on Perforated Conical Internals',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Sugar & Power Industry Clients',
    location: 'PIS Workshop Yard',
    description: 'Skilled metal fabricator assembling custom perforated stainless steel internal spray cone on workshop floor.',
    tags: ['Perforated Cone', 'Internal Baffle', 'Stainless Fabrication', 'Workshop']
  },
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (5).jpeg': {
    title: 'Precision-Cut Heavy Circular Tube-Sheet & Sieve Plate',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Sugar Mill Equipment',
    location: 'PIS Workshop Yard',
    description: 'Heavy-gauge carbon steel circular tube-sheet / condenser distribution plate machined with uniform precision perforations.',
    tags: ['Tube Sheet', 'Precision Cutting', 'Condenser Internals', 'Heavy Plate']
  },
  'WhatsApp Image 2026-11-08 at 5.25.09 PM (6).jpeg': {
    title: 'Overhead Steel Girders & Elevated Piping Framing Crew',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Industrial Complex Partners',
    location: 'Plant Jobsite',
    description: 'Fabrication crew installing primed structural steel support girders and elevated piping network inside industrial building.',
    tags: ['Steel Girders', 'Overhead Piping', 'Elevated Work', 'Structural Steel']
  },
  'WhatsApp Image 2026-11-08 at 5.25.09 PM.jpeg': {
    title: 'Multi-Stage Process Column & Orange Storage Tanks Daylight View',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Ranipur Sugar Mills Limited',
    location: 'Ranipur, Sindh',
    description: 'Integrated process column structural framing, vertical staircases, and adjacent storage vessels at sugar manufacturing complex.',
    tags: ['Process Column', 'Stair Tower', 'Storage Vessels', 'Turnkey Plant']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (1).jpeg': {
    title: 'Bulk Oil Storage Tank Nozzle & Flanged Isolation Gate Valve',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Fossil fuel storage tank shell connection fitted with heavy bolted flange isolation gate valve and reinforced concrete pipe pier.',
    tags: ['Oil Storage Tank', 'Gate Valve', 'Hascol Petroleum', 'Terminal Piping']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (10).jpeg': {
    title: 'Tank Farm Export Pipeline & Twin Gate Valve Station',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Sweeping bulk oil terminal export pipeline mounted on concrete support piers leading to twin flanged shutoff valves at tank bund.',
    tags: ['Export Pipeline', 'Twin Gate Valves', 'Bulk Oil Tank', 'Concrete Piers']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (12).jpeg': {
    title: 'Electric Centrifugal Pump Skid & Field Welding Unit',
    category: 'On-Site Execution',
    division: 'Mechanical',
    client: 'Industrial Facility Partners',
    location: 'Site Pump House',
    description: 'Heavy-duty electric motor centrifugal transfer pump aligned on grouted baseplate alongside PIS welding unit and primed piping.',
    tags: ['Pump Skid', 'Field Welding', 'Transfer Pump', 'Pump House']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (14).jpeg': {
    title: 'Terminal Twin Header Pipeline on Concrete Sleeper Pad',
    category: 'High-Pressure Piping',
    division: 'Multi-Disciplinary',
    client: 'Hascol Petroleum / Power Infrastructure',
    location: 'Terminal Site',
    description: 'Dual carbon steel pipelines anchored along poured concrete sleeper pad equipped with blue flanged isolation valves and industrial shed backdrop.',
    tags: ['Concrete Sleeper', 'Twin Pipeline', 'Flanged Valves', 'Civil & Mechanical']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (16).jpeg': {
    title: 'Elevated Structural Column Rack & Storage Tank Valve Manifold',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Multi-valve manifold header anchored along raised concrete footing facing bulk petroleum storage tanks inside terminal containment yard.',
    tags: ['Valve Manifold', 'Oil Terminal', 'Concrete Footing', 'Storage Tanks']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (18).jpeg': {
    title: 'Prefabricated Carbon Steel Pipe Spools & Elbow Manifolds',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Terminal Fabrication Yard',
    description: 'Staged field laydown of red-oxide primed welded process pipe spools, long-radius elbows, and branch tees ready for hoisting.',
    tags: ['Pipe Spools', 'Carbon Steel', 'Prefabrication', 'Primer Coated']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (2).jpeg': {
    title: 'Floodlit Night Commissioning of High-Capacity Pump & OS&Y Valve',
    category: 'On-Site Execution',
    division: 'Electrical',
    client: 'Hascol Petroleum / Industrial Complex',
    location: 'Firefighting Pump Yard',
    description: 'Nighttime illuminated installation of high-capacity centrifugal fire/process pump, flanged OS&Y gate valve, and powered reservoir line.',
    tags: ['Night Commissioning', 'Fire Pump', 'OS&Y Valve', 'Electrical Drive']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (20).jpeg': {
    title: 'Certified Welder Joining Flanged High-Pressure Pipe Spool',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum / Industrial Clients',
    location: 'Field Fabrication Yard',
    description: 'Experienced PIS welder wearing protective welding hood and leather gauntlets performing root-and-cap welding on flanged spool.',
    tags: ['Certified Welder', 'Flanged Spool', 'SMAW Welding', 'Craftsmanship']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (21).jpeg': {
    title: 'Pipe Fitter Grinding & Preparing Flanged Concentric Reducer',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum / Industrial Clients',
    location: 'Field Fabrication Yard',
    description: 'Precision mechanical grinding and bevel preparation on heavy carbon steel flanged reducer spool ahead of weld inspection.',
    tags: ['Weld Preparation', 'Pipe Reducer', 'Grinding', 'QA/QC']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (22).jpeg': {
    title: 'On-Site Pipeline Welding & Structural Fit-Up Along Yard',
    category: 'On-Site Execution',
    division: 'Mechanical',
    client: 'Hascol Petroleum / Industrial Clients',
    location: 'Pipeline Corridor',
    description: 'Mechanical crew preparing branch tee connection and tack-welding primed heavy carbon steel pipe string on site.',
    tags: ['Pipeline String', 'Centerline Alignment', 'Field Execution', 'Welding']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (23).jpeg': {
    title: 'Mobile Crane Constructing Steel Building Roof & Stair Deck',
    category: 'Steel Structures & Rigging',
    division: 'Civil',
    client: 'Industrial Complex Partners',
    location: 'Plant Site',
    description: 'Heavy mobile crane hoisting structural roof trusses over masonry civil walls, raised mezzanine platform, and steel stairway.',
    tags: ['Mobile Crane', 'Steel Building', 'Civil Masonry', 'Mezzanine Deck']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (24).jpeg': {
    title: 'Multi-Level Structural Steel Pipe Gallery Inside Facility',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Karachi Industrial Complex',
    description: 'Multi-tier bolted and welded structural steel framework carrying parallel process pipe runs across clear-span building bay.',
    tags: ['Pipe Gallery', 'Multi-Tier Steel', 'Industrial Shed', 'Structural Framing']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (25).jpeg': {
    title: 'High-Elevation Rigger Installing Overhead Pipe Rack Array',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Karachi Industrial Complex',
    description: 'Skilled rigger positioning closely spaced process pipelines atop elevated steel support beams inside plant building.',
    tags: ['Overhead Pipe Rack', 'Rigging', 'High Elevation', 'Process Piping']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (26).jpeg': {
    title: 'Two-Tier Structural Steel Manifold Platform & Safety Staircase',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Plant Bay',
    description: 'Heavy grey-painted structural steel operating gallery complete with guardrail handrails, caged vertical pipe risers, and sloped stair access.',
    tags: ['Manifold Platform', 'Access Staircase', 'Guardrails', 'Structural Steel']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (29).jpeg': {
    title: 'Multi-Line Overhead Utility & Process Piping Bridge',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Plant Bay',
    description: 'Wide view inside industrial shed illustrating multi-pipe overhead rack run supported cleanly across roof steel beams.',
    tags: ['Utility Bridge', 'Parallel Piping', 'Industrial Shed', 'Mechanical']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (3).jpeg': {
    title: 'Night View of Oil Terminal Receipt Line U-Bend Expansion Loop',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Vertical thermal expansion loop labeled "RECEIPT LINE" illuminated at night beside isolation gate valves and storage tanks.',
    tags: ['Receipt Line', 'Expansion Loop', 'Hascol Petroleum', 'Night Execution']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (30).jpeg': {
    title: 'Roof-Level Structural Steel I-Beam Welding Crew',
    category: 'On-Site Execution',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Plant Bay',
    description: 'Welder wearing harness and helmet assembling overhead structural I-beam cross-bracing and roof-level piping supports.',
    tags: ['I-Beam Assembly', 'Structural Crew', 'Safety Harness', 'Roof Welding']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (31).jpeg': {
    title: 'Top-Down View of Vertical Piping Riser Bank & Concrete Trench',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Plant Bay',
    description: 'Overhead perspective looking down vertical red-primed piping array entering floor-level manifold trench with field team below.',
    tags: ['Vertical Risers', 'Pipe Trench', 'Manifold Array', 'Structural Steel']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (33).jpeg': {
    title: 'Completed Horizontal Pipe Array Turning Into Vertical Risers',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Industrial Process Facility',
    location: 'Plant Bay',
    description: 'Clean 90-degree transition of multi-line overhead process pipe bank dropping vertically down structural bay wall.',
    tags: ['90-Degree Transition', 'Pipe Array', 'Vertical Bank', 'Precision Fit']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (38).jpeg': {
    title: 'Dual Vertical Process Vessels, Lattice Tower & Crane Rigging',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Sugar & Bio-Energy Complex',
    location: 'Sindh Project Site',
    description: 'Tall cylindrical process column paired with structural steel lattice frame housing elevated vessel and mobile crane support.',
    tags: ['Process Vessels', 'Lattice Tower', 'Crane Rigging', 'Heavy Erection']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (40).jpeg': {
    title: 'KATO Crane Hoisting Tall Structural Steel Column Frame',
    category: 'Steel Structures & Rigging',
    division: 'Mechanical',
    client: 'Sugar & Industrial Complexes',
    location: 'Plant Jobsite',
    description: 'Heavy yellow KATO crane lifting tall steel column framework adjacent to erected cylindrical process tower.',
    tags: ['KATO Crane', 'Column Hoisting', 'Steel Erection', 'Rigging']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (41).jpeg': {
    title: 'Fabricated Cylindrical Conical-Roof Process Storage Tank',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Industrial Clients',
    location: 'Fabrication Site',
    description: 'Site-fabricated vertical cylindrical process tank shell fitted with welded conical roof cap ready for testing.',
    tags: ['Storage Tank', 'Conical Roof', 'Tank Fabrication', 'Plate Welding']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (42).jpeg': {
    title: 'Precision-Cut Rectangular Perforated Steel Grid Screen Plate',
    category: 'Machinery & Process Tanks',
    division: 'Mechanical',
    client: 'Sugar Mill Equipment',
    location: 'PIS Workshop Yard',
    description: 'Heavy-duty primed steel screen plate machined with uniform grid matrix of square apertures for process separation.',
    tags: ['Perforated Plate', 'Grid Screen', 'Profile Cutting', 'Sugar Equipment']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (43).jpeg': {
    title: 'Boiling House Yellow Hoppers & Crane Rigging Operations',
    category: 'Sugar Machinery & Towers',
    division: 'Mechanical',
    client: 'Sugar Refinery Partners',
    location: 'Sindh Project Site',
    description: 'Multi-discipline mechanical crew hoisting structural steel beside elevated process hoppers and multi-level boiling house walkways.',
    tags: ['Boiling House', 'Process Hoppers', 'Crane Lifting', 'Shutdown Work']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (6).jpeg': {
    title: 'Storage Tank Bolted Manhole Hatch & Flanged Discharge Line',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Open inspection hatch bolted manhole on bulk oil storage tank beside red flanged gate valve and export pipeline on concrete piers.',
    tags: ['Manhole Hatch', 'Discharge Valve', 'Storage Tank', 'Hascol Petroleum']
  },
  'WhatsApp Image 2026-11-08 at 5.25.10 PM (7).jpeg': {
    title: 'Twin Process Pipelines & Multi-Valve Station Along Tank Wall',
    category: 'High-Pressure Piping',
    division: 'Mechanical',
    client: 'Hascol Petroleum Limited',
    location: 'Qasba Gujrat Terminal',
    description: 'Dual process piping headers mounted on reinforced concrete supports with cluster of manual flanged gate valves at tank base.',
    tags: ['Twin Piping', 'Valve Cluster', 'Tank Base', 'Petroleum Terminal']
  }
};

const workData = processed.images.map((item) => {
  const meta = METADATA_BY_FILE[item.originalFile];
  if (!meta) throw new Error(`Missing metadata for ${item.originalFile}`);
  return {
    id: item.id,
    title: meta.title,
    category: meta.category,
    division: meta.division,
    client: meta.client,
    location: meta.location,
    description: meta.description,
    image: item.webPath,
    thumb: item.thumbPath,
    finalSizeKB: item.finalSizeKB,
    thumbSizeKB: item.thumbSizeKB,
    isEnhanced: item.isEnhanced,
    tags: meta.tags
  };
});

const videoData = processed.videos.map((vid, idx) => ({
  id: vid.id,
  title: idx === 0 ? 'On-Site Fabrication & Rigging Video Highlight' : 'Plant Erection & Machinery Motion Clip',
  videoPath: vid.webPath,
  sizeMB: vid.sizeMB,
  category: 'Site Footage'
}));

const tsContent = `export interface WorkItem {
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

export const OUR_WORK_GALLERY: WorkItem[] = ${JSON.stringify(workData, null, 2)};

export const OUR_WORK_VIDEOS: WorkVideo[] = ${JSON.stringify(videoData, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, '..', 'data', 'our-work-data.ts'), tsContent, 'utf8');
console.log(`Saved data/our-work-data.ts with ${workData.length} deduplicated real images and ${videoData.length} real videos.`);
