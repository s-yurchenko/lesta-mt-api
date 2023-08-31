import { ICommonRequestDTO } from '@lib/dtos';

export interface IClansAccountInfoRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор аккаунта.
   * Максимальное ограничение: 100.
   * Минимальное значение: 1.
   */
  account_id: number[];
}
