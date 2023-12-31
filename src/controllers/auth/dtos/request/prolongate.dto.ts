export interface IAuthProlongateRequestDTO {
  /**
   * Ключ доступа к личным данным аккаунта пользователя;
   * можно получить при помощи метода авторизации;
   * действителен в течение определённого времени
   */
  access_token: string;
  /**
   * Срок действия access_token в формате UNIX. Также можно указать дельту в секундах.
   *
   * Срок действия и дельта не должны превышать две недели, начиная с настоящего времени.
   */
  expire_at?: number;
}
