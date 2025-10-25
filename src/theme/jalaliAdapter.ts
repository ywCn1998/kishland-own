// JalaliAdapter.js
// src/JalaliAdapter.js
// @ts-ignore
import jMoment from 'moment-jalaali';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// Load Persian (Shamsi) calendar
jMoment.loadPersian({ dialect: 'persian', usePersianDigits: false });

export default class JalaliAdapter extends AdapterMoment {
  constructor() {
    super();
    this.moment = jMoment; // Use Jalali moment
  }

  // Optional: customize formatting if needed
}
