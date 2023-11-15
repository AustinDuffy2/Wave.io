import React from "react";

import { Button, Img, Text } from "components";

type HomeHerolanding1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "usertext"
  | "userdescription"
  | "usersearch"
  | "usersignup"
  | "userwehavethebest"
  | "userjoinourcommunity"
> &
  Partial<{
    usertext: string;
    userdescription: string;
    usersearch: string;
    usersignup: string;
    userwehavethebest: string;
    userjoinourcommunity: JSX.Element | string;
  }>;

const HomeHerolanding1: React.FC<HomeHerolanding1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-[30px] items-center justify-center w-full">
            <Text
              className="leading-[120.00%] max-w-[558px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtRobotoCondensedBold48"
            >
              {props?.usertext}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                size="txtRobotoLight18"
              >
                {props?.userdescription}
              </Text>
            </div>
            <div className="flex flex-row gap-[15.37px] items-center justify-center w-full">
              <Button
                className="cursor-pointer font-roboto min-w-[100px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="lg"
                variant="fill"
              >
                {props?.usersearch}
              </Button>
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] text-base text-center"
                shape="round"
                color="light_blue_500_72"
                size="lg"
                variant="fill"
              >
                {props?.usersignup}
              </Button>
            </div>
            <div className="flex flex-col gap-[30px] items-start justify-end w-full">
              <Text
                className="text-base text-black-900 w-full"
                size="txtRobotoLight16"
              >
                {props?.userwehavethebest}
              </Text>
              <div className="flex flex-col gap-6 items-start justify-start p-2.5 w-full">
                <div className="flex relative w-[111px]">
                  <div className="flex my-auto w-[71%]">
                    <div className="flex my-auto w-[74%]">
                      <Img
                        className="h-[37px] ml-[undefinedpx] my-auto rounded-[50%] w-[37px] z-[1]"
                        src="images/img_ellipse1.png"
                        alt="ellipseOne"
                      />
                      <Img
                        className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                        src="images/img_ellipse2.png"
                        alt="ellipseTwo"
                      />
                    </div>
                    <Img
                      className="h-[37px] ml-[-16.19px] my-auto rounded-[50%] w-[37px] z-[1]"
                      src="images/img_ellipse3.png"
                      alt="ellipseThree"
                    />
                  </div>
                  <Img
                    className="h-[37px] ml-[-16.18px] my-auto rounded-[50%] w-[37px] z-[1]"
                    src="images/img_ellipse4.png"
                    alt="ellipseFour"
                  />
                </div>
                <Text
                  className="leading-[150.00%] max-w-[538px] md:max-w-full text-base text-black-900"
                  size="txtRobotoLight16"
                >
                  {props?.userjoinourcommunity}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 md:h-auto max-h-[500px] sm:min-w-0 object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation_500x558.png"
            alt="heroanimation"
          />
        </div>
      </div>
    </>
  );
};

HomeHerolanding1.defaultProps = {
  usertext: "Find the perfect property for your needs today",
  userdescription:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  usersearch: "Search",
  usersignup: "Sign Up",
  userwehavethebest: "We have the best AI image generator",
  userjoinourcommunity: (
    <>
      Join our Community,
      <br />
      We are waiting for you
    </>
  ),
};

export default HomeHerolanding1;
