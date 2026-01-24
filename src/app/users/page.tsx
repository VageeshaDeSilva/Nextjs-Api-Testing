'use client';

import { useState, useEffect } from 'react';
import ErrorMsg from '@/components/ErrorMsg';

interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: {
    name: string;
  };
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-[--background] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[--foreground] mb-4">
            Users Directory
          </h1>
          <p className="text-lg text-[--foreground] opacity-70">
            Browse and explore our user community
          </p>
        </div>

        {/* Error State */}
        {error && <ErrorMsg error={new Error(error)} />}

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 animate-pulse border border-[--nav-border]"
              >
                <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded mb-4 w-3/4"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded mb-3 w-full"></div>
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
              </div>
            ))}
          </div>
        )}

        {/* Users Grid */}
        {!loading && !error && users.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white dark:bg-slate-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 border border-[--nav-border] hover:border-[--primary]"
              >
                {/* User Header */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[--primary] to-[--secondary] rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {user.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h2 className="text-lg font-semibold text-white dark:text-[--foreground]">
                      {user.name}
                    </h2>
                    <p className="text-sm text-white dark:text-[--foreground] opacity-60">ID: {user.id}</p>
                  </div>
                </div>

                {/* User Details */}
                <div className="space-y-3 text-sm">
                  {/* Email */}
                  <div className="border-l-4 border-[--primary] pl-3 py-1 bg-[--primary] bg-opacity-5 dark:bg-opacity-10 rounded-r">
                    <p className="text-white dark:text-[--foreground] opacity-60 text-xs uppercase tracking-wide font-semibold">
                      Email
                    </p>
                    <p className="text-white dark:text-[--foreground] truncate">{user.email}</p>
                  </div>

                  {/* Phone */}
                  {user.phone && (
                    <div className="border-l-4 border-[--success] pl-3 py-1 bg-[--success] bg-opacity-5 dark:bg-opacity-10 rounded-r">
                      <p className="text-white dark:text-[--foreground] opacity-60 text-xs uppercase tracking-wide font-semibold">
                        Phone
                      </p>
                      <p className="text-white dark:text-[--foreground]">{user.phone}</p>
                    </div>
                  )}

                  {/* Company */}
                  {user.company && (
                    <div className="border-l-4 border-[--accent] pl-3 py-1 bg-[--accent] bg-opacity-5 dark:bg-opacity-10 rounded-r">
                      <p className="text-white dark:text-[--foreground] opacity-60 text-xs uppercase tracking-wide font-semibold">
                        Company
                      </p>
                      <p className="text-white dark:text-[--foreground]">{user.company.name}</p>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                <button className="mt-6 w-full bg-secondary from-[--primary] to-[--secondary] text-white font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[--primary]/50 active:scale-95 shadow-md relative overflow-hidden group">
                  <span className="relative z-10">View Profile</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[--secondary] to-[--primary] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && users.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-[--foreground] opacity-70">No users found</p>
          </div>
        )}
      </div>
    </div>
  );
}
