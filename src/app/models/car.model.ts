import { Image } from "./image.model";

export interface Car {
    _id: string;
    make: string;
    model: string;
    price: string;
    year: string;
    km: string;
    show: boolean;
    images: Array<Image>;
}