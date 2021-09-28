import { BasketItem } from "./basketItem";

export class Basket {
  private basketItems: BasketItem[];

  constructor() {
    this.basketItems = [];
  }

  add(itemName: string, units: number): void {
    this.basketItems.push(new BasketItem(itemName, units));
  }

  display(): string {
    let ret = "";
    this.basketItems.forEach((basketItem) => {
      ret += basketItem.name;
    });
    return ret;
  }
}
