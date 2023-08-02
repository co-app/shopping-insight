import dotenv from 'dotenv';
dotenv.config();

export const getEnv = () => {
  return {
    BASE_URL: process.env.NAVER_BASE_URL,
    // NAVER_CLIENT_ID: process.env.NAVER_CLIENT_ID,
    // NAVER_CLIENT_SECRET: process.env.NAVER_CLIENT_SECRET,
  };
};
