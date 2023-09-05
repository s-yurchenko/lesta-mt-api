import { LestaMtApiResponseError } from '@lib/errors';
import axios, { Axios, AxiosRequestConfig } from 'axios';

import { LestaSuccessResponseDTO } from './dtos';
import { ILestaAxiosOptions } from './interfaces';

function requestDataSerializer(params: Record<string, unknown>): string {
  const serializedParams: string[] = [];

  for (const paramsKey in params) {
    const dataByParams = params[paramsKey];

    if (Array.isArray(dataByParams)) {
      serializedParams.push(`${paramsKey}=${dataByParams.join(',')}`);
    } else {
      serializedParams.push(`${paramsKey}=${dataByParams}`);
    }
  }

  return `${serializedParams.join('&')}`;
}

export class LestaAxios {
  private axios: Axios;

  constructor(lestaAxiosOptions: ILestaAxiosOptions) {
    this.axios = axios.create({
      baseURL: 'https://api.tanki.su/wot',
      params: {
        application_id: lestaAxiosOptions.applicationId,
      },
      paramsSerializer: {
        serialize: requestDataSerializer,
      },
    });
    this.axios.interceptors.response.use(
      (response) => {
        if (response.data.status === 'error') {
          return Promise.reject(new LestaMtApiResponseError(response.data.error));
        } else if (response.data.status === 'ok') {
          return response.data;
        } else {
          return {};
        }
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  }

  get<R, D = unknown>(
    url: string,
    config?: AxiosRequestConfig<D>,
  ): Promise<LestaSuccessResponseDTO<R>> {
    return this.axios.get<LestaSuccessResponseDTO<R>, LestaSuccessResponseDTO<R>>(url, config);
  }

  post<R, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>,
  ): Promise<LestaSuccessResponseDTO<R>> {
    return this.axios.post<LestaSuccessResponseDTO<R>, LestaSuccessResponseDTO<R>>(
      url,
      data,
      config,
    );
  }
}
