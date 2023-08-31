import { ICommonRequestDTO } from '@lib/dtos';

export interface IClanInfoRequestDTO extends ICommonRequestDTO {
  /**
   * Идентификатор клана.
   * Чтобы получить его, используйте метод Кланы.
   * Максимальное ограничение: 10.
   */
  clan_id: number[];
}
