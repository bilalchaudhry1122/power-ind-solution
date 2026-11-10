export interface Division {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  badgeColor: string;
  description: string;
  image: string;
  icon: string;
  capabilities: string[];
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  division: 'Mechanical' | 'Civil' | 'Electrical' | 'Multi-Disciplinary';
  year?: string;
  badge?: string;
  scope: string[];
  description: string;
  partners?: string[];
  image: string;
}

export interface Client {
  name: string;
  category: string;
  highlight?: boolean;
  logo: string;
  location?: string;
  sector?: 'Power & Energy' | 'Oil & Gas' | 'Sugar Processing' | 'Textile & Manufacturing';
}

export const COMPANY_INFO = {
  name: "Power Industrial Solutions",
  shortName: "PIS",
  foundedYear: 2010,
  slogan: "To be completed earlier than Planned",
  motto: "You Think, We Execute",
  managingDirector: "Muhammad Hafeez",
  contact: {
    headOffice: "Al Makka Filling Station, Near Al Noor Sugar Mills, Shahpur Jahania, Talka Qazi Ahmed, Distt. Nawabshah, Sindh, Pakistan",
    telephone: "0244-314262",
    mobiles: ["0333-7054812", "0300-3226604"],
    primaryEmail: "powerindsolution@gmail.com",
    workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM (Emergency Engineering 24/7)"
  },
  stats: [
    { label: "Years of Engineering Excellence", value: "14+", subtext: "Established in 2010" },
    { label: "Industrial Projects Executed", value: "350+", subtext: "Across Pakistan & Heavy Industries" },
    { label: "Leading Industrial Clients", value: "20+", subtext: "Sugar, Power, Oil & Gas Giants" },
    { label: "Specialized Engineering Divisions", value: "3", subtext: "Civil, Mechanical, Electrical" }
  ]
};

export const MISSION_VISION_STRATEGY = {
  mission: "To provide quality workmanship and customer service & maintain the highest level of professionalism, honesty and fairness in our relationships with our customers, employees and vendors. To grow by continually providing useful and significant services, and solutions to markets we already serve and to expand into new areas that build on our competencies and customer interests.",
  vision: "To be the preferred contractor of choice. A company that our customers want to work with and our employees are proud to work for.",
  strategy: [
    "We are committed to differentiating ourselves by continuously increasing our expertise in executing large and sophisticated buildings, oil & gas facilities and infrastructure projects while maintaining a highly selective risk management process for every new project and venture.",
    "PIS will always operate at highest level of safety, quality and cost effectiveness, to ensure we remain the most attractive to our clients, employees and partners.",
    "Our success comes from our people, who strive to continuously innovate, adapt to local markets, and hone their skills. Through this strategy, PIS will continue to grow and increase profitability."
  ]
};

export const CORE_VALUES = [
  {
    title: "Excellence",
    icon: "Award",
    description: "We strive for excellence in quality, and we continuously innovate, utilizing advance technologies in every engineering project."
  },
  {
    title: "Teamwork",
    icon: "Users",
    description: "We insist on mutual respect, cooperation and mutual encouragement to achieve each individual's maximum potential."
  },
  {
    title: "Integrity",
    icon: "ShieldCheck",
    description: "We act with uncompromising reliability, honesty, transparency, and fairness in all contractual commitments."
  },
  {
    title: "Commitment",
    icon: "Target",
    description: "We are fully dedicated to delivering our objectives on schedule through the most efficient use of resources."
  },
  {
    title: "Sustainability",
    icon: "Leaf",
    description: "We are committed to safeguarding all stakeholders, including the health and safety of our employees, society, and the environment."
  },
  {
    title: "Safety First",
    icon: "HardHat",
    description: "Safety comes first. We invest in jobsite safety and continuing education to provide safe working environments for all on-site personnel."
  },
  {
    title: "Quality",
    icon: "CheckCircle",
    description: "We'll meet your expectations, then we'll exceed them. Our team members prove themselves through the flawless execution of your project."
  }
];

export const QUALITY_POLICY = [
  "To meet our clients agreement and satisfaction with the highest precision.",
  "To fulfill all technical and statutory requirements of our clients.",
  "Completion of job in time – earlier than planned.",
  "Having continuous desire for client suggestions and proactive enhancements.",
  "To meet customer demand to the best global industry standards.",
  "We offer a wide range of industrial products and services having tremendous quality."
];

