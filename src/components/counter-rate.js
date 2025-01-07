import React, {useState} from 'react';
import "chart.js/auto";
import {Chart} from 'chart.js'
import annotationPlugin from 'chartjs-plugin-annotation'
import {Scatter} from 'react-chartjs-2';

import styles from './counter-rate.module.css';

Chart.register(annotationPlugin)

export default function CounterRate({}) {
  const [rawTimeSeries, setRawTimeSeries] = useState('0, 1, 3, 6, 9, 10, 2, 3, 6, 11');
  const [timeWindowStart, setTimeWindowStart] = useState(2.5);
  const [timeWindowEnd, setTimeWindowEnd] = useState(7.5);
  const [showFixedCounterResets, setShowFixedCounterResets] = useState(false);
  const [showLinearFunction, setShowLinearFunction] = useState(false);
  const [showIrateFunction, setShowIrateFunction] = useState(false);
  const [result, setResult] = useState('');


  const counterChartData = rawTimeSeries.split(',')
    .map(x => Number.parseInt(x.trim()))
    .map((value, index) => ({x: index, y: value}));

  const counterFixedChartData = fixCounterResets(counterChartData.filter(point => point.x >= timeWindowStart && point.x <= timeWindowEnd));

  const linearFunction = computeLinearFunction(counterFixedChartData[0], counterFixedChartData[counterFixedChartData.length - 1]);
  const iRateFunction = computeLinearFunction(counterFixedChartData[counterFixedChartData.length - 2], counterFixedChartData[counterFixedChartData.length - 1]);

  const annotations = {
    timeWindow: {
      type: 'box',
      xMin: timeWindowStart,
      xMax: timeWindowEnd,
      backgroundColor: 'rgba(255,255,102,0.2)'
    },
    linearFunction: {
      type: 'line',
      xMin: timeWindowStart,
      yMin: evaluateLinearFunction(linearFunction, timeWindowStart),
      xMax: timeWindowEnd,
      yMax: evaluateLinearFunction(linearFunction, timeWindowEnd),
      display: showLinearFunction,
    },
    iRateFunction: {
      type: 'line',
      xMin: timeWindowStart,
      yMin: evaluateLinearFunction(iRateFunction, timeWindowStart),
      xMax: timeWindowEnd,
      yMax: evaluateLinearFunction(iRateFunction, timeWindowEnd),
      display: showIrateFunction,
    }
  }

  const showRate = () => {
    if (counterFixedChartData.length < 2) {
      setResult('Not enough data points')
      return
    }
    setShowIrateFunction(false)
    setShowLinearFunction(true);
    setResult(`rate(...) = ${linearFunction.m}`);
  }

  const showIncrease = () => {
    if (counterFixedChartData.length < 2) {
      setResult('Not enough data points')
      return
    }
    setShowIrateFunction(false)
    setShowLinearFunction(true);

    const increase = evaluateLinearFunction(linearFunction, timeWindowEnd) - evaluateLinearFunction(linearFunction, timeWindowStart)

    setResult(`increase(...) = ${increase}`);
  }

  const showIrate = () => {
    setShowLinearFunction(false);
    setShowIrateFunction(true);
    setResult(`rate(...) = ${iRateFunction.m}`);
  }

  return (
    <div className={styles.counterRate}>
      <Scatter
        data={{
          datasets: [
            {label: 'Fixed counter', data: counterFixedChartData, hidden: !showFixedCounterResets},
            {label: 'Counter', data: counterChartData}
          ]
        }}
        options={{
          scales: {
            x: {beginAtZero: true, ticks: {stepSize: 1}, title: {text: 'Seconds', display: true}},
            y: {beginAtZero: true}
          },
          plugins: {
            annotation: {annotations: annotations}
          }
        }}
      ></Scatter>
      <input className={styles.rawTimeSeriesInput} type='text' value={rawTimeSeries}
             onChange={e => setRawTimeSeries(e.target.value)}/>
      <div className={styles.row}>
        <span>Time Window</span>
        Start
        <input type='number' value={timeWindowStart}
               onChange={e => setTimeWindowStart(Number.parseFloat(e.target.value))}/>

        End
        <input type='number' value={timeWindowEnd}
               onChange={e => setTimeWindowEnd(Number.parseFloat(e.target.value))}/>
      </div>

      <div className={styles.row}>
        <button className={'button button--primary'} onClick={() => setShowFixedCounterResets(!showFixedCounterResets)}>Toggle fixed counter</button>
        <button className={'button button--primary'} onClick={showRate}>Show rate()</button>
        <button className={'button button--primary'} onClick={showIncrease}>Show increase()</button>
        <button className={'button button--primary'} onClick={showIrate}>Show irate()</button>
      </div>
      <span>{result}</span>
    </div>);
}

function fixCounterResets(points) {
  let currentOffset = 0;
  const fixedPoints = [points[0]]

  for (let i = 1; i < points.length; i++) {
    if (points[i - 1].y > points[i].y) {
      currentOffset += points[i - 1].y
    }
    fixedPoints.push({x: points[i].x, y: points[i].y + currentOffset});
  }

  return fixedPoints
}

function computeLinearFunction(point1, point2) {
  if (!point1 || !point2) {
    return {m: 0, y0: 0};
  }
  const m = (point2.y - point1.y) / (point2.x - point1.x);
  const y0 = point1.y - (point1.x * m)

  return {m, y0}
}

function evaluateLinearFunction(func, x) {
  return func.m * x + func.y0;
}
