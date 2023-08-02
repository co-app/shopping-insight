import { Dayjs } from 'dayjs';
import { ReactNode } from 'react';
import { RangeValue } from 'rc-picker/lib/interface';

export interface LayoutDefaultProps {
  children?: ReactNode;
}

export interface RangePickerComponentProps {
  value?: RangeValue<Dayjs>;
  onChange: (values: RangeValue<Dayjs>) => void;
}

export interface SelectCategoryProps {
  onChange?: (value: string) => void;
  options: { key: string; label: string }[];
  placeholder: string;
  isMultiple: boolean;
}

export interface RadioButtonProps {
  options: { key: string; label: string }[];
  onChange: (e: string) => void;
}

export interface InputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export interface SubmitProps {
  onSubmit: () => void;
}

export interface ShoppingState {
  value: {
    datePicker: RangeValue<Dayjs> | undefined;
    category: string | undefined;
    input: string | undefined;
    timeunit: string | undefined;
    age: string | undefined;
    gender: string | undefined;
    device: string | undefined;
  };
  responseData: ResponseData | null;
}

export interface ResultData {
  period: string;
  ratio: number;
  group: string;
}

export interface ResponseData {
  startDate: string;
  endDate: string;
  timeUnit: string;
  results: {
    data: ResultData[];
    keyword: string[];
    title: string;
  }[];
}
