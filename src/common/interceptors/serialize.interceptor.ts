import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from '@nestjs/common';
import { ClassConstructor, plainToInstance } from 'class-transformer';
import { map, Observable } from 'rxjs';
import { ResponseDto } from '../interfaces/dtos/response.output.dto';

export const Serialize = (dto: ClassConstructor<unknown>) =>
  UseInterceptors(new SerializeInterceptor(dto));

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: ClassConstructor<unknown>) {}

  intercept(
    _context: ExecutionContext,
    next: CallHandler<unknown>
  ): Observable<unknown> | Promise<Observable<unknown>> {
    return next.handle().pipe(
      map(
        (response: ResponseDto<unknown>): ResponseDto<unknown> => ({
          message: response.message,
          result: plainToInstance(this.dto, response.result, {
            excludeExtraneousValues: true,
            exposeUnsetFields: true,
            exposeDefaultValues: true,
          }),
        })
      )
    );
  }
}
