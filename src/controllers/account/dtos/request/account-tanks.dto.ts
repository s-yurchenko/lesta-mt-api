import { ICommonRequestDTO } from '@lib/dtos';

export interface IAccountTanksRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор аккаунта игрока. Максимальное ограничение: 100.
   */
  account_id: number[];
  /**
   * Ключ доступа к личным данным аккаунта пользователя;
   * можно получить при помощи метода авторизации;
   * действителен в течение определённого времени
   */
  access_token?: string;
  /**
   * Идентификатор техники игрока.
   * Максимальное ограничение: 100.
   */
  tank_id?: number[];
}
