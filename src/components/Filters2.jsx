import { useForm } from "react-hook-form";
import Label from "../ui/Label";
import TextField from "../ui/TextField";
import Select from "../ui/RHFSelect";

const sortOptions = [
  {
    title: "latest",
    id: "created_desc",
  },
  {
    title: "earliest",
    id: "created_asc",
  },
];

// const categories = projects.map((p) => {
//     return {
//       label: p.category.title,
//       value: p.category.englishTitle,
//     };
//   });

function Filters({ categories, onSubmit }) {
  const { register, handleSubmit, watch } = useForm();
  const formState = watch;

  const transformedCategories = [
    {
      id: "ALL",
      title: "ALL",
    },
    ...categories,
  ];
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between mt-4">
        <Label label="search" display="inline" />
        <TextField
          type="text"
          name="search"
          register={register}
          onChange={(e) => onSubmit({ ...formState, search: e.target.value })}
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Label label="sort" display="inline" />
        <Select
          name="sort"
          width=""
          register={register}
          options={sortOptions}
          onChange={(e) =>
            onSubmit({
              ...formState,
              sort: { ...formState.sort, field: e.target.value },
            })
          }
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Label label="category" display="inline" />
        <Select
          name="category"
          width=""
          register={register}
          options={transformedCategories}
          onChange={(e) =>
            onSubmit({
              ...formState,
              sort: { ...formState.sort, direction: e.target.value },
            })
          }
        />
      </div>
    </form>
  );
}

export default Filters;
