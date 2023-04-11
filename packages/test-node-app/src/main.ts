import { error } from 'firebase-functions/lib/logger';

export const logHelloError = () => {
  error('Hello!');
};
