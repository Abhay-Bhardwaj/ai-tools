'use server'
import { currentUser } from "@clerk/nextjs/server";
import dbConnect from "./dbConnect";
import HistoryModel from "@/models/history";

export default async function SaveData(formData:Object, slug: any, response:any) {
    await dbConnect();
    const user = await currentUser();

    const data = {
      formData: formData,
      aiResponse: response,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      templateSlug: slug,
    };
    const newData = new HistoryModel(data);
    try {
      await newData.save();
      console.log('Data saved successfully by', user?.primaryEmailAddress?.emailAddress);
    } catch (err) {
      console.error('Error saving data:', err);
    }
}