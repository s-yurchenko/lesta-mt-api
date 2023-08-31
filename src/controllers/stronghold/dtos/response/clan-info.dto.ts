interface IClanInfoBattlesForStrongholdsStatisticsResponseDTO {
  /**
   * Время окончания последнего боя, проведённого на технике X уровня
   */
  last_time_10: Date;
  /**
   * Количество поражений на технике X уровня
   */
  lose_10: number;
  /**
   * Общее количество боёв на технике X уровня
   */
  total_10: number;
  /**
   * Общее количество боёв на технике X уровня за 28 дней
   */
  total_10_in_28d: number;
  /**
   * Количество побед на технике X уровня
   */
  win_10: number;
  /**
   * Количество побед на технике X уровня за 28 дней
   */
  win_10_in_28d: number;
}

interface IClanInfoBattlesSeriesForStrongholdsStatisticsResponseDTO {
  /**
   * Количество поражений на технике X уровня
   */
  lose_10: number;
  /**
   * Общее количество боёв на технике X уровня
   */
  total_10: number;
  /**
   * Общее количество боёв на технике X уровня за 28 дней
   */
  total_10_in_28d: number;
  /**
   * Количество побед на технике X уровня
   */
  win_10: number;
  /**
   * Количество побед на технике X уровня за 28 дней
   */
  win_10_in_28d: number;
}

interface IClanInfoBuildingSlotsResponseDTO {
  /**
   * Идентификатор карты, привязанный к текущей стройплощадке
   */
  arena_id: string;
  /**
   * Уровень строения, расположенного на текущей стройплощадке
   */
  building_level: number;
  /**
   * Название строения, расположенного на текущей стройплощадке
   */
  building_title: string;
  /**
   * Название плацдарма
   */
  direction: string;
  /**
   * Позиция стройплощадки
   */
  position: string;
  /**
   * Название Резерва, заработанного в строении, расположенном на текущей стройплощадке
   */
  reserve_title: string;
}

interface IClanInfoSkirmishStatisticsResponseDTO {
  /**
   * Время окончания последнего боя, проведённого на технике X уровня
   */
  last_time_10: Date;
  /**
   * Время окончания последнего боя, проведённого на технике VI уровня
   */
  last_time_6: Date;
  /**
   * Время окончания последнего боя, проведённого на технике VIII уровня
   */
  last_time_8: Date;
  /**
   * Количество поражений на технике X уровня
   */
  lose_10: number;
  /**
   * Количество поражений на технике VI уровня
   */
  lose_6: number;
  /**
   * Количество поражений на технике VIII уровня
   */
  lose_8: number;
  /**
   * Общее количество боёв на технике X уровня
   */
  total_10: number;
  /**
   * Общее количество боёв на технике X уровня за 28 дней
   */
  total_10_in_28d: number;
  /**
   * Общее количество боёв на технике VI уровня
   */
  total_6: number;
  /**
   * Общее количество боёв на технике VI уровня за 28 дней
   */
  total_6_in_28d: number;
  /**
   * Общее количество боёв на технике VIII уровня
   */
  total_8: number;
  /**
   * Общее количество боёв на технике VIII уровня за 28 дней
   */
  total_8_in_28d: number;
  /**
   * Количество побед на технике X уровня
   */
  win_10: number;
  /**
   * Количество побед на технике X уровня за 28 дней
   */
  win_10_in_28d: number;
  /**
   * Количество побед на технике VI уровня
   */
  win_6: number;
  /**
   * Количество побед на технике VI уровня за 28 дней
   */
  win_6_in_28d: number;
  /**
   * Количество побед на технике VIII уровня
   */
  win_8: number;
  /**
   * Количество побед на технике VIII уровня за 28 дней
   */
  win_8_in_28d: number;
}

export interface IClanInfoResponseDTO {
  /**
   * Идентификатор клана
   */
  clan_id: number;
  /**
   * Название клана
   */
  clan_name: string;
  /**
   * Тег клана
   */
  clan_tag: string;
  /**
   * Идентификатор карты, привязанный стройплощадке командного центра
   */
  command_center_arena_id: string;
  /**
   * Суммарный уровень строений Укрепрайона
   */
  stronghold_buildings_level: number;
  /**
   * Уровень Укрепрайона
   */
  stronghold_level: number;
  /**
   * Статистика сражений клана в режиме «Укрепрайон»
   */
  battles_for_strongholds_statistics: IClanInfoBattlesForStrongholdsStatisticsResponseDTO;
  /**
   * Статистика по наступлениям на Укрепрайон клана
   */
  battles_series_for_strongholds_statistics: IClanInfoBattlesSeriesForStrongholdsStatisticsResponseDTO;
  /**
   * Информация о стройплощадках Укрепрайона
   */
  building_slots: IClanInfoBuildingSlotsResponseDTO;
  /**
   * Статистика вылазок клана
   */
  skirmish_statistics: IClanInfoSkirmishStatisticsResponseDTO;
}
