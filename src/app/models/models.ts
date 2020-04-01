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
    details: string;
    price: string;
    category: string;
    variant: string[];
    sub_category: string[];
    brand: string;

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
export class Sent {
  category: string;
  sub_catogery: string;
  details: string;
  brand: string;
  quantity_type: string;
  name: string;
  variants: string[];
}
