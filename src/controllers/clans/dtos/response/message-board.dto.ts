export interface IClansMessageBoardResponseDTO {
  /**
   * Идентификатор автора объявления
   */
  author_id: number;
  /**
   * Дата создания объявления
   */
  created_at: Date;
  /**
   * Идентификатор игрока, изменившего объявление
   */
  editor_id: number;
  /**
   * Показывает, прочитано ли объявление
   */
  is_read: boolean;
  /**
   * Текст сообщения
   */
  message: string;
  /**
   * Дата обновления сообщения
   */
  updated_at: Date;
}
