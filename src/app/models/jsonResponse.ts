export enum Status {
  SUCCESS = 'success',
  ERROR = 'error',
}

export class JsonResponse {
  status: Status;
  message: string;
  data: any;
}
