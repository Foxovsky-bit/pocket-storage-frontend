import { IProductUnit } from "./IProductUnit";

export interface IWarehouses {
    id:string;
    name:string;
    units:Array<IProductUnit>
}