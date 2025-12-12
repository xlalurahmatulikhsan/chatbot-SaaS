import dotenv from 'dotenv';
dotenv.config();

export const config = {
  PORT: process.env.PORT || 4000,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
//   CLOUD_API_TOKEN: process.env.CLOUD_API_TOKEN,
//   CLOUD_PHONE_ID: process.env.CLOUD_PHONE_ID,
};