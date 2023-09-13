import { TechClanRole } from '@lib/enums';

interface IClansInfoEmblemsResponseDTO {
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

interface IClansInfoMembersResponseDTO {
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
}

interface IClansInfoPrivateResponseDTO {
  /**
   * Список игроков клана c активной игровой сессией в World of Tanks.
   *
   * Дополнительное поле.
   */
  online_members: number[];
  /**
   * Количество золота в казне клана
   *
   * Внимание! Поле будет отключено.
   */
  treasury: number;
  /**
   * Казна клана
   */
  clan_treasury: IClansInfoPrivateClanTreasuryResponseDTO;
}

interface IClansInfoPrivateClanTreasuryResponseDTO {
  /**
   * Количество кредитов в казне клана
   */
  credits: number;
  /**
   * Количество бон в казне клана
   */
  crystal: number;
  /**
   * Количество золота в казне клана
   */
  gold: number;
}

export interface IClansInfoResponseDTO {
  /**
   * Клан может приглашать игроков
   */
  accepts_join_requests: boolean;
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
   * Идентификатор игрока, создавшего клан
   */
  creator_id: number;
  /**
   * Имя игрока, создавшего клан
   */
  creator_name: string;
  /**
   * Описание клана
   */
  description: string;
  /**
   * Описание клана в HTML
   */
  description_html: string;
  /**
   * Клан удалён.
   * Информация об удалённом клане содержит актуальные значения только для следующих полей:
   * clan_id, is_clan_disbanded, updated_at.
   */
  is_clan_disbanded: boolean;
  /**
   * Идентификатор Командующего клана
   */
  leader_id: number;
  /**
   * Имя Командующего
   */
  leader_name: string;
  /**
   * Количество игроков клана
   */
  members_count: number;
  /**
   * Девиз клана
   */
  motto: string;
  /**
   * Название клана
   */
  name: string;
  /**
   * Старое название клана
   */
  old_name: string;
  /**
   * Старый тег клана
   */
  old_tag: string;
  /**
   * Время последнего переименования клана в UTC
   */
  renamed_at: Date;
  /**
   * Тег клана
   */
  tag: string;
  /**
   * Время обновления информации о клане
   */
  updated_at: Date;
  /**
   * Информация об эмблемах клана в играх и на клановом портале
   */
  emblems: IClansInfoEmblemsResponseDTO;
  /**
   * Информация об игроках клана.
   * Формат поля зависит от входящего параметра members_key.
   */
  members: IClansInfoMembersResponseDTO;
  /**
   * Cекретная информация клана
   */
  private: IClansInfoPrivateResponseDTO;
}
