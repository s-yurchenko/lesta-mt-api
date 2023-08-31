import {
  LestaAccountController,
  LestaAuthController,
  LestaClansController,
  LestaStrongholdController,
} from './controllers';
import { ILestaAxiosOptions } from './interfaces';
import { LestaAxios } from './lesta-axios';

export class LestaAPI {
  private readonly lestaAxios: LestaAxios;
  public readonly account: LestaAccountController;
  public readonly auth: LestaAuthController;
  public readonly clans: LestaClansController;
  public readonly stronghold: LestaStrongholdController;

  constructor(lestaAxiosOptions: ILestaAxiosOptions) {
    this.lestaAxios = new LestaAxios(lestaAxiosOptions);
    this.account = new LestaAccountController(this.lestaAxios);
    this.auth = new LestaAuthController(this.lestaAxios);
    this.clans = new LestaClansController(this.lestaAxios);
    this.stronghold = new LestaStrongholdController(this.lestaAxios);
  }
}
