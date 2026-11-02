export type Market = {
  id: string;
  name: string;
  openTime: string;
  closeTime: string;
  openResult: string;
  jodi: string;
  closeResult: string;
};

export const markets: Market[] = [
  { id: '1', name: 'TIME BAZAR', openTime: '01:00 PM', closeTime: '02:00 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '2', name: 'MILAN DAY', openTime: '03:00 PM', closeTime: '05:00 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '3', name: 'RAJDHANI DAY', openTime: '03:30 PM', closeTime: '05:30 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '4', name: 'KALYAN', openTime: '03:45 PM', closeTime: '05:45 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '5', name: 'SRIDEVI NIGHT', openTime: '07:00 PM', closeTime: '08:00 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '6', name: 'SUPREME NIGHT', openTime: '09:00 PM', closeTime: '11:00 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '7', name: 'MILAN NIGHT', openTime: '09:00 PM', closeTime: '11:00 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '8', name: 'RAJDHANI NIGHT', openTime: '09:30 PM', closeTime: '11:30 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '9', name: 'KALYAN NIGHT', openTime: '09:30 PM', closeTime: '11:30 PM', openResult: '***', jodi: '**', closeResult: '***' },
  { id: '10', name: 'MAIN BAZAR', openTime: '09:30 PM', closeTime: '12:02 AM', openResult: '***', jodi: '**', closeResult: '***' },
];
