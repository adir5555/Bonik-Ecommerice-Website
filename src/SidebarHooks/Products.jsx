import "../HooksCss/Category.css";

const Products = ({ result, resultA, resultB}) => {
  return (
    <>

    
      <section className="card-container grid px-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {result} 
          {resultA} 
          {resultB}
        
      </section>
    </>
  );
};

export default Products;
