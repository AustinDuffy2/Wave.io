import React from "react";

import { Button, Img, List, Text } from "components";

type HomeColumnOneProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "price"
  | "ownedfromproperOne"
  | "dailycompleted"
  | "dailycompleted1"
  | "regularclients"
  | "reagularclientsOne"
  | "price2"
  | "ownedfromproperone1"
> &
  Partial<{
    price: string;
    ownedfromproperOne: JSX.Element | string;
    dailycompleted: string;
    dailycompleted1: JSX.Element | string;
    regularclients: string;
    reagularclientsOne: string;
    price2: string;
    ownedfromproperone1: JSX.Element | string;
  }>;

const HomeColumnOne: React.FC<HomeColumnOneProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-10 items-center justify-start w-full">
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="flex flex-1 flex-col gap-5 items-center justify-start sm:ml-[0] rounded-[20px] w-full">
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img className="h-8" src="images/img_frame.svg" alt="frame" />
              </Button>
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.price}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[364px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.ownedfromproperOne}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-start sm:ml-[0] rounded-[20px] w-full">
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img
                  className="h-8"
                  src="images/img_frame_orange_a700.svg"
                  alt="frame"
                />
              </Button>
              <div className="flex flex-col gap-3.5 items-center justify-center w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.dailycompleted}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[364px] md:max-w-full text-base text-black-900 text-center"
                  size="txtRobotoRegular16"
                >
                  {props?.dailycompleted1}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-5 items-center justify-start mb-6 sm:ml-[0] rounded-[20px] w-full">
              <Button
                className="flex h-[60px] items-center justify-center w-[60px]"
                shape="circle"
                color="white_A700"
                size="lg"
                variant="fill"
              >
                <Img className="h-8" src="images/img_frame.svg" alt="frame" />
              </Button>
              <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                <Text
                  className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
                  size="txtRobotoBold24"
                >
                  {props?.regularclients}
                </Text>
                <Text
                  className="text-base text-black-900 text-center w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.reagularclientsOne}
                </Text>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-5 items-center justify-start rounded-[20px] w-full">
            <Button
              className="flex h-[60px] items-center justify-center w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img className="h-8" src="images/img_frame.svg" alt="frame" />
            </Button>
            <div className="flex flex-col gap-3.5 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-black-900 text-center text-shadow-ts sm:text-xl w-full"
                size="txtRobotoBold24"
              >
                {props?.price2}
              </Text>
              <Text
                className="leading-[150.00%] max-w-[1140px] md:max-w-full text-base text-black-900 text-center"
                size="txtRobotoRegular16"
              >
                {props?.ownedfromproperone1}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnOne.defaultProps = {
  price: "$15.4M",
  ownedfromproperOne: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
  dailycompleted: "500",
  dailycompleted1: (
    <>
      Daily completed <br />
      transactions
    </>
  ),
  regularclients: "600+",
  reagularclientsOne: "Reagular Clients",
  price2: "$15.4M",
  ownedfromproperone1: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
};

export default HomeColumnOne;
