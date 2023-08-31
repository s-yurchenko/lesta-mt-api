export enum AccountInfoPrivatePersonalMissionValue {
  /**
   * Миссия недоступна
   */
  NONE = 'NONE',
  /**
   * Миссия доступна
   */
  UNLOCKED = 'UNLOCKED',
  /**
   * Не получено основное вознаграждение
   */
  NEED_GET_MAIN_REWARD = 'NEED_GET_MAIN_REWARD',
  /**
   * Основное вознаграждение получено
   */
  MAIN_REWARD_GOTTEN = 'MAIN_REWARD_GOTTEN',
  /**
   * Не получено второстепенное вознаграждение
   */
  NEED_GET_ADD_REWARD = 'NEED_GET_ADD_REWARD',
  /**
   * Не получено ни одно вознаграждение
   */
  NEED_GET_ALL_REWARDS = 'NEED_GET_ALL_REWARDS',
  /**
   * Все вознаграждения получены
   */
  ALL_REWARDS_GOTTEN = 'ALL_REWARDS_GOTTEN',
}
