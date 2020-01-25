import { Status } from '../models/models';

export const transactions = [
    {
        Consumer: {
            Name: 'Pranav',
            Area: 'HSR layout'
        },
        Retailer: {
            Name: 'Nishanth',
            Area: 'JP nagar'
        },
        OrderDetails: {
            OrderDate: '20-01-2020',
            ItemsPurchased: [
                {
                    ItemName: 'Sample Item',
                    ItemPrice: 500,
                    Quantity: 2,
                }
            ],
            TotalPrice: 1000
        },
        Status: Status.DELIVERED
    },
    {
        Consumer: {
            Name: 'Vijay',
            Area: 'HSR layout'
        },
        Retailer: {
            Name: 'Nishanth',
            Area: 'JP nagar'
        },
        OrderDetails: {
            OrderDate: '22-01-2020',
            ItemsPurchased: [
                {
                    ItemName: 'Sample Item2',
                    ItemPrice: 300,
                    Quantity: 2,
                }
            ],
            TotalPrice: 600
        },
        Status: Status.CANCELLED
    }
];