export const DIVISIONS: Division[] = [
  {
    id: "mechanical",
    name: "Mechanical Engineering",
    slug: "mechanical",
    tagline: "Heavy Fabrication, High-Pressure Piping & Turnkey Plant Systems",
    badgeColor: "bg-blue-600",
    description: "Full-scale mechanical contracting encompassing certified high-pressure piping, process tank fabrication, structural erection, hydro-testing, rotary equipment alignment, and specialized process plant manufacturing.",
    image: "/images/our-work/work-01.webp",
    icon: "Wrench",
    capabilities: [
      "Pipe Fabrication, Precision Welding, Erection & Thermal Insulation",
      "Storage & Process Tanks Fabrication, Erection and Insulation",
      "Structural Steel Fabrication, Heavy Erection & Pipe Racks",
      "Mechanical Pump, Compressor & Rotary Equipment Alignment",
      "Hydro-testing Process of Piping, Vessels, Tanks and Entire Plant",
      "Firefighting System Installation & Dedicated Piping Networks",
      "Industrial Air Ventilation & Heavy HVAC Ducting Systems",
      "High-Pressure Pipeline Construction Works (Oil, Gas & Steam)",
      "Surface Sand Blasting & Specialized Industrial Protective Paints"
    ]
  },
  {
    id: "electrical",
    name: "Electrical & Instrumentation",
    slug: "electrical",
    tagline: "Substations, Industrial Power Distribution & Smart Automation",
    badgeColor: "bg-amber-600",
    description: "Turnkey electrical engineering solutions including high/medium voltage substations, diesel/gas generator synchronization, underground cabling, building power systems, explosion-proof installations, and DCS automation.",
    image: "/images/our-work/work-18.webp",
    icon: "Zap",
    capabilities: [
      "Electrical Sub-Station Design, Erection, Testing & Commissioning",
      "Diesel & Gas Generator Set Installation, Synchronization & Maintenance",
      "Generator Limited Auto Power Supply (ATS/AMF) Systems for Complex Facilities",
      "Underground High & Low Voltage Power and Control Cable Laying & Termination",
      "Industrial & Commercial Building Complete Electrical Infrastructure",
      "Online UPS Systems & Mission-Critical Data Networks",
      "Addressable Fire Detection, Alarm & Emergency Evacuation Systems",
      "High-Definition CCTV Industrial Surveillance & Monitoring Systems",
      "Industrial High-Mast & Street Lighting Poles",
      "Explosion-Proof Lighting & Hazardous Area Equipment Electrical Wiring Systems"
    ]
  },
  {
    id: "civil",
    name: "Civil & Infrastructure",
    slug: "civil",
    tagline: "Heavy Industrial Foundations, Commercial Buildings & Water Structures",
    badgeColor: "bg-emerald-600",
    description: "Robust civil construction services specialized for industrial plants, heavy machine foundations, water reservoirs, infrastructure roads, structural RCC, and precision architectural facilities.",
    image: "/images/our-work/work-22.webp",
    icon: "Building2",
    capabilities: [
      "Construction of Heavy Industrial, Commercial, and Residential Buildings",
      "Water Retaining Structures, Large Industrial Reservoirs & Aqueducts",
      "Paved Roads, Heavy Industrial Pavements, Open Car Parks, CurbStones & Footways",
      "Advanced Waterproofing for Basements, Retaining Walls and Factory Rooftops",
      "Boundary Walls & Heavy Machinery / Vibrational Equipment Foundations",
      "Precast RCC Structure Road Barriers – Custom Engineering, Design & Fabrication",
      "Comprehensive Civil Repair, Structural Retrofitting & Facility Maintenance",
      "Specialized Architectural Wood, Joinery & Furniture Works"
    ]
  }
];

