import { Feature } from "../../domain/model/Feature";

export interface ListProps{
    features:Feature[];
    currentPage:number;
    perPage:number;
    total:number;
    onChangePage:(currentPage:number) => void;
    onSelectFeature:(Feature:Feature) => void;
}