'use server'
import HistoryModel from "@/models/history";
import dbConnect from "./dbConnect";



dbConnect();

export default async function fetchUserHistory(email: string) {
  try {
    const userHistory = await HistoryModel.find({ email: email}, { name: 1, templateSlug: 1, createdAt: 1,createdBy:1, aiResponse:1, _id:0}).sort({ createdAt: -1 }).lean();
    return userHistory;
  } catch (error) {
    console.error(error);
  }
}
