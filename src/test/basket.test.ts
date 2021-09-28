import { Basket } from "../main/basket";
import { mock, MockProxy } from "jest-mock-extended";

describe("Basket", () => {
  let basket: Basket;

  beforeEach(() => {
    basket = new Basket();
  });

  it("should create Shopping basket when the first product is added", () => {});

  it("should persist the Shopping basket (In-memory, DB later)", () => {});

  it("should have an own Shopping basket for each user", () => {});

  it("should add an item to the basket ", () => {
    basket.add("The Hobbit", 5);
    const display = basket.display();
    expect(display.length).toBeGreaterThan(0);
  });

  it("should display the date the basket was created in the first line of the display", () => {
    basket.add("The Hobbit", 5);
    const display = basket.display();
    expect(display.split("\n")[0]).toBe("2021-09-28");
  });
});
