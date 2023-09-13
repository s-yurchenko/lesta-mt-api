import { TechClanRole } from '@lib/enums';

export interface IClansMemberHistoryResponseDTO {
  /**
   * Идентификатор аккаунта игрока
   */
  account_id: number;
  /**
   * Идентификатор клана
   */
  clan_id: number;
  /**
   * Дата вступления в клан
   */
  joined_at: Date;
  /**
   * Дата выхода из клана
   */
  left_at: Date;
  /**
   * Последняя должность в клане. Техническое название должности
   */
  role: TechClanRole;
}
