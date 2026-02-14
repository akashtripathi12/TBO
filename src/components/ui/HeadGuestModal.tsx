'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

interface HeadGuestModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: string;
  eventName: string;
}

export function HeadGuestModal({ isOpen, onClose, eventId, eventName }: HeadGuestModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tempPassword, setTempPassword] = useState('');

  const { token } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';
        const res = await fetch(`${backendUrl}/api/v1/events/${eventId}/head-guest`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}` 
            },
            body: JSON.stringify({ name, email, phone })
        });

        if (!res.ok) {
            const data = await res.json();
            throw new Error(data.error || 'Failed to assign head guest');
        }

        const data = await res.json();
        console.log("Head Guest Response:", data); // Debug log
        if (data.data?.tempPassword || data.tempPassword) {
            setTempPassword(data.data?.tempPassword || data.tempPassword);
        } else if (data.data?.user?.id || data.user?.id) {
             console.log("User assigned, but no temp password (likely existing user)");
        }

        setSuccess(true);
        
    } catch (err: any) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(tempPassword);
    alert('Password copied to clipboard!');
  };

  const resetModal = () => {
      onClose();
      setSuccess(false);
      setName('');
      setEmail('');
      setPhone('');
      setTempPassword('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Assign Head Guest</h2>
          <button onClick={resetModal} className="text-gray-400 hover:text-gray-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {success ? (
             <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                    <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Success!</h3>
                <p className="mt-1 text-sm text-gray-500">Head guest assigned successfully.</p>
                
                {tempPassword && (
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Temporary Password</p>
                        <div className="flex items-center justify-between bg-white border border-gray-300 rounded p-2">
                            <code className="text-sm font-mono text-blue-600 font-bold">{tempPassword}</code>
                            <button 
                                onClick={handleCopyPassword}
                                className="text-gray-500 hover:text-blue-600 text-xs font-semibold ml-2"
                            >
                                Copy
                            </button>
                        </div>
                        <p className="mt-2 text-xs text-red-500">
                            Please copy and send this password to the guest immediately. It will not be shown again.
                        </p>
                    </div>
                )}

                <button
                    onClick={resetModal}
                    className="mt-6 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                    Done
                </button>
             </div>
        ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-gray-500 mb-4">
                Create a head guest account for <strong>{eventName}</strong>. 
                They will receive an email with their login credentials.
            </p>

            <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <div className="pt-2">
                <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                >
                {loading ? 'Creating...' : 'Create & Assign'}
                </button>
            </div>
            </form>
        )}
      </div>
    </div>
  );
}
