import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/user1.jpg";
import userTwoImg from "../../public/img/user2.jpg";
import userThreeImg from "../../public/img/user3.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-4">“Real People. Real Relief.”</h2>
        <p className="text-xl text-gray-700 dark:text-gray-300">
          Hear from those who broke free from gout’s grip — and never looked
          back.
        </p>
      </div>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              “I used to dread waking up every morning, not knowing if I could
              even walk to the kitchen. After following this plan, I’ve been
              flare-up free for 8 months — I even hiked with my grandkids last
              weekend.”
            </p>
            <Avatar
              image={userOneImg}
              name="James R."
              title="62, Retired Firefighter"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              “Beer nights with friends used to be off-limits. Now, I know
              exactly what I can enjoy without paying the price later. My doctor
              was shocked at my latest uric acid levels.”
            </p>
            <Avatar
              image={userTwoImg}
              name="Mark L."
              title="55, Small Business Owner"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              “I thought I had to live with gout forever. This program showed me
              I could take control, not just cope. The peace of mind is
              priceless.”
            </p>
            <Avatar
              image={userThreeImg}
              name="Linda S."
              title="59, Nurse Practitioner"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

// function Mark(props: { readonly children: React.ReactNode }) {
//   return (
//     <>
//       {" "}
//       <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
//         {props.children}
//       </mark>{" "}
//     </>
//   );
// }
