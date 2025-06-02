import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import Button from '../components/common/Button';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = async () => {
    const otpCode = otp.join('');
    
    if (otpCode.length !== 6) {
      setError('Please enter all 6 digits');
      return;
    }

    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (otpCode === '123456') {
        navigate('/login');
      } else {
        setError('Invalid verification code. Please try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleResend = () => {
    // Handle resend logic
    console.log('Resending verification email...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <Mail className="h-8 w-8 text-primary-600" />
          </div>
          
          <h2 className="text-3xl font-extrabold text-gray-900">Verify your email</h2>
          <p className="mt-2 text-gray-600">
            We've sent a verification code to your email address. Please enter the 6-digit code below.
          </p>
        </div>

        <div className="bg-white px-8 py-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Enter verification code
            </label>
            <div className="flex justify-center space-x-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-12 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  maxLength={1}
                />
              ))}
            </div>
            {error && (
              <p className="mt-2 text-sm text-red-600 text-center">{error}</p>
            )}
          </div>

          <Button
            onClick={handleVerify}
            fullWidth
            size="lg"
            isLoading={isLoading}
          >
            Verify Email
          </Button>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Didn't receive the code?{' '}
              <button
                onClick={handleResend}
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Resend
              </button>
            </p>
          </div>

          <div className="mt-4 text-center">
            <Link to="/register" className="text-sm text-gray-600 hover:text-gray-900">
              <ArrowRight className="inline-block mr-1" size={16} />
              Back to registration
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;