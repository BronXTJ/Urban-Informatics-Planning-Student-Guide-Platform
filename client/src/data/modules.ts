export interface Concept {
  title: string;
  description: string;
  subtopics?: string[];
}

export interface Module {
  code: string;
  title: string;
  credits: number;
  description: string;
  concepts: Concept[];
  comparativeContext: string;
}

export const modules: Module[] = [
  {
    code: "PL2301",
    title: "Planning Theory",
    credits: 2,
    description: "This module delves into the foundational theories that underpin urban planning and design, providing a conceptual framework for understanding human settlements and their evolution.",
    concepts: [
      {
        title: "Definitional Theories",
        description: "You will learn the core definitions and philosophical underpinnings of planning.",
        subtopics: [
          "Exploring what planning is, its purpose, and its scope within society."
        ]
      },
      {
        title: "Normative Theories (Historic and Modern)",
        description: "You will examine theories that prescribe how planning should be done.",
        subtopics: [
          "Historical perspectives on ideal urban forms and governance.",
          "Contemporary normative approaches addressing sustainability, equity, and participation."
        ]
      },
      {
        title: "Theoretical Perspectives on Human Settlements",
        description: "You will learn to analyze urban environments through various lenses.",
        subtopics: [
          "Historic Process: Understanding how cities develop over time.",
          "Central Place Theory: Distribution and hierarchy of settlements.",
          "Agglomeration of Economic Activities: How economic forces drive concentration.",
          "Decision of Location Economics: Economic factors influencing location choices.",
          "Social-Spatial Process: Interplay between social structures and spatial organization.",
          "Place: Qualitative aspects of urban spaces.",
          "Social Construction: Urban realities shaped by social perceptions.",
          "Field of Forces: Cities as dynamic systems.",
          "Arena for Conflicts: Urban spaces as sites of conflict."
        ]
      },
      {
        title: "Substantive Theories Application",
        description: "You will apply theoretical knowledge to interpret and critically analyze existing built environments."
      },
      {
        title: "Forms of Sri Lankan Towns",
        description: "You will study the unique characteristics and developmental patterns of urban areas within Sri Lanka."
      }
    ],
    comparativeContext: "This module is a standard foundational course in virtually all urban planning, regional planning, and town and country planning programs globally. The core concepts of planning theory, history, and ethics are universally considered essential for any aspiring planner."
  },
  {
    code: "PL2302",
    title: "Planning and Design Studio III",
    credits: 3,
    description: "This studio-based module focuses on the practical application of planning and urban design principles, emphasizing hands-on experience in addressing micro-scale built environment issues through case studies and design projects.",
    concepts: [
      {
        title: "Planning and Design Process",
        description: "You will gain an advanced understanding and apply the systematic steps involved in urban planning and design."
      },
      {
        title: "Urban Design Products and Processes",
        description: "You will review and learn from local and international case studies."
      },
      {
        title: "Spatial Planning and Design Methods",
        description: "You will explore various techniques and approaches for designing and shaping micro-scale built environments."
      },
      {
        title: "Study of Physical Space",
        description: "You will conduct a detailed analysis of urban physical elements.",
        subtopics: [
          "Masses: Understanding building volumes and density.",
          "Functions: Analyzing land uses and activities.",
          "Place Making Processes: Learning strategies to create vibrant public spaces.",
          "Appropriations: Studying how users adapt and utilize spaces."
        ]
      },
      {
        title: "Relationships between Exterior and Interior Spaces",
        description: "You will examine how the design of buildings and public spaces influences interactions."
      },
      {
        title: "Evolving Nature of the Urban Environment",
        description: "You will understand urban dynamics, growth, and change."
      },
      {
        title: "Urban Design Scheme Production",
        description: "You will develop practical skills in creating and presenting urban design proposals."
      },
      {
        title: "Conceptualization of an Urban Area",
        description: "You will develop the ability to form abstract ideas and mental models of urban spaces."
      }
    ],
    comparativeContext: "Studio-based learning is a cornerstone of planning and design education worldwide. Often referred to as a 'practicum' or 'workshop' module, it provides the essential hands-on, experiential learning that bridges theory and practice."
  },
  {
    code: "PL2303",
    title: "Land Management",
    credits: 2,
    description: "This module explores the principles, techniques, and policy frameworks for effective and sustainable land management, considering global trends and local contexts.",
    concepts: [
      {
        title: "Land Management Concepts and Key Components",
        description: "You will gain a fundamental understanding of what land management entails."
      },
      {
        title: "Global Trends in Land Management",
        description: "You will develop an awareness of international best practices and challenges."
      },
      {
        title: "Tools and Techniques for Effective Land Management",
        description: "You will learn practical methods and instruments used in land management.",
        subtopics: [
          "Land Use Planning: Processes for regulating the use of land.",
          "Land Information Systems (LIS): Systems for managing land-related data.",
          "Valuation Techniques: Methods for assessing the economic value of land.",
          "Conflict Resolution: Strategies for addressing land-related disputes."
        ]
      },
      {
        title: "Government Intervention and Land Policy",
        description: "You will examine the role of government in regulating land use and property rights."
      },
      {
        title: "Sustainable Land Management",
        description: "You will learn principles and practices for balancing development with environmental protection."
      },
      {
        title: "Land Acquisition",
        description: "You will understand the processes and legal frameworks for acquiring land."
      },
      {
        title: "Risk Associated with Land Acquisition and Land Conflict",
        description: "You will learn to identify and mitigate risks."
      },
      {
        title: "Elements of Land Policy",
        description: "You will study the components of effective land policies."
      },
      {
        title: "Land Tenure Systems",
        description: "You will study different systems of land ownership and rights."
      },
      {
        title: "Land Administration (Registration and Cadastral Systems)",
        description: "You will understand the frameworks for recording and managing land information."
      },
      {
        title: "Land Policy Actions and Reforms in Sri Lanka",
        description: "You will focus on the land policy context within Sri Lanka."
      }
    ],
    comparativeContext: "Land management is a critical component of urban planning curricula, often intertwined with modules on land economics and real estate development. The topics covered are fundamental to understanding the legal and economic frameworks that shape urban development."
  },
  {
    code: "PL2304",
    title: "Applied Hydrology",
    credits: 2,
    description: "This module provides knowledge of hydrological systems and their processes, with an emphasis on analyzing water flows and storms for optimized hydrological pathways in planning contexts.",
    concepts: [
      {
        title: "Hydrologic Processes",
        description: "You will understand the natural movement of water."
      },
      {
        title: "Hydrologic System Model",
        description: "You will learn about conceptual and quantitative models used to represent and simulate hydrological processes."
      },
      {
        title: "Water Balance",
        description: "You will study the accounting of water inputs, outputs, and storage changes."
      },
      {
        title: "Pathways and Reserves of Water",
        description: "You will identify and analyze different water reservoirs."
      },
      {
        title: "Hydrologic Analysis",
        description: "You will learn techniques for studying hydrological data.",
        subtopics: [
          "Hydrologic Measurement: Methods for collecting data on precipitation and streamflow.",
          "Hydrologic Statistics: Application of statistical methods to analyze hydrological data.",
          "Storms and Flows: Analysis of rainfall events and their resulting runoff.",
          "Unit Hydrograph: A tool to predict the runoff response of a watershed.",
          "Frequency Analysis: Statistical methods to estimate the probability of extreme hydrological events.",
          "Hydro-meteorological Risk and Uncertainty: Assessment of risks associated with water-related natural hazards."
        ]
      },
      {
        title: "Optimizing Hydrological Pathways",
        description: "You will apply hydrological knowledge to design and manage urban drainage systems."
      }
    ],
    comparativeContext: "While a dedicated module on applied hydrology might be an elective in some universities, its inclusion as a core module signifies a strong emphasis on environmental sustainability and resilience. The skills learned are highly valuable for specializations in environmental planning."
  },
  {
    code: "PL2305",
    title: "Population Studies in Planning",
    credits: 2,
    description: "This module focuses on demographic concepts, theories, and methods essential for understanding population dynamics and their implications for human settlement planning.",
    concepts: [
      {
        title: "Concepts, Theories, and Measurements of Demography",
        description: "You will gain a fundamental understanding of demographic principles.",
        subtopics: [
          "Population Growth: Factors influencing changes in population size.",
          "Population Composition: Analysis of population characteristics.",
          "Fertility, Mortality, Migration, Nuptiality, and Social Mobility: Study of key demographic processes."
        ]
      },
      {
        title: "Demographic Analysis in the Planning Process",
        description: "You will apply demographic data and methods to inform planning decisions."
      },
      {
        title: "Sources of Demographic Data",
        description: "You will identify and evaluate various data sources."
      },
      {
        title: "Demographic Measures of Population Composition",
        description: "You will learn to calculate and interpret demographic indicators."
      },
      {
        title: "History of Population Growth",
        description: "You will understand global and regional historical trends."
      },
      {
        title: "Global Variations in Population Measurements and Growth",
        description: "You will conduct a comparative analysis of demographic patterns."
      },
      {
        title: "Demographic Transition Theory",
        description: "You will understand the model that describes population change over time."
      },
      {
        title: "Population Pyramids",
        description: "You will learn to interpret and construct graphical representations of age and sex distribution."
      },
      {
        title: "Population Forecasting Models",
        description: "You will learn techniques and models used to predict future population sizes."
      },
      {
        title: "Sub-population Estimates",
        description: "You will learn methods for estimating population characteristics for specific subgroups."
      },
      {
        title: "Planning Implications and Policy Formulation",
        description: "You will translate demographic insights into actionable planning policies."
      },
      {
        title: "Computer-based Applications",
        description: "You will gain practical experience using software for demographic analysis."
      }
    ],
    comparativeContext: "Demographic analysis is a fundamental skill for planners, and a module on population studies is a standard component of planning curricula everywhere. The ability to analyze population trends and make informed forecasts is essential for evidence-based planning."
  },
  {
    code: "PL2306",
    title: "Spatial Data Analytics and Visualization",
    credits: 2,
    description: "This module equips students with a comprehensive understanding of theories, concepts, and tools for analyzing and visualizing spatial data, crucial for urban informatics.",
    concepts: [
      {
        title: "Introduction to Spatial Data Science and Visualization",
        description: "You will gain foundational knowledge of working with geographically referenced data."
      },
      {
        title: "Spatial Interpolation",
        description: "You will learn techniques for estimating values at unmeasured locations."
      },
      {
        title: "Spatial Continuity Analysis",
        description: "You will understand how spatial phenomena vary across space."
      },
      {
        title: "Spatial Statistics",
        description: "You will apply statistical methods specifically designed for spatial data.",
        subtopics: [
          "Autocorrelation: Measuring the degree to which values at nearby locations are similar.",
          "Cluster Analysis: Identifying spatial patterns and groupings.",
          "Regression Analysis with Spatial Components: Statistical modeling that accounts for spatial relationships."
        ]
      },
      {
        title: "Temporal Analysis",
        description: "You will analyze changes in spatial data over time."
      },
      {
        title: "Spatial Data Mining",
        description: "You will discover patterns and relationships in large spatial datasets."
      },
      {
        title: "3D & 4D GIS Data Analysis",
        description: "You will work with three-dimensional and four-dimensional geographic information system data."
      },
      {
        title: "Multidimensional Data Visualization Tools",
        description: "You will learn techniques and software for visualizing complex datasets."
      },
      {
        title: "Web Analytics & Web Technologies for Data Visualization",
        description: "You will use web-based tools and programming languages (e.g., JavaScript libraries like Leaflet, Mapbox GL JS, D3.js) to create interactive maps."
      },
      {
        title: "Citizen Science Data Analysis",
        description: "You will learn methods for analyzing data collected by the public."
      },
      {
        title: "Social Media Analytics",
        description: "You will extract and analyze spatial information from social media data."
      },
      {
        title: "Spatial Analysis based on Location Based Services (LBS)",
        description: "You will utilize data from mobile devices to understand movement patterns."
      },
      {
        title: "Augmented Reality (AR) and Virtual Reality (VR)",
        description: "You will understand and potentially use AR/VR technologies for immersive spatial data visualization."
      },
      {
        title: "Data Animation and Dashboard",
        description: "You will create dynamic visualizations and interactive dashboards."
      },
      {
        title: "Hands-on Sessions & Live Coding",
        description: "You will gain practical experience with relevant software and programming."
      }
    ],
    comparativeContext: "This module is at the heart of the Urban Informatics & Planning curriculum. Many universities offer similar modules under names like 'Geographic Information Systems (GIS) for Urban Planning,' 'Spatial Analysis,' or 'Urban Data Science.' The emphasis on modern techniques reflects a cutting-edge approach, aligning with the growing demand for data-driven planning and smart city initiatives."
  },
  {
    code: "PL2307",
    title: "Planning Techniques",
    credits: 2,
    description: "This module introduces a range of analytical and evaluative techniques used in rational decision-making throughout the planning process, enabling students to address complex settlement problems.",
    concepts: [
      {
        title: "Introduction to Planning Techniques",
        description: "You will get an overview of various quantitative and qualitative methods."
      },
      {
        title: "Methodology and Application of Specific Planning Techniques",
        description: "You will learn and apply techniques such as:",
        subtopics: [
          "Sieve Map: A technique for overlaying multiple thematic maps.",
          "Potential Surface Techniques: Methods for modeling spatial potential or suitability.",
          "Sensitive Area Analysis Techniques: Identifying and evaluating environmentally or socially sensitive areas.",
          "Space Syntax: A set of theories and techniques for analyzing spatial configurations.",
          "Network Centrality Assessment: Analyzing the importance of nodes within a network.",
          "Settlement Ranking: Methods for classifying and prioritizing settlements.",
          "SWOT Analysis: A strategic planning tool to identify Strengths, Weaknesses, Opportunities, and Threats.",
          "Delphi Method: A structured communication technique for forecasting.",
          "Analytic Hierarchy Process (AHP): A structured technique for organizing and analyzing complex decisions.",
          "Cost-Benefit Analysis (CBA): A systematic process for calculating and comparing the benefits and costs of a project.",
          "Multi-Criteria Analysis (MCA): A decision-making tool that evaluates multiple conflicting criteria.",
          "Critical Path Analysis (CPA): A project management technique.",
          "Cause and Effect Analysis (Fishbone Diagram): A visual tool for categorizing the potential causes of a problem.",
          "Role Playing: A simulation technique to explore different perspectives.",
          "Brainstorming: A group creativity technique."
        ]
      },
      {
        title: "Evaluation of Alternatives, Goals, and Strategies",
        description: "You will use these techniques to assess different planning options."
      }
    ],
    comparativeContext: "This module covers a broad spectrum of analytical and decision-making tools that are fundamental to planning practice. Many of these techniques are widely taught in planning programs globally, often integrated into project-based courses or dedicated methods modules."
  },
  {
    code: "PL2308",
    title: "Traffic and Transportation",
    credits: 2,
    description: "This module focuses on the planning processes, survey methods, and analytical techniques used in transportation planning, with an emphasis on integrating transport and land use.",
    concepts: [
      {
        title: "Transportation Planning Processes",
        description: "You will understand the systematic steps involved in developing transportation plans."
      },
      {
        title: "Key Concepts in Traffic and Transportation",
        description: "You will learn fundamental terminology and principles."
      },
      {
        title: "Traffic and Transportation Surveys",
        description: "You will learn methods for collecting data on travel behavior and traffic volumes.",
        subtopics: [
          "Surveying Methods: Techniques for conducting various types of transportation surveys.",
          "Uses for Decision Making: How survey data informs policy and infrastructure design."
        ]
      },
      {
        title: "Capacity Assessments",
        description: "You will evaluate the maximum traffic volume that a road can handle."
      },
      {
        title: "Traffic Impact Assessments (TIA)",
        description: "You will analyze the potential effects of new developments on the transportation network."
      },
      {
        title: "Key Components of Transportation Infrastructure",
        description: "You will understand the various elements of transportation systems."
      },
      {
        title: "Traffic Forecasting and Transport Modeling Approaches",
        description: "You will learn techniques and software used to predict future travel demand.",
        subtopics: [
          "Four-step Transport Model: A classic model involving trip generation, trip distribution, mode choice, and traffic assignment.",
          "Transport Models: Various mathematical and computational models for simulating transportation phenomena."
        ]
      },
      {
        title: "Transport Policies",
        description: "You will examine policies aimed at managing demand and promoting sustainable modes."
      },
      {
        title: "Integration of Transportation and Land Use",
        description: "You will learn strategies for coordinating transportation and land use planning."
      },
      {
        title: "Transportation Statistics in Sri Lanka",
        description: "You will focus on transportation data and trends within Sri Lanka."
      },
      {
        title: "Transport Plans Preparation",
        description: "You will gain practical skills in developing comprehensive transport plans."
      }
    ],
    comparativeContext: "Transportation planning is a core specialization within urban planning programs. Modules like this are common and often cover similar ground. Many programs utilize specialized transportation modeling software (e.g., TransCAD, PTV Vissim, Cube) and GIS tools for network analysis and visualization."
  }
];
