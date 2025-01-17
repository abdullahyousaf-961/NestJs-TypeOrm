import { Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class AbstractEntity<T>{
    
    @PrimaryGeneratedColumn()
    id: Number;

    constructor(entity: Partial<T>){
        Object.assign(this, entity);
    }
}