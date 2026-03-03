'use client';

import React, { useState, useEffect } from 'react';

interface RouteCalculatorPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RouteCalculatorPopup: React.FC<RouteCalculatorPopupProps> = ({ isOpen, onClose }) => {
  const [showInputs, setShowInputs] = useState(true);
  const [routes, setRoutes] = useState('');
  const [miles, setMiles] = useState('');
  const [hours, setHours] = useState('');
  const [days, setDays] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState('');
  const [sendingStatus, setSendingStatus] = useState('');

  // Reset form when popup opens
  useEffect(() => {
    if (isOpen) {
      setShowInputs(true);
      setRoutes('');
      setMiles('');
      setHours('');
      setDays('');
      setEmail('');
      setResult('');
      setSendingStatus('');
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;

      return () => {
        const scrollY = document.body.style.top;
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      };
    }
  }, [isOpen]);

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setShowInputs(true);
      setRoutes('');
      setMiles('');
      setHours('');
      setDays('');
      setEmail('');
      setResult('');
      setSendingStatus('');
    }, 300);
  };

  const calculateSavings = () => {
    const routesNum = parseFloat(routes);
    const milesNum = parseFloat(miles);
    const hoursNum = parseFloat(hours);
    const daysNum = parseFloat(days);

    if (!routesNum || !milesNum || !hoursNum || !daysNum) {
      alert('Please fill all fields before calculating.');
      return;
    }

    const totalHours = Math.round(routesNum * hoursNum * daysNum);
    const totalMiles = Math.round(routesNum * milesNum * daysNum);
    const totalRoutes = Math.round(routesNum * daysNum);
    const reducedRoutes = Math.round(totalRoutes * 0.29);
    const newRouteCount = totalRoutes - reducedRoutes;

    setShowInputs(false);
    setResult(`
      Route Optimization Summary:
      • Total Monthly Routes: ${totalRoutes}
      • Reduction at 29%: ${reducedRoutes}
      • New Route Count: ${newRouteCount}

      Operational Load:
      • Total Hours/Month: ${totalHours.toLocaleString()}
      • Total Miles/Month: ${totalMiles.toLocaleString()}
    `);
  };

  const sendReport = async () => {
    const emailTrimmed = email.trim();

    if (!emailTrimmed) {
      alert('Please enter your email.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailTrimmed)) {
      alert('Please enter a valid email address.');
      return;
    }

    setSendingStatus('Sending report...');

    // Simulate sending email (replace with actual API call)
    try {
      // For now, just simulate success
      setTimeout(() => {
        setSendingStatus('Report sent successfully! Check your inbox.');
        setTimeout(() => {
          handleClose();
        }, 2000);
      }, 1000);
    } catch (error) {
      setSendingStatus('Error sending email. Please try again.');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style jsx global>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div
        className="fixed inset-0 w-screen h-screen bg-black/60 z-[999999] overflow-y-auto flex items-center justify-center p-5"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleClose();
          }
        }}
      >
        <div
          className="max-w-[420px] w-full bg-white rounded-xl p-6 md:p-10 relative shadow-[0_10px_40px_rgba(0,0,0,0.3)] mx-auto my-auto"
          style={{
            animation: 'slideIn 0.3s ease',
          }}
        >
          {/* Close Button */}
          <button
            className="absolute right-4 top-3 text-[28px] font-bold text-gray-600 hover:text-black transition-colors leading-none"
            onClick={handleClose}
          >
            ×
          </button>

          {/* Title */}
          <h3 className="mb-5 text-[22px] font-bold text-center text-[#2f1d8c]">
            Route Savings Calculator
          </h3>

          {/* Input Form */}
          {showInputs ? (
            <div>
              <label className="block mb-1.5 font-medium text-gray-800 text-[14px]">
                Average Daily Routes
              </label>
              <input
                type="number"
                min="0"
                placeholder="e.g., 10"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-[15px] focus:outline-none focus:border-[#4C2CD9]"
                value={routes}
                onChange={(e) => setRoutes(e.target.value)}
              />

              <label className="block mb-1.5 font-medium text-gray-800 text-[14px]">
                Average Miles per Route
              </label>
              <input
                type="number"
                min="0"
                placeholder="e.g., 25"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-[15px] focus:outline-none focus:border-[#4C2CD9]"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
              />

              <label className="block mb-1.5 font-medium text-gray-800 text-[14px]">
                Average Hours per Route
              </label>
              <input
                type="number"
                min="0"
                step="0.5"
                placeholder="e.g., 2.5"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-[15px] focus:outline-none focus:border-[#4C2CD9]"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />

              <label className="block mb-1.5 font-medium text-gray-800 text-[14px]">
                Operational Days (per month)
              </label>
              <input
                type="number"
                min="0"
                max="31"
                placeholder="e.g., 22"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-[15px] focus:outline-none focus:border-[#4C2CD9]"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />

              <button
                className="w-full p-3.5 bg-[#4C2CD9] text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all hover:bg-[#3d1fb8] active:scale-[0.98]"
                onClick={calculateSavings}
              >
                Calculate Savings
              </button>
            </div>
          ) : (
            /* Results Section */
            <div>
              <div className="mt-2.5 mb-5 p-4 rounded-lg bg-[#f7f7ff] border border-[#d9d6ff] text-[14px] leading-relaxed whitespace-pre-line">
                <strong className="text-[#2f1d8c]">{result.split('\n')[0]}</strong>
                {result.split('\n').slice(1).join('\n')}
                <div className="mt-3">
                  <strong>Finmile can reduce your route time by:</strong>
                  <div className="text-[20px] font-bold text-[#4C2CD9] mt-1">29% - 42%</div>
                </div>
              </div>

              <label className="block mb-1.5 font-medium text-gray-800 text-[14px]">
                Enter Email to Receive Full Report
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 mb-4 border border-gray-300 rounded-md text-[15px] focus:outline-none focus:border-[#4C2CD9]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="w-full p-3.5 bg-[#4C2CD9] text-white border-none rounded-md text-base font-semibold cursor-pointer transition-all hover:bg-[#3d1fb8] active:scale-[0.98]"
                onClick={sendReport}
              >
                Send Report
              </button>

              {sendingStatus && (
                <div className="mt-3 font-semibold text-[#4C2CD9] text-center">
                  {sendingStatus}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
