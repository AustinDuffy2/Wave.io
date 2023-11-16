import React from "react";

import { Button, Img, Line, List, Text } from "components";

type AIPlatformLayout121Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingtext"
  | "headingtext"
  | "searchtext"
  | "logintext"
  | "inputcriteriatext"
  | "receivesuggestionstext"
  | "exploreoptionstext"
  | "makeinformeddecisionstext"
  | "heading"
  | "text"
  | "heading1"
  | "text1"
> &
  Partial<{
    subheadingtext: string;
    headingtext: string;
    searchtext: string;
    logintext: string;
    inputcriteriatext: string;
    receivesuggestionstext: JSX.Element | string;
    exploreoptionstext: string;
    makeinformeddecisionstext: string;
    heading: string;
    text: string;
    heading1: string;
    text1: string;
  }>;

const AIPlatformLayout121: React.FC<AIPlatformLayout121Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-8 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-black-900 text-lg w-auto"
              size="txtRobotoLight18"
            >
              {props?.subheadingtext}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.headingtext}
            </Text>
          </div>
          <div className="flex flex-row gap-6 items-center justify-start pt-4 w-[295px]">
            <Button
              className="cursor-pointer font-roboto min-w-[98px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.searchtext}
            </Button>
            <Button
              className="cursor-pointer flex items-center justify-center min-w-[116px]"
              rightIcon={
                <Img className="h-6 ml-3" src="images/img_map.svg" alt="map" />
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
        <div className="flex flex-col items-start justify-start w-full">
          <List
            className="flex flex-col gap-4 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.inputcriteriatext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.receivesuggestionstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.exploreoptionstext}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.makeinformeddecisionstext}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-4 items-center justify-start w-auto">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
                <Line className="bg-black-900 h-[100px] w-0.5" />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.text}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-10 items-start justify-start w-full">
              <div className="flex flex-col items-center justify-start w-12">
                <Img
                  className="h-12 w-12"
                  src="images/img_iconrelume.svg"
                  alt="iconrelume"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="text-black-900 text-lg w-full"
                  size="txtRobotoLight18"
                >
                  {props?.text1}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout121.defaultProps = {
  subheadingtext: "Revolutionize",
  headingtext: "Streamline Your Property Search with AI",
  searchtext: "Search",
  logintext: "Login",
  inputcriteriatext: "Input Criteria",
  receivesuggestionstext: (
    <>
      Tell us what you&#39;re looking for and let our AI platform do the rest.
    </>
  ),
  exploreoptionstext: "Receive Suggestions",
  makeinformeddecisionstext:
    "Get personalized property suggestions based on your criteria and preferences.",
  heading: "Explore Options",
  text: "Browse through a wide range of properties that match your requirements.",
  heading1: "Make Informed Decisions",
  text1:
    "Access detailed property information and make confident choices for your next investment.",
};

export default AIPlatformLayout121;
