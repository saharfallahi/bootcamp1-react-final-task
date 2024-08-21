import truncateText from "../utils/truncateText";
import toLocalDateShort from "../utils/toLocalDateShort";


function ProductList({ filteredProducts,onDeleteProduct }) {
  return (
    <table className="">
      <tbody>
        {filteredProducts.map((product) => (
          <tr className="" key={product.id}>
            <td className="text-left ">{truncateText(product.title,10)}</td>
            <td className="text-right">{toLocalDateShort(product.createdAt)}</td>
            <td className="text-right"><span className="badge badge--secondary">{product.category}</span></td>
            <td className="text-right"><span className="badge badge--primary">{product.quantity}</span></td>
            <td className="text-right"><button  onClick={()=>onDeleteProduct(product.id)} className="badge badge--secondary border-red-500 text-red-500">delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;
