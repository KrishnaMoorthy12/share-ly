export interface ResponseDto<T = unknown> {
  message: string;
  result: T;
}
