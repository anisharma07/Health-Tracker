import React, { useEffect } from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonText,
  IonChip,
} from "@ionic/react";
import {
  medicalOutline,
  scaleOutline,
  nutritionOutline,
  analyticsOutline,
  calendarOutline,
  shieldCheckmarkOutline,
  arrowForward,
  checkmarkCircle,
  heartOutline,
  timeOutline,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
// import { cloudService } from "../services/cloud-service";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const history = useHistory();

  // Check authentication status on component mount
  useEffect(() => {
    // if (cloudService.isAuthenticated()) {
    //   history.push("/app/editor");
    // }
  }, [history]);

  const handleGetStarted = () => {
    history.push("/app/editor");
  };

  const features = [
    {
      icon: medicalOutline,
      title: "Medication Tracking",
      description:
        "Track medications, dosages, and schedules with smart reminders and alerts",
    },
    {
      icon: scaleOutline,
      title: "Weight Monitoring",
      description:
        "Monitor weight progress with goal tracking and visual charts",
    },
    {
      icon: nutritionOutline,
      title: "Diet Management",
      description: "Log meals, track calories, and monitor nutritional intake",
    },
    {
      icon: analyticsOutline,
      title: "Health Analytics",
      description: "Comprehensive insights and trends for your health data",
    },
    {
      icon: calendarOutline,
      title: "Schedule Management",
      description:
        "Organize medication schedules and health appointments efficiently",
    },
    {
      icon: heartOutline,
      title: "Health Goals",
      description: "Set and track personalized health and wellness goals",
    },
  ];

  const benefits = [
    "Track medications with 95% adherence improvement",
    "Monitor weight progress with visual goal tracking",
    "Log daily nutrition and dietary habits",
    "Generate comprehensive health reports",
    "Set personalized health and wellness goals",
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Health & Wellness Tracker</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className={`landing-page ${isDarkMode ? "dark" : "light"}`}>
        {/* Hero Section */}
        <div className="hero-section">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8" sizeLg="6">
                <div className="hero-content">
                  <div className="hero-icon">
                    <IonIcon icon={heartOutline} />
                  </div>
                  <h1 className="hero-title">
                    Take Control of Your
                    <span className="highlight"> Health Journey</span>
                  </h1>
                  <p className="hero-subtitle">
                    A comprehensive health tracking solution designed to help
                    you monitor medications, track weight progress, and manage
                    your diet. Stay on top of your wellness goals with ease.
                  </p>
                  <div className="cta-buttons">
                    <IonButton
                      expand="block"
                      size="large"
                      className="primary-cta"
                      onClick={handleGetStarted}
                    >
                      Start Health Tracking
                      <IonIcon icon={arrowForward} slot="end" />
                    </IonButton>
                    <IonText className="trial-text">
                      <small>Secure • Private • Easy to Use</small>
                    </IonText>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* Features Section */}
        <div className="features-section">
          <IonGrid>
            <IonRow>
              <IonCol size="12">
                <div className="section-header">
                  <h2>Complete Health Management Suite</h2>
                  <p>
                    Everything you need to track and improve your health and
                    wellness journey
                  </p>
                </div>
              </IonCol>
            </IonRow>
            <IonRow>
              {features.map((feature, index) => (
                <IonCol key={index} size="12" sizeMd="6" sizeLg="4">
                  <IonCard className="feature-card">
                    <IonCardContent>
                      <div className="feature-icon">
                        <IonIcon icon={feature.icon} />
                      </div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <IonGrid>
            <IonRow className="ion-align-items-center">
              <IonCol size="12" sizeLg="6">
                <div className="benefits-content">
                  <h2>Why Choose Our Health Tracking Platform?</h2>
                  <p className="benefits-intro">
                    Join thousands of users who have transformed their health
                    habits with our comprehensive, easy-to-use tracking
                    platform.
                  </p>
                  <div className="benefits-list">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="benefit-item">
                        <IonIcon icon={checkmarkCircle} />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </IonCol>
              <IonCol size="12" sizeLg="6">
                <div className="stats-grid">
                  <div className="stat-card">
                    <h3>10K+</h3>
                    <p>Active Users</p>
                  </div>
                  <div className="stat-card">
                    <h3>95%</h3>
                    <p>Medication Adherence</p>
                  </div>
                  <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Health Tracking</p>
                  </div>
                  <div className="stat-card">
                    <h3>100%</h3>
                    <p>Privacy Protected</p>
                  </div>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="8">
                <IonCard className="cta-card">
                  <IonCardContent>
                    <h2>Ready to Transform Your Health Journey?</h2>
                    <p>
                      Start tracking your medications, weight, and diet today
                      with our comprehensive health management platform.
                    </p>
                    <IonButton
                      expand="block"
                      size="large"
                      className="cta-button"
                      onClick={handleGetStarted}
                    >
                      Access Health Tracker
                      <IonIcon icon={arrowForward} slot="end" />
                    </IonButton>
                    <div className="feature-chips">
                      <IonChip>Medication Reminders</IonChip>
                      <IonChip>Weight Tracking</IonChip>
                      <IonChip>Diet Management</IonChip>
                    </div>
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default LandingPage;
