import Button from "./Button";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div className="ml">
        <h2 className="uppercase text-lg  ">Brand Name</h2>
        <hr className="my-3" />

        <div className="flex flex-col gap-2 w-4/5 py-3 text-xl ">

          <button className="btn btn-xs">
            <Button
              onClickHandler={handleClick}
              value=""
              title="All Products"
            />
          </button>
          <button className="btn btn-xs">
            <Button onClickHandler={handleClick} value="ARROW" title="ARROW" />
          </button>
          <button className="btn btn-xs">
            <Button
              onClickHandler={handleClick}
              value="El Senor"
              title="El Senor"
            />
          </button>
          <button className="btn btn-xs">
            <Button onClickHandler={handleClick} value="PETER ENGLAND" title="PETER ENGLAND" />
          </button>
          <button className="btn btn-xs">
            <Button onClickHandler={handleClick} value="FUBAR" title="FUBAR" />
          </button>
          <button className="btn btn-xs">
            <Button onClickHandler={handleClick} value="3BROS" title="3BROS" />
          </button>
          <button className="btn btn-xs">
            <Button onClickHandler={handleClick} value="ARROW" title="ARROW" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
