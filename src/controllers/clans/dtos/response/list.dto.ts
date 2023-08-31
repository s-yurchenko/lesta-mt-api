interface IClansListEmblemsResponseDTO {
  /**
   * Перечень ссылок на эмблемы 195x195 px
   */
  x195: string[];
  /**
   * Перечень ссылок на эмблемы 24x24 px
   */
  x24: string[];
  /**
   * Перечень ссылок на эмблемы 256x256 px
   */
  x256: string[];
  /**
   * Перечень ссылок на эмблемы 32x32 px
   */
  x32: string[];
  /**
   * Перечень ссылок на эмблемы 64x64 px
   */
  x64: string[];
}

export interface IClansListResponseDTO {
  /**
   * Идентификатор клана
   */
  clan_id: number;
  /**
   * Цвет клана в формате HEX #RRGGBB
   */
  color: string;
  /**
   * Дата создания клана
   */
  created_at: Date;
  /**
   * Количество игроков клана
   */
  members_count: number;
  /**
   * Название клана
   */
  name: string;
  /**
   * Тег клана
   */
  tag: string;
  /**
   * Информация об эмблемах клана в играх и на клановом портале
   */
  emblems: IClansListEmblemsResponseDTO;
}
