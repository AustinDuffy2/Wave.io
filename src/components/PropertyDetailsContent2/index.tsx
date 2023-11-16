import React from "react";

import { Img, Text } from "components";

type PropertyDetailsContent2Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "headingtext"
  | "descriptiontext"
  | "descriptiononetext"
  | "descriptiontwotext"
> &
  Partial<{
    headingtext: string;
    descriptiontext: string;
    descriptiononetext: string;
    descriptiontwotext: string;
  }>;

const PropertyDetailsContent2: React.FC<PropertyDetailsContent2Props> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingtext}
            </Text>
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptiontext}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptiononetext}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="leading-[150.00%] max-w-[558px] md:max-w-full text-black-900 text-lg"
                  size="txtRobotoLight18"
                >
                  {props?.descriptiontwotext}
                </Text>
              </div>
            </div>
          </div>
          <Img
            className="flex-1 h-[500px] md:h-auto max-h-[500px] object-cover sm:w-[] md:w-[]"
            src="images/img_heroanimation_2.png"
            alt="heroanimation_One"
          />
        </div>
      </div>
    </>
  );
};

PropertyDetailsContent2.defaultProps = {
  headingtext: "Property Overview",
  descriptiontext:
    "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  descriptiononetext:
    "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  descriptiontwotext:
    "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",
};

export default PropertyDetailsContent2;
