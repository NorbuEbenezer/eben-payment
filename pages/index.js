import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Link from "next/link";
import { useRouter } from "next/router";
import { checkout } from "../checkout";

export default function Home() {
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/confirm">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map />
      <ActionItems>
        {/* Header 8*/}
        {/* Self closing tag */}
        <MessageContainer>Your ride in a moment!</MessageContainer>

        <ImageP src="/imageP.jpg" />
        <Header>
          <EbenLogo src="/eb-logo.jpg" />

          <Profile>
            <Name>Norbu Tamang</Name>
            <UserImage src="/profile.jpg" />
          </Profile>
        </Header>
        <Amount>Ride from Gangtok to Rangpo</Amount>
        <Amount2>Total amount: ₹ 3000</Amount2>
        <ActionButtons2></ActionButtons2>
      </ActionItems>

      <PaymentButtonContainer>
        <PaymentButton
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1LIpjkSDNryHai6iiai7xtcQ",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Pay Now
        </PaymentButton>
      </PaymentButtonContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex h-screen flex-col bg-gray
`;

const ActionItems = tw.div`
  flex-1 p-4
`;
const Header = tw.div`
  flex justify-between items-center
`;
const EbenLogo = tw.img`
  h-28  flex justify-center

`;

const ImageP = tw.img`
  flex justify-between h-100 w-100

`;

const Profile = tw.div`
  flex items-center
`;
const Name = tw.div`
mr-4 w-20 text-sm font-medium

`;
const UserImage = tw.img`
h-12 w-12 rounded-full border-gray-200 p-px

`;

const ActionButtons = tw.div`
  flex
`;
const ActionButtons2 = tw.div`
  flex
`;

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl

`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const PaymentButton = tw.div`
bg-black text-white my-10 mx-4 py-4 text-center text-xl
 text-white py-2 px-4 
`;

const PaymentButtonContainer = tw.div`
border-t-2 
`;

const MessageContainer = tw.div`
flex justify-center text-base text-black font-semibold

`;

const Amount = tw.div`
flex justify-center text-base text-black text-lg font-semibold

`;

const Amount2 = tw.div`
flex justify-center text-base text-black text-lg h-10 font-semibold

`;

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer 
`;

const BackButton = tw.img`
h-full  object-contain `;
