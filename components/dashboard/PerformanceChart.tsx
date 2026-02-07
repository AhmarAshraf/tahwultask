import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { TooltipProps } from "recharts";
import Card from '../ui/Card';
import type { PerformancePoint } from "../../types/models";

type ChartPoint = PerformancePoint;

function CustomTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null;
  return (
    <div className="card-base card-shadow px-3 py-2">
      <p className="text-[12px] font-semibold text-gray-900">{label}</p>
      <p className="text-[12px] text-gray-600 mt-1">
        {payload[0].value} points
      </p>
    </div>
  );
}

type PerformanceChartProps = {
  data: ChartPoint[];
};

export default function PerformanceChart({ data }: PerformanceChartProps) {
  return (
    <Card className="p-6 h-full flex flex-col transition-shadow hover:card-shadow-hover">
      <h2 className="typo-section-18 mb-6">12-Month Performance</h2>
      <div className="flex-1 min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-accent-blue)" stopOpacity={1} />
                <stop offset="100%" stopColor="var(--color-accent-blue)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="var(--color-border-soft)" horizontal={true} vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="var(--color-text-muted)"
              fontSize={12}
              tickLine={false}
            />
            <YAxis 
              stroke="var(--color-text-muted)"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              fill="url(#barGradient)" 
              radius={[6, 6, 0, 0]}
              maxBarSize={44}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
