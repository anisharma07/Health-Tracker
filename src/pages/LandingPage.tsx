import React from "react";
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
  timeOutline,
  notificationsOutline,
  analyticsOutline,
  cloudOutline,
  shieldCheckmarkOutline,
  arrowForward,
  checkmarkCircle,
} from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./LandingPage.css";

const LandingPage: React.FC = () => {
  const { isDarkMode } = useTheme();
  const history = useHistory();

  const handleGetStarted = () => {
    history.push("/app/editor");
  };

  const features = [
    {
      icon: medicalOutline,
      title: "Medication Management",
      description:
        "Track all your medications, dosages, and schedules in one place",
    },
    {
      icon: timeOutline,
      title: "Smart Reminders",
      description: "Never miss a dose with intelligent notification system",
    },
    {
      icon: analyticsOutline,
      title: "Health Analytics",
      description: "Monitor your medication adherence and health trends",
    },
    {
      icon: cloudOutline,
      title: "Cloud Sync",
      description:
        "Access your data anywhere with secure cloud synchronization",
    },
    {
      icon: shieldCheckmarkOutline,
      title: "Privacy First",
      description: "Your health data is encrypted and completely private",
    },
    {
      icon: notificationsOutline,
      title: "Multi-Platform",
      description: "Available on mobile, tablet, and desktop platforms",
    },
  ];

  const benefits = [
    "Reduce medication errors by up to 80%",
    "Improve treatment adherence",
    "Share reports with healthcare providers",
    "Track side effects and symptoms",
    "Manage multiple family members",
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>MedTracker Pro</IonTitle>
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
                    <IonIcon icon={medicalOutline} />
                  </div>
                  <h1 className="hero-title">
                    Take Control of Your
                    <span className="highlight"> Medication Journey</span>
                  </h1>
                  <p className="hero-subtitle">
                    A comprehensive platform to track, manage, and optimize your
                    medication routine. Built for patients, caregivers, and
                    healthcare professionals.
                  </p>
                  <div className="cta-buttons">
                    <IonButton
                      expand="block"
                      size="large"
                      className="primary-cta"
                      onClick={handleGetStarted}
                    >
                      Get Started Free
                      <IonIcon icon={arrowForward} slot="end" />
                    </IonButton>
                    <IonText className="trial-text">
                      <small>No credit card required • 30-day free trial</small>
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
                  <h2>Powerful Features for Better Health Management</h2>
                  <p>
                    Everything you need to stay on top of your medication
                    regimen
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
                  <h2>Why Choose MedTracker Pro?</h2>
                  <p className="benefits-intro">
                    Join thousands of users who have improved their medication
                    management and health outcomes with our platform.
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
                    <h3>50K+</h3>
                    <p>Active Users</p>
                  </div>
                  <div className="stat-card">
                    <h3>99.9%</h3>
                    <p>Uptime</p>
                  </div>
                  <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Support</p>
                  </div>
                  <div className="stat-card">
                    <h3>4.9★</h3>
                    <p>User Rating</p>
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
                    <h2>Ready to Transform Your Health Management?</h2>
                    <p>
                      Start your free trial today and experience the difference
                      organized medication tracking can make.
                    </p>
                    <IonButton
                      expand="block"
                      size="large"
                      className="cta-button"
                      onClick={handleGetStarted}
                    >
                      Start Free Trial
                      <IonIcon icon={arrowForward} slot="end" />
                    </IonButton>
                    <div className="feature-chips">
                      <IonChip>Free 30-day trial</IonChip>
                      <IonChip>No setup fees</IonChip>
                      <IonChip>Cancel anytime</IonChip>
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
