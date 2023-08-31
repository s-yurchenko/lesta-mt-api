export interface IAuthLoginResponseDTO {
  /**
   * URL, на который необходимо перенаправить пользователя для аутентификации.
   * Возвращается, только если передан параметр nofollow=1.
   */
  location: string;
}
