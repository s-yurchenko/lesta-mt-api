import { ICommonRequestDTO } from '@lib/dtos';
import { AccountInfoExtra } from '@lib/enums';

export interface IAccountInfoRequestDTO extends ICommonRequestDTO {
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
   * Список дополнительных полей, которые будут включены в ответ.
   */
  extra?: AccountInfoExtra[];
}
