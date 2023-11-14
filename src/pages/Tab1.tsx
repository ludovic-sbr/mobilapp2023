import {IonButton, IonContent, IonPage} from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Tab1.css';

const Tab1: React.FC = () => {
    const takePicture = async () => {
        const image = await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.Uri
        });

        console.log(image.webPath);
    }

  return (
    <IonPage>
        <IonContent>
            <IonButton onClick={() => takePicture()}>Default</IonButton>
        </IonContent>
    </IonPage>
  );
};

export default Tab1;
