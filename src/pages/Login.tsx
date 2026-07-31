import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('admin');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin') navigate('/admin');
    else if (role === 'teacher') navigate('/teacher');
    else if (role === 'student') navigate('/student');
  };

  return (
    <div className="min-h-screen flex items-center justify-center font-body-md text-on-surface relative overflow-hidden bg-[#F7F6F2]">
      {/* Background Watermark */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
        <img alt="VACGLON Crest Watermark" className="w-full max-w-[800px] object-contain mix-blend-multiply grayscale" src="https://lh3.googleusercontent.com/aida/AP1WRLtIX49c6ygJvu1yt38DT93ei6A1eNrBOS_OPyHmuwUYbZN5FFVLm3leHPLakyUhB7mYlZWASKixB2helZMQ5yQjbo-1UN_uzVTkq8o7zUwcKgxqQOvKvYxy1cWKJOR0TauKpSnk8P3o1GUM4khDhroyDeMaBvrSRhVCmqhTlcg4Qoy27kaGmOnLA149mflYBJYyNGlJXXji5gucUTgpe3poXdFoDHCFS6rCKB78P3_tBbiN1xnpXF347ij8" />
      </div>
      
      {/* Login Container */}
      <div className="relative z-10 w-full max-w-md px-margin_mobile md:px-0">
        {/* Logo and Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 bg-surface-container-lowest rounded-full shadow-[0px_2px_4px_rgba(18,37,58,0.05),0px_10px_20px_rgba(18,37,58,0.08)] flex items-center justify-center mb-6 overflow-hidden border border-[#E5E5E1]">
            <img alt="VACGLON Schools Crest" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtIX49c6ygJvu1yt38DT93ei6A1eNrBOS_OPyHmuwUYbZN5FFVLm3leHPLakyUhB7mYlZWASKixB2helZMQ5yQjbo-1UN_uzVTkq8o7zUwcKgxqQOvKvYxy1cWKJOR0TauKpSnk8P3o1GUM4khDhroyDeMaBvrSRhVCmqhTlcg4Qoy27kaGmOnLA149mflYBJYyNGlJXXji5gucUTgpe3poXdFoDHCFS6rCKB78P3_tBbiN1xnpXF347ij8" />
          </div>
          <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary text-center">VACGLON Portal</h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-center">Institutional Access Gateway</p>
        </div>
        
        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-lg border border-[#E5E5E1] p-6 md:p-8 shadow-[0px_2px_4px_rgba(18,37,58,0.05),0px_10px_20px_rgba(18,37,58,0.08)]">
          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* Demo Role Selector (Not in original design, added for demo routing) */}
            <div>
              <label className="block font-label-md text-label-md text-[#44474d] mb-2 uppercase tracking-wide" htmlFor="demo-role">Select Demo Role</label>
              <select
                id="demo-role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="form-input block w-full sm:text-sm border-[#74777d]/20 rounded-lg bg-surface-container-lowest text-on-surface h-12 px-3"
              >
                <option value="admin">Administrator</option>
                <option value="teacher">Teacher</option>
                <option value="student">Student</option>
              </select>
            </div>

            {/* Email/Username Field */}
            <div>
              <label className="block font-label-md text-label-md text-[#44474d] mb-2 uppercase tracking-wide" htmlFor="identifier">Institutional Email or Username</label>
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#74777d] text-lg">person</span>
                </div>
                <input className="form-input block w-full pl-10 sm:text-sm border-[#74777d]/20 rounded-lg bg-surface-container-lowest text-on-surface h-12" id="identifier" name="identifier" placeholder={`e.g. ${role}@vacglon.edu`} required type="text" />
              </div>
            </div>
            
            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block font-label-md text-label-md text-[#44474d] uppercase tracking-wide" htmlFor="password">Password</label>
                <a className="font-label-md text-label-md text-primary hover:text-secondary-container transition-colors" href="#">Forgot password?</a>
              </div>
              <div className="relative rounded-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-symbols-outlined text-[#74777d] text-lg">lock</span>
                </div>
                <input className="form-input block w-full pl-10 pr-10 sm:text-sm border-[#74777d]/20 rounded-lg bg-surface-container-lowest text-on-surface h-12" id="password" name="password" placeholder="••••••••" type="password" />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#74777d] hover:text-primary transition-colors focus:outline-none" type="button">
                  <span className="material-symbols-outlined text-lg">visibility_off</span>
                </button>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-2">
              <button className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm font-label-md text-label-md text-on-primary bg-primary-container hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-container transition-colors duration-200 uppercase tracking-wide" type="submit">
                <span className="material-symbols-outlined mr-2 text-lg">login</span>
                Secure Login
              </button>
            </div>
          </form>
          <div className="mt-8 pt-6 border-t border-[#E5E5E1] text-center">
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">
              Authorized personnel only. <a className="text-primary hover:underline font-medium" href="#">Acceptable Use Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
