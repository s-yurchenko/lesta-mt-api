import { LestaBaseController } from '@lib/controllers/base.controller';
import { LestaSuccessResponseDTO } from '@lib/dtos';
import { LestaAxios } from '@lib/lesta-axios';

import {
  IAccountAchievementsRequestDTO,
  IAccountInfoRequestDTO,
  IAccountInfoResponseDTO,
  IAccountListRequestDTO,
  IAccountListResponseDTO,
  IAccountTanksRequestDTO,
  IAccountTanksResponseDTO,
} from './dtos';

export class LestaAccountController extends LestaBaseController {
  public readonly CONTROLLER_ENDPOINT = 'account';

  constructor(lestaAxios: LestaAxios) {
    super(lestaAxios);
  }

  /**
   * Метод возвращает часть списка игроков, отфильтрованную по первым символам имени и отсортированную по алфавиту.
   * @param params
   */
  list(params: IAccountListRequestDTO): Promise<LestaSuccessResponseDTO<IAccountListResponseDTO>> {
    return this.lestaAxios.get<IAccountListResponseDTO>(this.generateEndpoint('list'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию об игроке.
   * @param params
   */
  info(params: IAccountInfoRequestDTO): Promise<LestaSuccessResponseDTO<IAccountInfoResponseDTO>> {
    return this.lestaAxios.get<IAccountInfoResponseDTO>(this.generateEndpoint('info'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию о технике игрока.
   */
  tanks(
    params: IAccountTanksRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IAccountTanksResponseDTO>> {
    return this.lestaAxios.get<IAccountTanksResponseDTO>(this.generateEndpoint('tanks'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию о достижениях игроков.
   *
   * Значения поля achievements зависят от свойств достижений:
   *
   * от 1 до 4 для Знаков классности и Этапных достижений (type: "class");
   * максимальное значение серийных достижений (type: "series");
   * количество заработанных достижений из секций Герой битвы, Эпические достижения,
   * Групповые достижения, Особые достижения и т.п. (type: "repeatable, single, custom").
   */
  achievements(
    params: IAccountAchievementsRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IAccountTanksResponseDTO>> {
    return this.lestaAxios.get<IAccountTanksResponseDTO>(this.generateEndpoint('achievements'), {
      params,
    });
  }
}
