import { BasketItem } from "./basketItem";

export class Basket {
  private basketItems: BasketItem[];
  private creationDate: Date;

  constructor() {
    this.basketItems = [];
    this.creationDate = new Date();
  }

  add(itemName: string, units: number): void {
    this.basketItems.push(new BasketItem(itemName, units));
  }

  display(): string {
    let ret = `${this.creationDate.toISOString().substring(0,10)}\n`;
    this.basketItems.forEach((basketItem) => {
      ret += basketItem.name;
    });
    return ret;
  }
}
