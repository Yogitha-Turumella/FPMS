import React, { useState } from 'react';

const AdminForgotPassword = () => {
  const [loginId, setLoginId] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3001/api/auth/forgot-admin-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ login_id: loginId, security_code: securityCode, new_password: newPassword }),
    });

    const data = await res.json();
    if (res.ok) {
      setStatus('✅ Password reset successfully.');
    } else {
      setStatus(`❌ ${data.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">Admin Forgot Password</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" placeholder="Login ID" value={loginId} onChange={e => setLoginId(e.target.value)} className="w-full border p-2" />
        <input type="text" placeholder="Security Code" value={securityCode} onChange={e => setSecurityCode(e.target.value)} className="w-full border p-2" />
        <input type="password" placeholder="New Password" value={newPassword} onChange={e => setNewPassword(e.target.value)} className="w-full border p-2" />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Reset Password</button>
      </form>
      {status && <p className="mt-3">{status}</p>}
    </div>
  );
};

export default AdminForgotPassword;
