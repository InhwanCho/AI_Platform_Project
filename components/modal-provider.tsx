'use client';
import { useState,useEffect } from 'react';
import { ProModal } from '@/components/pro-modal';

export const ModalProvider =()=>{
  const [isMounted, setIsmounted] = useState(false);

  useEffect(()=>{
    setIsmounted(true)
  },[])
  if(!isMounted){
    return null
  }
  return (
    <>
      <ProModal />
    </>
  )
}

