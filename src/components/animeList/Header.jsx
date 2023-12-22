import Link from "next/link";


const Header = ({title,linkHref,linkText}) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="py-4 font-bold text-2xl">{title}</h1>
      {linkHref && linkText ? (
        <Link
        href={linkHref}
        className="hover:text-color-accent transition-all duration-150 underline">
        {linkText}
      </Link>
      ):null}
      
    </div>
  );
}

export default Header