export const MAJOR_TASKS_SCOPE = [
  {
    title: "Indian Design Jet Condenser with Automation",
    tag: "Specialist Domain",
    description: "Complete design, manufacturing, and erection of high-efficiency Jet Condensers with computerized instrument automation tailored for sugar and power industries."
  },
  {
    title: "Vertical Continuous Pan (VCP)",
    tag: "Historic Achievement",
    description: "Manufactured the First Continuous Pan in Pakistan installed at Ranipur Sugar Mills Limited, built strictly according to advanced international engineering drawings."
  },
  {
    title: "Evaporators & Falling Film Evaporators",
    tag: "Thermal Efficiency",
    description: "Fabrication of large-scale Falling Film Evaporators and multi-effect evaporation trains for process concentration."
  },
  {
    title: "Crystallizers (U-Shape & Vertical)",
    tag: "Process Machinery",
    description: "High-capacity U-Shape Crystallizers and Vertical Crystallizers engineered for optimized cooling and uniform crystal growth."
  },
  {
    title: "Mud Fertilizer & Byproduct Plants",
    tag: "Eco & Fertilizer",
    description: "End-to-end processing equipment for mud fertilizer conversion, sustainable byproduct management, and soil conditioner plants."
  },
  {
    title: "Juice Heaters & Clarifiers",
    tag: "Sugar & Food Industry",
    description: "Manufacturing of multi-pass Juice Heaters, Juice Clarifiers, Talofloc Clarifiers, Gross Hoppers, and Mud Mixers."
  },
  {
    title: "Boiler ID / FD Fans & Air Handling",
    tag: "Boiler Auxiliaries",
    description: "Heavy-duty Induced Draft (ID) and Forced Draft (FD) fans engineered for extreme industrial boiler conditions."
  },
  {
    title: "High-Pressure Valves & Piping Assemblies",
    tag: "Fluid Dynamics",
    description: "Angle valves, 2-way and 3-way industrial control valves, high-pressure steam distribution headers, and chemical lines."
  },
  {
    title: "Heavy Steel Structures & Access Platforms",
    tag: "Structural Steel",
    description: "Engineering walkways, maintenance platforms, heavy industrial sheds, shelters, pipe bridges, supports, and embedded parts."
  },
  {
    title: "Equipment Refurbishment & Plant Overhauling",
    tag: "Lifecycle Support",
    description: "Annual shutdown maintenance, dynamic balancing, rotor re-sleeving, bearing alignments, and turnkey refurbishment."
  }
];

export const INVERTER_DCS_DATA = {
  title: "Invertor & DCS Automation Solutions",
  subtitle: "Transpower High-Performance Variable Frequency Drives & Distributed Control",
  specifications: [
    { label: "Power Range", value: "0.4 kW ~ 315 kW" },
    { label: "Input Voltage Compatibility", value: "220V / 380V / 415V / 440V / 480V / 525V (±15%)" },
    { label: "Control Platform", value: "DSP-based Sensorless Vector Control with parameter auto-tuning" },
    { label: "Harmonics & Power Factor", value: "Built-in DC reactors above 18.5 kW for optimal power factor" },
    { label: "Cooling & Reliability", value: "Independent duct design isolating electronics from industrial dust" },
    { label: "Communication Protocols", value: "RS-485 with native Modbus RTU & ASCII protocol support" },
    { label: "Operation Interface", value: "Dual local & remote operation panel support for seamless commissioning" },
    { label: "Specialty Features", value: "Traverse triangular wave control for textile, Quick/Job parameter shortcuts" }
  ],
  applications: [
    "Industrial Elevators & Hoists",
    "Heavy Overhead Cranes",
    "High-Speed Printing Machines",
    "Textile Dyeing Machinery",
    "Paper Manufacturing Lines",
    "Winding & Unwinding Machines",
    "High-Accuracy CNC Machine Tools",
    "Metal & Profile Cutting Machines",
    "Steel Rolling Mills",
    "Wire Drawing & Stranding Machines",
    "Industrial Drawbenches",
    "High-Precision Position Control & Zero-Speed Servo Control"
  ]
};

