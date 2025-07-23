# Med-Tracker

A comprehensive health and wellness tracking application built with Ionic React and integrated with SocialCalc for powerful data visualization and spreadsheet functionality.

## 📋 Overview

Med-Tracker is a multi-purpose health management application that enables users to track their medications, exercise routines, diet, and overall health metrics. The application leverages SocialCalc's spreadsheet engine to provide robust data visualization and analysis capabilities.

## 🎯 Key Features

### 📊 Health Tracking Modules

- **Weight Tracker**: Monitor weight progress with goal tracking and variance calculations
- **Exercise Log**: Record workout sessions with duration and calories burned
- **Diet Journal**: Weekly meal planning and satisfaction tracking
- **Medication Tracker**: Manage prescriptions, dosages, and schedules
- **Patient Logs**: Comprehensive health record management

### 📈 Data Visualization

- **SocialCalc Integration**: Powerful spreadsheet engine for data analysis
- **Interactive Charts**: Visual representation of health trends
- **Goal Progress Tracking**: Monitor progress towards health objectives
- **Historical Data Analysis**: Track long-term health patterns

### 💾 Data Management

- **Local Storage**: Secure data storage with quota management
- **Export Capabilities**: Export data as PDF and CSV formats
- **Cloud Integration**: Optional cloud backup and synchronization
- **File Management**: Organize and manage health records

## 🛠️ Technology Stack

- **Frontend**: Ionic React with TypeScript
- **Spreadsheet Engine**: SocialCalc for data processing and visualization
- **Build Tool**: Vite for fast development and building
- **Containerization**: Docker with multi-environment support
- **Styling**: Ionic components with custom CSS
- **PWA Support**: Progressive Web App capabilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Docker and Docker Compose (for containerized development)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/anisharma07/Med-Tracker.git
   cd Med-Tracker
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

### Docker Development

For a consistent development environment, use Docker:

```bash
# Start with Alpine Node.js (lightweight)
docker-compose --profile dev up

# Start with full Node.js (recommended for complex builds)
docker-compose --profile dev-full up
```

The application will be available at:

- **Local**: http://localhost:5173/
- **Network**: http://172.18.0.2:5173/ (Docker)

## 📱 Features in Detail

### Weight Tracker

- Daily weight entry with automatic goal calculation
- Progress visualization with charts
- Goal setting and tracking
- Historical weight trends

### Exercise Log

- Workout session recording
- Duration and calorie tracking
- Exercise type categorization
- Performance analytics

### Diet Journal

- Weekly meal planning
- Satisfaction rating system
- Nutritional tracking
- Meal history and patterns

### Medication Management

- Prescription tracking
- Dosage reminders
- Medication schedules
- Interaction warnings

## 🏗️ Project Structure

```
Med-Tracker/
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── socialcalc/    # SocialCalc integration
│   │   ├── Files/         # File management
│   │   └── Storage/       # Data storage components
│   ├── pages/             # Main application pages
│   ├── services/          # Business logic and APIs
│   ├── contexts/          # React contexts for state management
│   └── utils/             # Helper utilities
├── public/                # Static assets
├── docker-compose.yml     # Docker configuration
└── docs/                  # Documentation files
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests

### Docker Profiles

- `dev` - Alpine Node.js development
- `dev-full` - Full Node.js development (recommended)
- `prod` - Production Alpine build
- `prod-full` - Production full build

## 📊 SocialCalc Integration

The application uses SocialCalc for advanced spreadsheet functionality:

- **Data Analysis**: Complex calculations and formulas
- **Visualization**: Charts and graphs for health metrics
- **Export Options**: Multiple format support (PDF, CSV, Excel)
- **Real-time Updates**: Live data synchronization

## 🔐 Privacy & Security

- All health data is stored locally by default
- Optional cloud backup with encryption
- HIPAA-compliant data handling practices
- Secure authentication for cloud features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ionic Team** for the excellent mobile framework
- **SocialCalc** for the powerful spreadsheet engine
- **Vite** for fast build tooling
- **Docker** for containerization support

## 📞 Support

For support and questions:

- Create an issue on GitHub
- Check the documentation in the `/docs` folder
- Review Docker troubleshooting in `DOCKER.md`

---

Built with ❤️ using Ionic React and SocialCalc
