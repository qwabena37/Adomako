import { useEffect, useState } from "react";
import api from "../services/api";


function ProductsAdmin() {

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const [editingProduct, setEditingProduct] = useState(null);


  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    featured: false,
  });


  const [image, setImage] = useState(null);



  const fetchProducts = () => {

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





  // Load product into form

  const handleEdit = (product)=>{


    setEditingProduct(product);


    setFormData({

      name: product.name,

      description: product.description,

      price: product.price,

      stock: product.stock,

      category: product.category,

      featured: product.featured,

    });


    setImage(null);


    window.scrollTo({
      top:0,
      behavior:"smooth"
    });


  };






  const handleChange=(e)=>{


    const {
      name,
      value,
      type,
      checked

    } = e.target;



    setFormData({

      ...formData,

      [name]:
      type==="checkbox"
      ? checked
      : value

    });


  };






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



      fetchProducts();


      alert(
        "Product deleted successfully"
      );


    }
    catch(error){


      console.log(error);


      alert(
        "Delete failed"
      );


    }


  };






return (

<div className="space-y-12">


{/* FORM */}

<div className="bg-white shadow-lg rounded-xl p-8">


<h1 className="text-4xl font-bold mb-8">

{editingProduct
?
"Edit Product"
:
"Add Product"}

</h1>



<form
onSubmit={handleSubmit}
className="space-y-6"
>



<input

type="text"

name="name"

placeholder="Product Name"

value={formData.name}

onChange={handleChange}

className="w-full border p-3 rounded"

/>



<textarea

name="description"

placeholder="Description"

value={formData.description}

onChange={handleChange}

rows="5"

className="w-full border p-3 rounded"

/>




<select

name="category"

value={formData.category}

onChange={handleChange}

className="w-full border p-3 rounded"

>


<option value="">
Select Category
</option>


{
categories.map((category)=>(


<option

key={category.id}

value={category.id}

>

{category.name}

</option>


))

}


</select>




<input

type="number"

name="price"

value={formData.price}

onChange={handleChange}

placeholder="Price"

className="w-full border p-3 rounded"

/>



<input

type="number"

name="stock"

value={formData.stock}

onChange={handleChange}

placeholder="Stock"

className="w-full border p-3 rounded"

/>



<input

type="file"

accept="image/*"

onChange={(e)=>
setImage(e.target.files[0])
}

className="w-full border p-3 rounded"

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



<button

className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold"

>

{
editingProduct
?
"Update Product"
:
"Save Product"
}


</button>



</form>


</div>






{/* PRODUCT TABLE */}

<div>


<h2 className="text-3xl font-bold mb-6">

Product Management

</h2>



<div className="overflow-x-auto bg-white rounded-xl shadow-lg">


<table className="w-full">


<thead>

<tr className="bg-gray-100">

<th className="p-4">
Image
</th>

<th className="p-4">
Product
</th>

<th className="p-4">
Price
</th>

<th className="p-4">
Stock
</th>

<th className="p-4">
Featured
</th>

<th className="p-4">
Actions
</th>


</tr>


</thead>



<tbody>


{
products.map((product)=>(


<tr
key={product.id}
className="border-t"
>


<td className="p-4">


<img

src={product.image}

alt={product.name}

className="w-20 h-20 rounded-lg object-cover"

/>


</td>



<td className="p-4 font-semibold">

{product.name}

</td>



<td className="p-4">

GH₵ {product.price}

</td>



<td className="p-4">

{product.stock}

</td>



<td className="p-4">


{
product.featured
?
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
Yes
</span>
:
<span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
No
</span>
}


</td>



<td className="p-4 flex gap-2">


<button

onClick={()=>handleEdit(product)}

className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"

>

Edit

</button>




<button

onClick={()=>deleteProduct(product.id)}

className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"

>

Delete

</button>



</td>


</tr>


))


}


</tbody>


</table>


</div>


</div>



</div>


);


}


export default ProductsAdmin;