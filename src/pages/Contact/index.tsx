import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactTeam1 from "components/ContactTeam1";
import HomeFooter3desktop from "components/HomeFooter3desktop";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-[120px] items-center justify-start mx-auto md:px-10 sm:px-5 px-[150px] py-10 w-auto sm:w-full md:w-full">
        <header className="bg-white-A700 border-b border-black-900 border-solid flex h-[72px] md:h-auto items-center justify-center px-4 md:px-5 py-5 w-full">
          <div className="flex flex-row gap-8 items-center justify-center sm:min-w-[] w-full">
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
        <ContactContact27 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto w-full" />
        <ContactTeam1 className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <AboutUsContact15 className="flex flex-col items-start justify-center max-w-[1140px] mx-auto w-full" />
        <ContactContact4 className="flex flex-col gap-5 items-start justify-start max-w-[1140px] mx-auto py-2.5 w-full" />
        <HomeFooter3desktop className="flex flex-col gap-5 items-center justify-start max-w-[1140px] mx-auto pt-5 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
