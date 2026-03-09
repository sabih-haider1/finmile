'use client';

import React from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';

export default function AdminDashboardPage() {
  const modules = [
    {
      title: 'Blogs',
      description: 'Manage blog articles with rich text content',
      href: '/admin/blogs',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Whitepapers',
      description: 'Manage professional PDF whitepapers',
      href: '/admin/whitepapers',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Resources',
      description: 'Manage downloadable files and resources',
      href: '/admin/resources',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
        </svg>
      ),
      color: 'from-green-500 to-teal-500',
    },
    {
      title: 'Guides',
      description: 'Manage simple PDF guides',
      href: '/admin/guides',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <AdminLayout>
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            Welcome to the <span className="gradient-text-os">Admin Dashboard</span>
          </h1>
          <p className="text-white/60 text-lg">
            Manage all your content modules from one place. Select a module below to get started.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all hover:scale-[1.02]"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${module.color} mb-4`}>
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:gradient-text-os transition-all">
                {module.title}
              </h3>
              <p className="text-white/60">{module.description}</p>
              <div className="mt-6 flex items-center text-sm text-white/80 group-hover:text-white transition-colors">
                <span>Manage {module.title}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