export const INSTRUMENTATION_DATA = {
  title: "Pressure, Temperature, Level & Flow Measurement & Control",
  subtitle: "Certified process instrumentation for hazardous environments, steam systems, and oil refineries",
  categories: [
    {
      group: "Pressure Measurement & Control",
      items: [
        "Bourdon Tube & Digital Pressure Gauges",
        "High-Precision Pressure Regulators & Reducers",
        "Smart Pressure & Differential Pressure (DP) Transmitters (HART/Modbus)",
        "Adjustable Pressure Switches & Photogenic Switches",
        "Pneumatic & Hydraulic High-Pressure Quick Fittings",
        "U-Tube & Well-Type Precision Manometers",
        "Differential Pressure Gauges for Filter Monitoring"
      ]
    },
    {
      group: "Temperature & Thermal Control",
      items: [
        "Industrial Temperature Transmitters (Head & Rail Mount)",
        "RTD Sensors (Pt100, Pt1000) & High-Temp Thermocouples (Type K, J, S, R)",
        "Digital Temperature Indicators & Multi-Loop Microprocessor Controllers",
        "Bimetallic & Gas-Filled Dial Temperature Gauges",
        "Thermowells and Flanged Sanitary Sensor Assemblies"
      ]
    },
    {
      group: "Level & Flow Measurement",
      items: [
        "Electromagnetic, Vortex, Turbine & Ultrasonic Flow Meters",
        "Radar, Ultrasonic & Hydrostatic Submersible Level Transmitters",
        "Magnetic Level Gauges (Tricolor Bypass Indicators)",
        "Capacitance & Tuning Fork Level Switches for Bulk Solids and Liquids"
      ]
    },
    {
      group: "Valves & Actuation Systems",
      items: [
        "Pneumatic & Electric Actuated On/Off Control Valves",
        "Linear & Rotary High-Pressure Control Valves with Smart Positioners",
        "Direct-Acting & Pilot-Operated Solenoid Valves (Brass, SS316, Explosion-Proof)",
        "Angle & 3-Way Diverter Valves for Sugar & Petrochemical Service"
      ]
    }
  ]
};

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "ranipur-sugar-mills",
    title: "Ranipur Sugar Mills Limited",
    client: "Ranipur Sugar Mills Limited",
    location: "Ranipur, Sindh",
    division: "Mechanical",
    year: "Landmark Project",
    badge: "First in Pakistan",
    scope: [
      "Manufactured the First Vertical Continuous Pan (VCP) in Pakistan",
      "Fabrication according to advanced international engineering drawings",
      "Complete on-site rigging, heavy erection, and structural alignment",
      "Process piping integration with steam distribution systems",
      "Full automated instrument integration and hydro-testing"
    ],
    description: "A historic milestone in Pakistan's sugar processing industry: Power Industrial Solutions successfully fabricated and erected the country's first ever Vertical Continuous Pan, dramatically enhancing thermal efficiency and crystal yield.",
    image: "/images/our-work/work-05.webp"
  },
  {
    id: "lucky-coal-power-plant",
    title: "Lucky Coal Power Plant 660MW Karachi",
    client: "Lucky Electric Power Company Limited (LEPCL)",
    partners: ["SEPCOIII (Shandong Electric Power Construction)", "Lucky Electric"],
    location: "Port Qasim, Karachi",
    division: "Multi-Disciplinary",
    year: "Mega Infrastructure",
    badge: "Power Generation",
    scope: [
      "Circulation Water Pipeline Civil and Mechanical Contract",
      "Deep trench mechanical excavation, shoring, and bedding",
      "Heavy concrete pumping, reinforced foundation casting & masonry",
      "Large-diameter circulating water pipe welding, laying & hydro-testing",
      "Strict compliance with international power plant HSE and QA/QC standards"
    ],
    description: "Carried out critical mechanical and civil contracts for the circulation water pipeline network at the 660 MW Lucky Coal Power Plant in Karachi, collaborating directly with global EPC contractor SEPCOIII.",
    image: "/images/our-work/work-15.webp"
  },
  {
    id: "hascol-fossil-oil-storage",
    title: "Hascol Petroleum Fossil Oil Storage Facility",
    client: "Hascol Petroleum Limited",
    location: "Qasba Gujrat & Gadap Town LPG Terminal",
    division: "Mechanical",
    year: "Oil & Gas Terminal",
    badge: "Refinery & Storage",
    scope: [
      "Process Piping Contract: Fabrication, welding, erection & commissioning",
      "Complete Firefighting Piping Network & Deluge Valve Skid Installation",
      "Heavy Steel Structure: Fabrication, welding, and erection of manifold walkways",
      "Rotary Equipment Installation at LPG Filling Facility (Gadap Town)",
      "Technical Contract: Turnkey modification, maintenance, and shutdown overhaul of storage systems"
    ],
    description: "Delivered comprehensive EPC support for Hascol Petroleum's major bulk oil and LPG terminal facilities, executing certified high-pressure piping, certified fire safety deluge networks, and complete turnaround maintenance.",
    image: "/images/our-work/work-36.webp"
  }
];

