import {AnimationObject} from 'lottie-react-native';

export interface OnboardingData {
  id: number;
  animation: AnimationObject;
  text: string;
  textColor: string;
  backgroundColor: string;
}

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../assets/animations/Intractive.json'),
    text: 'The UI fosters positive user engagement.',
    textColor: '#005b4f',
    backgroundColor: '#E1FFAF',
  },
  {
    id: 2,
    animation: require('../assets//animations/RockStar.json'),
    text: 'Express your artistic side using AI.',
    textColor: '#1e2169',
    backgroundColor: '#C6CCFE',
  },
  {
    id: 3,
    animation: require('../assets//animations/Cat_Chilling.json'),
    text: 'Share your image, react to others, and chill.',
    textColor: '#F15937',
    backgroundColor: '#FFF1A3',
  },
];

export default data;