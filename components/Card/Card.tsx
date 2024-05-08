import Image from "next/image";
import React from "react";
import CardLink from "../CardLink/CardLink";

const Card: React.FC = () => {
  return (
    <section className="card-bg flex flex-col justify-center items-center rounded-lg p-14 max-w-md">
      <header className="flex flex-col items-center justify-center w-full">
        <Image
          src="https://github.com/LucasBaitz.png"
          alt="Github picture"
          width={100}
          height={100}
          className="rounded-full"
        />
        <h1 className="text-white text-3xl mt-5 text-center">Lucas Baitz</h1>
        <p className="text-white text-lg text-description text-center">São Paulo, Brazil</p>
        <p className="text-white text-sm my-5 text-center">
          &ldquo;Full-stack developer in love with C# 💜&ldquo;
        </p>
      </header>

      <ul className="flex flex-col gap-3 items-center w-full">
        <li className="w-full">
          <CardLink href="https://github.com/LucasBaitz" target="_blank">
            GitHub
          </CardLink>
        </li>
        <li className="w-full">
          <CardLink
            href="https://www.frontendmentor.io/profile/LucasBaitz"
            target="_blank"
          >
            Frontend Mentor
          </CardLink>
        </li>
        <li className="w-full">
          <CardLink
            href="https://www.linkedin.com/in/lucasbaitz/"
            target="_blank"
          >
            LinkedIn
          </CardLink>
        </li>
        <li className="w-full">
          <CardLink href="/not-found">
            Twitter
          </CardLink>
        </li>
        <li className="w-full">
          <CardLink href="/not-found">
            Instagram
          </CardLink>
        </li>
      </ul>
    </section>
  );
};

export default Card;
