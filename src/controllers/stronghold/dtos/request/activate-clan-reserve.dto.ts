import { ICommonRequestDTO } from '@lib/dtos';

export interface IActivateClanReserveRequestDTO extends ICommonRequestDTO {
  /**
   * Ключ доступа к личным данным аккаунта пользователя;
   * можно получить при помощи метода авторизации;
   * действителен в течение определённого времени
   */
  access_token: string;
  /**
   * Уровень кланового резерва для активации
   */
  reserve_level: number;
  /**
   * Тип кланового резерва для активации
   */
  reserve_type: string;
}
