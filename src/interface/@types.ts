import { DialogProps } from "@mui/material";
import { Dispatch, ReactNode, SetStateAction } from "react";

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
export interface ModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  categorySlide?: boolean;
  title?:string;
  image?:string;
  description ?:string;
  success?:boolean;
  items ?:{name : string , sanse :string , date:string , count:number}[]
}
