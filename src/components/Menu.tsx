import Link from 'next/link';

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre" scroll={false}>
          Sobre
        </Link>
      </li>
       <li>
        <Link href="/imc" scroll={false}>
          Imc
        </Link>
      </li>
    </ul>
  );
}