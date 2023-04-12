import Link from "next/link";
import Image from "next/future/image";

import { Data, IProps } from "./types";
import { GithubLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";

export const Footer = ({ logo }: IProps) => {

  const data: Data = {
    listIconsAndLinks: [
      {
        path: "https://github.com/GabrielSS187/Landing-Page-Next",
        icon: <GithubLogo size={36} color="#ff7300" />
      },
      {
        path: "https://www.linkedin.com/in/gabriel-silva-souza-developer",
        icon: <LinkedinLogo size={36} color="#ff7300" />
      },
      {
        path: "2",
        icon: <WhatsappLogo size={36} color="#ff7300" />
      }
    ]
  };

  return (
    <footer id="contact" className="flex flex-row flex-wrap items-center justify-around p-10">
      <Link href="/" className="w-1/2 pl-5 mb-2 lg:visible lg:w-auto lg:pl-0 lg:mb-0">
        <a>
          <Image src={logo} alt="logo" width="70%"/>
        </a>
      </Link>
      <div className="flex items-center justify-around w-2/3 pt-5 lg:pt-0 lg:w-1/3">
        {
          data.listIconsAndLinks.map((item) => {
            return (
              <Link key={item.path} href={item.path} target="_blank">
                <a className="transition-all hover:p-1 hover:border-2 hover:border-solid hover:rounded-full hover:border-orange-500">
                  {item.icon}
                </a>
              </Link>
            )
          })
        }
      </div>
      <div className="mt-10 text-lg text-blue-800 lg:mt-0">
          Copyright 2022 치트마켓
      </div>
    </footer>
  );
};