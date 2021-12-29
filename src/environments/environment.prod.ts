import { ProjectEnvironment } from './environment.i';

export const environment: ProjectEnvironment = {
  production: true,
  apiUrl: process.env['API_URL'],
};
