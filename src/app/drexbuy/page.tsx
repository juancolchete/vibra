/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import styles from "./drexbuy.module.css";
import Title from "@/components/fonts/Title";
import Text from "@/components/fonts/Text";
import Button from "@/components/buttons/Button";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/header/Header";
import Link from "next/link";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { IoArrowUndoOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";

const qr = "./qrCode.png";
const money = "./money.png";
const moneyArrow = "./moneyArrow.png";

const Drex = () => {
  const [value, setValue] = useState("0x4a4s4dasfasfjhaosjhdoasjdas");
  const [copied, setCopied] = useState(false);
  // const notify = () => toast("Copy !");
  const handleCopyClick = () => {
    toast("Copy !");
    const textToCopy = `${value}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-6 col-lg-6 offset-md-3   ">
            <div className={styles.content}>
              <Header />
              {/* SECTION */}
              <section>
                <Link href="drex">
                  <button>
                    <IoArrowUndoOutline />
                  </button>
                </Link>
                <Text size="1.125rem" color="#fff">
                  Deposit with Pix
                </Text>
              </section>
              {/* CARD */}
              <div className={styles.cards}>
                <Title size="1.125rem">Buy DREX</Title>
                <Text size="0.875rem" color="##fcfcfc66" center>
                  Enter the amount you want to buy in DREX and click Buy with
                  Pix.
                </Text>
                <input type="number" placeholder="RS 0.00" />
                <Text size="0.675rem" color="##fcfcfc66" center>
                  3 DREX
                </Text>
                <Link href="wstethbuy">
                  <Button className="btnBlue">Buy with Pix</Button>
                </Link>
              </div>

              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Drex;
