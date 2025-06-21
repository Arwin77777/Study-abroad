export const countryStudyData = {
  usa: {
    name: 'USA',
    facts: [
      {
        image: 'https://www.harvard.edu/wp-content/uploads/2020/09/harvard-yard-1-1600x900.jpg',
        title: "World's most popular international student destination.",
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Lower_Manhattan_skyline_-_June_2017.jpg',
        title: "New York is world's financial capital (with London).",
      },
      {
        image: 'https://mitadmissions.org/wp-content/uploads/2018/08/mit-dome.jpg',
        title: <><span className='font-bold text-2xl'>948,519+</span><br/>International students studying in the United States.</>,
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Nobel_Prize.png',
        title: <><span className='font-bold text-2xl'>Nobel Laureates Prize Winners</span><br />Largest number in the world.</>,
      },
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Wall_Street_Sign_NYC.jpg',
        title: <>World's Largest<br />economy</>,
      },
      {
        image: 'https://www.cmu.edu/news/stories/archives/2022/august/images/cmu-campus-1600x900.jpg',
        title: <>124 of Fortune 500 companies<br />are from USA</>,
      },
    ],
    universities: [
      // ... (copy the USA universities array from StudyInUSA.jsx)
    ]
  },
  uk: {
    name: 'United Kingdom',
    facts: [
      {
        image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/radcliffe_camera_oxford.jpg',
        title: "Home to some of the world's oldest universities.",
      },
      {
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/2021/10/21/king%27s_college_chapel_and_the_river_cam.jpg',
        title: "Rich academic tradition and global reputation.",
      },
      {
        image: 'https://www.london.ac.uk/sites/default/files/styles/hero_image/public/2020-10/london-skyline.jpg',
        title: "London is a global financial and cultural hub.",
      },
    ],
    universities: [
      {
        name: 'University of Oxford',
        image: 'https://www.ox.ac.uk/sites/files/oxford/styles/ow_medium_feature/s3/field/field_image_main/radcliffe_camera_oxford.jpg',
        short: 'Oldest university in the English-speaking world.',
        details: 'The University of Oxford is renowned for its historic colleges, world-class research, and academic excellence.'
      },
      {
        name: 'University of Cambridge',
        image: 'https://www.cam.ac.uk/sites/www.cam.ac.uk/files/styles/content-885x432/public/news/research/news/2021/10/21/king%27s_college_chapel_and_the_river_cam.jpg',
        short: 'Prestigious university with a rich history.',
        details: 'The University of Cambridge is known for its beautiful campus, Nobel laureates, and global impact.'
      },
      {
        name: 'Imperial College London',
        image: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1627297669642_mainnews2012_x1.jpg',
        short: 'Top science, engineering, and medicine university.',
        details: 'Imperial College London is a leader in STEM education and research.'
      },
    ]
  },
  canada: {
    name: 'Canada',
    facts: [
      {
        image: 'https://www.utoronto.ca/sites/default/files/styles/hero_image/public/2019-10/uoft-hero-1.jpg',
        title: "Diverse and welcoming environment for students.",
      },
      {
        image: 'https://www.mcgill.ca/newsroom/files/newsroom/styles/slider_full/public/hero_images/2019-10/mcgill-campus.jpg',
        title: "High quality of life and education.",
      },
      {
        image: 'https://www.ubc.ca/_assets/img/ubc-campus.jpg',
        title: "Stunning natural landscapes and vibrant cities.",
      },
    ],
    universities: [
      {
        name: 'University of Toronto',
        image: 'https://www.utoronto.ca/sites/default/files/styles/hero_image/public/2019-10/uoft-hero-1.jpg',
        short: 'Canada\'s top-ranked university.',
        details: 'The University of Toronto is known for its research, diverse student body, and beautiful campus.'
      },
      {
        name: 'McGill University',
        image: 'https://www.mcgill.ca/newsroom/files/newsroom/styles/slider_full/public/hero_images/2019-10/mcgill-campus.jpg',
        short: 'Leading university in Montreal.',
        details: 'McGill University is recognized for its academic excellence and vibrant student life.'
      },
      {
        name: 'University of British Columbia',
        image: 'https://www.ubc.ca/_assets/img/ubc-campus.jpg',
        short: 'Top university in Vancouver.',
        details: 'UBC is known for its beautiful campus and strong research programs.'
      },
    ]
  },
}; 