import React from 'react';
import Product from '../images/products/black-keds.png';
import Product2 from '../images/products/green-keds.png';
import Product3 from '../images/products/yellow-keds.png';
import Rating from './Rating';

const products = [
    {
        id:1,
        name:'Nike airmax 170',
        image:Product,
        price:'$557'
    },
    {
        id:2,
        name:'Nike airmax 170',
        image:Product2,
        price:'$557'
    },
    {
        id:3,
        name:'Nike airmax 170',
        image:Product3,
        price:'$557'
    }
]

const TopSell = () => {
    return (
        <div className='w-[30%] bg-white rounded-md'>
            <h1 className='mt-5 text-lg font-serif text-left px-10 '>Top selling products</h1>
            {
                products.map(pd=><div>
                    <div className='flex mt-8 font-serif justify-center  gap-4'>
                        <img className="w-20" src={pd.image} alt="" />
                        <div>
                            <p>{pd.name}</p>
                            <p><Rating/> </p>
                            <p>{pd.price}</p>
                        </div>
                    </div>
                </div> )
            }
        </div>
    );
};

export default TopSell;