import { useState } from "react";
import Label from "../ui/Label";
import TextField from "../ui/TextField";
import { useForm } from "react-hook-form";

function AddNewCategory({setCategories}) {
  const [open, setOpen] = useState(false);
  const { register, handleSubmit,reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    if (data.title && data.description) {
      const newCategory = { id: Date.now(), title: data.title, description:data.description}; 
      setCategories((prevState) => [...prevState, newCategory]);
      reset(); // Reset the form
    } else {
      alert("Please fill in a valid title and description.");
    }
  };

  

  return (
    <div>
      {!open ? (
        <button className="text-secondary-500" onClick={() => setOpen(true)}>
          Add New Category?
        </button>
      ) : (
        ""
      )}
      {open ? (
        <div>
          <h2 className="font-bold text-primary-100 text-lg mb-2">
            Add New Category
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-secondary-700 rounded-lg p-4 flex flex-col gap-y-4"
          >
            <div>
              <Label label="title" display="block" />
              <TextField
                name="title"
                type="text"
                register={register}
                validationSchema={{
                  required: "Title is required",
                }}
              />
            </div>
            <div>
              <Label label="description" display="block" />
              <textarea
                {...register("description", {
                  required: "Title is required",
                })}
                id="description"
                autoComplete="off"
                className="textField__input w-full"
              ></textarea>
            </div>
            <div className="flex gap-x-4">
              <button
                onClick={() => setOpen(false)}
                type="reset"
                className="btn btn--secondary w-1/2"
              >
                Cancel
              </button>
              <button type="submit" className="btn btn--primary w-1/2">
                Add Category
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default AddNewCategory;
