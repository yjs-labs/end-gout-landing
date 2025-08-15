import feetHurtIcon from "../../public/icon/feet.png";
import noMeatIcon from "../../public/icon/no_meat.png";
import medicineIcon from "../../public/icon/medicine.png";
import feetInjectionIcon from "../../public/icon/feet_injection.png";
import aloneIcon from "../../public/icon/alone.png";
import wakeUpIcon from "../../public/icon/wake-up.png";
import eatingIcon from "../../public/icon/food.png";
import peopleIcon from "../../public/icon/people.png";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import goutFlareAfterMealImg from "../../public/img/gout_flare_after_meal.png";
import Image from "next/image";
import { ReactNode } from "react";

interface Bullet {
  title: string;
  desc: string;
  icon: ReactNode;
}

interface Benefit {
  title: string;
  desc: string;
  image: any; // Next.js static imports are type 'any' unless you use custom types
  bullets: Bullet[];
}

const benefitOne: Benefit = {
  title: "Do any of these sound familiar?",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: goutFlareAfterMealImg,
  bullets: [
    {
      title: "Sudden, stabbing pain in your feet or big toe — out of nowhere",
      desc: "Then explain the first point briefly in one or two lines.",
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
      icon: (
        <Image
          alt="no-meat-icon"
          src={noMeatIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title:
        "Your meds help a little, but the side effects are worse than the gout",
      desc: "This will be your last bullet point in this section.",
      icon: (
        <Image
          alt="no-meat-icon"
          src={medicineIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title: "You’re tired of living in fear of the next painful flare-up",
      desc: "This will be your last bullet point in this section.",
      icon: (
        <Image
          alt="no-meat-icon"
          src={feetInjectionIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title:
        "You feel alone — like no one really gets what you’re going through",
      desc: "This will be your last bullet point in this section.",
      icon: (
        <Image
          alt="no-meat-icon"
          src={aloneIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
  ],
};

const benefitTwo: Benefit = {
  title: "End the Fear of Your Next Gout Attack — For Good",
  desc: "Discover a proven, natural method that stops flare-ups, lets you enjoy food again, and gives you back control over your life.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Wake Up Without the Pain",
      desc: "Imagine starting your day without the stabbing agony in your feet — free to walk, move, and live without fear.",
      icon: (
        <Image
          alt="no-meat-icon"
          src={wakeUpIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title: "Eat the Foods You Love Again",
      desc: "No more endless restrictions. Learn exactly which meals are safe — and even help fight gout naturally",
      icon: (
        <Image
          alt="no-meat-icon"
          src={eatingIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
    {
      title: "Stay Flare-Up Free for the Long Term",
      desc: "Follow a simple, proven plan that reduces uric acid and keeps gout from controlling your life.",
      icon: (
        <Image
          alt="no-meat-icon"
          src={peopleIcon}
          style={{ filter: "invert(1)" }}
        />
      ),
    },
  ],
};

export { benefitOne, benefitTwo };
