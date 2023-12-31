"use client";
import { ethers } from "ethers";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWallet } from "@/store/userSlice";
import { RootState } from "@/store/store";
import * as bip39 from "bip39";
import { validateEthAddress } from "@/utils/validation";

const PreLoader = () => {
  const dispatch = useDispatch();
  const wallet = useSelector(
    (state: RootState) => state.user.wallet
  );
   useEffect(() => {
      if (wallet.loaded == false && localStorage) {
      const address = `${localStorage.getItem("address")}`;   
      if(validateEthAddress(address)){
        dispatch(setWallet({
           mnemonic: `${localStorage.getItem("mnemonic")}`, 
           address,
           nonceDREX: parseInt(`${localStorage.getItem("nonceDREX")}`) > 0 ? parseInt(`${localStorage.getItem("nonceDREX")}`) : 1,
           nonceLIDO: parseInt(`${localStorage.getItem("nonceLIDO")}`) > 0 ? parseInt(`${localStorage.getItem("nonceLIDO")}`) : 1,
           nonceBFT: parseInt(`${localStorage.getItem("nonceBFT")}`) > 0 ? parseInt(`${localStorage.getItem("nonceBFT")}`) : 1,  
           noncewDrex: parseInt(`${localStorage.getItem("noncewDrex")}`) > 0 ? parseInt(`${localStorage.getItem("noncewDrex")}`) : 1,
           loaded: true 
        })) 
      }else{
        const mnemonic = ethers.Mnemonic.fromPhrase(bip39.generateMnemonic())
        const signer = ethers.HDNodeWallet.fromMnemonic(mnemonic)
        dispatch(setWallet({
           mnemonic: mnemonic.phrase, 
           address: signer.address,
           nonceDREX:1,
           nonceLIDO:1,
           nonceBFT:1,
           noncewDrex:1,
           loaded: true 
        }))
        localStorage.setItem("mnemonic",mnemonic.phrase)
        localStorage.setItem("address",signer.address)
        localStorage.setItem("nonceDREX","1")
        localStorage.setItem("nonceLIDO","1")
        localStorage.setItem("nonceBFT","1")
        localStorage.setItem("noncewDrex","1")
      }
      }
    }, [dispatch,wallet]);

    return (
      <></>
    );
};

export default PreLoader;
