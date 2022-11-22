export default interface IProduct {
    saler: any,
    name: string,
    condition: string,
    mainCategory: string,
    category: string,
    subCategory: string,
    brand: string,
    size: string,
    color: string,
    description: string,
    price: number,
    discount?: number,
    amount: any,
    trade: boolean,
    id?: number,
    key?: any,
    mainPhoto: string,
    additionalsPhotos: any
}