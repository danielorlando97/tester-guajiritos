import { Module } from '@nestjs/common';
import { ObjectsService } from './objects.service';

@Module({
  providers: [ObjectsService],
  exports: [ObjectsService],
})
export class ObjectsModule {}
