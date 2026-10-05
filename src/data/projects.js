// EDIT ME: add or change projects here. Screenshots go in public/projects/.
// Only write what you really built. Empty strings ('') hide the GitHub / Live buttons.
export const projects = [
  {
    slug: 'Food Redistribution System',
    featured: true,
    name: 'Zero Waste',
    category: 'AI / Sustainability',
    tagline: 'AI-powered smart surplus food redistribution and waste reduction',
    description: 'Designed a platform to help identify and redistribute surplus and near-expiry food from businesses to organizations in need. The system focuses on reducing food waste through digital coordination and intelligent food management',
    image: '/projects/foodshare.jpeg',
    tech: ['Java', 'Spring Boot', 'MongoDB', 'React', 'AI/ML',  'Role:Frontend Developer, Backend Developer ' ],
    github: '', live: '',
    problem: 'Large amounts of reusable materials are thrown away every day because people and organizations often have no simple way to share unwanted items with others who need them.',
    solution: 'A web platform that connects people who have reusable items with people who need them, helping reduce unnecessary waste and giving useful items a second life.',
    features: ['Create and browse item listings for sharing or giving away', 'Search and filter listings by category, location, and availability', 'Communicate with other users through messaging or contact information', 'Receive notifications for new listings or updates on items of interest'],
    contribution: 'I contributed to the design and development of the web application, including frontend interface development, user flows, item listing and management features, and integrating the different parts of the system to provide a smooth user experience.',
    challenges: 'One of the main challenges was designing a simple user flow that could support different types of users while keeping the platform easy to use. Another challenge was managing item availability and user requests without making the interface unnecessarily complicated.',
    learned: 'I improved my skills in building full-stack web applications, designing user-friendly interfaces, managing application data, and working with different features as part of a team. I also learned how to design software around a real-world problem and focus on creating a practical solution rather than just implementing technical features.',
  },
  {
    slug: 'Reshare Platform',
    name: 'ReShare',
    category: 'Community platform',
    tagline: 'Localized resource sharing & sustainability hub',
    description: 'A platform idea for sharing resources locally and reducing waste.',
    image: '/projects/reshare.png',
    tech: ['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js'],
    github: 'https://github.com/samudinipremachandra/reshare-app.git',
    live: '',
    problem: 'People often have unused items at home but lack a simple and trusted way to share them with others who need them.',
    solution: 'A community-based web platform that connects people who have reusable items with people who need them, helping reduce waste and give unused items a second life.',
    features: [
      'Search and filter available items',
      'Request items for borrowing or sharing',
      'User authentication and profile management',
      'Need Board for posting required items',
      'Notifications for requests and updates',
      'Location-based item discovery',
      'Sustainability-focused sharing dashboard',
    ],
    contribution: 'Contributed to the frontend development, user interface design, item listing and request flows, and integration of key application features.',
    challenges: 'Designing a simple user experience for different sharing scenarios while managing item availability, requests, and user interactions.',
    learned: 'Improved my skills in React-based web development, API integration, user-focused UI design, and building practical solutions for real-world sustainability problems.',
  },
  {
    slug: 'caresync',
    name: 'CareSync',
    category: 'MERN Stack',
    tagline: 'Hospital / patient management dashboard',
    description: 'A modern hospital patient dashboard designed to simplify patient management and improve communication between healthcare professionals and patients.',
    image: '/projects/caresync.png',
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JWT', 'Tailwind CSS'],
    github: 'https://lnkd.in/gaNEDKkV',
    live: '',
    problem: 'Traditional healthcare management can involve scattered patient information, difficult appointment tracking, and inefficient communication between patients and healthcare staff.',
    solution: 'CareSync brings essential hospital management activities into a single responsive dashboard, making patient information, appointments, medical records, and doctor interactions easier to manage.',
    features: [
      'Patient management',
      'Doctor dashboard',
      'Appointment scheduling',
      'Medical records management',
      'Secure authentication',
      'Responsive healthcare dashboard',
      'Real-time health monitoring',
    ],
    contribution: 'Designed and developed the frontend dashboard using React and Vite, implemented routing and reusable UI components, and worked on REST API integration, authentication, and MongoDB-based data management.',
    challenges: 'Designing a healthcare interface that is simple and easy to navigate while handling authentication, multiple user-related views, API communication, and structured patient data.',
    learned: 'Strengthened my skills in React application development, REST APIs, MongoDB with Mongoose, authentication, responsive UI design, and building user-focused dashboard interfaces.',
  },
  {
    slug: 'Smartfiles platform',
    name: 'SmartFiles',
    category: 'Full-Stack / AI',
    tagline: 'AI-powered file management assistant',
    description: 'SmartFiles is a full-stack file management assistant that combines everyday file management with AI-powered organization suggestions and user-controlled automation.',
    image: '/projects/smartfile.png',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js','express.js', 'Python'],
    github: 'https://lnkd.in/gKen8TUn',
    live: '',
    problem: 'Managing and organizing large volumes of files can be time-consuming and inefficient, leading to lost or misplaced documents.',
    solution: 'SmartFiles leverages AI to provide intelligent file organization, automated categorization, and seamless integration with existing file systems.',
    features: [
      'AI-powered file organization',
      'User-controlled automation',
      'Intuitive file search',
      'Cross-platform compatibility',
    ],
    contribution: 'Contributed to the development of the AI-driven file organization features and the integration of Python-based machine learning models with the React frontend.',
    challenges: 'Implementing effective AI algorithms for file categorization while ensuring data privacy and maintaining a user-friendly interface.',
    learned: 'Enhanced my skills in full-stack development, AI integration, Python programming, and creating seamless user experiences for complex applications.',
  },
{
    slug: 'hand-gesture-game-controller',
name: 'Hand Gesture Game Controller',
category: 'Python / Computer Vision',
tagline: 'Real-time hand gesture-based game controller',
description: 'A real-time computer vision application that transforms hand gestures into keyboard inputs, allowing users to control games using intuitive hand movements.',

image: '/projects/hand-gesture.png',

tech: ['Python', 'OpenCV', 'MediaPipe', 'PyAutoGUI', 'Git & GitHub'],

github: 'https://lnkd.in/gTzUWBfw',
live: '',

problem: 'Traditional game controllers require physical interaction with a keyboard or controller, limiting more natural and interactive ways to control games.',

solution: 'The system uses computer vision and hand landmark detection to recognize predefined hand gestures and convert them into keyboard inputs for real-time game control.',

features: [
'Real-time hand gesture detection',
'Hand landmark tracking using MediaPipe',
'Gesture recognition for Jump, Slide, Turn Left, and Turn Right',
'Automatic conversion of gestures into keyboard inputs',
'Real-time camera-based interaction',
'Coordinate-based gesture decision making'
],

contribution: 'Designed and developed the Python application, including hand landmark detection, gesture recognition, coordinate-based decision making, and keyboard input automation.',

challenges: 'Accurately detecting different hand gestures in real time and converting changing hand positions into reliable game controls without unwanted or repeated inputs.',

learned: 'Gained hands-on experience in real-time computer vision, hand landmark detection, gesture recognition, Human–Computer Interaction (HCI), coordinate-based decision making, and Object-Oriented Programming (OOP).'

  },
  {

    slug: 'autonomous-threat-detection',
name: 'Autonomous Real-Time Threat Detection & Automated Security Alert System',
category: 'AI / Computer Vision',
tagline: 'Real-time weapon detection and automated security alert system',
description: 'An end-to-end computer vision system that detects potential weapon threats from real-time video streams, captures forensic evidence, and triggers automated audible security alerts.',

image: '/projects/threat-detection.png',

tech: ['Python', 'YOLOv8', 'OpenCV', 'Ultralytics', 'Computer Vision'],

github: 'https://lnkd.in/gR7KzjwK',
live: '',

problem: 'Traditional CCTV surveillance mainly relies on human monitoring, which can delay the identification and response to potential security threats.',

solution: 'A real-time computer vision pipeline that automatically detects weapon threats in video streams, captures evidence, and triggers immediate audible alerts to support faster security response.',

features: [
'Real-time weapon detection using YOLOv8',
'Live camera stream processing with OpenCV',
'Automated audible security alerts',
'Automatic detection snapshot logging',
'Timestamped forensic evidence',
'Cooldown mechanism to prevent repeated evidence logging',
'Optimized real-time detection pipeline'
],

contribution: 'Developed the computer vision pipeline, fine-tuned the YOLOv8 detection model, implemented real-time video processing, automated snapshot logging, and designed the non-blocking alert mechanism.',

challenges: 'Maintaining real-time detection performance while processing continuous video frames and triggering alerts without freezing the camera stream was a key challenge. Reducing repeated detections and unnecessary evidence logs also required careful handling.',

learned: 'Gained practical experience in YOLO-based object detection, real-time computer vision, OpenCV video processing, model optimization, Python multithreading, automated evidence logging, and building AI systems for real-world applications.'


  }
]
