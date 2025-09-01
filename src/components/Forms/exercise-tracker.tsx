import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonButton,
  IonDatetime,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

const ExerciseTrackerForm: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Exercise Tracking Log</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonGrid>
          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Date</IonLabel>
                <IonDatetime presentation="date" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Workout Type</IonLabel>
                <IonSelect placeholder="Select workout type">
                  <IonSelectOption value="cardio">Cardio</IonSelectOption>
                  <IonSelectOption value="strength">
                    Strength Training
                  </IonSelectOption>
                  <IonSelectOption value="flexibility">
                    Flexibility/Yoga
                  </IonSelectOption>
                  <IonSelectOption value="sports">Sports</IonSelectOption>
                  <IonSelectOption value="other">Other</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="8">
              <IonItem>
                <IonLabel position="stacked">Exercise Name</IonLabel>
                <IonInput placeholder="e.g., Running, Push-ups, Squats" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Duration (minutes)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Sets</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Reps</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Weight (kg)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.5" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Distance (km)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Calories Burned</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Intensity</IonLabel>
                <IonSelect placeholder="Select intensity">
                  <IonSelectOption value="low">Low</IonSelectOption>
                  <IonSelectOption value="moderate">Moderate</IonSelectOption>
                  <IonSelectOption value="high">High</IonSelectOption>
                  <IonSelectOption value="very-high">Very High</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Heart Rate (avg)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Notes</IonLabel>
                <IonTextarea placeholder="How did you feel? Any observations about this workout..." />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary">
                Log Exercise
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default ExerciseTrackerForm;
