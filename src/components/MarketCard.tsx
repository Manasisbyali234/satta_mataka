import React from 'react';
import { Market } from '../data/markets';
import './MarketCard.css';

type Props = {
  market: Market;
  onChartClick: (market: Market) => void;
};

export default function MarketCard({ market, onChartClick }: Props) {
  return (
    <div className="card">
      <div className="card-header">
        <span className="card-name">{market.name}</span>
        <span className="live-badge">● LIVE</span>
      </div>
      <div className="card-timing">
        <div className="time-block">
          <span className="time-label">Open</span>
          <span className="time-value">{market.openTime}</span>
        </div>
        <div className="time-divider" />
        <div className="time-block">
          <span className="time-label">Close</span>
          <span className="time-value">{market.closeTime}</span>
        </div>
      </div>
      <div className="card-results">
        <div className="result-block">
          <span className="result-label">Open</span>
          <span className="result-value open-val">{market.openResult}</span>
        </div>
        <div className="result-block jodi-block">
          <span className="result-label jodi-label">JODI</span>
          <span className="result-value jodi-val">{market.jodi}</span>
        </div>
        <div className="result-block">
          <span className="result-label">Close</span>
          <span className="result-value close-val">{market.closeResult}</span>
        </div>
      </div>
      <div className="card-footer">
        <button className="chart-btn" onClick={() => onChartClick(market)}>📊 Chart</button>
        <button className="play-btn">▶ Play</button>
      </div>
    </div>
  );
}
