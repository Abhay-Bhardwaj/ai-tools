'use server'
import dbConnect from "./dbConnect";
import HistoryModel from "@/models/history";

export default async function SaveData(formData:Object, slug: any, response:any, user:any) {
    await dbConnect();
    console.log(formData);
    const data = {
      formData: formData,
      aiResponse: response,
      createdBy: user,
      templateSlug: slug,
    };
    const newData = new HistoryModel(data);
    try {
      await newData.save();
      console.log('Data saved successfully');
    } catch (err) {
      console.error('Error saving data:', err);
    }
}