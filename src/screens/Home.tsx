import React, { useEffect, useState } from 'react';
import { fetchLiveResults, LiveResult } from '../data/liveApi';
import './Home.css';

export default function Home() {
  const [results, setResults] = useState<LiveResult[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [lastUpdated, setLastUpdated] = useState('');

  const load = async () => {
    try {
      setError('');
      const data = await fetchLiveResults();
      setResults(data);
      setLastUpdated(new Date().toLocaleTimeString('en-IN'));
    } catch {
      setError('Could not fetch live results. Make sure the proxy server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const t = setInterval(load, 60000);
    return () => clearInterval(t);
  }, []);

  const parseResult = (r: string) => {
    const parts = r.split('-');
    return { open: parts[0], jodi: parts[1], close: parts[2] };
  };

  return (
    <div className="home-page">
      {/* Hero */}
      <div className="hero">
        <h1>🎯 Live Satta Matka Results</h1>
        <p>India's fastest result platform — updated every 60 seconds</p>
        <div className="hero-stats">
          <div className="stat"><span>{results.length}</span><small>Markets</small></div>
          <div className="stat"><span>60s</span><small>Refresh Rate</small></div>
          <div className="stat"><span>LIVE</span><small>Status</small></div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="status-bar">
        <span>📅 {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        {lastUpdated && <span className="updated-time">🔄 Last updated: {lastUpdated} <button onClick={load}>Refresh Now</button></span>}
      </div>

      {/* Loading */}
      {loading && (
        <div className="loading-wrap">
          <div className="spinner" />
          <p>Fetching live results from sattamatkajodi.com...</p>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="error-wrap">
          <p>⚠️ {error}</p>
          <button onClick={load}>Retry</button>
        </div>
      )}

      {/* Results Grid */}
      {!loading && results.length > 0 && (
        <div className="results-section">
          <h2 className="section-title">📶 Live Market Results</h2>
          <div className="results-grid">
            {results.map((r, i) => {
              const { open, jodi, close } = parseResult(r.result);
              const isSpecial = ['KALYAN', 'MAIN BAZAR', 'MILAN DAY', 'MILAN NIGHT', 'RAJDHANI DAY', 'RAJDHANI NIGHT'].includes(r.name);
              return (
                <div key={i} className={`market-card ${isSpecial ? 'special' : ''}`}>
                  <div className="mc-header">
                    <span className="mc-name">{r.name}</span>
                    <span className="mc-live">● LIVE</span>
                  </div>
                  <div className="mc-time">
                    <span>🕐 {r.openTime}</span>
                    <span className="arrow">→</span>
                    <span>🕐 {r.closeTime}</span>
                  </div>
                  <div className="mc-result">
                    {jodi ? (
                      <>
                        <div className="res-block"><span className="res-label">Open</span><span className="res-open">{open}</span></div>
                        <div className="res-block jodi-block"><span className="res-label">Jodi</span><span className="res-jodi">{jodi}</span></div>
                        {close && <div className="res-block"><span className="res-label">Close</span><span className="res-close">{close}</span></div>}
                      </>
                    ) : (
                      <div className="res-block"><span className="res-full">{r.result}</span></div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="info-section">
        <div className="info-card">
          <h3>⚡ Fastest Results</h3>
          <p>Results are fetched directly from the source and updated every 60 seconds automatically.</p>
        </div>
        <div className="info-card">
          <h3>📊 All Markets</h3>
          <p>Covers all major markets — Kalyan, Milan, Rajdhani, Main Bazar, Time Bazar and more.</p>
        </div>
        <div className="info-card">
          <h3>🔒 Trusted Source</h3>
          <p>Data sourced directly from sattamatkajodi.com — India's most trusted Matka platform.</p>
        </div>
      </div>
    </div>
  );
}
