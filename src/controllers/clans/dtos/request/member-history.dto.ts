import { ICommonRequestDTO } from '@lib/dtos';

export interface IClansMemberHistoryRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор аккаунта. Минимальное значение: 1.
   */
  account_id: number;
}
