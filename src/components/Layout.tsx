import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface SidebarLink {
  path: string;
  icon: string;
  label: string;
}

interface LayoutProps {
  children: React.ReactNode;
  role: 'admin' | 'teacher' | 'student';
  title?: string;
}

const getLinks = (role: string): SidebarLink[] => {
  switch (role) {
    case 'admin':
      return [
        { path: '/admin', icon: 'dashboard', label: 'Dashboard' },
        { path: '/admin/students', icon: 'school', label: 'Student Registry' },
        { path: '/admin/teachers', icon: 'badge', label: 'Staff Management' },
        { path: '/admin/classes', icon: 'class', label: 'Classes & Subjects' },
      ];
    case 'teacher':
      return [
        { path: '/teacher', icon: 'dashboard', label: 'Dashboard' },
        { path: '/teacher/attendance', icon: 'how_to_reg', label: 'Mark Attendance' },
        { path: '/teacher/exams', icon: 'quiz', label: 'Exam Creation' },
      ];
    case 'student':
      return [
        { path: '/student', icon: 'home_app_logo', label: 'Dashboard' },
        { path: '/student/attendance', icon: 'event_available', label: 'My Attendance' },
        { path: '/student/fees', icon: 'account_balance_wallet', label: 'Fees Payment' },
        { path: '/student/cbt', icon: 'laptop_chromebook', label: 'CBT Exam' },
        { path: '/student/results', icon: 'auto_stories', label: 'Term Results' },
      ];
    default:
      return [];
  }
};

const Layout: React.FC<LayoutProps> = ({ children, role, title = 'VACGLON Schools' }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const links = getLinks(role);

  return (
    <div className="font-body-md text-body-md text-on-surface antialiased overflow-x-hidden min-h-screen flex">
      {/* Watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0 w-[60vh] h-[60vh] text-primary">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"></path>
        </svg>
      </div>

      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col h-full py-base bg-surface border-r border-outline-variant fixed left-0 top-0 h-screen w-sidebar_width z-20">
        <div className="px-gutter mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>school</span>
            </div>
            <div>
              <h1 className="font-headline-md text-headline-md font-bold text-primary">{title}</h1>
              <p className="font-label-md text-label-md text-on-surface-variant capitalize">{role} Portal</p>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ease-in-out ${
                  isActive
                    ? 'border-l-4 border-secondary bg-secondary-container/5 text-primary font-bold'
                    : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                }`}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span className="font-label-md text-label-md">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="px-4 mt-auto space-y-1 pt-4 border-t border-outline-variant/30">
          <button 
            onClick={() => navigate('/')} 
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-colors duration-200 ease-in-out"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md text-label-md">Log Out</span>
          </button>
        </div>
      </nav>

      {/* Main Container */}
      <div className="flex-1 flex flex-col md:ml-sidebar_width relative z-10 w-full min-h-screen">
        
        {/* TopAppBar */}
        <header className="hidden md:flex justify-between items-center h-16 px-gutter bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-10">
          <div className="flex-1 flex items-center">
            <div className="relative w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="w-full pl-10 pr-4 py-2 bg-surface rounded-lg border border-outline-variant/20 focus:border-secondary focus:ring-1 focus:ring-secondary focus:outline-none font-label-md text-label-md text-on-surface transition-all placeholder:text-outline/70" placeholder="Search..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-on-surface-variant hover:text-secondary transition-colors p-2 rounded-full hover:bg-surface-container-low active:opacity-80">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary-container overflow-hidden border border-outline-variant/30 ml-2 cursor-pointer flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[20px]">person</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 pb-24 md:pb-8 pt-4 md:pt-0">
          {children}
        </main>
      </div>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 h-16 border-t border-outline-variant bg-surface-container-lowest shadow-[0px_-2px_10px_rgba(18,37,58,0.05)]">
        <div className="flex justify-around items-center h-full px-margin_mobile pb-safe">
          {links.slice(0, 4).map((link) => {
             const isActive = location.pathname === link.path;
             return (
              <Link
                key={link.path}
                to={link.path}
                className={`flex flex-col items-center justify-center transition-all duration-200 p-2 rounded-lg ${isActive ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}
              >
                <span className="material-symbols-outlined mb-1" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
                <span className="font-label-md text-[12px]">{link.label}</span>
              </Link>
             )
          })}
        </div>
      </nav>

    </div>
  );
};

export default Layout;
