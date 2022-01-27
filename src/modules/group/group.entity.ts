import { Column, Entity, ObjectID as ObjectIdType, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'groups' })
export class Group {
  @ObjectIdColumn()
  id: ObjectIdType;

  @Column()
  name: string;

  @Column()
  description?: string;

  @Column()
  members: ObjectIdType[];

  @Column()
  pending: ObjectIdType[];
}
