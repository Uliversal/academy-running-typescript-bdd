import { BasketItem } from "./basketItem";

export class Basket {
  private basketItems: BasketItem[];
  private creationDate: Date;

  constructor() {
    this.basketItems = [];
    this.creationDate = new Date();
  }

  add(itemName: string, price: number, units: number): void {
    this.basketItems.push(new BasketItem(itemName, price, units));
  }

  display(): string {
    let ret = `Creation date: ${this.creationDate
      .toISOString()
      .substring(0, 10)}\n`;
    let total = 0;

    this.basketItems.forEach((basketItem) => {
      ret += basketItem.name + "\n";
      total += basketItem.units * basketItem.price;
    });
    ret +=
      "Total: " +
      new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
      }).format(total);
    return ret;
  }
}
