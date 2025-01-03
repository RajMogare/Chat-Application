import Chat from "@/models/Chat";
import Message from "@/models/Message";
import User from "@/models/User";
import { connectToDB } from "@/mongodb";
import { model } from "mongoose";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();

    const { userId } = await params;

    const allChats = await Chat.find({ members: userId })
      .sort({
        lastMessageAt: -1,
      })
      .populate({ path: "members", model: User })
      .populate({
        path: "messages",
        model: Message,
        populate: { path: "sender seenBy", model: User },
      })
      .exec();

    return new Response(JSON.stringify(allChats), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Failed to get all chats ccurrent user", {
      status: 500,
    });
  }
};
