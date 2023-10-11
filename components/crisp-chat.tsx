'use client';

import { useEffect } from "react";
import { Crisp } from 'crisp-sdk-web';

export const CrispChat = () => {
  useEffect(()=>{
    Crisp.configure('debf34c2-5122-446b-97f3-19d22d1e744d')
  },[])
  return null;
}
 