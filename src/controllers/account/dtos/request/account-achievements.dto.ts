import { ICommonRequestDTO } from '@lib/dtos';

export interface IAccountAchievementsRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор аккаунта игрока. Максимальное ограничение: 100.
   */
  account_id: number[];
}
