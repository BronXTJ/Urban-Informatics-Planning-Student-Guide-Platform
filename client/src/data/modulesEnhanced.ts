export interface Tool {
  name: string;
  category: string;
  description: string;
}

export interface ConceptDetailed {
  title: string;
  fullDescription: string;
  keyPoints: string[];
  tools?: Tool[];
}

export interface ModuleEnhanced {
  code: string;
  title: string;
  credits: number;
  moduleDescription: string;
  learningObjectives: string[];
  intendedOutcomes: string[];
  courseContent: string;
  teachingMethods: string[];
  assessmentStrategy: {
    continuous: number;
    final: number;
    details: string;
  };
  concepts: ConceptDetailed[];
  tools?: Tool[];
  recommendedReading?: string[];
}

export const modulesEnhanced: ModuleEnhanced[] = [
  {
    code: "PL2301",
    title: "Planning Theory",
    credits: 2,
    moduleDescription: "This module delves into the foundational theories that underpin urban planning and design, providing a conceptual framework for understanding human settlements and their evolution.",
    learningObjectives: [
      "To develop an understanding on different theories used in planning and design",
      "To conceptualize and explain a human settlement in the light of different theories in spatial planning",
      "To develop skills in analyzing situations and issues prevalent in a human settlement from a theoretical perspective"
    ],
    intendedOutcomes: [
      "Demonstrate a comprehensive knowledge in definitional, normative and substantive theories in planning",
      "Conceptualize and discuss the organization of a human settlement relating to different planning theories",
      "Interpret a given situation of a human settlement in the light of the theories learned"
    ],
    courseContent: "Definitional theories, and historic and modern Normative theories of planning human settlements. Explaining a human settlement under different theoretical perspectives: a 'Historic Process', a 'Central Place', an 'Agglomeration of Economic activities', a 'Decision of location economics', a 'Social-spatial Process', a 'Place', a 'Social Construction', a 'Field of Forces', and an 'Arena for Conflicts'. Application of substantive theories to interpret built environments. A discussion on the forms of Sri Lankan towns.",
    teachingMethods: [
      "Tutorials",
      "Interactive sessions",
      "Discussions",
      "Brainstorming and group works",
      "Presentation",
      "Guided Reading",
      "Self-study"
    ],
    assessmentStrategy: {
      continuous: 40,
      final: 60,
      details: "Assignment (40%) + End-semester Examination (60%)"
    },
    concepts: [
      {
        title: "Definitional Theories",
        fullDescription: "This concept explores the core definitions and philosophical underpinnings of planning as a discipline. You will learn what planning fundamentally is, its purpose within society, and its scope in addressing urban and regional challenges. Definitional theories provide the foundational understanding necessary to distinguish planning from other disciplines and to understand its unique role in shaping human settlements.",
        keyPoints: [
          "Understanding planning as a discipline",
          "Philosophical foundations of planning",
          "Purpose and scope of planning in society",
          "Distinction between planning and other fields"
        ]
      },
      {
        title: "Normative Theories (Historic and Modern)",
        fullDescription: "Normative theories prescribe how planning should be done based on ideals and values. Historic normative theories include concepts like the Garden City movement, which envisioned ideal urban forms. Modern normative theories address contemporary concerns such as sustainability, equity, social justice, and participatory governance. You will examine how these theories have evolved to address changing societal needs and environmental concerns.",
        keyPoints: [
          "Historical perspectives on ideal urban forms (Garden City, etc.)",
          "Contemporary normative approaches",
          "Sustainability and environmental concerns",
          "Equity and social justice in planning",
          "Participatory governance and community involvement"
        ]
      },
      {
        title: "Central Place Theory",
        fullDescription: "Central Place Theory explains the spatial distribution and hierarchy of settlements based on economic functions and services. This theory helps planners understand why cities and towns develop in certain locations and how they relate to each other in a hierarchical system. You will learn how economic activities, market areas, and accessibility influence the formation and growth of urban centers.",
        keyPoints: [
          "Settlement hierarchy and distribution",
          "Economic functions and services",
          "Market areas and accessibility",
          "Central places and their relationships",
          "Application to planning decisions"
        ]
      },
      {
        title: "Agglomeration of Economic Activities",
        fullDescription: "This concept analyzes how economic forces drive the concentration of businesses, industries, and populations in urban areas. Agglomeration occurs because clustering provides benefits such as reduced transportation costs, knowledge spillovers, labor market efficiency, and access to specialized services. Understanding agglomeration helps planners anticipate urban growth patterns and manage economic development strategically.",
        keyPoints: [
          "Economic clustering and concentration",
          "Benefits of agglomeration",
          "Reduced transportation costs",
          "Knowledge spillovers and innovation",
          "Labor market efficiency",
          "Implications for urban growth"
        ]
      },
      {
        title: "Social-Spatial Process",
        fullDescription: "This explores the dynamic interplay between social structures and spatial organization. Social factors such as class, culture, ethnicity, and power relations shape how spaces are organized and used. Conversely, spatial arrangements influence social interactions and relationships. You will learn how to analyze these complex relationships to understand urban segregation, gentrification, and community formation.",
        keyPoints: [
          "Relationship between society and space",
          "Social structures and spatial organization",
          "Class, culture, and ethnicity in urban space",
          "Power dynamics and spatial control",
          "Urban segregation and gentrification",
          "Community formation and identity"
        ]
      },
      {
        title: "Place and Social Construction",
        fullDescription: "Place refers to the qualitative, meaningful aspects of urban spaces—their identity, character, and significance to people. Places are socially constructed, meaning they are shaped by human perceptions, cultural values, historical narratives, and power dynamics rather than being purely objective geographic locations. You will learn how to understand and enhance the sense of place in urban environments.",
        keyPoints: [
          "Definition of 'place' versus 'space'",
          "Meaning and identity of places",
          "Social construction of place",
          "Cultural values and place identity",
          "Historical narratives and place meaning",
          "Creating and enhancing sense of place"
        ]
      },
      {
        title: "Field of Forces and Arena for Conflicts",
        fullDescription: "Cities function as dynamic systems influenced by multiple competing forces—economic, social, political, and environmental. These forces create tensions and conflicts over land use, resources, and development priorities. Understanding cities as arenas for conflict helps planners recognize competing interests, facilitate negotiation, and develop inclusive solutions that balance diverse needs.",
        keyPoints: [
          "Cities as dynamic systems",
          "Competing economic, social, and political forces",
          "Land use conflicts",
          "Resource competition",
          "Stakeholder interests and power",
          "Conflict resolution and negotiation",
          "Inclusive planning approaches"
        ]
      },
      {
        title: "Forms of Sri Lankan Towns",
        fullDescription: "This concept applies the learned theories to understand the unique characteristics and developmental patterns of urban areas within Sri Lanka. You will examine how Sri Lankan towns have evolved historically, how they are organized spatially, and what social, economic, and cultural factors have shaped them. This provides practical context for applying planning theories to local conditions.",
        keyPoints: [
          "Historical development of Sri Lankan towns",
          "Urban morphology and spatial patterns",
          "Colonial and post-colonial influences",
          "Economic activities and urban structure",
          "Cultural and social characteristics",
          "Contemporary urban challenges in Sri Lanka"
        ]
      }
    ],
    recommendedReading: [
      "Dear, M. (2006). Theories and Methods in Urban Planning: Social Exclusion and the Urban Environment. Routledge.",
      "Healey, P. (2006). Collaborative Planning: Shaping Places in Fragmented Societies. Palgrave Macmillan.",
      "Alexander, E. R. (2017). A Pattern Language: Towns, Buildings, Construction. Oxford University Press.",
      "van Assche, K., Beunen, R., & Duineveld, M. (2013). Evolutionary Governance Theory: An Introduction. Springer.",
      "Jayawardena, C. (2010). Development of Urban Systems in Sri Lanka. University of Moratuwa."
    ]
  },
  {
    code: "PL2302",
    title: "Planning and Design Studio III",
    credits: 3,
    moduleDescription: "This studio-based module focuses on the practical application of planning and urban design principles, emphasizing hands-on experience in addressing micro-scale built environment issues through case studies and design projects.",
    learningObjectives: [
      "To advance the knowledge on the process of planning and design",
      "To review local and international case studies to learn urban design products and processes",
      "To learn and explore methods of spatial planning and design to address issues related to micro scale-built environments"
    ],
    intendedOutcomes: [
      "Conceptualize an urban environment relating to space, processes, meanings and identities",
      "Interpret how urban environmental features and patterns symbolize social identities and senses",
      "Produce an urban design scheme for a given location to strengthen the identity and sense of place"
    ],
    courseContent: "Study of the physical space in terms of masses, functions, place making processes and appropriations. Relationships between exterior and interior spaces as modulating interactions between public, semi-public, and private realms. Study of the evolving nature of the urban environment. Review of Urban Design papers and Case studies. Projection of the future patterns of developments in an urban form and propose desired scenarios. The process of conceptualization of an urban area and the preparation of an urban design.",
    teachingMethods: [
      "Continuous Studio sessions in a Case study approach",
      "Lectures",
      "Interactive sessions",
      "Discussions",
      "Practical studio",
      "Field visits",
      "Brainstorming and group works",
      "Presentation",
      "Guided Reading",
      "Self-study"
    ],
    assessmentStrategy: {
      continuous: 100,
      final: 0,
      details: "Studio work-based group assignments (100%)"
    },
    concepts: [
      {
        title: "Study of Physical Space",
        fullDescription: "This concept involves a detailed analysis of urban physical elements and how they combine to create the built environment. You will learn to understand and manipulate masses (building volumes and density), functions (land uses and activities), place-making processes (strategies for creating vibrant spaces), and appropriations (how users adapt and utilize spaces). This holistic understanding is essential for effective urban design.",
        keyPoints: [
          "Building masses and volumes",
          "Density and urban form",
          "Land uses and functional relationships",
          "Public space design and activation",
          "User behavior and space appropriation",
          "Placemaking strategies",
          "Creating meaningful public spaces"
        ]
      },
      {
        title: "Exterior and Interior Space Relationships",
        fullDescription: "This explores how the design of buildings and public spaces influences interactions between different realms—public, semi-public, and private. You will learn how transitions between these spaces affect social interaction, movement patterns, and sense of belonging. Understanding these relationships is crucial for designing cohesive, functional urban environments that encourage social engagement.",
        keyPoints: [
          "Public, semi-public, and private realms",
          "Transitions and thresholds",
          "Permeability and accessibility",
          "Visual and physical connections",
          "Social interaction patterns",
          "Safety and surveillance",
          "Boundary definition and management"
        ]
      },
      {
        title: "Urban Design Scheme Production",
        fullDescription: "This is the practical skill of developing and presenting comprehensive urban design proposals for specific locations. You will learn the entire design process from site analysis and conceptualization through to detailed design and presentation. The focus is on strengthening identity and sense of place, ensuring that designs are contextually appropriate and enhance community character.",
        keyPoints: [
          "Site analysis and assessment",
          "Design concept development",
          "Master planning and layout",
          "Detailed design of key spaces",
          "Presentation techniques and media",
          "Stakeholder engagement",
          "Implementation strategies"
        ]
      },
      {
        title: "Conceptualization of Urban Areas",
        fullDescription: "This involves developing the ability to form abstract ideas and mental models of urban spaces before translating them into design solutions. You will learn to think strategically about urban form, to envision future possibilities, and to communicate these visions effectively. This conceptual thinking is what distinguishes good urban design from merely arranging buildings and streets.",
        keyPoints: [
          "Strategic thinking about urban form",
          "Vision and scenario development",
          "Design principles and patterns",
          "Urban morphology and typologies",
          "Narrative and storytelling in design",
          "Visualization and representation"
        ]
      }
    ],
    tools: [
      {
        name: "AutoCAD",
        category: "Design & Drafting",
        description: "Industry-standard software for creating precise architectural and urban design drawings, plans, and technical documentation"
      },
      {
        name: "SketchUp",
        category: "3D Modeling",
        description: "3D modeling software for visualizing urban designs and creating 3D models of buildings and urban spaces"
      },
      {
        name: "Adobe Creative Suite",
        category: "Presentation & Graphics",
        description: "Including Photoshop, Illustrator, and InDesign for creating professional design presentations and graphics"
      },
      {
        name: "Rhino",
        category: "3D Modeling",
        description: "Advanced 3D modeling software for complex urban design forms and parametric design"
      }
    ],
    recommendedReading: [
      "Lynch, K. (1984). Good City Form. MIT Press.",
      "Gehl, J. (2010). Cities for People. Island Press.",
      "Hall, P., & Tewdwr-Jones, M. (2010). Urban and Regional Planning (4th ed.). Routledge.",
      "Carmona, M., et al. (2010). Public Places, Urban Spaces: The Dimensions of Urban Design. Routledge.",
      "Cuthbert, A. R. (2006). The Form of Cities: Political Economy and Urban Design. Blackwell Publishing."
    ]
  },
  {
    code: "PL2303",
    title: "Land Management",
    credits: 2,
    moduleDescription: "This module explores the principles, techniques, and policy frameworks for effective and sustainable land management, considering global trends and local contexts.",
    learningObjectives: [
      "To explain global trends in land management",
      "To demonstrate different tools and techniques in effective management of land",
      "To examine the role of government intervention and land policy in creating conditions for sustainable land management"
    ],
    intendedOutcomes: [
      "Appraise land management techniques in a real-life context",
      "Discuss on the supportive infrastructure of land management for an enabling environment, to overcome barriers and encourage land administration",
      "Compose land policy actions and reforms in Sri Lanka"
    ],
    courseContent: "Land management concepts and key components. Key objectives and tasks of land management. Areas of land management applications. Land management techniques and process in national and international contexts. Land acquisition, risk associated with land acquisition and land conflict. Elements of land policy. Land tenure systems, land administration (registration and cadastral systems).",
    teachingMethods: [
      "Lectures",
      "Classroom discussions and student presentations",
      "Field observations",
      "Guided-readings",
      "Self-studies"
    ],
    assessmentStrategy: {
      continuous: 40,
      final: 60,
      details: "Group and Individual Assignments (40%) + End-semester Examination (60%)"
    },
    concepts: [
      {
        title: "Land Management Concepts and Components",
        fullDescription: "Land management is a systematic approach to organizing and controlling the use of land resources. It encompasses planning, regulation, and administration of land to achieve social, economic, and environmental objectives. Key components include land use planning, property rights systems, land information management, and conflict resolution mechanisms. Understanding these fundamentals is essential for effective planning and development.",
        keyPoints: [
          "Definition and scope of land management",
          "Objectives of land management",
          "Key components and systems",
          "Relationship to urban and regional planning",
          "Sustainable land management principles",
          "Integration with environmental management"
        ]
      },
      {
        title: "Land Use Planning",
        fullDescription: "Land use planning is a core tool of land management that regulates how land can be used to achieve desired social, economic, and environmental outcomes. It involves analyzing current land use patterns, identifying future needs, and establishing policies and regulations to guide development. Effective land use planning prevents conflicts, protects valuable resources, and creates livable communities.",
        keyPoints: [
          "Current land use analysis",
          "Future land use projections",
          "Zoning and land use regulations",
          "Compatibility analysis",
          "Environmental protection",
          "Economic development balance",
          "Implementation mechanisms"
        ]
      },
      {
        title: "Land Information Systems",
        fullDescription: "Land Information Systems (LIS) are integrated systems for collecting, storing, analyzing, and disseminating land-related data. They combine spatial information (maps, boundaries) with attribute data (ownership, use, value) to support decision-making. Modern LIS often use GIS technology and databases to manage complex land information efficiently and make it accessible to stakeholders.",
        keyPoints: [
          "Components of LIS",
          "Data collection and management",
          "Spatial and attribute data",
          "GIS integration",
          "Data accessibility and sharing",
          "Decision support capabilities"
        ]
      },
      {
        title: "Land Tenure Systems",
        fullDescription: "Land tenure refers to the rights and responsibilities people have regarding land. Different tenure systems exist globally, including freehold (absolute ownership), leasehold (time-limited rights), customary tenure (based on traditional practices), and communal tenure (shared ownership). Understanding tenure systems is crucial for land policy, as they affect investment incentives, land transactions, and resource management.",
        keyPoints: [
          "Freehold and leasehold systems",
          "Customary and communal tenure",
          "Rights and responsibilities",
          "Security of tenure",
          "Land transactions and transfers",
          "Tenure and development incentives"
        ]
      },
      {
        title: "Land Administration and Cadastral Systems",
        fullDescription: "Land administration involves the institutional and technical frameworks for recording and managing land information, including property boundaries, ownership, and use rights. Cadastral systems are the technical backbone, maintaining detailed records of land parcels and their characteristics. Effective cadastral systems are essential for property rights security, tax collection, and land market functioning.",
        keyPoints: [
          "Cadastral mapping and surveying",
          "Property registration systems",
          "Boundary demarcation",
          "Ownership records and transfers",
          "Title insurance and security",
          "Digital cadastral systems",
          "Integration with planning systems"
        ]
      },
      {
        title: "Land Acquisition and Conflict",
        fullDescription: "Land acquisition for public or private development often involves complex legal, social, and financial considerations. Conflicts arise when land acquisition affects existing residents or land users. Understanding acquisition processes, compensation mechanisms, and conflict resolution strategies is essential for planners to manage these sensitive situations ethically and effectively.",
        keyPoints: [
          "Legal frameworks for acquisition",
          "Compensation and valuation",
          "Resettlement and rehabilitation",
          "Community consultation",
          "Conflict identification and resolution",
          "Risk assessment and mitigation",
          "Ethical considerations"
        ]
      },
      {
        title: "Land Policy Actions and Reforms in Sri Lanka",
        fullDescription: "This concept applies land management principles to the specific context of Sri Lanka. You will examine Sri Lankan land policies, challenges in implementation, and ongoing reform initiatives. Understanding local context is crucial for effective planning, as land management must address country-specific issues such as tenure insecurity, informal settlements, and competing land use demands.",
        keyPoints: [
          "Sri Lankan land policy framework",
          "Tenure patterns and challenges",
          "Land market dynamics",
          "Urban land scarcity",
          "Informal settlements and squatting",
          "Policy reform initiatives",
          "Implementation challenges"
        ]
      }
    ],
    tools: [
      {
        name: "ArcGIS",
        category: "GIS & Mapping",
        description: "Geographic Information Systems for mapping land use, analyzing spatial patterns, and managing land information"
      },
      {
        name: "QGIS",
        category: "GIS & Mapping",
        description: "Open-source GIS software for land use mapping and spatial analysis"
      },
      {
        name: "Database Management Systems",
        category: "Data Management",
        description: "For storing and managing complex land-related attribute data and property records"
      }
    ],
    recommendedReading: [
      "Enemark, S. (2006). Need for Establishing Sustainable National Concepts. Understanding the Land Management Paradigm."
    ]
  },
  {
    code: "PL2304",
    title: "Applied Hydrology",
    credits: 2,
    moduleDescription: "This module provides knowledge of hydrological systems and their processes, with an emphasis on analyzing water flows and storms for optimized hydrological pathways in planning contexts.",
    learningObjectives: [
      "To acquire knowledge on the functions and processes of hydrological systems",
      "To analyze storms and flows to optimize hydrological pathways"
    ],
    intendedOutcomes: [
      "Diagnose the issues in the hydrological system",
      "Estimate storms and flows to optimize hydrological pathways"
    ],
    courseContent: "Hydrologic Processes - Hydrologic system model - Water balance - Pathways and reserves of water (atmospheric water, subsurface water and surface water). Hydrologic Analysis - Hydrologic measurement - Hydrologic statistics - Storms and flows - Unit hydrograph - Frequency analysis - Hydro-meteorological risk and uncertainty.",
    teachingMethods: [
      "Discussions",
      "Brainstorming and group works",
      "Presentation",
      "Guided Reading",
      "Self-study",
      "Hands-on Sessions"
    ],
    assessmentStrategy: {
      continuous: 40,
      final: 60,
      details: "Assignment (40%) + End-semester Examination (60%)"
    },
    concepts: [
      {
        title: "Hydrologic Processes and System Models",
        fullDescription: "Hydrologic processes describe the natural movement of water through the Earth's systems—on the surface, above the surface (atmosphere), and below the surface (subsurface). A hydrologic system model conceptualizes these processes and their interactions. Understanding these processes is essential for planners to manage water resources, predict flooding, and design sustainable drainage systems.",
        keyPoints: [
          "Precipitation and rainfall",
          "Infiltration and percolation",
          "Runoff and streamflow",
          "Evaporation and transpiration",
          "Groundwater flow",
          "System interactions and feedback",
          "Seasonal variations"
        ]
      },
      {
        title: "Water Balance and Pathways",
        fullDescription: "Water balance is an accounting of water inputs, outputs, and storage changes within a hydrological system. It helps quantify how much water enters a system (precipitation), how much leaves (evaporation, runoff, groundwater outflow), and how much is stored (soil moisture, groundwater). Understanding water pathways—the routes water takes through atmospheric, surface, and subsurface reservoirs—is crucial for water resource management.",
        keyPoints: [
          "Water balance equation",
          "Precipitation inputs",
          "Evapotranspiration losses",
          "Runoff and streamflow",
          "Groundwater storage and flow",
          "Soil moisture dynamics",
          "Seasonal water availability"
        ]
      },
      {
        title: "Hydrologic Measurement and Statistics",
        fullDescription: "Hydrologic measurement involves collecting data on precipitation, streamflow, evaporation, and other water-related variables. Hydrologic statistics applies statistical methods to analyze this data, including frequency analysis to estimate the probability of extreme events. These tools enable planners to understand historical patterns and predict future conditions for design and management purposes.",
        keyPoints: [
          "Precipitation measurement",
          "Streamflow gauging",
          "Evaporation measurement",
          "Data collection methods",
          "Statistical analysis techniques",
          "Frequency distributions",
          "Return periods and probability"
        ]
      },
      {
        title: "Storms, Flows, and Unit Hydrograph",
        fullDescription: "This concept focuses on analyzing rainfall events and their resulting runoff and streamflow patterns. The unit hydrograph is a conceptual tool that predicts how a watershed responds to a unit of effective rainfall, enabling prediction of flood flows from storm events. Understanding storm-flow relationships is essential for flood risk management and urban drainage design.",
        keyPoints: [
          "Storm characteristics and intensity",
          "Rainfall-runoff relationships",
          "Peak flow estimation",
          "Unit hydrograph concept",
          "Time of concentration",
          "Flood hydrograph characteristics",
          "Design storm selection"
        ]
      },
      {
        title: "Frequency Analysis and Hydro-meteorological Risk",
        fullDescription: "Frequency analysis uses statistical methods to estimate the probability of extreme hydrological events such as floods and droughts. This information is essential for designing infrastructure (dams, drainage systems) and planning for disaster risk reduction. Hydro-meteorological risk assessment considers uncertainties in predictions and helps planners prepare for climate variability and change.",
        keyPoints: [
          "Flood frequency analysis",
          "Drought frequency analysis",
          "Return period calculations",
          "Confidence intervals and uncertainty",
          "Climate change implications",
          "Risk assessment methodologies",
          "Adaptation strategies"
        ]
      },
      {
        title: "Optimizing Hydrological Pathways",
        fullDescription: "This applies hydrological knowledge to design and manage urban drainage systems, stormwater management, and water resource allocation. Optimization involves balancing competing objectives such as flood risk reduction, water supply security, environmental protection, and cost efficiency. Planners use hydrological analysis to develop sustainable solutions that minimize risks and maximize benefits.",
        keyPoints: [
          "Urban drainage design",
          "Stormwater management systems",
          "Green infrastructure solutions",
          "Water supply planning",
          "Flood risk reduction",
          "Environmental flow requirements",
          "Integrated water resource management"
        ]
      }
    ],
    tools: [
      {
        name: "Statistical Software (Excel, R, Python)",
        category: "Data Analysis",
        description: "For hydrologic data analysis, frequency analysis, and statistical modeling"
      },
      {
        name: "GIS Software (ArcGIS, QGIS)",
        category: "Spatial Analysis",
        description: "For watershed analysis, hydrological modeling, and visualization"
      },
      {
        name: "Spreadsheet Applications",
        category: "Calculation & Analysis",
        description: "For water balance calculations and hydrological computations"
      }
    ],
    recommendedReading: [
      "Subramanya, K. (2017). Engineering hydrology. McGraw-Hill, New Delhi.",
      "Ferner, C. W. (2013). Applied hydrogeology: New International Edition.",
      "Singh, V. P., & Eng, D. (2017). Handbook of applied hydrology. McGraw-Hill Education.",
      "Brooks, K. N., Ffolliom, P. F., & Magner, J. A. (2012). Hydrology and the Management of Watersheds. John Wiley & Sons.",
      "Robinson, M., & Ward, R. C. (2017). Hydrology: principles and processes. IWA Publishing."
    ]
  },
  {
    code: "PL2305",
    title: "Population Studies in Planning",
    credits: 2,
    moduleDescription: "This module focuses on demographic concepts, theories, and methods essential for understanding population dynamics and their implications for human settlement planning.",
    learningObjectives: [
      "To define the concepts, theories and measurements of demography which essential to understand the history of population growth, changes in human population size and composition and future trends",
      "To apply the demographic measures in policy formulation and human settlement planning",
      "To appraise the application of models of population projection and forecasting"
    ],
    intendedOutcomes: [
      "Define and interpret the applicability of concepts, theories and measures of demography in different contexts",
      "Formulate a Demographic Profile for a given area",
      "Forecast populations for a given area under different scenarios of development"
    ],
    courseContent: "Demographic Analysis in the Planning Process. Sources of demographic data. Demographic measures of population composition. Concepts, measures, trends and issues on Fertility, Mortality, Migration, Nuptiality and Social Mobility. History of population growth, Global variations in population measurements and growth. Demographic transition theory and different population pyramids. Population forecasting models. Sub population estimates. Population projection models. Planning Implications and policy formulation in human settlement planning.",
    teachingMethods: [
      "Lectures",
      "Classroom Discussions and Student Presentations",
      "Exercises on Computer based applications",
      "Students Presentations"
    ],
    assessmentStrategy: {
      continuous: 20,
      final: 80,
      details: "Computer based application (20%) + End-semester Examination (80%)"
    },
    concepts: [
      {
        title: "Demographic Concepts and Measurements",
        fullDescription: "Demography is the study of human populations, including their size, composition, and change over time. Key demographic measures include birth rates (fertility), death rates (mortality), migration rates, and natural increase. Understanding these concepts and how to measure them is fundamental to demographic analysis and population planning.",
        keyPoints: [
          "Population size and growth",
          "Birth rates and fertility",
          "Death rates and mortality",
          "Migration and mobility",
          "Marriage patterns (nuptiality)",
          "Social mobility",
          "Age and sex composition"
        ]
      },
      {
        title: "Demographic Data Sources",
        fullDescription: "Demographic data comes from various sources including national censuses (comprehensive population counts), vital statistics (births, deaths, marriages), surveys, and administrative records. Understanding data sources, their strengths and limitations, is essential for demographic analysis. Planners must evaluate data quality and reliability when making decisions based on demographic information.",
        keyPoints: [
          "National census data",
          "Vital statistics systems",
          "Household surveys",
          "Administrative records",
          "Data quality assessment",
          "Data limitations and gaps",
          "Data accessibility and privacy"
        ]
      },
      {
        title: "Demographic Transition Theory",
        fullDescription: "Demographic transition theory describes how populations change as societies develop economically. It typically includes stages of high birth and death rates (pre-transition), declining death rates (transition), and low birth and death rates (post-transition). Understanding this theory helps planners anticipate population changes and plan accordingly for infrastructure and services.",
        keyPoints: [
          "Pre-transition stage characteristics",
          "Transition stage dynamics",
          "Post-transition patterns",
          "Economic development relationship",
          "Urbanization and demographic change",
          "Fertility decline mechanisms",
          "Policy implications"
        ]
      },
      {
        title: "Population Pyramids and Composition",
        fullDescription: "Population pyramids are graphical representations of age and sex distribution within a population. They reveal demographic structure and can indicate past demographic events (wars, famines) and future trends. Different pyramid shapes indicate different demographic characteristics—expanding pyramids suggest young, growing populations, while contracting pyramids indicate aging populations.",
        keyPoints: [
          "Pyramid construction and interpretation",
          "Age-sex structure analysis",
          "Dependency ratios",
          "Working-age population",
          "Youth and elderly populations",
          "Demographic momentum",
          "Planning implications"
        ]
      },
      {
        title: "Population Forecasting Models",
        fullDescription: "Population forecasting uses mathematical models to project future population size and structure under different scenarios. Common methods include cohort-component models (tracking age cohorts over time), trend extrapolation, and scenario-based approaches. Forecasts are essential for planning infrastructure, services, and economic development.",
        keyPoints: [
          "Cohort-component method",
          "Trend extrapolation",
          "Scenario-based forecasting",
          "Assumption development",
          "Sensitivity analysis",
          "Uncertainty quantification",
          "Multi-scenario planning"
        ]
      },
      {
        title: "Planning Implications and Policy Formulation",
        fullDescription: "Demographic analysis directly informs planning decisions regarding housing needs, infrastructure provision, service allocation, and economic development. Planners use demographic insights to anticipate future demands and develop policies that address population needs. This includes housing policies, education and health facility planning, transportation planning, and employment strategies.",
        keyPoints: [
          "Housing demand estimation",
          "Infrastructure planning",
          "Service provision planning",
          "Employment and economic planning",
          "Education and health facility planning",
          "Migration management",
          "Aging population strategies"
        ]
      }
    ],
    tools: [
      {
        name: "Spreadsheet Software (Excel)",
        category: "Calculation & Analysis",
        description: "For demographic calculations, cohort-component modeling, and data organization"
      },
      {
        name: "Statistical Software (R, Python, SPSS)",
        category: "Data Analysis",
        description: "For demographic data analysis and statistical modeling"
      },
      {
        name: "Database Applications",
        category: "Data Management",
        description: "For managing and organizing demographic datasets"
      }
    ],
    recommendedReading: [
      "The scope of population studies and demography David Lucas and Michael E. Roemger September 2021",
      "Population estimation and projection: Methods for marketing, demographic, and planning personnel JC Raymondo – 1992"
    ]
  },
  {
    code: "PL2306",
    title: "Spatial Data Analytics and Visualization",
    credits: 2,
    moduleDescription: "This module equips students with a comprehensive understanding of theories, concepts, and tools for analyzing and visualizing spatial data, crucial for urban informatics.",
    learningObjectives: [
      "To acquire a comprehensive understanding of the theories, concepts and assumptions of spatial analysis and visualization methods",
      "To apply appropriate analytical and visualization tools for problem solving",
      "To interpret and demonstrate the results of spatial analysis of a context"
    ],
    intendedOutcomes: [
      "Describe principles and methods to analyze a set of spatial data apply spatial models to analyze a given phenomenon",
      "Interpret and demonstrate the results of spatial analysis of a context"
    ],
    courseContent: "Introduction to spatial data science and visualization. Spatial interpolation and spatial continuity analysis. Spatial statistics, Temporal analysis and Spatial data mining. 3D & 4D GIS data analysis and Multidimensional data visualization tools. Web analytics & Web technologies for data visualization. Citizen science data analysis and Social media analytics. Spatial analysis based on Location Based Services (LBS). Augmented reality and virtual reality, Data animation and dashboard.",
    teachingMethods: [
      "Collaborative learnings",
      "Hands-on sessions",
      "Presentation",
      "Live coding"
    ],
    assessmentStrategy: {
      continuous: 100,
      final: 0,
      details: "Classroom hackathon (60%) + Individual Assignments (40%)"
    },
    concepts: [
      {
        title: "Spatial Data Science and Visualization",
        fullDescription: "Spatial data science combines geographic data with analytical methods to extract insights about spatial phenomena. Visualization translates complex spatial data into understandable graphics and maps. Together, they enable planners to understand spatial patterns, communicate findings, and make evidence-based decisions about urban development and resource management.",
        keyPoints: [
          "Spatial data types and formats",
          "Raster and vector data",
          "Coordinate systems and projections",
          "Map design principles",
          "Color theory and symbolization",
          "Interactive visualization",
          "Storytelling with maps"
        ]
      },
      {
        title: "Spatial Interpolation",
        fullDescription: "Spatial interpolation estimates values at unmeasured locations based on known values at surrounding locations. Methods like Kriging and Inverse Distance Weighting are used to create continuous surfaces from point data. This is essential for analyzing phenomena like temperature, pollution, or land values that vary continuously across space.",
        keyPoints: [
          "Kriging methods",
          "Inverse Distance Weighting",
          "Spline interpolation",
          "Uncertainty in interpolation",
          "Validation techniques",
          "Application to urban phenomena",
          "Interpretation of results"
        ]
      },
      {
        title: "Spatial Statistics and Autocorrelation",
        fullDescription: "Spatial statistics applies statistical methods specifically designed for spatial data, accounting for the fact that nearby locations tend to be more similar than distant ones (spatial autocorrelation). Techniques include cluster analysis (identifying spatial groupings) and regression analysis with spatial components. These methods reveal spatial patterns and relationships.",
        keyPoints: [
          "Spatial autocorrelation measures",
          "Moran's I and Geary's C",
          "Local indicators of spatial association",
          "Cluster and outlier detection",
          "Spatial regression models",
          "Geographically Weighted Regression",
          "Interpretation and applications"
        ]
      },
      {
        title: "3D & 4D GIS Analysis",
        fullDescription: "3D GIS extends analysis to three dimensions, enabling visualization and analysis of terrain models, building models, and subsurface data. 4D GIS adds the time dimension, allowing analysis of how spatial phenomena change over time. These advanced capabilities are increasingly important for urban planning, environmental monitoring, and infrastructure management.",
        keyPoints: [
          "3D terrain modeling",
          "Building information modeling",
          "Subsurface data visualization",
          "Temporal data analysis",
          "Change detection",
          "Animation and simulation",
          "Applications in urban planning"
        ]
      },
      {
        title: "Web Technologies and Interactive Visualization",
        fullDescription: "Modern web technologies enable interactive, dynamic visualization of spatial data accessible through web browsers. Tools and libraries allow creation of engaging maps and dashboards that users can explore. Web-based visualization makes spatial analysis results accessible to broader audiences and supports collaborative planning.",
        keyPoints: [
          "Web mapping libraries and frameworks",
          "Interactive map features",
          "Real-time data visualization",
          "Mobile-responsive design",
          "API integration",
          "Dashboard development",
          "User experience design"
        ]
      },
      {
        title: "Citizen Science and Social Media Analytics",
        fullDescription: "Citizen science involves data collection by non-professional scientists or the public, often through crowdsourcing platforms. Social media analytics extracts spatial information from social media data to understand urban dynamics, public sentiment, and activity patterns. These data sources provide valuable insights complementing traditional data collection methods.",
        keyPoints: [
          "Crowdsourcing platforms",
          "Data quality in citizen science",
          "Social media data sources",
          "Sentiment analysis",
          "Activity pattern analysis",
          "Privacy and ethical considerations",
          "Integration with planning"
        ]
      },
      {
        title: "Location Based Services (LBS) Analysis",
        fullDescription: "Location Based Services use mobile device data to track movement patterns, activity spaces, and urban dynamics. Analysis of LBS data reveals how people move through cities, where they spend time, and how urban spaces are used. This information is valuable for transportation planning, retail analysis, and understanding urban vitality.",
        keyPoints: [
          "Mobile device tracking",
          "Movement pattern analysis",
          "Activity space mapping",
          "Foot traffic analysis",
          "Origin-destination analysis",
          "Privacy protection",
          "Applications in urban planning"
        ]
      },
      {
        title: "Augmented and Virtual Reality",
        fullDescription: "AR and VR technologies create immersive experiences for visualizing spatial data and urban designs. AR overlays digital information on real-world views, while VR creates fully immersive environments. These technologies are increasingly used for urban planning visualization, allowing stakeholders to experience proposed designs before implementation.",
        keyPoints: [
          "AR applications in planning",
          "VR environment creation",
          "Design visualization",
          "Stakeholder engagement",
          "Public participation tools",
          "Training and simulation",
          "Technical requirements"
        ]
      },
      {
        title: "Data Animation and Dashboards",
        fullDescription: "Data animation shows how spatial phenomena change over time, revealing temporal patterns and trends. Interactive dashboards combine multiple visualizations and data sources to support decision-making. These tools make complex spatial data accessible and actionable for planners and policymakers.",
        keyPoints: [
          "Time series animation",
          "Change visualization",
          "Dashboard design principles",
          "Key performance indicators",
          "Real-time monitoring",
          "Interactivity and filtering",
          "Decision support"
        ]
      }
    ],
    tools: [
      {
        name: "ArcGIS",
        category: "GIS & Mapping",
        description: "Comprehensive GIS platform for spatial analysis, mapping, and visualization"
      },
      {
        name: "QGIS",
        category: "GIS & Mapping",
        description: "Open-source GIS software for spatial analysis and mapping"
      },
      {
        name: "Programming Languages (Python, R)",
        category: "Data Analysis & Scripting",
        description: "For spatial data analysis, scripting, and custom visualization development"
      },
      {
        name: "Web Development Tools",
        category: "Web Visualization",
        description: "For creating interactive web-based spatial visualizations and dashboards"
      }
    ],
    recommendedReading: [
      "Goodchild, M. F. (2007). Citizens as sensors: the world of volunteered geography. GeoJournal, 69, 211-221.",
      "Kankanamge, N., Yigitcanlar, T., Goonetilleke, A., & Kamruzzaman, M. (2019). Can volunteer crowdsourcing reduce disaster risk? A systematic review of the literature. International journal of disaster risk reduction, 35, 101097.",
      "Yigitcanlar, T., Kankanamge, N., Regona, M., Ruiz Maldonado, A., Rowan, B., Ryu, A., ... & Li, R. Y. M. (2020). Artificial intelligence technologies and related urban planning and development concepts: How are they perceived and utilized in Australia?. Journal of Open Innovation: Technology, Market, and Complexity, 6(4), 187.",
      "Yigitcanlar, T., Desouza, K. C., Butler, L., & Roozkhosh, F. (2020). Contributions and risks of artificial intelligence (AI) in building smarter cities: Insights from a systematic review of the literature. Energies, 13(6), 1473."
    ]
  },
  {
    code: "PL2307",
    title: "Planning Techniques",
    credits: 2,
    moduleDescription: "This module introduces a range of analytical and evaluative techniques used in rational decision-making throughout the planning process, enabling students to address complex settlement problems.",
    learningObjectives: [
      "To acquire knowledge on planning techniques as tools for rational decision-making at different stages of the planning process",
      "To apply suitable planning techniques for validating and the analysis of information for resolving problem situations in settlements"
    ],
    intendedOutcomes: [
      "Select appropriate planning techniques for rational decision-making at different stages of the planning process",
      "Analyze a given problem situation applying appropriate planning techniques"
    ],
    courseContent: "Introduction to planning techniques. Methodology and application of planning techniques (Sieve Map, Potential Surface Techniques, Sensitive Area Analysis Techniques, Space Syntax, Network Centrality Assessment, Settlement Ranking, SWOT analysis, Delphi Method, Analytic Hierarchy Process, Cost Benefits Analysis, Multi Criteria Analysis, Critical Path Analysis, Cause and Effect Analysis, Role Playing, Brainstorming). Evaluation of alternatives, goals and strategies using planning techniques.",
    teachingMethods: [
      "Case study approach with Lectures",
      "Tutorials",
      "Interactive sessions",
      "Discussions",
      "Practical studio",
      "Brainstorming and group works",
      "Presentation",
      "Guided Reading",
      "Self-studies"
    ],
    assessmentStrategy: {
      continuous: 100,
      final: 0,
      details: "Studio work-based group assignments (100%)"
    },
    concepts: [
      {
        title: "Sieve Map Analysis",
        fullDescription: "Sieve mapping is a technique for overlaying multiple thematic maps to identify areas suitable or unsuitable for specific land uses or development. By systematically eliminating unsuitable areas based on various criteria (environmental sensitivity, infrastructure availability, etc.), planners can identify the most appropriate locations for development or conservation.",
        keyPoints: [
          "Multi-criteria overlay",
          "Suitability assessment",
          "Environmental constraints",
          "Infrastructure requirements",
          "Social and economic factors",
          "Cumulative impact analysis",
          "Decision support"
        ]
      },
      {
        title: "Space Syntax",
        fullDescription: "Space Syntax is a set of theories and techniques for analyzing spatial configurations of urban layouts and their social implications. It examines how the arrangement of streets and spaces affects movement patterns, accessibility, and social interaction. Space Syntax helps planners understand and design urban layouts that promote vitality and social cohesion.",
        keyPoints: [
          "Connectivity and accessibility",
          "Movement patterns",
          "Integration and segregation",
          "Centrality measures",
          "Social interaction",
          "Urban vitality",
          "Design optimization"
        ]
      },
      {
        title: "SWOT Analysis",
        fullDescription: "SWOT (Strengths, Weaknesses, Opportunities, Threats) analysis is a strategic planning tool used to identify internal and external factors affecting a planning project or area. Strengths and weaknesses are internal factors, while opportunities and threats are external. SWOT analysis helps planners develop strategies that leverage strengths and opportunities while addressing weaknesses and threats.",
        keyPoints: [
          "Strengths identification",
          "Weaknesses assessment",
          "Opportunity recognition",
          "Threat identification",
          "Strategic implications",
          "Action planning",
          "Stakeholder engagement"
        ]
      },
      {
        title: "Analytic Hierarchy Process (AHP)",
        fullDescription: "AHP is a structured technique for organizing and analyzing complex decisions involving multiple criteria and alternatives. It breaks down complex problems into hierarchies, assigns weights to criteria, and evaluates alternatives systematically. AHP is particularly useful for multi-criteria decision-making in planning where different stakeholders have different priorities.",
        keyPoints: [
          "Problem decomposition",
          "Hierarchy development",
          "Pairwise comparison",
          "Weight calculation",
          "Consistency checking",
          "Alternative evaluation",
          "Sensitivity analysis"
        ]
      },
      {
        title: "Cost-Benefit Analysis (CBA)",
        fullDescription: "CBA is a systematic process for calculating and comparing the benefits and costs of a project, decision, or policy. It quantifies both monetary and non-monetary impacts, allowing comparison of alternatives on a common basis. CBA is essential for evaluating whether planning interventions are economically justified and for comparing different options.",
        keyPoints: [
          "Benefit identification and quantification",
          "Cost estimation",
          "Time value of money",
          "Discount rates",
          "Net present value",
          "Benefit-cost ratio",
          "Sensitivity and risk analysis"
        ]
      },
      {
        title: "Multi-Criteria Analysis (MCA)",
        fullDescription: "MCA is a decision-making tool that evaluates multiple conflicting criteria in decision-making. Unlike CBA which focuses on monetary values, MCA can incorporate qualitative and quantitative criteria, making it suitable for complex planning decisions where different stakeholders value different outcomes. MCA helps structure and systematize complex decisions.",
        keyPoints: [
          "Criteria definition",
          "Weighting schemes",
          "Scoring methods",
          "Aggregation techniques",
          "Stakeholder participation",
          "Transparency and accountability",
          "Sensitivity analysis"
        ]
      },
      {
        title: "Critical Path Analysis (CPA)",
        fullDescription: "CPA is a project management technique that identifies the longest sequence of tasks in a project schedule, which determines the minimum time needed to complete the project. Understanding the critical path helps planners manage project timelines, allocate resources efficiently, and identify where delays would impact overall project completion.",
        keyPoints: [
          "Task identification",
          "Sequencing and dependencies",
          "Duration estimation",
          "Critical path determination",
          "Float and slack calculation",
          "Resource allocation",
          "Risk management"
        ]
      },
      {
        title: "Cause and Effect Analysis (Fishbone Diagram)",
        fullDescription: "Cause and Effect analysis is a visual tool for categorizing the potential causes of a problem in order to identify its root causes. The fishbone diagram organizes causes into categories (materials, methods, people, environment, etc.), helping teams systematically explore all possible contributing factors to a planning problem.",
        keyPoints: [
          "Problem definition",
          "Cause categorization",
          "Root cause identification",
          "Brainstorming integration",
          "Visual organization",
          "Solution development",
          "Implementation planning"
        ]
      },
      {
        title: "Delphi Method and Brainstorming",
        fullDescription: "The Delphi Method is a structured communication technique that relies on a panel of experts to forecast future conditions or solve complex problems through multiple rounds of questionnaires and feedback. Brainstorming is a group creativity technique used to generate a large number of ideas for solving problems. Both techniques engage stakeholders in collaborative problem-solving.",
        keyPoints: [
          "Expert panel selection",
          "Iterative feedback rounds",
          "Consensus building",
          "Brainstorming rules",
          "Idea generation",
          "Evaluation and prioritization",
          "Implementation planning"
        ]
      }
    ],
    tools: [
      {
        name: "GIS Software (ArcGIS, QGIS)",
        category: "Spatial Analysis",
        description: "For sieve mapping and spatial analysis techniques"
      },
      {
        name: "Spreadsheet Software (Excel)",
        category: "Analysis & Calculation",
        description: "For CBA, MCA calculations, and data organization"
      },
      {
        name: "Project Management Software",
        category: "Project Planning",
        description: "For Critical Path Analysis and project scheduling"
      },
      {
        name: "Decision Analysis Tools",
        category: "Multi-Criteria Analysis",
        description: "For AHP, MCA, and other decision analysis techniques"
      }
    ],
    recommendedReading: [
      "van Nes, Akkelies, and Claudia Yamu. Introduction to space syntax in urban studies. Springer Nature, 2021.",
      "Dovey, K., & Pafka, E. (2017). What is functional mix? An assemblage approach. Planning Theory & Practice, 18(2), 249-267.",
      "Saaty, T. L., & Vargas, L. G. (2012). Models, methods, concepts & applications of the analytic hierarchy process (Vol. 175). Springer Science & Business Media.",
      "Armstrong-Wright, A. T. (1971). Critical path method: introduction and practice. Longman group.",
      "Vasse, W. W., Wilson, R. D., & Stephenson, R. J. (1983). Critical Path Modeling: University Planning in an Urban Context. Planning for Higher Education, 11(4), 13-21.",
      "Barker, A. (1997). 30 Minutes to Brainstorm Great Ideas.",
      "Turoff, M., & Linstone, H. A. (2002). The Delphi method-techniques and applications.",
      "Priemus, H., Flyvbjerg, B., & van Wee, B. (Eds.). (2008). Decision-making on mega-projects: cost-benefit analysis, planning and innovation. Edward Elgar Publishing."
    ]
  },
  {
    code: "PL2308",
    title: "Traffic and Transportation",
    credits: 2,
    moduleDescription: "This module focuses on the planning processes, survey methods, and analytical techniques used in transportation planning, with an emphasis on integrating transport and land use.",
    learningObjectives: [
      "To understand different planning processes on transportation planning",
      "To identify different types of traffic and transport related surveys, surveying methods and their uses for decision making in transportation",
      "To apply different transportation planning techniques for better integration of transport and land use",
      "To illustrate travel demand forecasting and integrating the results in the formulation of different types of plans",
      "To appraise how transportation is planned, implemented, operated and managed in Sri Lanka and recognize related prospects and constraints under each"
    ],
    intendedOutcomes: [
      "Prepare transport plans for identified study areas",
      "Carry out different types of transportation surveys and use the results for better planning",
      "Integrate transportation and land use in urban planning",
      "Apply transport models for quick and efficient transport demand forecasting"
    ],
    courseContent: "Transportation statistics in Sri Lanka. Key concepts in traffic and transportation. Transport planning processes. Traffic and transportation surveys. Capacity Assessments. Traffic Impact Assessments. Key components of transportation infrastructure. Traffic forecasting and transport modeling approaches. Transport policies.",
    teachingMethods: [
      "Discussions",
      "Brainstorming and group works",
      "Presentation",
      "Self-study",
      "Evaluation"
    ],
    assessmentStrategy: {
      continuous: 50,
      final: 50,
      details: "Assignment (50%) + End-semester Examination (50%)"
    },
    concepts: [
      {
        title: "Transportation Planning Processes",
        fullDescription: "Transportation planning is a systematic process that identifies transportation needs, evaluates alternatives, and develops strategies to meet those needs. The process typically includes problem identification, goal setting, alternative development, evaluation, and implementation. Effective transportation planning requires coordination with land use planning and consideration of multiple objectives including mobility, safety, equity, and sustainability.",
        keyPoints: [
          "Problem identification",
          "Goal and objective setting",
          "Data collection and analysis",
          "Alternative development",
          "Evaluation and comparison",
          "Plan adoption and implementation",
          "Monitoring and evaluation"
        ]
      },
      {
        title: "Traffic and Transportation Surveys",
        fullDescription: "Transportation surveys collect data on travel behavior, traffic volumes, origin-destination patterns, and public transport usage. Different survey types serve different purposes: traffic counts measure volume, household surveys capture travel patterns, and intercept surveys gather information from travelers. Survey data informs policy development, infrastructure design, and operational improvements.",
        keyPoints: [
          "Traffic volume surveys",
          "Household travel surveys",
          "Intercept surveys",
          "Origin-destination surveys",
          "Public transport surveys",
          "Parking surveys",
          "Data quality and analysis"
        ]
      },
      {
        title: "Capacity Assessments and Traffic Impact",
        fullDescription: "Capacity assessment evaluates the maximum traffic volume that a road segment or intersection can handle under given conditions. Traffic Impact Assessment (TIA) analyzes the potential effects of new developments on the surrounding transportation network and proposes mitigation measures. These assessments ensure that transportation infrastructure is adequate and that development does not create unacceptable traffic conditions.",
        keyPoints: [
          "Capacity calculation methods",
          "Level of service analysis",
          "Bottleneck identification",
          "Development impact assessment",
          "Mitigation measures",
          "Cumulative impact analysis",
          "Monitoring and management"
        ]
      },
      {
        title: "Transport Modeling and Demand Forecasting",
        fullDescription: "Transport models predict future travel demand and traffic patterns based on land use, demographics, and economic factors. The classic four-step model includes trip generation (how many trips), trip distribution (where they go), mode choice (how they travel), and traffic assignment (which routes). These models support infrastructure planning and policy evaluation.",
        keyPoints: [
          "Trip generation",
          "Trip distribution",
          "Mode choice",
          "Traffic assignment",
          "Model calibration and validation",
          "Scenario analysis",
          "Uncertainty quantification"
        ]
      },
      {
        title: "Transport and Land Use Integration",
        fullDescription: "Transportation and land use are intimately connected—land use patterns generate travel demand, while transportation infrastructure influences land use development. Integrated planning ensures that transportation investments support desired land use patterns and that land use development is served by adequate transportation. This integration is essential for creating sustainable, livable communities.",
        keyPoints: [
          "Transit-oriented development",
          "Mixed-use development",
          "Walkability and accessibility",
          "Density and transportation",
          "Land use zoning",
          "Parking management",
          "Complete streets"
        ]
      },
      {
        title: "Transport Policies and Sustainability",
        fullDescription: "Transport policies guide how transportation systems are planned, developed, and managed. Policies address demand management (reducing travel), mode shift (promoting public transport and active modes), and system efficiency. Sustainable transport policies balance mobility needs with environmental protection, social equity, and economic efficiency.",
        keyPoints: [
          "Demand management strategies",
          "Public transport promotion",
          "Active transport (walking, cycling)",
          "Parking policies",
          "Congestion pricing",
          "Emission reduction",
          "Equity and accessibility"
        ]
      },
      {
        title: "Transportation in Sri Lanka",
        fullDescription: "This concept applies transportation planning principles to the specific context of Sri Lanka. You will examine Sri Lankan transportation statistics, current planning practices, and challenges such as rapid motorization, inadequate public transport, and traffic congestion. Understanding local context is essential for developing appropriate transportation solutions.",
        keyPoints: [
          "Sri Lankan transportation statistics",
          "Modal split and trends",
          "Urban transportation challenges",
          "Public transport systems",
          "Road network development",
          "Policy framework",
          "Future planning needs"
        ]
      }
    ],
    tools: [
      {
        name: "Spreadsheet Software (Excel)",
        category: "Data Analysis",
        description: "For traffic data analysis, capacity calculations, and demand modeling"
      },
      {
        name: "GIS Software (ArcGIS, QGIS)",
        category: "Spatial Analysis",
        description: "For transportation network analysis and visualization"
      },
      {
        name: "Statistical & Modeling Software",
        category: "Analysis & Modeling",
        description: "For transport demand modeling and forecasting"
      }
    ],
    recommendedReading: [
      "Ministry of Transport and Civil Aviation. (2020). Sri Lanka Transport Statistics - 2020. Department of Census and Statistics, Sri Lanka.",
      "Ashworth, R., & Page, S. J. (2011). Transport and Tourism: Global Perspectives. Channel View Publications.",
      "Ortúzar, J. D., & Willumsen, L. G. (2011). Modelling Transport (4th ed.). John Wiley & Sons.",
      "Institute of Transportation Engineers. (2015). Transportation Planning Handbook (4th ed.). Wiley.",
      "Transportation Research Board. (2010). Highway Capacity Manual (HCM 2010). Transportation Research Board.",
      "Department for Transport (DfT). (2007). WebTAG: Transport Analysis Guidance. UK Department for Transport."
    ]
  }
];
