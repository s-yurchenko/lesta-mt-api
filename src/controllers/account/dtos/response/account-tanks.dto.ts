import { AccountTankMarkOfMastery } from '@lib/enums';

interface IAccountTanksStatisticsResponseDTO {
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Победы
   */
  wins: number;
}

export interface IAccountTanksResponseDTO {
  /**
   * Знаки классности
   */
  mark_of_mastery: AccountTankMarkOfMastery;
  /**
   * Идентификатор техники
   */
  tank_id: number;
  /**
   * Статистика машины
   */
  statistics: IAccountTanksStatisticsResponseDTO;
}
