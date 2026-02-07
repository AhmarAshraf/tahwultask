'use client';

import Layout from '../components/layout/Layout';
import { Users } from 'lucide-react';

export default function UsersPage() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Users & Roles</h2>
          <p className="text-gray-600">User management feature coming soon</p>
        </div>
      </div>
    </Layout>
  );
}