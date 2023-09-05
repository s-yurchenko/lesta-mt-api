import { ILestaError } from '@lib/interfaces';

import { BaseLestaMTLibError } from './base.error';

export class LestaMtApiResponseError extends BaseLestaMTLibError {
  status: 'error';
  error: ILestaError;

  constructor(data: ILestaError) {
    super(data.message);
    this.error = data;
    this.name = 'Ошибка работы с api lesta';
    this.stack = JSON.stringify(this.error);
  }
}
