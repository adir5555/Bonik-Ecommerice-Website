import imges from "../assets/foo.png";
import "./Fooerss/style.css";

const Footer = () => {
  return (
    <div className="">
      <div
        className="footer-top   "
        style={{
          backgroundImage: "url('../../images/footer-illustration.png')",
        }}
      >
        <footer className="footer p-10 sm:px-28">
          <nav>
            <div className="flex items-center gap-2">
              <img className="size-16" src={imges} alt="" />
              <h2 className="text-5xl">sarkar shop</h2>
            </div>
            <p className="max-w-md text-lg ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
              laudantium molestiae soluta assumenda? Enim nostrum facilis fuga,
              perferendis culpa voluptatibus voluptas quis itaque qui debitis,
              aperiam quidem adipisci consectetur ducimus.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">Company</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Deilvery</a>
          </nav>
          <nav>
            <h6 className="footer-title text-xl">GET IN TOUCH</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>

      <footer className="footer bg-base-200  border-base-300 border-t px-10 py-4">
        <aside className="footer footer-center text-base-content p-2">
          <aside>
            <p>
              Copyright © {new Date().getFullYear()} - All right reserved by
              ACME Industries Ltd
            </p>
          </aside>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
