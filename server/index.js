import axios from "axios";

export const handler = async (event) => {
  const req = JSON.parse(event.body);
  console.log(req);
  try {
    const response = await axios.post(
      process.env.NAVER_BASE_URL,
      {
        startDate: req.startDate,
        endDate: req.endDate,
        timeUnit: req.timeUnit,
        category: req.category,
        keyword: req.keyword,
        device: req.device,
        gender: req.gender,
        ages: req.ages,
      },
      {
        headers: {
          "X-Naver-Client-Id": process.env.NAVER_CLIENT_ID,
          "X-Naver-Client-Secret": process.env.NAVER_CLIENT_SECRET,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (e) {
    console.error(e);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(response.data),
  };
};
