"use client";
import ChatDetails from "@/components/ChatDetails";
import ChatList from "@/components/ChatList";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const ChatPage = () => {
  const { chatId } = useParams();

  const { data: session } = useSession();
  const currentUser = session?.user;

  const seenMessage=async()=>{
    try {
      await fetch(`/api/chats/${chatId}`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          currentUserId:currentUser._id
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    if(currentUser && chatId){
      seenMessage();
    }
  },[currentUser,chatId])

  return (
    <div className="main-container">
      <div className="w-1/3 max-lg:hidden">
        <ChatList currrentChatId={chatId} />
      </div>
      <div className="w-2/3 max-lg:hidden">
        <ChatDetails chatId={chatId} />
      </div>
    </div>
  );
};

export default ChatPage;
