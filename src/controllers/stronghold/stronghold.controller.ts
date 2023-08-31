import { LestaBaseController } from '@lib/controllers/base.controller';
import { LestaSuccessResponseDTO } from '@lib/dtos';
import { LestaAxios } from '@lib/lesta-axios';

import {
  IActivateClanReserveRequestDTO,
  IClanInfoRequestDTO,
  IClanInfoResponseDTO,
  IClanReservesRequestDTO,
  IClanReservesResponseDTO,
} from './dtos';

export class LestaStrongholdController extends LestaBaseController {
  public readonly CONTROLLER_ENDPOINT = 'stronghold';

  constructor(lestaAxios: LestaAxios) {
    super(lestaAxios);
  }

  /**
   * Метод возвращает общую информацию и боевую статистику кланов в режиме «Укрепрайон».
   * Обратите внимание, что информация о количестве проведённых боёв,
   * а также количестве побед и поражений клана обновляется один раз в сутки.
   *
   * @param params
   */
  clanInfo(params: IClanInfoRequestDTO): Promise<LestaSuccessResponseDTO<IClanInfoResponseDTO>> {
    return this.lestaAxios.get<IClanInfoResponseDTO>(this.generateEndpoint('claninfo'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию о доступных резервах и их текущем статусе.
   *
   * @param params
   */
  clanReserves(
    params: IClanReservesRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IClanReservesResponseDTO>> {
    return this.lestaAxios.get<IClanReservesResponseDTO>(this.generateEndpoint('clanreserves'), {
      params,
    });
  }

  /**
   * Метод активирует доступный клановый резерв.
   * Активировать резерв может только игрок клана, у которого есть необходимые права.
   *
   * @param data
   */
  activateClanReserve(
    data: IActivateClanReserveRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IActivateClanReserveRequestDTO>> {
    return this.lestaAxios.post<IActivateClanReserveRequestDTO>(
      this.generateEndpoint('activateclanreserve'),
      data,
    );
  }
}
