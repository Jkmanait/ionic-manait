import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <ion-card>
  <ion-card-header>
    <ion-card-title>ionic Application</ion-card-title>
    <ion-card-subtitle>IT35A</ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    "This is my first ionic Application"
  </ion-card-content>
</ion-card>
  );
};

export default ExploreContainer;
