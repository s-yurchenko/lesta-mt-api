import { LestaBaseController } from '@lib/controllers/base.controller';
import { LestaSuccessResponseDTO } from '@lib/dtos';
import { LestaAxios } from '@lib/lesta-axios';

import {
  IClansAccountInfoRequestDTO,
  IClansAccountInfoResponseDTO,
  IClansGlossaryRequestDTO,
  IClansGlossaryResponseDTO,
  IClansInfoRequestDTO,
  IClansInfoResponseDTO,
  IClansListRequestDTO,
  IClansListResponseDTO,
  IClansMemberHistoryRequestDTO,
  IClansMemberHistoryResponseDTO,
  IClansMessageBoardRequestDTO,
  IClansMessageBoardResponseDTO,
} from './dtos';

export class LestaClansController extends LestaBaseController {
  public readonly CONTROLLER_ENDPOINT = 'clans';

  constructor(lestaAxios: LestaAxios) {
    super(lestaAxios);
  }

  /**
   * Метод проводит поиск по кланам и сортирует их в указанном порядке.
   *
   * @param params
   */
  list(params: IClansListRequestDTO): Promise<LestaSuccessResponseDTO<IClansListResponseDTO>> {
    return this.lestaAxios.get<IClansListResponseDTO>(this.generateEndpoint('list'), {
      params,
    });
  }

  /**
   * Метод возвращает полную информацию о клане.
   *
   * @param params
   */
  info(params: IClansInfoRequestDTO): Promise<LestaSuccessResponseDTO<IClansInfoResponseDTO>> {
    return this.lestaAxios.get<IClansInfoResponseDTO>(this.generateEndpoint('info'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию об игроке клана и краткую информацию о клане.
   *
   * @param params
   */
  accountInfo(
    params: IClansAccountInfoRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IClansAccountInfoResponseDTO>> {
    return this.lestaAxios.get<IClansAccountInfoResponseDTO>(this.generateEndpoint('accountinfo'), {
      params,
    });
  }

  /**
   * Метод возвращает информацию о клановых сущностях.
   *
   * @param params
   */
  glossary(
    params: IClansGlossaryRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IClansGlossaryResponseDTO>> {
    return this.lestaAxios.get<IClansGlossaryResponseDTO>(this.generateEndpoint('glossary'), {
      params,
    });
  }

  /**
   * Метод возвращает сообщения доски объявлений клана.
   *
   * @param params
   */
  messageBoard(
    params: IClansMessageBoardRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IClansMessageBoardResponseDTO>> {
    return this.lestaAxios.get<IClansMessageBoardResponseDTO>(
      this.generateEndpoint('messageboard'),
      {
        params,
      },
    );
  }

  /**
   * Метод возвращает информацию о клановой истории игрока.
   * В ответе присутсвует информация о 10 последних пребываниях в кланах.
   *
   * @param params
   */
  memberHistory(
    params: IClansMemberHistoryRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IClansMemberHistoryResponseDTO>> {
    return this.lestaAxios.get<IClansMemberHistoryResponseDTO>(
      this.generateEndpoint('memberhistory'),
      {
        params,
      },
    );
  }
}
