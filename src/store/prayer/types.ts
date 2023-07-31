export interface IPrayer {
  id: number;
  title: string;
  description: string;
  checked: boolean;
  columnId: number;
  commentsIds: Array<number>;
}

export interface UpdatePrayerPayload {
  id: number;
  title: string;
  description: string;
  checked: boolean;
}

export interface IPrayerSlice {
  prayers: Array<IPrayer>;
  dataUpdateStatus: 'done' | 'inProcess' | 'Created' | 'Updated' | 'Deleted';
}

export interface AddPrayerPayload {
  columnId: number;
  title: string;
  description: string;
  checked: boolean;
}
