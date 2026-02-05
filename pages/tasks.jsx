'use client';

import Layout from '../components/layout/Layout';
import { CheckSquare } from 'lucide-react';

export default function Tasks() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <CheckSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tasks</h2>
          <p className="text-gray-600">Tasks management feature coming soon</p>
        </div>
      </div>
    </Layout>
  );
}