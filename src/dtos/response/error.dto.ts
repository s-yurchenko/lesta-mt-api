import { ILestaError } from '@lib/interfaces';

export class LestaErrorResponseDTO extends Error {
  status: 'error';
  error: ILestaError;

  constructor(data: ILestaError) {
    super(data.message);
    this.error = data;
    this.name = 'Ошибка работы с api lesta';
    this.stack = JSON.stringify(this.error);
  }
}
