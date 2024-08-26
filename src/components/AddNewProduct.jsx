import { useForm } from "react-hook-form";
import Label from "../ui/Label";
import TextField from "../ui/TextField";
import RHFSelect from "../ui/RHFSelect";
import toast from "react-hot-toast";

function AddNewProduct({ mapCategories, setProducts }) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    if (data.title && data.quantity > 0 && data.category) {
      const newProduct = {
        id: Date.now(),
        title: data.title,
        createdAt: new Date().toISOString(),
        quantity: data.quantity,
        category: data.category,
      };
      setProducts((prevState) => [...prevState, newProduct]);
      reset(); // Reset the form
    } else {
      toast.error("Please fill in a valid title, quantity and category.")
    }
  };

  return (
    <div>
      <h2 className="font-bold text-primary-100 text-lg mb-2">
        Add New Product
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-secondary-700 rounded-lg p-4 flex flex-col gap-y-4"
      >
        <div>
          <Label name="title" label="title" display="block" />
          <TextField
            type="text"
            name="title"
            register={register}
            required
            validationSchema={{
              required: "Title is required",
            }}
          />
        </div>
        <div>
          <Label name="quantity" label="quantity" display="block" />
          <TextField
            type="number"
            name="quantity"
            register={register}
            required
            validationSchema={{
              required: "Quantity is required",
            }}
          />
        </div>
        <div>
          <Label label="category" display="block" />
          <RHFSelect
            name="category"
            register={register}
            required
            options={mapCategories}
            validationSchema={{
              required: "Category is required",
            }}
            width="w-full"
            placeholder="select a category"
          />
        </div>
        <div className="flex gap-x-4">
          <button type="submit" className="btn btn--primary w-full">
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewProduct;
