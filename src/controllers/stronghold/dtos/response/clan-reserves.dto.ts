interface IClanReservesInStockBonusValuesResponseDTO {
  /**
   * Тип боя
   */
  battle_type: string;
  /**
   * Эффект резерва для каждого типа боя
   */
  value: number;
}

interface IClanReservesInStockResponseDTO {
  /**
   * Время действия клановых резервов каждого уровня
   */
  action_time: number;
  /**
   * Время активации клановых резервов каждого уровня
   */
  activated_at: number;
  /**
   * Время окончания действия клановых резервов каждого уровня
   */
  active_till: number;
  /**
   * Количество клановых резервов каждого уровня
   */
  amount: number;
  /**
   * Уровень доступных клановых резервов
   */
  level: number;
  /**
   * Статус клановых резервов каждого уровня
   */
  status: string;
  /**
   * Показывает, подходит ли резерв только для техники X уровня
   */
  x_level_only: boolean;
  /**
   * Эффекты резерва
   */
  bonus_values: IClanReservesInStockBonusValuesResponseDTO;
}

export interface IClanReservesResponseDTO {
  /**
   * Тип эффекта резерва
   */
  bonus_type: string;
  /**
   * Показывает, является ли резерв резервом для сражений
   */
  disposable: boolean;
  /**
   * URL к значку
   */
  icon: string;
  /**
   * Название резерва
   */
  name: string;
  /**
   * Тип резерва
   */
  type: string;
  /**
   * Доступные клановые резервы и их статус
   */
  in_stock: IClanReservesInStockResponseDTO;
}
