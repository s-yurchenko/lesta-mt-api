import { ICommonRequestDTO } from '@lib/dtos';

export interface IClansListRequestDTO extends ICommonRequestDTO {
  /**
   * Количество возвращаемых записей (может вернуться меньше записей, но не больше 100).
   * Если переданный лимит превышает 100, тогда автоматически выставляется лимит в 100 (по умолчанию).
   */
  limit?: number;
  /**
   * Номер страницы.
   * По умолчанию: 1.
   * Минимальное значение: 1.
   */
  page_no?: number;
  /**
   * Часть названия или тега клана, по которому осуществляется поиск.
   * Не может быть меньше 2 символов
   */
  search?: string;
}
