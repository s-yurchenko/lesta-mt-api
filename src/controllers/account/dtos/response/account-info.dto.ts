import { AccountInfoPrivateBoosterState, AccountInfoPrivatePersonalMissionValue } from '@lib/enums';

interface IAccountInfoPrivatePersonalMissionResponseDTO {
  key: string;
  value: AccountInfoPrivatePersonalMissionValue;
}

interface IAccountInfoPrivateBoostersResponseDTO {
  /**
   * Количество личных резервов
   */
  count: number;
  /**
   * Время окончания действия
   */
  expiration_time: Date;
  /**
   * Статус личных резервов
   */
  state: AccountInfoPrivateBoosterState;
}

interface IAccountInfoPrivateGroupedContactsResponseDTO {
  /**
   * Контакт внесён в чёрный список.
   * Обратите внимание, что заблокированный контакт (account_id)
   * всё ещё находится в группах контактов или списке контактов, который не распределён по группам.
   */
  blocked: number[];
  /**
   * Группы
   */
  groups: string[];
  /**
   * Игнорируемые
   */
  ignored: number[];
  /**
   * Отключён звук
   */
  muted: number[];
  /**
   * Не сгруппированные
   */
  ungrouped: number[];
}

interface IAccountInfoPrivateRentedResponseDTO {
  /**
   * Компенсация аренды в кредитах
   */
  compensation_credits: number;
  /**
   * Компенсация аренды в золоте
   */
  compensation_gold: number;
  /**
   * Время окончания аренды
   */
  expiration_time: Date;
  /**
   * Идентификатор техники в аренде
   */
  tank_id: number;
}

interface IAccountInfoPrivateRestrictionsResponseDTO {
  /**
   * Время окончания блокировки в чате
   */
  chat_ban_time: Date;
}

interface IAccountInfoStatisticsAllResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью. Значение считается с версии игры 8.8.
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным. Значение считается с версии игры 8.8.
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу. Значение считается с версии игры 8.8.
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   *   Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsClanResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsCompanyResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу. Значение считается с версии игры 8.9.
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsEpicResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsFalloutResponseDTO {
  /**
   * Урон, нанесённый при помощи боевых резервов
   */
  avatar_damage_dealt: number;
  /**
   * Уничтожено при помощи боевых резервов
   */
  avatar_frags: number;
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Погиб
   */
  death_count: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Захвачено флагов в составе взвода
   */
  flag_capture: number;
  /**
   * Захвачено флагов в роли одиночного игрока
   */
  flag_capture_solo: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимальный урон, нанесённый в одном бою, включая урон от аватара
   */
  max_damage_with_avatar: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальное количество уничтоженной техники, включая технику, уничтоженную аватаром
   */
  max_frags_with_avatar: number;
  /**
   * Максимальное количество Очков победы, заработанное в режиме «Бой до последнего»
   */
  max_win_points: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Ресурсы, захваченные на ресурсных точках
   */
  resource_absorbed: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Очки победы
   */
  win_points: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsGlobalMapAbsoluteResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsGlobalmapChampionResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsGlobalmapMiddleResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsHistoricalResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRandomResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRandom10x10ResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRandom15x10ResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRankedBattlesResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRankedSeason1ResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRankedSeason2ResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRankedSeason3ResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsRegularTeamResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsStrongHoldDefenseResponseDTO {
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsStrongHoldSkirmishResponseDTO {
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountStatisticsTeamResponseDTO {
  /**
   * Средний урон, нанесённый с вашей помощью
   */
  avg_damage_assisted: number;
  /**
   * Средний урон по вашим разведданным
   */
  avg_damage_assisted_radio: number;
  /**
   * Средний урон после вашего попадания, сбившего гусеницу
   */
  avg_damage_assisted_track: number;
  /**
   * Средний заблокированный бронёй урон за бой.
   * Заблокированный бронёй урон — это урон от снарядов (бронебойных, кумулятивных и подкалиберных),
   * которые попали в танк, но не нанесли урона.
   * Значение считается с версии игры 9.0.
   */
  avg_damage_blocked: number;
  /**
   * Средний опыт за бой
   */
  battle_avg_xp: number;
  /**
   * Проведено боёв
   */
  battles: number;
  /**
   * Количество боёв на технике, причиняющей оглушение
   */
  battles_on_stunning_vehicles: number;
  /**
   * Очки захвата базы
   */
  capture_points: number;
  /**
   * Нанесено повреждений
   */
  damage_dealt: number;
  /**
   * Получено урона
   */
  damage_received: number;
  /**
   * Количество полученных прямых попаданий
   */
  direct_hits_received: number;
  /**
   * Ничьи
   */
  draws: number;
  /**
   * Очки защиты базы
   */
  dropped_capture_points: number;
  /**
   * Количество нанесённых осколочно-фугасных попаданий
   */
  explosion_hits: number;
  /**
   * Количество полученных осколочно-фугасных попаданий
   */
  explosion_hits_received: number;
  /**
   * Уничтожено техники
   */
  frags: number;
  /**
   * Попадания
   */
  hits: number;
  /**
   * Процент попаданий
   */
  hits_percents: number;
  /**
   * Поражения
   */
  losses: number;
  /**
   * Максимальный урон за бой
   */
  max_damage: number;
  /**
   * Техника, на которой был нанесён максимальный урон за бой
   */
  max_damage_tank_id: number;
  /**
   * Максимум уничтожено за бой
   */
  max_frags: number;
  /**
   * Техника, на которой уничтожено максимальное количество противников за бой
   */
  max_frags_tank_id: number;
  /**
   * Максимальный опыт за бой
   */
  max_xp: number;
  /**
   * Техника, на которой получен максимальный опыт за бой
   */
  max_xp_tank_id: number;
  /**
   * Количество полученных прямых попаданий, не нанёсших урон
   */
  no_damage_direct_hits_received: number;
  /**
   * Количество пробитий
   */
  piercings: number;
  /**
   * Количество полученных пробитий
   */
  piercings_received: number;
  /**
   * Произведено выстрелов
   */
  shots: number;
  /**
   * Обнаружено противников
   */
  spotted: number;
  /**
   * Урон по оглушённым вами целям
   */
  stun_assisted_damage: number;
  /**
   * Количество оглушений, причинённых экипажу противника
   */
  stun_number: number;
  /**
   * Выжил в боях
   */
  survived_battles: number;
  /**
   * Отношение заблокированного бронёй урона к полученному игроком урону от бронебойных,
   * кумулятивных, подкалиберных снарядов.
   * Значение считается с версии игры 9.0.
   */
  tanking_factor: number;
  /**
   * Победы
   */
  wins: number;
  /**
   * Суммарный опыт
   */
  xp: number;
}

interface IAccountInfoStatisticsResponseDTO {
  /**
   * Количество и модели уничтоженной игроком техники. Приватные данные игрока.
   */
  frags: string[];
  /**
   * Количество поваленных деревьев
   */
  trees_cut: number;
  /**
   * Общая статистика для Случайных и клановых боёв без учёта Глобальной карты 2.0.
   */
  all: IAccountInfoStatisticsAllResponseDTO;
  /**
   * Статистика боёв в составе клана
   */
  clan: IAccountInfoStatisticsClanResponseDTO;
  /**
   * Статистика боёв в составе роты
   */
  company: IAccountInfoStatisticsCompanyResponseDTO;
  /**
   * Статистика в типе боя «Генеральное сражение».
   *
   * Дополнительное поле.
   */
  epic: IAccountInfoStatisticsEpicResponseDTO;
  /**
   * Статистика в режиме «Бой до последнего».
   *
   * Дополнительное поле.
   */
  fallout: IAccountInfoStatisticsFalloutResponseDTO;
  /**
   * Статистика боёв на Глобальной карте в Абсолютном дивизионе.
   *
   * Дополнительное поле.
   */
  globalmap_absolute: IAccountInfoStatisticsGlobalMapAbsoluteResponseDTO;
  /**
   * Статистика боёв на Глобальной карте в Чемпионском дивизионе.
   *
   * Дополнительное поле.
   */
  globalmap_champion: IAccountStatisticsGlobalmapChampionResponseDTO;
  /**
   * Статистика боёв на Глобальной карте в Среднем дивизионе.
   *
   * Дополнительное поле.
   */
  globalmap_middle: IAccountStatisticsGlobalmapMiddleResponseDTO;
  /**
   * Статистика исторических боёв
   */
  historical: IAccountStatisticsHistoricalResponseDTO;
  /**
   * Статистика случайных боёв.
   *
   * Дополнительное поле.
   */
  random: IAccountStatisticsRandomResponseDTO;
  /**
   * Архив статистики по ранговым боям 10x10.
   *
   * Дополнительное поле.
   */
  random_10x10: IAccountStatisticsRandom10x10ResponseDTO;
  /**
   * Архив статистики по ранговым боям 15x15.
   *
   * Дополнительное поле.
   */
  ranked_15x15: IAccountStatisticsRandom15x10ResponseDTO;
  /**
   * Статистика по Ранговым боям.
   *
   * Дополнительное поле.
   *
   * Внимание! Поле будет отключено.
   */
  ranked_battles: IAccountStatisticsRankedBattlesResponseDTO;
  /**
   * Статистика ранговых боев за первый сезон года.
   * Обновляется с каждым боем в этом сезоне, обнуляется в конце года..
   *
   * Дополнительное поле.
   */
  ranked_season_1: IAccountStatisticsRankedSeason1ResponseDTO;
  /**
   * Статистика ранговых боев за второй сезон года.
   * Обновляется с каждым боем в этом сезоне, обнуляется в конце года..
   *
   * Дополнительное поле.
   */
  ranked_season_2: IAccountStatisticsRankedSeason2ResponseDTO;
  /**
   * Статистика ранговых боев за третий сезон года.
   * Обновляется с каждым боем в этом сезоне, обнуляется в конце года..
   *
   * Дополнительное поле.
   */
  ranked_season_3: IAccountStatisticsRankedSeason3ResponseDTO;
  /**
   * Статистика командных боёв постоянных команд
   *
   * Внимание! Поле будет отключено.
   */
  regular_team: IAccountStatisticsRegularTeamResponseDTO;
  /**
   * Общая по всем кланам статистика боёв игрока в режиме обороны Укрепрайона
   */
  stronghold_defense: IAccountStatisticsStrongHoldDefenseResponseDTO;
  /**
   * Общая по всем кланам статистика боёв игрока в режиме вылазок Укрепрайона
   */
  stronghold_skirmish: IAccountStatisticsStrongHoldSkirmishResponseDTO;
  /**
   * Статистика командных боёв
   */
  team: IAccountStatisticsTeamResponseDTO;
}

interface IAccountInfoPrivateResponseDTO {
  /**
   * Информация о блокировке аккаунта
   */
  ban_info: string;
  /**
   * Время окончания блокировки аккаунта
   */
  ban_time: Date;
  /**
   * Общее время в бою до уничтожения в секундах
   */
  battle_life_time: number;
  /**
   * Кол-во бон
   */
  bonds: number;
  /**
   * Кол-во кредитов
   */
  credits: number;
  /**
   * Свободный опыт
   */
  free_xp: number;
  /**
   * Техника в Ангаре.
   *
   * Дополнительное поле.
   */
  garage: number[];
  /**
   * Золото
   */
  gold: number;
  /**
   * Показывает, привязан ли аккаунт к номеру мобильного телефона
   */
  is_bound_to_phone: boolean;
  /**
   * Показывает, является ли аккаунт премиум аккаунтом
   */
  is_premium: boolean;
  /**
   * Прогресс по личным боевым задачам. Ключ - идентификатор задачи, значение - статус.
   *
   * Дополнительное поле.
   */
  personal_missions: IAccountInfoPrivatePersonalMissionResponseDTO[];
  /**
   * Срок действия премиум аккаунта
   */
  premium_expires_at: Date;
  /**
   * Личные резервы.
   *
   * Дополнительное поле.
   */
  boosters: IAccountInfoPrivateBoostersResponseDTO;
  /**
   * Группы контактов.
   *
   * Дополнительное поле.
   */
  grouped_contacts: IAccountInfoPrivateGroupedContactsResponseDTO;
  /**
   * Аренда техники.
   *
   * Дополнительное поле.
   */
  rented: IAccountInfoPrivateRentedResponseDTO;
  /**
   * Ограничения аккаунта
   */
  restrictions: IAccountInfoPrivateRestrictionsResponseDTO;
  /**
   * Статистика игрока
   */
  statistics: IAccountInfoStatisticsResponseDTO;
}

export interface IAccountInfoResponseDTO {
  /**
   * Идентификатор аккаунта игрока
   */
  account_id: string;
  /**
   * Идентификатор клана
   */
  clan_id: string;
  /**
   * Язык, выбранный в клиенте игры
   *
   * Внимание! Поле будет отключено.
   */
  client_language: string;
  /**
   * Дата создания аккаунта игрока
   */
  created_at: Date;
  /**
   * Личный рейтинг
   */
  global_rating: number;
  /**
   * Время последнего боя
   */
  last_battle_time: Date;
  /**
   * Время окончания последней игровой сессии
   */
  logout_at: Date;
  /**
   * Имя игрока
   */
  nickname: string;
  /**
   * Дата обновления информации об игроке
   */
  updated_at: Date;
  /**
   * Приватные данные игрока
   */
  private: IAccountInfoPrivateResponseDTO;
}
