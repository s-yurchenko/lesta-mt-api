import { LestaBaseController } from '@lib/controllers/base.controller';
import { LestaSuccessResponseDTO } from '@lib/dtos';
import { LestaAxios } from '@lib/lesta-axios';

import {
  IAuthLoginRequestDTO,
  IAuthLoginResponseDTO,
  IAuthLogoutRequestDTO,
  IAuthProlongateRequestDTO,
  IAuthProlongateResponseDTO,
} from './dtos';

export class LestaAuthController extends LestaBaseController {
  public readonly CONTROLLER_ENDPOINT = 'auth';

  constructor(lestaAxios: LestaAxios) {
    super(lestaAxios);
  }

  /**
   * Метод осуществляет аутентификацию игрока при помощи Идентификатора Lesta ID (OpenID),
   * который используется в играх Мир танков, Мир кораблей, Tanks Blitz.
   * Игрок должен ввести email и пароль, использованные при создании аккаунта,
   * или войти при помощи аккаунта социальной сети.
   * Аутентификация не поддерживается для пользователя Game Center под iOS,
   * если аккаунт не привязан к одной из социальных сетей или в профиле не указан email и пароль.
   * Информация о статусе аутентификации будет отправлена на URL, указанный в параметре redirect_uri.
   *
   * Параметры redirect_uri при успешной аутентификации:
   *
   * status: ok — аутентификация пройдена;
   * access_token — ключ доступа, передаётся во все методы, требующие аутентификации;
   * expires_at — срок действия access_token;
   * account_id — Идентификатор пользователя;
   * nickname — имя пользователя.
   * Параметры redirect_uri при ошибке аутентификации:
   *
   * status: error — произошла ошибка аутентификации;
   * code — код ошибки;
   * message — информация об ошибке.
   *
   * @param params
   */
  auth(params: IAuthLoginRequestDTO): Promise<LestaSuccessResponseDTO<IAuthLoginResponseDTO>> {
    return this.lestaAxios.get<IAuthLoginResponseDTO>(this.generateEndpoint('login'), {
      params,
    });
  }

  /**
   * Метод генерирует новый access_token на основе действующего.
   *
   * Используется для тех случаев, когда пользователь всё ещё пользуется приложением,
   * а срок действия access_token уже подходит к концу.
   *
   * @param params
   */
  prolongate(
    params: IAuthProlongateRequestDTO,
  ): Promise<LestaSuccessResponseDTO<IAuthProlongateResponseDTO>> {
    return this.lestaAxios.get<IAuthProlongateResponseDTO>(this.generateEndpoint('prolongate'), {
      params,
    });
  }

  /**
   * Метод удаляет access_token пользователя.
   *
   * После вызова данного метода access_token перестаёт действовать.
   *
   * @param params
   */
  logout(params: IAuthLogoutRequestDTO): Promise<LestaSuccessResponseDTO<undefined>> {
    return this.lestaAxios.get<undefined>(this.generateEndpoint('logout'), {
      params,
    });
  }
}
