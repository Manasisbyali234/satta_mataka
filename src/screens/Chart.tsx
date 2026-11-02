import React from 'react';
import { Market } from '../data/markets';
import './Chart.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const rand = (n: number) => Math.floor(Math.random() * n);

const chartData = Array.from({ length: 5 }, (_, w) =>
  days.map((day, d) => ({
    day,
    open: w * 7 + d < 30 ? `${rand(9)+1}${rand(9)+1}${rand(9)+1}` : '***',
    jodi: w * 7 + d < 30 ? `${rand(100).toString().padStart(2, '0')}` : '**',
    close: w * 7 + d < 30 ? `${rand(9)+1}${rand(9)+1}${rand(9)+1}` : '***',
  }))
);

type Props = { market: Market; onBack: () => void };

export default function Chart({ market, onBack }: Props) {
  return (
    <div className="chart-page">
      <div className="chart-subheader">📊 Panel Chart — {market.name}</div>
      <div className="chart-wrap">
        <table className="chart-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Open</th>
              <th>Jodi</th>
              <th>Close</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((week, wi) =>
              week.map((row, ri) => (
                <tr key={`${wi}-${ri}`} className={ri % 2 === 0 ? 'even' : 'odd'}>
                  <td className="day-cell">{row.day}</td>
                  <td className="open-cell">{row.open}</td>
                  <td className="jodi-cell">{row.jodi}</td>
                  <td className="close-cell">{row.close}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="chart-note">
        ⚠️ Results shown are for reference only. Always verify from official sources.
      </div>
    </div>
  );
}
