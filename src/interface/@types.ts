import { Dispatch, SetStateAction } from "react";

export type TSelectCity = {
  id: string;
  name: string;
};

export interface prayerList {
  titlePrayer: string;
  title: string;
  time: Date;
}

export interface IDashboardDateProps {
  timeRemaining: string;
  filterPrayerTime: string | undefined;
  citySelected: any;
}

export interface ISelectedRefrence {
  selectRefrence: string;
  setSelectRefrence: Dispatch<SetStateAction<string>>;
}

export interface IRefrences {
  title: string;
}
