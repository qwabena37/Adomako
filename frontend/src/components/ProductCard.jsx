import { FaWhatsapp } from "react-icons/fa";

function ProductCard({product}) {

 return(

<div className="bg-white rounded-xl shadow-lg">

<img
src={product.main_image}
className="h-40 sm:h-48 md:h-56 lg:h-60 w-full object-cover"
/>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

{product.images.map((img,index)=>

<img
key={index}
src={img}
className="h-24 object-cover rounded"
/>

)}

</div>

<div className="p-5">

<h2 className="font-bold text-2xl">
{product.name}
</h2>

<p>
{product.description}
</p>

<a
href={`https://wa.me/233243160227?text=I need ${product.name}`}
className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded mt-3"
>

<FaWhatsapp/>

Request Product

</a>

</div>

</div>

 )

}

export default ProductCard;