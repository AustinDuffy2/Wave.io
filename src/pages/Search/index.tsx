import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import HomeFooter3desktop from "components/HomeFooter3desktop";
import SearchCta45 from "components/SearchCta45";

const SearchPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 border-b border-black-900 border-solid flex h-[72px] md:h-auto items-center justify-center px-4 md:px-5 py-5 w-full">
          <div className="flex flex-row gap-8 items-center justify-center w-full">
            <Img
              className="flex-1 h-[25px] max-h-[25px] md:w-[0]"
              src="images/img_column.svg"
              alt="column"
            />
            <div className="flex flex-row gap-6 items-center justify-center w-auto">
              <Button
                className="cursor-pointer sm:hidden min-w-[80px] text-base text-center"
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
        </header>
        <AIPlatformLayout121
          className="flex flex-col gap-10 items-start justify-start max-w-[1140px] mx-auto w-full"
          signupbuttontext="Login"
        />
        <Img
          className="h-14 max-w-[1140px] mx-auto w-full"
          src="images/img_logo3.svg"
          alt="logoThree"
        />
        <AIPlatformLayout27 className="flex flex-col gap-10 items-start justify-start max-w-[1140px] mx-auto w-full" />
        <SearchCta45 className="flex md:flex-col flex-row md:gap-5 items-start justify-center max-w-[1140px] mx-auto w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
