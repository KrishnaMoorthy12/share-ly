import { Column, Entity, ObjectID as ObjectIdType, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @ObjectIdColumn()
  readonly id: ObjectIdType;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  key: string;
}
