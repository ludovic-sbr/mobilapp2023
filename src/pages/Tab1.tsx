import {IonButton, IonContent, IonPage} from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {

    const fetchData = async () => {
        const result = await fetch("https://catfact.ninja/fact");

        console.log(result.json());
    }

  return (
    <IonPage>
        <IonContent>
            <IonButton onClick={() => fetchData()}>Default</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
