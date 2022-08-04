export class Data {
    id!: string;
    title!: string;
    address!: string;
    city!: string;
    area!: number;
    price!: Price;
    avatar!: string;
    images!: string[];
    type!: Type;
    description!: string;
}

export class Price {
    from!: number;
    to!: number;
}

export class Type {
    name!: string;
    value!: string;
}