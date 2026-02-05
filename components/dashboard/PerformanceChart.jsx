import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function PerformanceChart({ data }) {
  return (
    <div className="bg-white rounded-xl p-6 card-shadow">
      <h2 className="typo-section-18 mb-6">12-Month Performance</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0078D7" stopOpacity={1} />
                <stop offset="100%" stopColor="#0078D7" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#E6EEF7" horizontal={true} vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="#8B9BB5"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="#8B9BB5"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[6, 6, 0, 0]}
              maxBarSize={44}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
