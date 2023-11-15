import React from "react";

import { Button, Img, List, Text } from "components";

type ContactTeam1Props = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "subheadingOne"
  | "headingOne"
  | "languageOne"
  | "name"
  | "jobtitle"
  | "text"
  | "nameOne"
  | "jobtitleOne"
  | "loremipsumdolorTwo"
  | "nameTwo"
  | "jobtitleTwo"
  | "textOne"
  | "nameThree"
  | "jobtitleThree"
  | "textTwo"
  | "name1"
  | "jobtitle1"
  | "text1"
  | "nameone1"
  | "jobtitleone1"
  | "loremipsumdolortwo1"
  | "nametwo1"
  | "jobtitletwo1"
  | "textone1"
  | "namethree1"
  | "jobtitlethree1"
  | "texttwo1"
  | "headingTwo"
  | "languageTwo"
  | "more"
> &
  Partial<{
    subheadingOne: string;
    headingOne: string;
    languageOne: string;
    name: string;
    jobtitle: string;
    text: string;
    nameOne: string;
    jobtitleOne: string;
    loremipsumdolorTwo: string;
    nameTwo: string;
    jobtitleTwo: string;
    textOne: string;
    nameThree: string;
    jobtitleThree: string;
    textTwo: string;
    name1: string;
    jobtitle1: string;
    text1: string;
    nameone1: string;
    jobtitleone1: string;
    loremipsumdolortwo1: string;
    nametwo1: string;
    jobtitletwo1: string;
    textone1: string;
    namethree1: string;
    jobtitlethree1: string;
    texttwo1: string;
    headingTwo: string;
    languageTwo: string;
    more: string;
  }>;

const ContactTeam1: React.FC<ContactTeam1Props> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-black-900 text-center text-xl w-auto"
            size="txtRobotoBold20"
          >
            {props?.subheadingOne}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32Black900"
            >
              {props?.headingOne}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoLight18"
            >
              {props?.languageOne}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-[100px] items-center justify-start w-full">
          <List
            className="flex flex-col gap-16 items-center w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="gap-6 grid md:grid-cols-1 grid-cols-3 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.name}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitle}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.text}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag_One"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.nameOne}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitleOne}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.loremipsumdolorTwo}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag_Two"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.nameTwo}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitleTwo}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.textOne}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_placeholderimage.png"
                    alt="placeholderimag_Three"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col gap-[5px] items-center justify-start w-full">
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoSemiBold20"
                      >
                        {props?.nameThree}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-lg w-full"
                        size="txtRobotoRegular18"
                      >
                        {props?.jobtitleThree}
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoLight18"
                    >
                      {props?.textTwo}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_airplane.svg"
                      alt="airplane_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble_Three"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col items-start justify-start my-0 w-full">
              <div className="flex flex-col gap-6 items-center justify-start w-full">
                <div className="gap-6 grid md:grid-cols-1 grid-cols-3 items-center justify-between w-full">
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.name1}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitle1}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.text1}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag_One"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.nameone1}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitleone1}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.loremipsumdolortwo1}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane_One"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble_One"
                      />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col gap-6 items-center justify-start w-full">
                    <Img
                      className="h-20 md:h-auto object-cover w-20"
                      src="images/img_placeholderimage.png"
                      alt="placeholderimag_Two"
                    />
                    <div className="flex flex-col gap-4 items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                          size="txtRobotoBold24"
                        >
                          {props?.nametwo1}
                        </Text>
                        <Text
                          className="text-black-900 text-center text-xl w-full"
                          size="txtRobotoBold20"
                        >
                          {props?.jobtitletwo1}
                        </Text>
                      </div>
                      <Text
                        className="leading-[150.00%] max-w-[364px] md:max-w-full text-black-900 text-center text-lg"
                        size="txtRobotoLight18"
                      >
                        {props?.textone1}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                      <Img
                        className="h-6 w-6"
                        src="images/img_iconlinkedin.svg"
                        alt="iconlinkedin_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_airplane.svg"
                        alt="airplane_Two"
                      />
                      <Img
                        className="h-6 w-6"
                        src="images/img_icondribble.svg"
                        alt="icondribble_Two"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-center justify-start w-full">
                  <Img
                    className="h-20 md:h-auto object-cover w-20"
                    src="images/img_placeholderimage.png"
                    alt="placeholderimag_Three"
                  />
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-black-900 text-center sm:text-xl w-full"
                        size="txtRobotoBold24"
                      >
                        {props?.namethree1}
                      </Text>
                      <Text
                        className="text-black-900 text-center text-xl w-full"
                        size="txtRobotoBold20"
                      >
                        {props?.jobtitlethree1}
                      </Text>
                    </div>
                    <Text
                      className="text-black-900 text-center text-lg w-full"
                      size="txtRobotoLight18"
                    >
                      {props?.texttwo1}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-3.5 items-start justify-start w-auto">
                    <Img
                      className="h-6 w-6"
                      src="images/img_iconlinkedin.svg"
                      alt="iconlinkedin_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_airplane.svg"
                      alt="airplane_Three"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_icondribble.svg"
                      alt="icondribble_Three"
                    />
                  </div>
                </div>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32Black900"
              >
                {props?.headingTwo}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoLight18"
              >
                {props?.languageTwo}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-roboto min-w-[85px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.more}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

ContactTeam1.defaultProps = {
  subheadingOne: "Tagline",
  headingOne: "Our team",
  languageOne: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  name: "Full name",
  jobtitle: "Job title",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  nameOne: "Full name",
  jobtitleOne: "Job title",
  loremipsumdolorTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  nameTwo: "Full name",
  jobtitleTwo: "Job title",
  textOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  nameThree: "Full name",
  jobtitleThree: "Job title",
  textTwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  name1: "Full name",
  jobtitle1: "Job title",
  text1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  nameone1: "Full name",
  jobtitleone1: "Job title",
  loremipsumdolortwo1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  nametwo1: "Full name",
  jobtitletwo1: "Job title",
  textone1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  namethree1: "Full name",
  jobtitlethree1: "Job title",
  texttwo1:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  headingTwo: "We’re hiring!",
  languageTwo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  more: "More",
};

export default ContactTeam1;
