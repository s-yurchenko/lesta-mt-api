import { LestaAxios } from '@lib/lesta-axios';

export abstract class LestaBaseController {
  abstract CONTROLLER_ENDPOINT: string;
  protected lestaAxios: LestaAxios;

  protected constructor(lestaAxios: LestaAxios) {
    this.lestaAxios = lestaAxios;
  }

  protected generateEndpoint(paths: string | string[]): string {
    if (Array.isArray(paths)) {
      return `${[this.CONTROLLER_ENDPOINT, ...paths].join('/')}/`;
    } else {
      return `${[this.CONTROLLER_ENDPOINT, paths].join('/')}/`;
    }
  }
}
