import React from "react";

import { Button, Img, List, Text } from "components";

type AboutUsTeam8Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingOne"
  | "headingOne"
  | "loremipsumdolor"
  | "usernameone"
  | "userroleone"
  | "userdescriptionone"
  | "done"
  | "usernametwo"
  | "userroletwo"
  | "userdescriptiontwo"
  | "done1"
  | "usernamethree"
  | "userrolethree"
  | "userdescriptionthree"
  | "done2"
> &
  Partial<{
    subheadingOne: string;
    headingOne: string;
    loremipsumdolor: string;
    usernameone: string;
    userroleone: string;
    userdescriptionone: string;
    done: string;
    usernametwo: string;
    userroletwo: string;
    userdescriptiontwo: string;
    done1: string;
    usernamethree: string;
    userrolethree: string;
    userdescriptionthree: string;
    done2: string;
  }>;

const AboutUsTeam8: React.FC<AboutUsTeam8Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-start justify-start w-full">
          <Text
            className="text-base text-black-900 w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheadingOne}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.loremipsumdolor}
            </Text>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
          orientation="horizontal"
        >
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x412.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.usernameone}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userroleone}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescriptionone}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-black-900_42 cursor-pointer font-medium font-roboto h-9 min-w-[73px] rounded text-center text-sm tracking-[1.25px] uppercase"
                color="black_900_1e"
                size="md"
                variant="fill"
              >
                {props?.done}
              </Button>
            </div>
          </div>
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x412.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.usernametwo}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userroletwo}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescriptiontwo}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-black-900_42 cursor-pointer font-medium font-roboto h-9 min-w-[73px] rounded text-center text-sm tracking-[1.25px] uppercase"
                color="black_900_1e"
                size="md"
                variant="fill"
              >
                {props?.done1}
              </Button>
            </div>
          </div>
          <div className="border border-gray-400 border-solid flex flex-1 flex-col items-start justify-start rounded-[20px] w-full">
            <Img
              className="h-[326px] md:h-auto object-cover rounded-tl-[20px] rounded-tr-[20px] w-full"
              src="images/img_images_326x412.png"
              alt="images"
            />
            <div className="flex flex-col items-start justify-start p-4 w-full">
              <Text
                className="text-black-900_dd text-xl tracking-[0.25px] w-auto"
                size="txtRobotoMedium20Black900dd"
              >
                {props?.usernamethree}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="text-black-900_99 text-sm tracking-[0.10px] w-auto"
                size="txtRobotoRegular14Black90099"
              >
                {props?.userrolethree}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 px-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[332px] md:max-w-full text-base text-black-900"
                size="txtRobotoLight16"
              >
                {props?.userdescriptionthree}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center p-2 w-full">
              <Button
                className="!text-black-900_42 cursor-pointer font-medium font-roboto h-9 min-w-[73px] rounded text-center text-sm tracking-[1.25px] uppercase"
                color="black_900_1e"
                size="md"
                variant="fill"
              >
                {props?.done2}
              </Button>
            </div>
          </div>
        </List>
      </div>
    </>
  );
};

AboutUsTeam8.defaultProps = {
  subheadingOne: "Revolutionizing",
  headingOne: "Meet Our Team",
  loremipsumdolor: "Get to know the talented individuals driving our platform",
  usernameone: "Austin Duffy Founder",
  userroleone: "CEO",
  userdescriptionone:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  done: "Done",
  usernametwo: "Austin Duffy Founder",
  userroletwo: "CEO",
  userdescriptiontwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  done1: "Done",
  usernamethree: "Austin Duffy Founder",
  userrolethree: "CEO",
  userdescriptionthree:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  done2: "Done",
};

export default AboutUsTeam8;
