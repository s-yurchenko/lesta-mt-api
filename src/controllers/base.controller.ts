import { LestaAxios } from 'src/lesta-axios';

export abstract class LestaBaseController {
  abstract CONTROLLER_ENDPOINT: string;
  protected lestaAxios: LestaAxios;

  protected constructor(lestaAxios: LestaAxios) {
    this.lestaAxios = lestaAxios;
  }

  protected generateEndpoint(paths: string | string[]): string {
    let result = '';

    if (Array.isArray(paths)) {
      result = [this.CONTROLLER_ENDPOINT, ...paths].join('/');
    } else {
      result = [this.CONTROLLER_ENDPOINT, paths].join('/');
    }

    return `${result}/`;
  }
}
