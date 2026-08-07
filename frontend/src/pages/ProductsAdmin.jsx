import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";


function ProductsAdmin() {


const navigate = useNavigate();


const [categories, setCategories] = useState([]);

const [products, setProducts] = useState([]);

const [editingProduct, setEditingProduct] = useState(null);


const [formData, setFormData] = useState({

name:"",
description:"",
price:"",
stock:"",
category:"",
featured:false,

});


const [image, setImage] = useState(null);




// Fetch Products

const fetchProducts = ()=>{


api
.get("products/")

.then((res)=>{

setProducts(res.data);

})

.catch((err)=>{

console.log(err);

});


};





useEffect(()=>{


api
.get("categories/")

.then((res)=>{

setCategories(res.data);

})

.catch((err)=>{

console.log(err);

});



fetchProducts();



},[]);







// Logout

const logout = ()=>{


const confirmLogout =
window.confirm(
"Are you sure you want to logout?"
);


if(confirmLogout){


localStorage.removeItem("access");

localStorage.removeItem("refresh");


navigate("/admin/login");


}


};








// Edit Product


const handleEdit = (product)=>{


setEditingProduct(product);



setFormData({

name:product.name,

description:product.description,

price:product.price,

stock:product.stock,

category:
product.category?.id || product.category,

featured:product.featured,


});



setImage(null);



window.scrollTo({

top:0,

behavior:"smooth"

});


};









// Input Changes


const handleChange=(e)=>{


const {

name,

value,

type,

checked

}=e.target;



setFormData({

...formData,


[name]:

type==="checkbox"
?
checked
:
value,


});


};








// Create / Update Product


const handleSubmit = async(e)=>{


e.preventDefault();



try{


const token =
localStorage.getItem("access");



const data = new FormData();



Object.keys(formData).forEach((key)=>{


data.append(

key,

formData[key]

);


});



if(image){


data.append(

"image",

image

);


}







if(editingProduct){



await api.patch(

`products/${editingProduct.id}/`,

data,

{

headers:{


Authorization:

`Bearer ${token}`,


"Content-Type":

"multipart/form-data"


}


}


);



alert(

"Product updated successfully"

);



}

else{


await api.post(

"products/",

data,

{

headers:{


Authorization:

`Bearer ${token}`,


"Content-Type":

"multipart/form-data"


}


}


);



alert(

"Product added successfully"

);


}







setEditingProduct(null);



setFormData({

name:"",

description:"",

price:"",

stock:"",

category:"",

featured:false,


});



setImage(null);



fetchProducts();



}

catch(error){


console.log(error);


alert(

"Failed to save product"

);


}



};









// Delete Product


const deleteProduct = async(id)=>{


const confirmDelete =

window.confirm(

"Delete this product?"

);



if(!confirmDelete)

return;




try{


const token =

localStorage.getItem("access");



await api.delete(

`products/${id}/`,

{

headers:{


Authorization:

`Bearer ${token}`


}

}

);



alert(

"Product deleted successfully"

);



fetchProducts();



}

catch(error){


console.log(error);


alert(

"Delete failed"

);


}



};







// Cancel Edit


const cancelEdit=()=>{


setEditingProduct(null);



setFormData({

name:"",

description:"",

price:"",

stock:"",

category:"",

featured:false,


});


setImage(null);


};








return (


<div className="min-h-screen bg-gray-100 p-6 md:p-10">





{/* Header */}

<div className="flex flex-col md:flex-row justify-between items-center mb-8">


<div>


<h1 className="text-3xl md:text-4xl font-bold">

Product Management

</h1>


<p className="text-gray-600 mt-2">

Create, edit and manage automobile products

</p>


</div>



<button

onClick={logout}

className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold mt-4 md:mt-0"

>

Logout

</button>



</div>








<Link

to="/admin/dashboard"

className="inline-block bg-gray-800 text-white px-5 py-3 rounded-lg mb-8 hover:bg-gray-900"

>

← Back to Admin Menu

</Link>









{/* FORM */}


<div className="bg-white rounded-xl shadow-lg p-8 mb-12">


<h2 className="text-2xl font-bold mb-6">

{editingProduct
?
"Edit Product"
:
"Add Product"}

</h2>



<form

onSubmit={handleSubmit}

className="space-y-5"

>



<input

type="text"

name="name"

placeholder="Product Name"

value={formData.name}

onChange={handleChange}

className="w-full border p-3 rounded-lg"

required

/>





<textarea

name="description"

placeholder="Description"

rows="5"

value={formData.description}

onChange={handleChange}

className="w-full border p-3 rounded-lg"

required

/>







<select

name="category"

value={formData.category}

onChange={handleChange}

className="w-full border p-3 rounded-lg"

required

>


<option value="">

Select Category

</option>


{categories.map((category)=>(


<option

key={category.id}

value={category.id}

>

{category.name}

</option>


))}


</select>







<input

type="number"

name="price"

placeholder="Price"

value={formData.price}

onChange={handleChange}

className="w-full border p-3 rounded-lg"

required

/>







<input

type="number"

name="stock"

placeholder="Stock"

value={formData.stock}

onChange={handleChange}

className="w-full border p-3 rounded-lg"

required

/>







<input

type="file"

accept="image/*"

onChange={(e)=>

setImage(e.target.files[0])

}

className="w-full border p-3 rounded-lg"

/>






<label className="flex gap-3 items-center">


<input

type="checkbox"

name="featured"

checked={formData.featured}

onChange={handleChange}

/>


Featured Product


</label>







<div className="flex gap-4">


<button

type="submit"

className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-lg font-bold"

>

{editingProduct
?
"Update Product"
:
"Save Product"}

</button>




{editingProduct &&

<button

type="button"

onClick={cancelEdit}

className="bg-gray-500 text-white px-6 py-3 rounded-lg"

>

Cancel Edit

</button>

}



</div>



</form>


</div>










{/* Products Table */}


<div className="bg-white rounded-xl shadow-lg overflow-x-auto">


<table className="w-full">


<thead className="bg-gray-100">


<tr>


<th className="p-4 text-left">

Image

</th>


<th className="p-4 text-left">

Name

</th>


<th className="p-4 text-left">

Price

</th>


<th className="p-4 text-left">

Actions

</th>


</tr>


</thead>





<tbody>


{products.map((product)=>(


<tr

key={product.id}

className="border-t"

>


<td className="p-4">


<img

src={product.image}

alt={product.name}

className="w-20 h-20 object-cover rounded-lg"

/>


</td>




<td className="p-4 font-semibold">

{product.name}

</td>




<td className="p-4">

GH₵ {product.price}

</td>




<td className="p-4 flex gap-2">


<button

onClick={()=>handleEdit(product)}

className="bg-blue-600 text-white px-4 py-2 rounded"

>

Edit

</button>




<button

onClick={()=>deleteProduct(product.id)}

className="bg-red-600 text-white px-4 py-2 rounded"

>

Delete

</button>


</td>



</tr>


))}



</tbody>


</table>


</div>



</div>


);


}


export default ProductsAdmin;