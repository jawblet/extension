const taxonomy = {
    1: "Arts & Entertainment",
    4: "Concerts & Music Festivals",
    9: "Live Sporting Events",
    12: "Movies",
    13: "Action & Adventure Films",
    15: "Comedy Films",
    18: "Drama Films",
    19: "Family Films",
    20: "Horror Films",
    21: "Romance Films",
    23: "Music & Audio",
    24: "Blues",
    25: "Classical Music",
    26: "Country Music",
    27: "Dance & Electronic Music",
    28: "Folk & Traditional Music",
    29: "Jazz",
    30: "Musical Instruments",
    31: "Pop Music",
    32: "Rap & Hip-Hop",
    33: "Rock Music",
    36: "Indie & Alternative Music",
    46: "TV Comedies",
    47: "TV Documentary & Nonfiction",
    48: "TV Dramas",
    50: "TV Family-Oriented Shows",
    51: "TV Reality Shows",
    52: "TV Sci-Fi & Fantasy Shows",
    53: "Visual Art & Design",
    56: "Photographic & Digital Arts",
    57: "Autos & Vehicles",
    59: "Classic Vehicles",
    60: "Custom & Performance Vehicles",
    62: "Motor Vehicles (By Type)",
    63: "Autonomous Vehicles",
    64: "Convertibles",
    65: "Coupes",
    66: "Hatchbacks",
    67: "Hybrid & Alternative Vehicles",
    68: "Luxury Vehicles",
    69: "Microcars & Subcompacts",
    70: "Motorcycles",
    71: "Off-Road Vehicles",
    72: "Pickup Trucks",
    73: "Scooters & Mopeds",
    74: "Sedans",
    75: "Station Wagons",
    76: "SUVs & Crossovers",
    78: "Vans & Minivans",
    81: "Vehicle Parts & Accessories",
    82: "Vehicle Repair & Maintenance",
    83: "Vehicle Shopping",
    84: "Used Vehicles",
    86: "Beauty & Fitness",
    88: "Face & Body Care",
    89: "Antiperspirants, Deodorants & Body Sprays",
    90: "Bath & Body Products",
    91: "Clean Beauty",
    92: "Make-Up & Cosmetics",
    93: "Nail Care Products",
    94: "Perfumes & Fragrances",
    95: "Razors & Shavers",
    96: "Fashion & Style",
    97: "Fitness",
    99: "Hair Care",
    100: "Books & Literature",
    101: "Children's Literature",
    102: "Poetry",
    103: "Business & Industrial",
    104: "Advertising & Marketing",
    113: "Commercial Lending",
    126: "Computers & Electronics",
    128: "Computer Peripherals",
    129: "Consumer Electronics",
    131: "Home Automation",
    132: "Home Theater Systems",
    134: "Desktop Computers",
    135: "Laptops & Notebooks",
    137: "Networking",
    140: "Software",
    141: "Audio & Music Software",
    144: "Graphics & Animation Software",
    149: "Finance",
    150: "Accounting & Auditing",
    151: "Tax Preparation & Planning",
    152: "Credit Cards",
    153: "Financial Planning & Management",
    154: "Retirement & Pension",
    157: "Home Financing",
    158: "Insurance",
    159: "Auto Insurance",
    160: "Health Insurance",
    161: "Home Insurance",
    162: "Life Insurance",
    163: "Travel Insurance",
    164: "Investing",
    170: "Personal Loans",
    171: "Student Loans & College Financing",
    172: "Food & Drink",
    173: "Cooking & Recipes",
    176: "Vegetarian Cuisine",
    177: "Vegan Cuisine",
    180: "Games",
    183: "Computer & Video Games",
    184: "Action & Platform Games",
    185: "Adventure Games",
    186: "Casual Games",
    187: "Competitive Video Gaming",
    191: "Sports Games",
    192: "Strategy Games",
    194: "Roleplaying Games",
    196: "Hobbies & Leisure",
    201: "Outdoors",
    202: "Fishing",
    207: "Home & Garden",
    208: "Gardening",
    209: "Home & Interior Decor",
    210: "Home Appliances",
    211: "Home Improvement",
    212: "Home Safety & Security",
    213: "Household Supplies",
    214: "Landscape Design",
    215: "Internet & Telecom",
    217: "ISPs",
    218: "Phone Service Providers",
    224: "Web Design & Development",
    226: "Jobs & Education",
    227: "Education",
    229: "Colleges & Universities",
    230: "Distance Learning",
    231: "Early Childhood Education",
    233: "Homeschooling",
    234: "Standardized & Admissions Tests",
    236: "Jobs",
    237: "Career Resources & Planning",
    238: "Job Listings",
    239: "Law & Government",
    242: "Legal Services",
    243: "News",
    245: "Local News",
    247: "Politics",
    249: "World News",
    250: "Online Communities",
    253: "Social Networks",
    254: "People & Society",
    258: "Parenting",
    259: "Adoption",
    260: "Babies & Toddlers",
    263: "Pets & Animals",
    264: "Pet Food & Pet Care Supplies",
    265: "Pets",
    267: "Cats",
    268: "Dogs",
    272: "Real Estate",
    277: "Foreign Language Study",
    289: "Shopping",
    291: "Children's Clothing",
    293: "Coupons & Discount Offers",
    294: "Costumes",
    295: "Flowers",
    296: "Men's Clothing",
    297: "Party & Holiday Supplies",
    298: "Women's Clothing",
    299: "Sports",
    300: "American Football",
    301: "Australian Football",
    303: "Baseball",
    304: "Basketball",
    309: "Cricket",
    310: "Cycling",
    315: "Golf",
    317: "Hockey",
    321: "Olympics",
    322: "Rugby",
    323: "Running & Walking",
    324: "Skiing & Snowboarding",
    325: "Soccer",
    327: "Swimming",
    328: "Tennis",
    332: "Travel & Transportation",
    334: "Air Travel",
    335: "Business Travel",
    336: "Car Rentals",
    337: "Cruises & Charters",
    338: "Family Travel",
    340: "Hotels & Accommodations",
    341: "Long Distance Bus & Rail",
    343: "Luggage & Travel Accessories",
    345: "Beaches & Islands",
    350: "Celebrities & Entertainment News",
    351: "Comics & Animation",
    352: "Events & Listings",
    353: "Bars, Clubs & Nightlife",
    354: "Event Ticket Sales",
    355: "Expos & Conventions",
    356: "Film Festivals",
    357: "Food & Beverage Events",
    358: "Science Fiction & Fantasy Films",
    359: "DJ Resources & Equipment",
    360: "Metal (Music)",
    361: "Performing Arts",
    362: "Broadway & Musical Theater",
    363: "TV & Video",
    364: "Live Video Streaming",
    365: "Movie & TV Streaming",
    366: "TV Game Shows",
    367: "TV Talk Shows",
    368: "Architecture",
    369: "Bicycles & Accessories",
    370: "Boats & Watercraft",
    371: "Campers & RVs",
    372: "Commercial Vehicles",
    373: "Compact Cars",
    374: "Diesel Vehicles",
    375: "Electric & Plug-In Vehicles",
    376: "Sports Cars",
    377: "Trucks, Vans & SUVs",
    378: "High Performance & Aftermarket Auto Parts",
    379: "Vehicle Wheels & Tires",
    380: "Beauty Services & Spas",
    381: "Manicures & Pedicures",
    382: "Cosmetology & Beauty Professionals",
    383: "Hygiene & Toiletries",
    384: "Feminine Hygiene Products",
    385: "Skin & Nail Care",
    386: "Face Care Products",
    387: "Sun Care & Tanning Products",
    388: "Unwanted Body & Facial Hair Removal",
    389: "Fitness Equipment & Accessories",
    390: "Fitness Technology Products",
    391: "Fitness Instruction & Personal Training",
    392: "Gyms & Health Clubs",
    393: "High Intensity Interval Training",
    394: "Yoga & Pilates",
    395: "Shampoos & Conditioners",
    396: "Audiobooks",
    397: "Book Retailers",
    398: "Fan Fiction",
    399: "Literary Classics",
    400: "Magazines",
    401: "Writers Resources",
    402: "Building Materials & Supplies",
    403: "Business Finance",
    404: "Business Services",
    405: "Corporate Events",
    406: "Fire & Security Services",
    407: "Merchant Services & Payment Systems",
    408: "Office Supplies",
    409: "Office Furniture",
    410: "Signage",
    411: "Construction Consulting & Contracting",
    412: "Document & Printing Services",
    413: "Event Planning",
    414: "Food Service",
    415: "Industrial Materials & Equipment",
    416: "Work Safety Protective Gear",
    417: "Moving & Relocation",
    418: "Payroll Services",
    419: "Recruitment & Staffing",
    420: "Computer Hardware",
    421: "Computer Components",
    422: "Computer Drives & Storage",
    423: "Computer Security",
    424: "Audio Equipment",
    425: "Headphones",
    426: "Speakers",
    427: "Stereo Systems & Components",
    428: "Camera & Photo Equipment",
    429: "Car Audio",
    430: "Gadgets & Portable Electronics",
    431: "Game Systems & Consoles",
    432: "Handheld Game Consoles",
    433: "Televisions",
    434: "Electronics & Electrical",
    435: "Power Supplies",
    436: "Enterprise Technology",
    437: "Network Monitoring & Management",
    438: "Networking Equipment",
    439: "Business & Productivity Software",
    440: "Accounting & Financial Software",
    441: "Collaboration & Conferencing ",
    442: "Multimedia Software",
    443: "Photo & Video Software",
    444: "Banking",
    445: "Debit & Checking Services",
    446: "Savings Accounts",
    447: "Credit & Lending",
    448: "Auto Financing",
    449: "Credit Reporting & Monitoring",
    450: "Food",
    451: "Baked Goods",
    452: "Breakfast Foods",
    453: "Candy & Sweets",
    454: "Condiments & Dressings",
    455: "Dairy & Eggs",
    456: "Gourmet & Specialty Foods",
    457: "Meat & Seafood",
    458: "Fish & Seafood",
    459: "Organic & Natural Foods",
    460: "Grocery Delivery Services",
    461: "Restaurant Delivery Services",
    462: "Restaurants",
    463: "Fast Food",
    464: "Pizzerias",
    465: "Board Games",
    466: "Driving & Racing Games",
    467: "Shooter Games",
    468: "Family-Oriented Games & Activities",
    469: "Art & Craft Supplies",
    470: "Boating",
    471: "Holidays & Seasonal Events",
    472: "Hiking & Camping",
    473: "Bed & Bath",
    474: "Bathroom",
    475: "Bedroom",
    476: "Bedding & Bed Linens",
    477: "Beds & Headboards",
    478: "Mattresses",
    479: "Cleaning Services",
    480: "Vacuums & Floor Care",
    481: "Water Filters & Purifiers",
    482: "Home Furnishings",
    483: "Countertops",
    484: "Curtains & Window Treatments",
    485: "Kitchen & Dining Furniture",
    486: "Lamps & Lighting",
    487: "Living Room Furniture",
    488: "Sofas & Armchairs",
    489: "Outdoor Furniture",
    490: "Rugs & Carpets",
    491: "Construction & Power Tools",
    492: "Doors & Windows",
    493: "Flooring",
    494: "House Painting & Finishing",
    495: "Locks & Locksmiths",
    496: "Plumbing",
    497: "Roofing",
    498: "Home Storage & Shelving",
    499: "Cabinetry",
    500: "Home Swimming Pools, Saunas & Spas",
    501: "Household Batteries",
    502: "Household Cleaning Supplies",
    503: "HVAC & Climate Control",
    504: "Air Conditioners",
    505: "Fireplaces & Stoves",
    506: "Household Fans",
    507: "Kitchen & Dining",
    508: "Cookware & Diningware",
    509: "Cookware",
    510: "Diningware",
    511: "Dishwashers",
    512: "Microwaves",
    513: "Ranges, Cooktops & Ovens",
    514: "Refrigerators & Freezers",
    515: "Small Kitchen Appliances",
    516: "Blenders & Juicers",
    517: "Coffee & Espresso Makers",
    518: "Food Mixers",
    519: "Patio, Lawn & Garden",
    520: "Barbecues & Grills",
    521: "Yard Maintenance",
    522: "Lawn Mowers",
    523: "Pest Control",
    524: "Washers & Dryers",
    525: "Communications Equipment",
    526: "Radio Equipment",
    527: "Mobile & Wireless Accessories",
    528: "Mobile Phones",
    529: "Mobile Phone Repair & Services",
    530: "Service Providers",
    531: "Cable & Satellite Providers",
    532: "Voice & Video Chat",
    533: "Web Services",
    534: "Cloud Storage",
    535: "Search Engine Optimization & Marketing",
    536: "Web Hosting & Domain Registration",
    537: "Business Education",
    538: "Computer Education",
    539: "Health Education & Medical Training",
    540: "Legal Education",
    541: "Open Online Courses",
    542: "Primary & Secondary Schooling (K-12)",
    543: "Private Tutoring Services",
    544: "School Supplies & Classroom Equipment",
    545: "Study Abroad",
    546: "Visual Arts & Design Education",
    547: "Internships",
    548: "Accounting & Finance Jobs",
    549: "Clerical & Administrative Jobs",
    550: "Education Jobs",
    551: "Executive & Management Jobs",
    552: "Government & Public Sector Jobs",
    553: "Health & Medical Jobs",
    554: "IT & Technical Jobs",
    555: "Legal Jobs",
    556: "Retail Jobs",
    557: "Sales & Marketing Jobs",
    558: "Temporary & Seasonal Jobs",
    559: "Resumes & Portfolios",
    560: "Labor & Employment Law",
    561: "Business News",
    562: "Charity & Philanthropy",
    563: "Child Care",
    564: "Property Development",
    565: "Real Estate Listings",
    566: "Commercial Properties",
    567: "Residential Rentals",
    568: "Furnished Rentals",
    569: "Residential Sales",
    570: "Real Estate Services",
    571: "Property Inspections & Appraisals",
    572: "Apparel",
    573: "Apparel Services",
    574: "Athletic Apparel",
    575: "Casual Apparel",
    576: "T-Shirts",
    577: "Clothing Accessories",
    578: "Gems & Jewelry",
    579: "Rings",
    580: "Handbags & Purses",
    581: "Socks & Hosiery",
    582: "Watches",
    583: "Eyewear",
    584: "Sunglasses",
    585: "Footwear",
    586: "Athletic Shoes",
    587: "Boots",
    588: "Casual Shoes",
    589: "Formal Wear",
    590: "Headwear",
    591: "Outerwear",
    592: "Pants & Shorts",
    593: "Shirts & Tops",
    594: "Sleepwear",
    595: "Suits & Business Attire",
    596: "Swimwear",
    597: "Undergarments",
    598: "Uniforms & Workwear",
    599: "Dresses",
    600: "Skirts",
    601: "Gifts & Special Event Items",
    602: "Luxury Goods",
    603: "Mass Merchants & Department Stores",
    604: "Photo & Video Services",
    605: "Event & Studio Photography",
    606: "Photo Printing Services",
    607: "Product Reviews & Price Comparisons",
    608: "Toys",
    609: "Combat Sports",
    610: "Motor Sports",
    611: "Sporting Goods",
    612: "Baseball & Softball Equipment",
    613: "Golf Equipment",
    614: "Hockey Equipment",
    615: "Skateboarding Equipment",
    616: "Soccer Equipment",
    617: "Squash & Racquetball Equipment",
    618: "Water Sports Equipment",
    619: "Winter Sports Equipment",
    620: "Water Sports",
    621: "Winter Sports",
    622: "Vacation Rentals & Short-Term Stays",
    623: "Backpacks & Utility Bags",
    624: "Luxury Travel",
    625: "Mountain & Ski Resorts",
    626: "Travel Agencies & Services",
    627: "Guided Tours & Escorted Vacations",
    628: "Sightseeing Tours",
    629: "Vacation Offers"
}