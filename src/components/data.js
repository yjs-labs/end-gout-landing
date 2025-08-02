// @ts-check
import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import feetHurtIcon from "../../public/icon/gout.png";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import Image from "next/image";
import React from "react";

const benefitOne = {
  title: "Do any of these sound familiar?",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Sudden, stabbing pain in your feet or big toe — out of nowhere",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: (
        <Image
          alt="gout-feet-icon"
          src={feetHurtIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title:
        "You’ve tried cutting out meat, beer, and even fun — but still no relief",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title:
        "Your meds help a little, but the side effects are worse than the gout",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title: "You’re tired of living in fear of the next painful flare-up",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
    {
      title:
        "You feel alone — like no one really gets what you’re going through",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
