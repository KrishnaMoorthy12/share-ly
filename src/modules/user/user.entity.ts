import { Expose } from 'class-transformer';
import * as generate from 'project-name-generator';
import { BeforeInsert, Column, Entity, ObjectID as ObjectIdType, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  readonly id: ObjectIdType;

  @Expose()
  @Column()
  name: string;

  @Expose()
  @Column()
  handle: string;

  @Column()
  email: string;

  @Column()
  key: string;

  @BeforeInsert()
  beforeInsert() {
    this.handle = generate({ words: 2, alliterative: true }).dashed;
  }
}
