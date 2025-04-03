import Link from "next/link";

const Navigation = () => {
  return (
    <div className="menu">
      <nav>
        <ul className="flex gap-[4.2rem]">
          <li className="list-none text-lg">
            <a href="/mac">Mac</a>
          </li>
          <li className="list-none text-lg">
            <Link href="/iphone">iPhone</Link>

          </li>
          <li className="list-none text-lg">
            <Link href="/ipad">iPad</Link>
          </li>
          <li className="list-none text-lg">
            <Link href="/iWatch">iWatch</Link>
          </li>
          <li className="list-none text-lg">
            <Link href="/support">Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
