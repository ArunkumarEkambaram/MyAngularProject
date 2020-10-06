export class product {
  public id: number;
  public name: string;
  public manufacturer: string;
  public price: number;
  public quantity: number;

  constructor(id: number, name: string, manufacturer: string, price: number, qty: number) {
    this.id = id;
    this.name = name;
    this.manufacturer = manufacturer;
    this.price = price;
    this.quantity = qty;
  }
}
