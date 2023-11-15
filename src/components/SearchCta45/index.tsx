import React from "react";

import { Button, Text } from "components";

type SearchCta45Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "headingTwo" | "textThree" | "signuplabel" | "learnmorelabel"
> &
  Partial<{
    headingTwo: string;
    textThree: string;
    signuplabel: string;
    learnmorelabel: string;
  }>;

const SearchCta45: React.FC<SearchCta45Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <Text
            className="leading-[130.00%] max-w-[570px] md:max-w-full md:text-3xl sm:text-[28px] text-[32px] text-black-900"
            size="txtRobotoBold32Black900"
          >
            {props?.headingTwo}
          </Text>
          <Text
            className="text-black-900 text-lg w-full"
            size="txtRobotoLight18"
          >
            {props?.textThree}
          </Text>
        </div>
        <div className="flex flex-1 flex-row gap-4 items-start justify-end w-full">
          <Button
            className="cursor-pointer font-roboto min-w-[103px] text-base text-center"
            shape="round"
            color="light_blue_500"
            size="md"
            variant="fill"
          >
            {props?.signuplabel}
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-roboto min-w-[129px] text-base text-center"
            shape="round"
            color="light_blue_500_72"
            size="lg"
            variant="fill"
          >
            {props?.learnmorelabel}
          </Button>
        </div>
      </div>
    </>
  );
};

SearchCta45.defaultProps = {
  headingTwo: "Unlock Advanced Search Features Today",
  textThree: "Discover the Perfect Property for You",
  signuplabel: "Sign Up",
  learnmorelabel: "Learn More",
};

export default SearchCta45;
