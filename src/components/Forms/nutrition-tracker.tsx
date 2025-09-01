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
  IonNote,
} from "@ionic/react";

const NutritionTrackerForm: React.FC = () => {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Nutrition Tracking</IonCardTitle>
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
                <IonLabel position="stacked">Food Item</IonLabel>
                <IonInput placeholder="e.g., Banana, Chicken Breast" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonNote color="medium">
                <h6>Macronutrients (per serving)</h6>
              </IonNote>
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
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Carbs (g)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="3">
              <IonItem>
                <IonLabel position="stacked">Fat (g)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonNote color="medium">
                <h6>Micronutrients & Minerals</h6>
              </IonNote>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Fiber (g)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Sugar (g)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Sodium (mg)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Vitamin C (mg)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Calcium (mg)</IonLabel>
                <IonInput type="number" placeholder="0" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="4">
              <IonItem>
                <IonLabel position="stacked">Iron (mg)</IonLabel>
                <IonInput type="number" placeholder="0" step="0.1" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Serving Size</IonLabel>
                <IonInput placeholder="e.g., 1 medium, 100g, 1 cup" />
              </IonItem>
            </IonCol>
            <IonCol size="12" sizeMd="6">
              <IonItem>
                <IonLabel position="stacked">Number of Servings</IonLabel>
                <IonInput type="number" placeholder="1" step="0.5" />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Meal Category</IonLabel>
                <IonSelect placeholder="Select category">
                  <IonSelectOption value="breakfast">Breakfast</IonSelectOption>
                  <IonSelectOption value="lunch">Lunch</IonSelectOption>
                  <IonSelectOption value="dinner">Dinner</IonSelectOption>
                  <IonSelectOption value="snack">Snack</IonSelectOption>
                  <IonSelectOption value="supplement">
                    Supplement
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonItem>
                <IonLabel position="stacked">Notes</IonLabel>
                <IonTextarea placeholder="Brand, preparation method, or other notes..." />
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12">
              <IonButton expand="block" color="primary">
                Log Nutrition
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonCardContent>
    </IonCard>
  );
};

export default NutritionTrackerForm;
