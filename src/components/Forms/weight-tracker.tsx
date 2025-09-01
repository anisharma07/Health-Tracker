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

const WeightTrackerForm: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Weight Tracking Log</IonCardTitle>
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
                <IonLabel position="stacked">Time</IonLabel>
                <IonDatetime presentation="time" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Weight</IonLabel>
                <IonInput type="number" placeholder="0.0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Unit</IonLabel>
                <IonSelect value="kg">
                  <IonSelectOption value="kg">Kilograms (kg)</IonSelectOption>
                  <IonSelectOption value="lbs">Pounds (lbs)</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Body Fat %</IonLabel>
                <IonInput type="number" placeholder="0.0" step="0.1" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Muscle Mass %</IonLabel>
                <IonInput type="number" placeholder="0.0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Water %</IonLabel>
                <IonInput type="number" placeholder="0.0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">BMI</IonLabel>
                <IonInput type="number" placeholder="0.0" step="0.1" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Measurement Conditions</IonLabel>
                <IonSelect placeholder="Select condition">
                  <IonSelectOption value="morning-empty">
                    Morning (Empty Stomach)
                  </IonSelectOption>
                  <IonSelectOption value="morning-after-breakfast">
                    Morning (After Breakfast)
                  </IonSelectOption>
                  <IonSelectOption value="evening">Evening</IonSelectOption>
                  <IonSelectOption value="after-workout">
                    After Workout
                  </IonSelectOption>
                  <IonSelectOption value="other">Other</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Notes</IonLabel>
                <IonTextarea placeholder="Any notes about this measurement..." />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary">
                Record Weight
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default WeightTrackerForm;
