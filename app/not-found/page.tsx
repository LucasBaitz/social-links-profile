import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen main-bg">
      <Image
        src="/assets/images/notfound.webp"
        alt="Not Found"
        className="mb-4"
        width={500}
        height={500}
      />
      <h1 className="text-4xl text-gray-400 mb-4 text-center">
        <span className="font-bold">404</span> <br /> Social midia profile Not Found
      </h1>
      <p className="text-xl text-gray-400 mb-4">It looks like i dont use this type of social midia 😅</p>
      <Link
        href="/"
        className="card-btn text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go Back
      </Link>
    </div>
  );
};

export default NotFoundPage;
