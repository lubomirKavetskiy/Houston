import Training from '../../components/Training';
import Testing from '../../components/Testing';
import Vocabulary from '../../components/Vocabulary';
import Authentication from '../../components/Authentication/Authentication';

export const TRAINING_ROUTE = '/';
export const AUTHENTICATION_ROUTE = '/authentication';
export const TESTING_ROUTE = '/testing';
export const VOCABULARY_ROUTE = '/my-vocabulary';

export const routesConfig = [
  { title: 'Training', route: TRAINING_ROUTE, component: Training },
  { title: 'Testing', route: TESTING_ROUTE, component: Testing },
  { title: 'My vocabulary', route: VOCABULARY_ROUTE, component: Vocabulary },
  { title: 'Authentication', route: AUTHENTICATION_ROUTE, component: Authentication },
];
