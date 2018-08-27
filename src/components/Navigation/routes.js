import TrainingPage from '../../components/TrainingPage';
import TestingPage from '../../components/TestingPage';
import VocabularyPage from '../../components/VocabularyPage';
import AuthenticationPage from '../../components/AuthenticationPage';

export const TRAINING_ROUTE = '/';
export const AUTHENTICATION_ROUTE = '/authentication';
export const TESTING_ROUTE = '/testing';
export const VOCABULARY_ROUTE = '/my-vocabulary';

export const routesConfig = [
  { title: 'Training', route: TRAINING_ROUTE, component: TrainingPage },
  { title: 'Testing', route: TESTING_ROUTE, component: TestingPage },
  { title: 'My vocabulary', route: VOCABULARY_ROUTE, component: VocabularyPage },
  { title: 'Authentication', route: AUTHENTICATION_ROUTE, component: AuthenticationPage },
];
