'use client';

import Layout from '../components/layout/Layout';
import { BarChart3 } from 'lucide-react';

export default function Reports() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <BarChart3 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Reports</h2>
          <p className="text-gray-600">Reports and analytics feature coming soon</p>
        </div>
      </div>
    </Layout>
  );
}