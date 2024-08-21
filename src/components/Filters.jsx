import Label from "../ui/Label";
import Select from "../ui/Select";



const sortOptions = [
  {
    label: "latest",
    value: "created_desc",
  },
  {
    label: "earliest",
    value: "created_asc",
  },
];


function Filters({ transformedCategories,search,onChangeSearch,sort,onChangeSort,category, onChangeCategory}) {

  
  return (
    <div>
      <div className="flex items-center justify-between mt-4">
        <Label label="search" display="inline" />
        <input type="text" value={search} onChange={onChangeSearch} className="textField__input" />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Label label="sort" display="inline" />
        <Select value={sort} onChange={onChangeSort} options={sortOptions} />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Label label="category" display="inline" />
        <Select value={category} onChange={onChangeCategory} options={transformedCategories}/>
      </div>
    </div>
  );
}

export default Filters;
