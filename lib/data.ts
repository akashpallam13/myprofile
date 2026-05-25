export type Project = {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  features: string[];
  badges: string[];
  repo: string;
  live: string;
  architecture: string[];
  preview: string;
};

export const data = {
  stats: [
    { label: 'Projects Built', value: '18+' },
    { label: 'Technologies', value: '45+' },
    { label: 'Research Areas', value: '6' },
    { label: 'Certifications', value: '8+' },
  ],
  projects: [
    {
      title: 'SignAR AI',
      subtitle: 'Real-Time Sign Language Translation using AI, Unity & AR',
      category: 'XR',
      description: 'An AI-powered accessibility platform converting speech into animated sign language avatars with real-time Unity retargeting and AR placement.',
      features: [
        'Speech-to-sign pipeline',
        'Whisper AI transcription',
        'AR avatar placement',
        'Unity Sentis pose inference',
        'VRM humanoid animation',
        'JSON pose retargeting',
        'Accessibility AI experience',
      ],
      badges: ['Unity', 'Sentis', 'FastAPI', 'Whisper', 'AR Foundation', 'VRM', 'OpenPose', 'MediaPipe'],
      repo: 'https://github.com/akashpallam/signar-ai',
      live: 'https://signar-ai.example.com',
      architecture: [
        'Speech capture → Whisper transcription API',
        'Pose estimation via Sentis / MediaPipe',
        'VRM avatar mapping with JSON retargeting',
        'AR Foundation overlay in Unity scenes',
      ],
      preview: '3D holographic sign language visualization with avatar flow',
    },
    {
      title: 'License Plate Recognition System',
      subtitle: 'High-speed vehicle identification for secure access and logistics.',
      category: 'Vision',
      description: 'A production-ready plate recognition stack combining detection, OCR, and edge-ready inference for robust real-time deployment.',
      features: ['Multi-camera feed processing', 'YOLO-based detection', 'OCR inference', 'API-driven reporting', 'Low-latency pipeline'],
      badges: ['Python', 'OpenCV', 'TensorFlow', 'FastAPI', 'Docker'],
      repo: 'https://github.com/akashpallam/lpr-system',
      live: 'https://lpr.example.com',
      architecture: ['Camera capture layer', 'Preprocessing + ROI extraction', 'Detection & OCR inference', 'API ingestion and dashboard analytics'],
      preview: 'Live license recognition pipeline with dashboard insights',
    },
    {
      title: 'Semiconductor Yield Predictor',
      subtitle: 'Predictive analytics for semiconductor manufacturing yield optimization.',
      category: 'AI',
      description: 'A machine learning solution delivering explainable yield predictions and anomaly detection for high-value fabrication data.',
      features: ['Feature engineering', 'Time-series modeling', 'Explainability', 'Production monitoring'],
      badges: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit', 'AWS'],
      repo: 'https://github.com/akashpallam/yield-predictor',
      live: 'https://yield-predictor.example.com',
      architecture: ['Data ingestion', 'Feature pipeline', 'Model training / validation', 'Dashboard & alerting'],
      preview: 'Predictive yield dashboard with anomaly detection insights',
    },
    {
      title: 'Face Emotion Detection',
      subtitle: 'Real-time emotion recognition for human-centered XR experiences.',
      category: 'Vision',
      description: 'A computer vision system that detects facial affect and feeds emotion states into adaptive XR interactions.',
      features: ['Real-time webcam analysis', 'Facial landmark tracking', 'Emotion classification', 'Adaptive interface'],
      badges: ['Python', 'MediaPipe', 'PyTorch', 'OpenCV', 'UI/UX'],
      repo: 'https://github.com/akashpallam/emotion-detection',
      live: 'https://emotion-ui.example.com',
      architecture: ['Video capture', 'Facial landmark extraction', 'Emotion inference', 'Adaptive response engine'],
      preview: 'Emotion-aware XR interface with visual analytics',
    },
    {
      title: 'Crime Prediction ML',
      subtitle: 'Data-driven insights for predictive safety and policing strategies.',
      category: 'AI',
      description: 'A machine learning research project modeling crime risk from spatial, temporal, and socioeconomic factors.',
      features: ['Feature synthesis', 'Spatial modeling', 'Model evaluation', 'Interactive insights dashboard'],
      badges: ['Python', 'Pandas', 'XGBoost', 'GIS', 'Flask'],
      repo: 'https://github.com/akashpallam/crime-predictor',
      live: 'https://crime-insights.example.com',
      architecture: ['Data aggregation', 'Spatial feature generation', 'Predictive model training', 'Interactive reporting'],
      preview: 'Crime risk analytics with research-backed feature exploration',
    },
  ],
  researchHighlights: [
    {
      title: 'Unity MR Test Engineering',
      description: 'Immersive testing, motion sickness analysis, and runtime optimization for research-grade XR experiences.',
    },
    {
      title: 'Performance & Usability',
      description: 'Frame-rate management, device-specific profiling, and perceptual design for sustained comfort.',
    },
    {
      title: 'Accessibility Research',
      description: 'Evidence-based assistive systems that connect AI perception with inclusive interfaces.',
    },
  ],
  timeline: [
    {
      year: '2026· IIT Hyderabad Training',
      title: 'AR/VR Test Engineer & Unity Developer','Unity Sentis & AR Foundation',
      description: 'Gained practical experience in XR systems, hardware validation, and immersive environment evaluation at IIT Hyderabad. * Worked on avatar retargeting, AR-based sign language integration, and real-time perception research.' ,
    },
    {
      year: '2025',
      title: 'Data Science & Machine Learning Trainee.',
      description: 'Completed hands-on training in Python, Data science, and Machine Learning • Worked on real-world datasets for classification and prediction problems • Implemented ML algorithms including Linear Regression, Decision Trees, Random Forest, and SVM • Performed data cleaning, feature selection, and model evaluation and model tunning • Applied concepts through projects such as Semiconductor Manufacturing Yield Prediction Process..',
    },
    {
      year: '2024· AI Accessibility Lab',
      title: 'Speech-to-gesture research',
      description: '',
    },
  ],
  skillCategories: [
    {
      title: 'AI / ML',
      description: 'Modeling, vision, NLP, and applied research systems.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Computer Vision', 'NLP'],
    },
    {
      title: 'XR / AR',
      description: 'Immersive development with Unity, AR tooling, and runtime systems.',
      skills: ['Unity', 'AR Foundation', 'XR Toolkit', 'Sentis', 'C#'],
    },
    {
      title: 'Backend',
      description: 'API engineering, data services, and inference architecture.',
      skills: ['FastAPI', 'APIs', 'SQLite', 'MySQL', 'MongoDB'],
    },
    {
      title: 'Cloud',
      description: 'Scalable compute and edge deployment for AI and XR services.',
      skills: ['AWS', 'EC2', 'Lambda', 'S3'],
    },
  ],
  certifications: [
    { provider: 'AWS', title: 'Cloud Practitioner', note: 'Foundational cloud certification for modern infrastructure.' },
    { provider: 'IIT Hyderabad', title: 'AR/VR Training', note: 'Applied XR engineering and immersive test course.' },
    { provider: 'Infosys Springboard', title: 'Professional Development', note: 'Structured training in software and research workflows.' },
    { provider: 'Cisco', title: 'Networking Fundamentals', note: 'Core networking principles for distributed AI systems.' },
    { provider: 'Python', title: 'Advanced Programming', note: 'Deep knowledge of Python for AI, automation, and tooling.' },
  ],
  achievements: [
    { category: 'Recognition', title: 'Smart India Hackathon Shortlisted', description: 'Selected among elite teams for an AI + accessibility innovation challenge.' },
    { category: 'Training', title: 'IIT Hyderabad AR/VR Program', description: 'Completed an advanced immersive systems lab with research emphasis.' },
    { category: 'Research', title: 'Applied XR and Vision Projects', description: 'Delivered cross-disciplinary projects combining AI, Unity, and assistive interaction.' },
  ],
};
