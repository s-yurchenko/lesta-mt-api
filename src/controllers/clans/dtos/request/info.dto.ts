import { ICommonRequestDTO } from '@lib/dtos';
import { ClansInfoExtra } from '@lib/enums';

export interface IClansInfoRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор клана.
   * Максимальное ограничение: 100.
   */
  clan_id: number[];
  /**
   * Ключ доступа к личным данным аккаунта пользователя;
   * можно получить при помощи метода авторизации;
   * действителен в течение определённого времени
   */
  access_token?: string;
  /**
   * Список дополнительных полей, которые будут включены в ответ.
   */
  extra?: ClansInfoExtra[];
  /**
   * Данный параметр изменяет тип поля members. Допустимые значения:
   *
   * "id" — Поле members в ответе будет содержать associative array c индексацией по account_id
   */
  members_key?: 'id';
}
