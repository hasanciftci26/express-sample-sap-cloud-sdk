export interface Plants {
    ID: string;
    name: string;
    location: string;
}

export default interface ICompanySales {
    readAllPlants: () => Promise<Array<Plants>>;
}