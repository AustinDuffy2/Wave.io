import React from "react";

import { Button, Img } from "components";

type Header1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header1: React.FC<Header1Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col h-[72px] md:h-auto items-center justify-center px-4 py-5 w-full">
          <div className="flex md:flex-col flex-row gap-8 items-center justify-center w-full">
            <Img
              className="flex-1 h-[25px] max-h-[25px] sm:w-[] md:w-[]"
              src="images/img_column.svg"
              alt="column"
            />
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Button
                className="cursor-pointer font-roboto min-w-[80px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="md"
                variant="fill"
              >
                Login
              </Button>
              <div className="flex flex-col items-start justify-start p-3 w-12">
                <Img
                  className="h-6 w-6"
                  src="images/img_iconmenu.svg"
                  alt="iconmenu"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header1.defaultProps = {};

export default Header1;
