import Image from "next/image";

const Header = () => {
  return (
    <div className="flex h-28 md:lg:justify-start md:lg:pl-96  bg-yellow-400/10 border-b border-yellow-400 items-center justify-center ">
      <Image src="/logo.png" alt="logo" width={130} height={10} />
    </div>
  );
};

export default Header;
