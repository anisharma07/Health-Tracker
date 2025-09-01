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

const DietLoggingForm: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Daily Diet Log</IonCardTitle>
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
                <IonLabel position="stacked">Meal Type</IonLabel>
                <IonSelect placeholder="Select Meal">
                  <IonSelectOption value="breakfast">Breakfast</IonSelectOption>
                  <IonSelectOption value="lunch">Lunch</IonSelectOption>
                  <IonSelectOption value="dinner">Dinner</IonSelectOption>
                  <IonSelectOption value="snack">Snack</IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="8">
              <IonItem>
                <IonLabel position="stacked">Food Item</IonLabel>
                <IonInput placeholder="e.g., Grilled Chicken Breast" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Quantity</IonLabel>
                <IonInput placeholder="e.g., 100g" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Calories</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Protein (g)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Carbs (g)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Fat (g)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Notes</IonLabel>
                <IonTextarea placeholder="Any additional notes about this meal..." />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary">
                Log Meal
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default DietLoggingForm;
