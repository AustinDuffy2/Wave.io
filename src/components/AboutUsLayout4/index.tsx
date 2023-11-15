import React from "react";

import { Button, Img, Text } from "components";

type AboutUsLayout4Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheading"
  | "heading"
  | "description"
  | "searchtext"
  | "text"
  | "recommendationtext"
  | "textOne"
  | "learnmoretext"
  | "logintext"
> &
  Partial<{
    subheading: string;
    heading: string;
    description: string;
    searchtext: string;
    text: string;
    recommendationtext: string;
    textOne: string;
    learnmoretext: string;
    logintext: string;
  }>;

const AboutUsLayout4: React.FC<AboutUsLayout4Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-8 items-center justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-full">
                <Text
                  className="text-base text-black-900 text-center w-auto"
                  size="txtRobotoSemiBold16"
                >
                  {props?.subheading}
                </Text>
                <div className="flex flex-col gap-6 items-start justify-start w-full">
                  <Text
                    className="leading-[130.00%] max-w-[558px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center"
                    size="txtRobotoBold32Black900"
                  >
                    {props?.heading}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-center text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.description}
                  </Text>
                </div>
              </div>
              <div className="flex sm:flex-col flex-row gap-6 items-start justify-center py-2 w-full">
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.searchtext}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.text}
                  </Text>
                </div>
                <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-black-900 text-xl w-full"
                    size="txtRobotoBold20"
                  >
                    {props?.recommendationtext}
                  </Text>
                  <Text
                    className="leading-[150.00%] max-w-[267px] md:max-w-full text-black-900 text-lg"
                    size="txtRobotoLight18"
                  >
                    {props?.textOne}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-center justify-center pt-4 w-full">
              <Button
                className="cursor-pointer font-roboto min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500"
                size="md"
                variant="fill"
              >
                {props?.learnmoretext}
              </Button>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[116px]"
                rightIcon={
                  <Img
                    className="h-6 ml-3"
                    src="images/img_map.svg"
                    alt="map"
                  />
                }
                shape="round"
                color="light_blue_500_72"
                size="md"
                variant="fill"
              >
                <div className="!text-white-A700 font-roboto text-base text-left">
                  {props?.logintext}
                </div>
              </Button>
            </div>
          </div>
          <Img
            className="h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation.png"
            alt="heroanimation"
          />
        </div>
      </div>
    </>
  );
};

AboutUsLayout4.defaultProps = {
  subheading: "Revolutionize",
  heading: "Discover Your Dream Property with Our AI Platform",
  description:
    "Our AI platform utilizes advanced technology to provide users with an effortless way to find the perfect property. With our powerful search capabilities, you can easily explore a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world.",
  searchtext: "Efficient Search",
  text: "Quickly find the properties that meet your specific criteria and preferences.",
  recommendationtext: "Smart Recommendations",
  textOne:
    "Receive personalized property recommendations based on your search history and preferences.",
  learnmoretext: "Learn More",
  logintext: "Login",
};

export default AboutUsLayout4;
