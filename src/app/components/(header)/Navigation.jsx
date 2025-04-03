const Navigation = () => {
  return (
    <div className="menu">
      <nav>
        <ul className="flex gap-[4.2rem]">
          <li className="list-none text-lg">
            <a href="/page.js">Mac</a>
          </li>
          <li className="list-none text-lg">
            <a href="#">iPhone</a>
          </li>
          <li className="list-none text-lg">
            <a href="#">iPad</a>
          </li>
          <li className="list-none text-lg">
            <a href="#">iWatch</a>
          </li>
          <li className="list-none text-lg">
            <a href="#">Support</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
