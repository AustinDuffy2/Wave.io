import React from "react";

import { Button, Img } from "components";

type Header11Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header11: React.FC<Header11Props> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="bg-white-A700 border-b border-black-900 border-solid flex flex-col h-[72px] md:h-auto items-center justify-center px-4 py-5 w-full">
          <div className="flex flex-row gap-8 items-center justify-center w-full">
            <Img
              className="flex-1 h-[25px] sm:h-[] md:h-[] max-h-[25px] sm:max-h-[] md:min-w-0"
              src="images/img_column.svg"
              alt="column"
            />
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Button
                className="cursor-pointer font-roboto sm:hidden min-w-[80px] text-base text-center"
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

Header11.defaultProps = {};

export default Header11;
