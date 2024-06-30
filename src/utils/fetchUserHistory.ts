'use server'
import HistoryModel from "@/models/history";
import dbConnect from "./dbConnect";
import { currentUser } from "@clerk/nextjs/server";



export default async function fetchUserHistory() {
  try {
    await dbConnect();
    const user = await currentUser();
    console.log("email at the databae: ", user?.primaryEmailAddress?.emailAddress);
    const userHistory = await HistoryModel.find({ createdBy: user?.primaryEmailAddress?.emailAddress }, { name: 1, formData:1, templateSlug: 1, createdAt: 1, createdBy: 1, aiResponse: 1, _id: 0 }).sort({ createdAt: -1 }).lean();
    return userHistory;
  } catch (error) {
    console.error(error);
  }
}
