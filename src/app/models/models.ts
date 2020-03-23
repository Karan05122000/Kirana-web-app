export const Status = {
    DELIVERED: 'Delivered',
    ORDERED: 'Ordered',
    PACKED: 'Packed',
    CANCELLED: 'Cancelled',
    DISPATCHED: 'Dispatched'
};
// tslint:disable-next-line: class-name
export class _Items  {
    id: number;
    name: string;
    unit: string;
    description: string;
    variety: string[];
    price: string;
    category: string;
}
export class DeleteItems {
  category: string;
  subCategory: string;
  Brand: string;
  name: string;
  id: number;
}
// class Consumer {

// }
// class Retailer
// class ItemsPurchased
// class OrderDetails
// export class Transactions {
//   Consumer: Consumer;
//   Retailer: Retailer;
//   OrderDetails: OrderDetails;
//   Status: string;
// }
