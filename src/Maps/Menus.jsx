import "../Coomon/Fooerss/Menusss.css";

const Menus = () => {
  // const Menus = ({ cart }) => {
  // const { image, category, model, rating } = cart;
  return (
    <div className="mt-40 mb-40">
      <div>
        <div className="">
          <div className="collection-card  has-before  hover:shine text-white h-96 px-10">
            <h2 className="h2 text-3xl mt-8">Summer Collection</h2>

            <p className="text-3xl">Starting at $17.99</p>

           <p className="mt-52 text-2xl"> Shop Now</p>

            <figure>
              <img
                className="has-bg-image h-96"
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
