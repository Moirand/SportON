import Image from "next/image";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { Button } from "../ui/button";

const products = [
    {
        name: "Product 1",
        category: "Running",
        price: 1000,
        imgPath: "product-1.png"
    },
    {
        name: "Product 2",
        category: "Running",
        price: 1000,
        imgPath: "product-2.png"
    },
    {
        name: "Product 3",
        category: "Running",
        price: 1000,
        imgPath: "product-3.png"
    },
    {
        name: "Product 4",
        category: "Running",
        price: 1000,
        imgPath: "product-4.png"
    },
    {
        name: "Product 5",
        category: "Running",
        price: 1000,
        imgPath: "product-5.png"
    },
    {
        name: "Product 6",
        category: "Running",
        price: 1000,
        imgPath: "product-6.png"
    },
]

export const ProductsSection = () => {
    return (
        <section id="product-section" className="container mx-auto mt-32">
            <h2 className="font-bold italic text-4xl text-center mb-11">
                <span className="text-primary">OUR</span> PRODUCTS
            </h2>
            <div className="grid grid-cols-4 gap-5">
                {products.map((product, index) => (
                    <Link
                        href="#"
                        key={index}
                        className="p-1.5 bg-white hover:drop-shadow-xl duration-300">
                        <div className="relative p-3 bg-primary-light aspect-square w-full flex justify-center items-center">
                            <Image
                                src={`/images/products/${product.imgPath}`}
                                alt={product.name}
                                width={300}
                                height={300}
                                className="aspect-square object-contain" />
                            <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24} /></Button>
                        </div>
                        <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
                        <div className="flex justify-between mb-8">
                            <div className="text-gray-500">{product.category}</div>
                            <div className="font-medium text-primary">
                                {Intl.NumberFormat('id-ID', {
                                    style: 'currency',
                                    currency: 'IDR',
                                    maximumSignificantDigits: 3
                                }).format(product.price)
                                }</div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>

    );
}