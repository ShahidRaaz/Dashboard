import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [  { name: 'Basic Tees', value: 350 },  { name: 'Custom Short Pants', value: 400 },  { name: 'Super Hoodies', value: 250 }];

function PieChartExample() {
  const COLORS = ['#98D89E', '#F7DC7D', '#EE8484'];

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <PieChart width={110} height={120}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={55}>
            {
              data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))
            }
          </Pie>
        </PieChart>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginTop:'10px',marginLeft:'-10px'}}>
      {data.map((entry, index) => (
          <div key={`section-${index}`}>
            <div style={{ display: 'inline-block', width: '11px', height: '11px', borderRadius: '50%', backgroundColor: COLORS[index % COLORS.length], marginRight: '10px' }}></div>
            <div style={{ fontWeight: 'bold',fontSize:'15px',display: 'inline-block', marginRight: '10px' }}>{entry.name}</div>
            <div style={{ display: 'block',marginLeft:'20px',fontSize:'14px' }}>{`${(entry.value / data.reduce((acc, cur) => acc + cur.value, 0) * 100).toFixed(0)}%`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartExample;
