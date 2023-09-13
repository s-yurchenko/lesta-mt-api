import { TechClanRole } from '@lib/enums';

interface IClansAccountInfoClanEmblemsResponseDTO {
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

interface IClansAccountInfoClanResponseDTO {
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
  emblems: IClansAccountInfoClanEmblemsResponseDTO;
}

export interface IClansAccountInfoResponseDTO {
  [account_id: string]: {
    /**
     * Идентификатор аккаунта игрока
     */
    account_id: number;
    /**
     * Имя игрока
     */
    account_name: string;
    /**
     * Дата вступления в клан
     */
    joined_at: Date;
    /**
     * Техническое название должности
     */
    role: TechClanRole;
    /**
     * Позиция
     */
    role_i18n: string;
    /**
     * Краткая информация о клане
     */
    clan: IClansAccountInfoClanResponseDTO;
  } | null;
}
