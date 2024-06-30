'use server'
import mongoose, { Schema, model, models } from 'mongoose';

interface History {
  formData: Record<string, any>;
  aiResponse: string;
  createdBy: string;
  templateSlug: string;
  createdAt: Date;
}

const historySchema: Schema<History> = new Schema({
  formData: {
    type: Schema.Types.Mixed,
    required: true,
  },
  aiResponse: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
    required: true,
  },
  templateSlug: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const HistoryModel = mongoose.models.History || mongoose.model("History", historySchema);
export default HistoryModel;