export const CLIENTS_LIST: Client[] = [
  {
    name: "Lucky Electric Power Company",
    category: "Power Generation (660MW)",
    sector: "Power & Energy",
    location: "Port Qasim, Karachi",
    logo: "/images/clients/lucky-electric.png",
    highlight: true
  },
  {
    name: "SEPCOIII Electric Power Construction",
    category: "Global EPC Contractor",
    sector: "Power & Energy",
    location: "Karachi / Global EPC",
    logo: "/images/clients/sepcoiii.png",
    highlight: true
  },
  {
    name: "Hascol Petroleum Ltd.",
    category: "Oil & Gas / Terminals",
    sector: "Oil & Gas",
    location: "Qasba Gujrat & Gadap Town",
    logo: "/images/clients/hascol-petroleum.png",
    highlight: true
  },
  {
    name: "Al-Noor Sugar Mills Ltd.",
    category: "Sugar & Bio-Energy",
    sector: "Sugar Processing",
    location: "Shahpur Jahania, Sindh",
    logo: "/images/clients/al-noor-emblem.png",
    highlight: true
  },
  {
    name: "Ranipur Sugar Mills Ltd.",
    category: "Sugar Processing (Continuous Pan)",
    sector: "Sugar Processing",
    location: "Ranipur, Sindh",
    logo: "/images/clients/ranipur-sugar.svg",
    highlight: true
  },
  {
    name: "Habib Sugar Mills",
    category: "Sugar & Ethanol Distilleries",
    sector: "Sugar Processing",
    location: "Nawabshah, Sindh",
    logo: "/images/clients/habib-sugar.png",
    highlight: true
  },
  {
    name: "Soorty Enterprises (Pvt) Ltd.",
    category: "Textile & Denim Industrial Complex",
    sector: "Textile & Manufacturing",
    location: "Karachi Industrial Area",
    logo: "/images/clients/soorty.png",
    highlight: true
  },
  {
    name: "Mehran Sugar Mills Ltd.",
    category: "Sugar Industry & Bio-Energy",
    sector: "Sugar Processing",
    location: "Tando Allahyar, Sindh",
    logo: "/images/clients/mehran-sugar.png",
    highlight: true
  },
  {
    name: "Dewan Sugar Mills Ltd.",
    category: "Sugar & Distilleries",
    sector: "Sugar Processing",
    location: "Sujawal, Thatta",
    logo: "/images/clients/dewan-sugar.png",
    highlight: true
  },
  {
    name: "Chashma Sugar Mills",
    category: "Sugar & Industrial Alcohol",
    sector: "Sugar Processing",
    location: "Dera Ismail Khan",
    logo: "/images/clients/chashma-sugar.png",
    highlight: true
  },
  {
    name: "Premier Sugar Mills",
    category: "Sugar Industry & Distilleries",
    sector: "Sugar Processing",
    location: "Mardan, Khyber Pakhtunkhwa",
    logo: "/images/clients/premier-sugar.png",
    highlight: true
  },
  {
    name: "Sakrand Sugar Mills",
    category: "Sugar Processing",
    sector: "Sugar Processing",
    location: "Sakrand, Nawabshah",
    logo: "/images/clients/sakrand-sugar.png"
  },
  {
    name: "Sindh Abadgar S.M. Ltd.",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Deh Deenpur, T.M. Khan",
    logo: "/images/clients/sindh-abadgar.png"
  },
  {
    name: "Matiari Sugar Mills Ltd.",
    category: "Sugar & Co-Generation",
    sector: "Sugar Processing",
    location: "Matiari, Sindh",
    logo: "/images/clients/matiari-sugar.svg"
  },
  {
    name: "Bandhi Sugar Mills Ltd.",
    category: "Sugar Processing",
    sector: "Sugar Processing",
    location: "Bandhi, Nawabshah",
    logo: "/images/clients/bandhi-sugar.svg"
  },
  {
    name: "Gulf Sugar Mills Ltd.",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Ghotki, Sindh",
    logo: "/images/clients/gulf-sugar.svg"
  },
  {
    name: "New Dadu S.M. Ltd.",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Dadu, Sindh",
    logo: "/images/clients/new-dadu-sugar.svg"
  },
  {
    name: "Tharparkar Sugar Mills",
    category: "Sugar Processing",
    sector: "Sugar Processing",
    location: "Mirpurkhas, Sindh",
    logo: "/images/clients/tharparkar-sugar.svg"
  },
  {
    name: "Naudero Sugar Mills",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Larkana, Sindh",
    logo: "/images/clients/naudero-sugar.svg"
  },
  {
    name: "Chamber Sugar Mills",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Chamber, Sindh",
    logo: "/images/clients/chamber-sugar.svg"
  },
  {
    name: "New Tando Allah Yar S.M.",
    category: "Sugar Industry",
    sector: "Sugar Processing",
    location: "Rashidabad, Sindh",
    logo: "/images/clients/tando-allahyar-sugar.svg"
  }
];

