import Link from "next/link";

export default function Header(data:any) {
  return (
    <>
      <div className={`${data.font.className} link-parent`}>
        <ul className="links">
          <li className="link"><Link href="">Works</Link></li>
          <li className="link"><Link href="">Blogs</Link></li>
          <li className="link"><Link href="">Contact</Link></li>
        </ul>
      </div>
    </>
  );
}
