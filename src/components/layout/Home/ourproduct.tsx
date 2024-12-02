// import Image from 'next/image';

// const products = [
//     {
//         id: 1,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
//     {
//         id: 2,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
//     {
//         id: 3,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
//     {
//         id: 4,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
//     {
//         id: 5,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
//     {
//         id: 6,
//         title: "ProChain",
//         description: "Asset Management System",
//         imageSrc: "/Image/products/1.svg",
//         imageAlt: "Product 1",
//     },
// ];

// const OurProducts = () => {
//     return (
//         <div className="flex flex-col lg:p-32">
//             <div className="flex flex-col lg:flex-row gap-8 lg:gap-32 p-6">
//                 <div className="flex flex-col gap-3">
//                     <div>
//                         <hr className="w-9 bg-indigo-900 h-0.5" />
//                         <span className="text-indigo-900 font-medium">OUR PRODUCTS</span>
//                     </div>
//                     <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 lg:w-11/12">
//                         Empowering your success with every product.
//                     </h1>
//                     <p className="text-sm sm:text-xl w-9/12 text-indigo-900">
//                         Discover our range of innovative products designed to meet your needs.
//                     </p>
//                 </div>
//                 <div className="flex justify-center items-center">
//                     <a
//                         href="#"
//                         className="inline-flex py-3 px-5 w-[6rem] text-base text-center text-white bg-indigo-800 hover:bg-indigo-900"
//                     >
//                         See All
//                     </a>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//                 {products.map((product) => (
//                     <div key={product.id}>
//                         <Image
//                             src={product.imageSrc}
//                             alt={product.imageAlt}
//                             width={309}
//                             height={300}
//                             className="w-full"
//                         />
//                         <div className="flex flex-row align-center justify-center transform -translate-y-16">
//                             <div className="flex flex-row bg-white items-center justify-center gap-3 px-5 py-3">
//                                 <h1 className="font-extrabold text-lg">{product.title}</h1>
//                                 <hr className="w-0 h-7 border-l-2 border-indigo-900" />
//                                 <p className="text-xs">{product.description}</p>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default OurProducts;
