export interface IAuthProlongateResponseDTO {
  /**
   * Ключ доступа. Передаётся во все методы, требующие авторизацию.
   */
  access_token: string;
  /**
   * Идентификатор аккаунта игрока
   */
  account_id: number;
  /**
   * Срок действия access_token
   */
  expire_at: Date;
}
