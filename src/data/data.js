
export const ordersGrid = [
    {
        field: 'image',
        headerName: 'Image',
        renderCell: (params) => <img className="w-12 rounded-full" src={params.value} alt="" />,
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'OrderItems',
        headerName: 'Item',
        width: '150',
        editType: 'dropdownedit',
        textAlign: 'Center',
    },
    {
        field: 'CustomerName',
        headerName: 'Customer Name',
        width: '150',
        textAlign: 'Center',
    },
    {
        field: 'TotalAmount',
        headerName: 'Total Amount',
        format: 'C2',
        textAlign: 'center',
        editType: 'numericedit',
        width: '150',
    },
    {
        headerName: 'Status',
        renderCell: (params) => <p className={`${params.value=== 'active' ? 'bg-blue-400' : params.value=== 'pending' ? 'bg-red-400' :  params.value==='complete' ? 'bg-green-400' : params.value==='rejected' ? 'bg-red-600' : params.value==='canceled' ? 'bg-[#FF5C8E]' : ''} text-white px-3 py-1 rounded-full`} >{params.value}</p> ,
        field: 'Status',
        textAlign: 'Center',
        width: '120',
    },
    {
        field: 'id',
        headerName: 'Order ID',
        width: '120',
        textAlign: 'Center',
    },

    {
        field: 'Location',
        headerName: 'Location',
        width: '150',
        textAlign: 'Center',
    },
];

export const ordersData = [
    {
        id: 845954,
        image:'',
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        
    },
    {
        id: 8745342,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 384893,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 8745341,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },

    {
        id: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        image:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        id: 8745343,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 384892,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 8745344,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 845954,
        CustomerName: 'Jie Yan',
        TotalAmount: 87.99,
        OrderItems: 'Shoes',
        Location: 'USA',
        Status: 'pending',
        image:
            'https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg',
    },
    {
        id: 8745345,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },
    {
        id: 384891,
        CustomerName: 'Miron',
        TotalAmount: 87.99,
        OrderItems: 'Ice Cream',
        Location: 'USA',
        Status: 'active',
        StatusBg: '#03C9D7',
        image:
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-free-ice-cream-eae372d.jpg',
    },
    {
        id: 24546,
        CustomerName: 'Frank',
        TotalAmount: 84.99,
        OrderItems: 'Pan Cake',
        Location: 'Delhi',
        Status: 'complete',
        StatusBg: '#8BE78B',
        image:
            'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
    },
    {
        id: 8745346,
        CustomerName: 'Danai',
        TotalAmount: 122.99,
        OrderItems: 'Watch',
        Location: 'USA',
        Status: 'canceled',
        StatusBg: '#FF5C8E',
        image:
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pop-womens-garmin-watches-1641919013.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
    },

]