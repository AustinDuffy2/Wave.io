import React from "react";

import { Button, Text } from "components";

type HomeContentProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingtext" | "bodytext" | "buttontext"
> &
  Partial<{ headingtext: string; bodytext: string; buttontext: string }>;

const HomeContent: React.FC<HomeContentProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-black-900 text-center text-xl w-full"
            size="txtRobotoMedium20"
          >
            {props?.headingtext}
          </Text>
          <Text
            className="text-black-900 text-center text-lg w-full"
            size="txtRobotoLight18"
          >
            {props?.bodytext}
          </Text>
        </div>
        <Button
          className="cursor-pointer font-roboto min-w-[85px] text-base text-center"
          shape="round"
          color="light_blue_500"
          size="md"
          variant="fill"
        >
          {props?.buttontext}
        </Button>
      </div>
    </>
  );
};

HomeContent.defaultProps = {
  headingtext: "Join Us!",
  bodytext: "Exciting opportunities to be part of our team",
  buttontext: "More",
};

export default HomeContent;
