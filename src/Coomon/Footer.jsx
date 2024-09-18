import imges from '../assets/foo.png';

const Footer = () => {
  return (
    <div className=''>
      <footer className="footer text-base-content bg-base-200  p-10">
        <nav>
          <img className='size-16' src={imges} alt="" />
          <p className='max-w-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus laudantium molestiae soluta assumenda? Enim nostrum facilis fuga, perferendis culpa voluptatibus voluptas quis itaque qui debitis, aperiam quidem adipisci consectetur ducimus.</p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Deilvery</a>
        </nav>
        <nav>
          <h6 className="footer-title">GET IN TOUCH</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside className="footer footer-center text-base-content p-2">
          <aside>
            <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
          </aside>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;