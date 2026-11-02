import React, { useEffect, useState } from 'react';
import { fetchLiveResults, LiveResult } from '../data/liveApi';
import './Results.css';

export default function Results() {
  const [results, setResults] = useState<LiveResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLiveResults().then(setResults).finally(() => setLoading(false));
  }, []);

  return (
    <div className="results-page">
      <div className="page-hero">
        <h1>🏆 Today's Results</h1>
        <p>{new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="results-wrap">
        {loading ? (
          <div className="loading-wrap"><div className="spinner" /><p>Loading...</p></div>
        ) : (
          <table className="results-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Market Name</th>
                <th>Open Time</th>
                <th>Close Time</th>
                <th>Open</th>
                <th>Jodi</th>
                <th>Close</th>
              </tr>
            </thead>
            <tbody>
              {results.map((r, i) => {
                const parts = r.result.split('-');
                return (
                  <tr key={i} className={i % 2 === 0 ? 'even' : 'odd'}>
                    <td className="num">{i + 1}</td>
                    <td className="mname">{r.name}</td>
                    <td className="time">{r.openTime}</td>
                    <td className="time">{r.closeTime}</td>
                    <td className="open">{parts[0] || '-'}</td>
                    <td className="jodi">{parts[1] || '-'}</td>
                    <td className="close">{parts[2] || '-'}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
