import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonCard>
    <IonCardHeader>
      <IonCardTitle>ionic Application</IonCardTitle>
      <IonCardSubtitle>IT35A</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>This is my first ionic Application</IonCardContent>
  </IonCard>
  );
};

export default ExploreContainer;
