import { ProjectEnvironment } from './environment.i';

export const environment: ProjectEnvironment = {
  production: false,
  apiUrl: process.env['API_URL'],
};
