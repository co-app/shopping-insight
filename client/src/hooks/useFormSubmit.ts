import dayjs, { Dayjs } from 'dayjs';
import { RangeValue } from 'rc-picker/lib/interface';
import { ResponseData, ShoppingState } from '../utils/@types';
import { useFormValidation } from './useFormValidation';
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { setResponseData } from '../redux/slices/shoppingslice';

export const useFormSubmit = async (
  shoppingValue: ShoppingState['value'],
  rangePickerValue: RangeValue<Dayjs> | undefined,
  dispatch: Dispatch,
) => {
  const isValid = useFormValidation(shoppingValue);
  if (!isValid) {
    return;
  }
  const { age, category, device, gender, input, timeunit } = shoppingValue;
  console.log(gender);

  const todayUnix = dayjs(new Date()).unix();
  const [startDate, endDate] = rangePickerValue?.map(
    it => it?.format('YYYY-MM-DD'),
  ) as string[];

  if (endDate && dayjs(endDate).isAfter(dayjs(), 'day')) {
    alert('종료일이 오늘 날짜보다 뒤일 수 없습니다.');
    return;
  }

  if (
    [startDate, endDate]
      .map(it => dayjs(it).unix())
      .every(it => it >= todayUnix)
  ) {
    alert('시간 범위가 올바르지 않습니다.');
    return;
  }
  console.log('ㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ', gender);

  // try {
  // const response = await axios.post('http://localhost:3001/api', {
  //   startDate: startDate,
  //   endDate: endDate,
  //   timeUnit: timeunit,
  //   category,
  //   keyword: input,
  //   device,
  //   gender,
  //   ages: age,
  // });
  try {
    const response = await axios.post(
      'https://mw1bjsboxb.execute-api.ap-northeast-2.amazonaws.com',
      {
        startDate: startDate,
        endDate: endDate,
        timeUnit: timeunit,
        category,
        keyword: input,
        device,
        gender,
        ages: age,
      },
    );
    const responseData: ResponseData = response.data;

    console.log(responseData);
    dispatch(setResponseData(responseData));
  } catch (error) {
    console.error(error);
  }
};
