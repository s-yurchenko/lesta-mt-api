import { ICommonRequestDTO } from '@lib/dtos';

export interface IClanReservesRequestDTO extends ICommonRequestDTO {
  /**
   * Ключ доступа к личным данным аккаунта пользователя;
   * можно получить при помощи метода авторизации;
   * действителен в течение определённого времени
   */
  access_token: string;
}