import Columbia from '../../public/ColumbiaUniversity.svg';


export const continentStudyData = {
  northAmerica: {
    name: 'North America',
    icon: '🌎',
    facts: [
      { icon: '🏆', title: "Top-Ranked Universities", details: "Home to many of the world's most prestigious and top-ranked universities, offering world-class education." },
      { icon: '🎓', title: "Leading Student Destination", details: "The most popular choice for international students seeking high-quality education and diverse experiences." },
      { icon: '💼', title: "Strong Job Market", details: "A robust economy with abundant career opportunities for graduates across various industries." },
      { icon: '🌍', title: "Diverse Environment", details: "A melting pot of cultures, offering a vibrant and inclusive environment for students from all over the world." },
      { icon: '🔬', title: "Cutting-Edge Research", details: "A global leader in research and innovation, providing opportunities to work on groundbreaking projects." },
      { icon: '💰', title: "High-Quality Facilities", details: "Universities are equipped with state-of-the-art facilities and resources to support student success." },
    ],
    touristPlaces: ['Grand Canyon', 'Niagara Falls', 'Yellowstone National Park'],
    countries: {
      usa: {
        name: 'United States of America',
        icon: '🇺🇸',
        facts: [
          { icon: '🏅', title: "Top Student Destination", details: "The USA hosts more international students than any other country, with over a million students choosing to broaden their education and life experience." },
          { icon: '🗽', title: "Financial Capital", details: "New York City is the world's premier financial center, offering unparalleled opportunities in finance, business, and commerce." },
          { icon: '🎓', title: "948,519+ Students", details: "A vibrant and large international student community, ensuring a diverse and enriching academic environment." },
          { icon: '👨‍🔬', title: "Nobel Laureates", details: "The US has the highest number of Nobel Prize winners, reflecting its commitment to research and academic excellence." },
          { icon: '🌎', title: "World's Largest Economy", details: "The U.S. economy is the largest in the world, providing a dynamic environment for learning and career growth." },
          { icon: '🏢', title: "Fortune 500 Companies", details: "Home to 124 of the Fortune 500 companies, offering extensive internship and job opportunities with global leaders." },
        ],
        touristPlaces: ['Statue of Liberty', 'Grand Canyon', 'Yellowstone National Park'],
        cities: {
          newYork: {
            name: 'New York',
            icon: '🗽',
            facts: [
              { icon: '🏙️', title: "Global financial and cultural hub" },
              { icon: '🎭', title: "World's entertainment capital" },
              { icon: '🌉', title: "Iconic landmarks and attractions" },
            ],
            touristPlaces: ['Statue of Liberty', 'Central Park', 'Times Square'],
            universities: [
              {
                name: 'Columbia University',
                image: Columbia,
                short: 'Ivy League university in Manhattan',
                details: 'Columbia University is one of the oldest and most prestigious universities in the US. Located in Manhattan, it offers a diverse range of programs and is known for its global outlook and vibrant urban campus.'
              },
              {
                name: 'New York University (NYU)',
                image: 'https://www.nyu.edu/content/dam/nyu/nyu-images/nyu-campus-hero.jpg',
                short: 'Major private university in NYC',
                details: 'NYU is known for its global outlook, diverse student body, and strong programs in business, law, and the arts. Its main campus is located in the heart of Manhattan.'
              },
              {
                name: 'Weill Cornell Medical College',
                image: 'https://weill.cornell.edu/sites/default/files/styles/hero_image/public/2019-10/weill-cornell-medicine.jpg',
                short: 'Top medical school in New York',
                details: 'Weill Cornell Medical College is a leading medical school offering a wide range of medical programs and research opportunities.'
              },
            ]
          },
          boston: {
            name: 'Boston',
            icon: '🏛️',
            facts: [
              { icon: '🎓', title: "Academic excellence hub" },
              { icon: '🏥', title: "Leading healthcare and research" },
              { icon: '📚', title: "Rich educational heritage" },
            ],
            touristPlaces: ['Freedom Trail', 'Fenway Park', 'Museum of Fine Arts'],
            universities: [
              {
                name: 'Harvard University',
                image: 'https://www.harvard.edu/wp-content/uploads/2020/09/harvard-yard-1-1600x900.jpg',
                short: 'Prestigious Ivy League university',
                details: 'Harvard University, established in 1636, is the oldest institution of higher education in the United States. It is renowned for its academic excellence, distinguished faculty, and global influence.'
              },
              {
                name: 'Massachusetts Institute of Technology (MIT)',
                image: 'https://mitadmissions.org/wp-content/uploads/2018/08/mit-dome.jpg',
                short: 'Top-ranked institute for science and technology',
                details: 'MIT is a global leader in science, engineering, and technology education and research. The institute is known for its rigorous curriculum, innovative research, and collaborative culture.'
              },
            ]
          },
          california: {
            name: 'California',
            icon: '☀️',
            facts: [
              { icon: '💻', title: "Silicon Valley innovation hub" },
              { icon: '🌊', title: "Beautiful Pacific coastline" },
              { icon: '🎬', title: "Entertainment industry center" },
            ],
            touristPlaces: ['Golden Gate Bridge', 'Disneyland', 'Yosemite National Park'],
            universities: [
              {
                name: 'Stanford University',
                image: 'https://news.stanford.edu/wp-content/uploads/2022/08/StanfordCampusAerial-1600x900.jpg',
                short: 'Leading research university in Silicon Valley',
                details: 'Stanford University is a world-renowned private research university located in Stanford, California. It is known for its entrepreneurial spirit, cutting-edge research, and close ties to Silicon Valley.'
              },
              {
                name: 'University of California, Berkeley',
                image: 'https://news.berkeley.edu/wp-content/uploads/2022/08/berkeleycampus-1600x900.jpg',
                short: 'Top public research university',
                details: 'UC Berkeley is renowned for its academic excellence, vibrant campus life, and commitment to public service. It offers a wide range of programs and is a leader in research and innovation.'
              },
            ]
          }
        }
      },
      canada: {
        name: 'Canada',
        icon: '🇨🇦',
        facts: [
          { icon: '🍁', title: "Welcoming Environment", details: "Known for its friendly and multicultural society, Canada offers a safe and inclusive environment for international students." },
          { icon: '🏔️', title: "Stunning Landscapes", details: "From the Rocky Mountains to the Atlantic coast, Canada's natural beauty provides endless opportunities for exploration." },
          { icon: '🎓', title: "High-Quality Education", details: "Canadian universities are globally recognized for their high academic standards and rigorous quality controls." },
          { icon: '🏥', title: "Excellent Healthcare", details: "Canada offers a universal healthcare system, ensuring access to quality medical care for its residents." },
          { icon: '🌍', title: "Multicultural Society", details: "With a rich tapestry of cultures, Canada is a vibrant and diverse nation that celebrates its multicultural heritage." },
          { icon: '💼', title: "Strong Job Market", details: "A thriving economy and a strong job market provide excellent career prospects for graduates." },
        ],
        touristPlaces: ['Niagara Falls', 'Banff National Park', 'CN Tower'],
        cities: {
          toronto: {
            name: 'Toronto',
            icon: '🏙️',
            facts: [
              { icon: '🌆', title: "Canada's largest city" },
              { icon: '💼', title: "Major financial center" },
              { icon: '🎭', title: "Cultural diversity hub" },
            ],
            universities: [
              {
                name: 'University of Toronto',
                image: 'https://www.utoronto.ca/sites/default/files/styles/hero_image/public/2019-10/uoft-hero-1.jpg',
                short: 'Canada\'s top-ranked university',
                details: 'The University of Toronto is known for its research, diverse student body, and beautiful campus. It offers a wide range of programs and is a leader in innovation.'
              },
            ]
          },
          montreal: {
            name: 'Montreal',
            icon: '🏛️',
            facts: [
              { icon: '🎓', title: "Academic excellence center" },
              { icon: '🎭', title: "Cultural and artistic hub" },
              { icon: '🌍', title: "Bilingual city (French/English)" },
            ],
            universities: [
              {
                name: 'McGill University',
                image: 'https://www.mcgill.ca/newsroom/files/newsroom/styles/slider_full/public/hero_images/2019-10/mcgill-campus.jpg',
                short: 'Leading university in Montreal',
                details: 'McGill University is recognized for its academic excellence and vibrant student life. It offers a diverse range of programs in a bilingual environment.'
              },
            ]
          }
        }
      }
    }
  },
  europe: {
    name: 'Europe',
    icon: '🏛️',
    facts: [
      { icon: '🎓', title: "Rich Academic Traditions", details: "Europe's universities are steeped in history, offering a unique blend of tradition and modernity." },
      { icon: '🏛️', title: "Historic Universities", details: "Study at some of the world's oldest and most respected institutions, with centuries of academic excellence." },
      { icon: '🌍', title: "Cultural Diversity", details: "Experience a continent of diverse cultures, languages, and traditions, all within easy reach." },
      { icon: '💶', title: "Affordable Education", details: "Many European countries offer high-quality education at a low cost, with some even providing free tuition." },
      { icon: '🚄', title: "Easy Travel", details: "Excellent transport links make it easy to explore different countries and cultures during your studies." },
      { icon: '🎨', title: "Arts and Culture", details: "Immerse yourself in a rich heritage of art, music, and history, with world-class museums and galleries." },
    ],
    touristPlaces: ['Eiffel Tower', 'Colosseum', 'Acropolis'],
    countries: {
      uk: {
        name: 'United Kingdom',
        icon: '🇬🇧',
        facts: [
          { icon: '🏛️', title: "Historic Universities", details: "The UK is home to some of the world's oldest and most prestigious universities, such as Oxford and Cambridge." },
          { icon: '🎓', title: "Rich Academic Tradition", details: "A long-standing reputation for academic excellence attracts students and researchers from across the globe." },
          { icon: '🏙️', title: "Global Financial Hub", details: "London is a leading global financial center, offering vast opportunities in business, finance, and tech." },
          { icon: '👑', title: "Royal Heritage", details: "Experience a rich cultural heritage, with historic landmarks and royal traditions around every corner." },
          { icon: '🌍', title: "Diverse Community", details: "A vibrant, multicultural society welcomes people from all over the world, creating a dynamic student environment." },
          { icon: '💼', title: "Strong Industry Links", details: "Universities have strong connections with industry, providing excellent internship and career opportunities." },
        ],
        touristPlaces: ['Big Ben', 'Stonehenge', 'Tower of London'],
        cities: {
          london: {
            name: 'London',
            icon: '🏙️',
            facts: [
              { icon: '🌍', title: "Global financial center" },
              { icon: '🎭', title: "Cultural and arts hub" },
              { icon: '👑', title: "Royal and historic landmarks" },
            ],
            universities: [
              {
                name: 'Imperial College London',
                image: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1627297669642_mainnews2012_x1.jpg',
                short: 'Top science, engineering, and medicine university',
                details: 'Imperial College London is a leader in STEM education and research, located in the heart of London.'
              },
              {
                name: 'University College London (UCL)',
                image: 'https://www.ucl.ac.uk/sites/default/files/styles/hero_image/public/ucl-campus.jpg',
                short: 'Leading multidisciplinary university',
                details: 'UCL is known for its research excellence and diverse academic community in central London.'
              },
            ]
          },
          oxford: {
            name: 'Oxford',
            icon: '🏛️',
            facts: [
              { icon: '📚', title: "Academic excellence tradition" },
              { icon: '🏛️', title: "Historic university city" },
              { icon: '🎓', title: "World-class education" },
            ],
            universities: [
              {
                name: 'University of Oxford',
                image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/radcliffe_camera_oxford.jpg',
                short: 'Oldest university in the English-speaking world',
                details: 'The University of Oxford is renowned for its historic colleges, world-class research, and academic excellence.'
              },
            ]
          }
        }
      },
      germany: {
        name: 'Germany',
        icon: '🇩🇪',
        facts: [
          { icon: '🏭', title: "Engineering Leader", details: "Germany is a powerhouse in engineering and technology, offering world-class programs and research opportunities." },
          { icon: '🎓', title: "Low/No Tuition Fees", details: "Public universities in Germany offer free or very low-cost tuition for all students, including internationals." },
          { icon: '🏥', title: "Excellent Healthcare", details: "A comprehensive public healthcare system provides high-quality medical care for all residents." },
          { icon: '🌍', title: "Central European Location", details: "Its central location makes it easy and affordable to travel and explore other European countries." },
          { icon: '💼', title: "Strong Economy", details: "As Europe's largest economy, Germany offers excellent career prospects and job stability for graduates." },
          { icon: '🏛️', title: "Rich Cultural Heritage", details: "From medieval castles to modern art, Germany has a rich and diverse cultural landscape to explore." },
        ],
        touristPlaces: ['Brandenburg Gate', 'Neuschwanstein Castle', 'Berlin Wall'],
        cities: {
          berlin: {
            name: 'Berlin',
            icon: '🏛️',
            facts: [
              { icon: '🎨', title: "Creative and artistic hub" },
              { icon: '🏛️', title: "Historic and modern blend" },
              { icon: '🌍', title: "International community" },
            ],
            universities: [
              {
                name: 'Humboldt University of Berlin',
                image: 'https://www.hu-berlin.de/en/about/history/humboldt-universitaet-zu-berlin-1',
                short: 'Historic university in Berlin',
                details: 'Humboldt University is one of Germany\'s oldest universities, known for its research excellence and historic significance.'
              },
            ]
          },
          munich: {
            name: 'Munich',
            icon: '🏔️',
            facts: [
              { icon: '🏔️', title: "Bavarian culture and heritage" },
              { icon: '🏭', title: "Technology and industry hub" },
              { icon: '🍺', title: "Famous Oktoberfest city" },
            ],
            universities: [
              {
                name: 'Technical University of Munich',
                image: 'https://www.tum.de/en/',
                short: 'Leading technical university',
                details: 'TUM is one of Germany\'s top technical universities, known for engineering and technology excellence.'
              },
            ]
          }
        }
      },
      france: {
        name: 'France',
        icon: '🇫🇷',
        facts: [
          { icon: '🍷', title: 'Rich Culture', details: 'France is known for its art, cuisine, and cultural heritage.' },
          { icon: '🎓', title: 'Prestigious Universities', details: 'Home to some of the world’s top universities and business schools.' },
          { icon: '🏛️', title: 'Historic Landmarks', details: 'Study near iconic sites like the Eiffel Tower and Louvre.' },
        ],
        touristPlaces: ['Eiffel Tower', 'Louvre Museum', 'Mont Saint-Michel'],
        cities: {
          paris: {
            name: 'Paris',
            icon: '🗼',
            facts: [
              { icon: '🎨', title: 'Art and Fashion Capital' },
              { icon: '🏛️', title: 'Historic Universities' },
            ],
            universities: [
              {
                name: 'Sorbonne University',
                image: 'https://www.sorbonne-universite.fr/',
                short: 'Historic university in Paris',
                details: 'Sorbonne University is renowned for its humanities, sciences, and medical programs.'
              },
              {
                name: 'École Polytechnique',
                image: 'https://www.polytechnique.edu/',
                short: 'Top engineering school',
                details: 'École Polytechnique is a leading French institution for science and engineering.'
              }
            ]
          }
        }
      },
      norway: {
        name: 'Norway',
        icon: '🇳🇴',
        facts: [
          { icon: '🌄', title: 'Stunning Nature', details: 'Famous for fjords, mountains, and northern lights.' },
          { icon: '🎓', title: 'Tuition-Free Education', details: 'Many universities offer free education to international students.' },
        ],
        touristPlaces: ['Geirangerfjord', 'Oslo Opera House', 'Northern Lights'],
        cities: {
          oslo: {
            name: 'Oslo',
            icon: '🏙️',
            facts: [
              { icon: '🌲', title: 'Green City' },
              { icon: '🎓', title: 'Academic Hub' },
            ],
            universities: [
              {
                name: 'University of Oslo',
                image: 'https://www.uio.no/',
                short: 'Norway’s largest university',
                details: 'The University of Oslo is known for research and a wide range of academic programs.'
              }
            ]
          }
        }
      },
      russia: {
        name: 'Russia',
        icon: '🇷🇺',
        facts: [
          { icon: '❄️', title: 'Vast Country', details: 'Largest country in the world, spanning Europe and Asia.' },
          { icon: '🎓', title: 'Strong in Science', details: 'Known for excellence in science, engineering, and mathematics.' },
        ],
        touristPlaces: ['Red Square', 'Hermitage Museum', 'Lake Baikal'],
        cities: {
          moscow: {
            name: 'Moscow',
            icon: '🌆',
            facts: [
              { icon: '🏛️', title: 'Cultural and Political Center' },
              { icon: '🎓', title: 'Top Universities' },
            ],
            universities: [
              {
                name: 'Lomonosov Moscow State University',
                image: 'https://www.msu.ru/en/',
                short: 'Top university in Russia',
                details: 'MSU is Russia’s most prestigious university, known for research and academic excellence.'
              }
            ]
          },
          saintPetersburg: {
            name: 'Saint Petersburg',
            icon: '🏰',
            facts: [
              { icon: '🎨', title: 'Historic and Artistic City' },
            ],
            universities: [
              {
                name: 'Saint Petersburg State University',
                image: 'https://english.spbu.ru/',
                short: 'Historic university',
                details: 'One of Russia’s oldest and most prestigious universities.'
              }
            ]
          }
        }
      }
    }
  },
  asia: {
    name: 'Asia',
    icon: '🌏',
    facts: [
      { icon: '🎓', title: "Rapidly growing education sector" },
      { icon: '💼', title: "Emerging job markets" },
      { icon: '🌍', title: "Diverse cultures and traditions" },
      { icon: '💰', title: "Cost-effective education" },
      { icon: '🔬', title: "Technology and innovation hubs" },
      { icon: '🌏', title: "Gateway to Asian markets" },
    ],
    touristPlaces: ['Great Wall of China', 'Taj Mahal', 'Mount Fuji'],
    countries: {
      singapore: {
        name: 'Singapore',
        icon: '🇸🇬',
        facts: [
          { icon: '🏙️', title: "Modern city-state" },
          { icon: '🎓', title: "World-class education" },
          { icon: '💼', title: "Global business hub" },
          { icon: '🌍', title: "Multicultural society" },
          { icon: '🔬', title: "Research and innovation" },
          { icon: '🌏', title: "Gateway to Asia" },
        ],
        touristPlaces: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa Island'],
        cities: {
          singapore: {
            name: 'Singapore',
            icon: '🏙️',
            facts: [
              { icon: '🏙️', title: "Modern metropolis" },
              { icon: '🌍', title: "Global financial center" },
              { icon: '🎓', title: "Educational excellence" },
            ],
            universities: [
              {
                name: 'National University of Singapore (NUS)',
                image: 'https://www.nus.edu.sg/',
                short: 'Top university in Asia',
                details: 'NUS is consistently ranked as one of Asia\'s top universities, known for research excellence and global partnerships.'
              },
              {
                name: 'Nanyang Technological University (NTU)',
                image: 'https://www.ntu.edu.sg/',
                short: 'Leading research university',
                details: 'NTU is known for its innovative research, beautiful campus, and strong industry connections.'
              },
            ]
          }
        }
      },
      japan: {
        name: 'Japan',
        icon: '🇯🇵',
        facts: [
          { icon: '🏯', title: "Rich cultural heritage" },
          { icon: '🔬', title: "Technology innovation leader" },
          { icon: '🎓', title: "High academic standards" },
          { icon: '🏭', title: "Advanced manufacturing" },
          { icon: '🌏', title: "Asian economic powerhouse" },
          { icon: '🎌', title: "Unique cultural experience" },
        ],
        touristPlaces: ['Mount Fuji', 'Tokyo Tower', 'Kyoto Temples'],
        cities: {
          tokyo: {
            name: 'Tokyo',
            icon: '🗼',
            facts: [
              { icon: '🏙️', title: "World's largest metropolis" },
              { icon: '🔬', title: "Technology and innovation hub" },
              { icon: '🎌', title: "Modern and traditional blend" },
            ],
            universities: [
              {
                name: 'University of Tokyo',
                image: 'https://www.u-tokyo.ac.jp/en/',
                short: 'Japan\'s top university',
                details: 'The University of Tokyo is Japan\'s most prestigious university, known for research excellence and academic rigor.'
              },
            ]
          }
        }
      },
      philippines: {
        name: 'Philippines',
        icon: '🇵🇭',
        facts: [
          { icon: '🏝️', title: 'Beautiful Islands', details: 'Known for its stunning beaches and islands.' },
          { icon: '🎓', title: 'English-Taught Programs', details: 'Many universities offer programs in English.' },
        ],
        touristPlaces: ['Boracay', 'Chocolate Hills', 'Mayon Volcano'],
        cities: {
          manila: {
            name: 'Manila',
            icon: '🏙️',
            facts: [
              { icon: '🌆', title: 'Capital City' },
              { icon: '🎓', title: 'Education Hub' },
            ],
            universities: [
              {
                name: 'University of the Philippines',
                image: 'https://up.edu.ph/',
                short: 'Top public university',
                details: 'UP is the national university, known for academic excellence and research.'
              },
              {
                name: 'Ateneo de Manila University',
                image: 'https://www.ateneo.edu/',
                short: 'Leading private university',
                details: 'Ateneo is known for its strong liberal arts and business programs.'
              }
            ]
          }
        }
      },
      malaysia: {
        name: 'Malaysia',
        icon: '🇲🇾',
        facts: [
          { icon: '🌴', title: 'Tropical Climate', details: 'Enjoy year-round warm weather and rainforests.' },
          { icon: '🎓', title: 'Affordable Education', details: 'Malaysia offers quality education at affordable costs.' },
        ],
        touristPlaces: ['Petronas Towers', 'Langkawi', 'Batu Caves'],
        cities: {
          kualaLumpur: {
            name: 'Kuala Lumpur',
            icon: '🏙️',
            facts: [
              { icon: '🌆', title: 'Modern Capital' },
              { icon: '🎓', title: 'Education Hub' },
            ],
            universities: [
              {
                name: 'University of Malaya',
                image: 'https://www.um.edu.my/',
                short: 'Top university in Malaysia',
                details: 'The University of Malaya is Malaysia’s oldest and highest-ranking university.'
              },
              {
                name: 'Taylor’s University',
                image: 'https://university.taylors.edu.my/',
                short: 'Leading private university',
                details: 'Taylor’s University is known for its modern campus and international programs.'
              }
            ]
          }
        }
      },
      china: {
        name: 'China',
        icon: '🇨🇳',
        facts: [
          { icon: '🏯', title: 'Ancient Civilization', details: 'China has a rich history and cultural heritage.' },
          { icon: '🎓', title: 'Top Global Universities', details: 'Home to several universities ranked among the world’s best.' },
        ],
        touristPlaces: ['Great Wall', 'Forbidden City', 'Terracotta Army'],
        cities: {
          beijing: {
            name: 'Beijing',
            icon: '🏯',
            facts: [
              { icon: '🏛️', title: 'Capital City' },
              { icon: '🎓', title: 'Academic Center' },
            ],
            universities: [
              {
                name: 'Peking University',
                image: 'https://english.pku.edu.cn/',
                short: 'Top university in China',
                details: 'Peking University is a leading research university with a beautiful campus.'
              },
              {
                name: 'Tsinghua University',
                image: 'https://www.tsinghua.edu.cn/en/',
                short: 'World-class engineering university',
                details: 'Tsinghua is renowned for science, engineering, and innovation.'
              }
            ]
          },
          shanghai: {
            name: 'Shanghai',
            icon: '🌆',
            facts: [
              { icon: '🏙️', title: 'Global City' },
            ],
            universities: [
              {
                name: 'Fudan University',
                image: 'https://www.fudan.edu.cn/en/',
                short: 'Top university in Shanghai',
                details: 'Fudan University is known for its research, international outlook, and vibrant campus.'
              }
            ]
          }
        }
      },
      uae: {
        name: 'United Arab Emirates',
        icon: '🇦🇪',
        facts: [
          { icon: '🏙️', title: 'Modern Cities', details: 'Home to futuristic cities like Dubai and Abu Dhabi.' },
          { icon: '🎓', title: 'International Campuses', details: 'Many top global universities have campuses in the UAE.' },
        ],
        touristPlaces: ['Burj Khalifa', 'Sheikh Zayed Mosque', 'Palm Jumeirah'],
        cities: {
          dubai: {
            name: 'Dubai',
            icon: '🌆',
            facts: [
              { icon: '🏙️', title: 'Business and Tourism Hub' },
            ],
            universities: [
              {
                name: 'University of Dubai',
                image: 'https://www.ud.ac.ae/',
                short: 'Leading university in Dubai',
                details: 'The University of Dubai is known for business, law, and IT programs.'
              },
              {
                name: 'American University in Dubai',
                image: 'https://www.aud.edu/',
                short: 'International private university',
                details: 'AUD offers American-style education in the heart of Dubai.'
              }
            ]
          },
          abuDhabi: {
            name: 'Abu Dhabi',
            icon: '🏙️',
            facts: [
              { icon: '🏛️', title: 'Cultural Capital' },
            ],
            universities: [
              {
                name: 'Khalifa University',
                image: 'https://www.ku.ac.ae/',
                short: 'Top science and tech university',
                details: 'Khalifa University is a leading institution for science, engineering, and medicine.'
              }
            ]
          }
        }
      }
    }
  },
  australia: {
    name: 'Australia',
    icon: '🦘',
    facts: [
      { icon: '🌊', title: "Beautiful natural landscapes" },
      { icon: '🎓', title: "High quality education" },
      { icon: '🌍', title: "Multicultural society" },
      { icon: '💼', title: "Strong job market" },
      { icon: '🏖️', title: "Excellent quality of life" },
      { icon: '🔬', title: "Research excellence" },
    ],
    touristPlaces: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru'],
    countries: {
      australia: {
        name: 'Australia',
        icon: '🇦🇺',
        facts: [
          { icon: '🦘', title: "Unique wildlife and nature" },
          { icon: '🌊', title: "Beautiful coastlines" },
          { icon: '🎓', title: "World-class universities" },
          { icon: '🌍', title: "Multicultural society" },
          { icon: '💼', title: "Strong economy" },
          { icon: '🏖️', title: "High quality of life" },
        ],
        touristPlaces: ['Sydney Opera House', 'Great Barrier Reef', 'Uluru'],
        cities: {
          sydney: {
            name: 'Sydney',
            icon: '🏙️',
            facts: [
              { icon: '🌉', title: "Iconic Landmarks", details: "Home to the iconic Opera House and Harbour Bridge, Sydney is a city of breathtaking views." },
              { icon: '💼', title: "Economic Hub", details: "As Australia's largest city, Sydney is a major center for finance, business, and tech." },
              { icon: '🏖️', title: "Famous Beaches", details: "Enjoy world-famous beaches like Bondi and Manly, perfect for surfing and relaxing." },
            ],
            universities: [
              {
                name: 'University of Sydney',
                image: 'https://www.sydney.edu.au/content/dam/corporate/images/campus-and-facilities/quadrangle.jpeg',
                short: 'Australia\'s first university',
                details: 'The University of Sydney is a world-renowned institution known for its beautiful campus and research excellence.'
              },
              {
                name: 'University of New South Wales',
                image: 'https://www.unsw.edu.au/',
                short: 'Leading research university',
                details: 'UNSW is known for its research excellence, innovation, and strong industry connections.'
              },
            ]
          },
          melbourne: {
            name: 'Melbourne',
            icon: '🏛️',
            facts: [
              { icon: '🎭', title: "Cultural capital of Australia" },
              { icon: '🏛️', title: "Historic architecture" },
              { icon: '🌍', title: "Most livable city" },
            ],
            universities: [
              {
                name: 'University of Melbourne',
                image: 'https://www.unimelb.edu.au/',
                short: 'Australia\'s top university',
                details: 'The University of Melbourne is consistently ranked as Australia\'s top university, known for research excellence and academic leadership.'
              },
              {
                name: 'Monash University',
                image: 'https://www.monash.edu/',
                short: 'Leading research university',
                details: 'Monash University is known for its research excellence, innovation, and global outlook.'
              },
            ]
          }
        }
      }
    }
  }
};