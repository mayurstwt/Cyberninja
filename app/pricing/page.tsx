// Pricing.tsx
import React from 'react';
import { FaShieldAlt, FaLock, FaUserShield, FaBullseye, FaShieldVirus, FaNetworkWired, FaClipboardCheck, FaUserCog } from 'react-icons/fa';

interface PricingPlan {
  title: string;
  price: string;
  features: { feature: string; icon: React.ReactNode }[];
}

const pricingPlans: PricingPlan[] = [
  {
    title: 'Basic',
    price: '$10/month',
    features: [
      { feature: 'Basic Threat Protection', icon: <FaShieldAlt /> },
      { feature: 'Email Security', icon: <FaLock /> },
      { feature: '24/7 Support', icon: <FaUserShield /> },
    ],
  },
  {
    title: 'Pro',
    price: '$20/month',
    features: [
      { feature: 'Advanced Threat Protection', icon: <FaShieldVirus /> },
      { feature: 'Email & Web Security', icon: <FaBullseye /> },
      { feature: 'Incident Response', icon: <FaUserCog /> },
      { feature: 'Vulnerability Scanning', icon: <FaClipboardCheck /> },
    ],
  },
  {
    title: 'Enterprise',
    price: '$30/month',
    features: [
      { feature: 'Comprehensive Threat Protection', icon: <FaShieldAlt /> },
      { feature: 'Email, Web & Network Security', icon: <FaNetworkWired /> },
      { feature: 'Dedicated Security Team', icon: <FaUserShield /> },
      { feature: 'Vulnerability Scanning', icon: <FaClipboardCheck /> },
      { feature: 'Compliance Management', icon: <FaShieldVirus /> },
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="bg-black text-white flex flex-col items-center justify-center min-h-[90vh] py-10 px-5">
      <div className="container mx-auto text-center">
      <h2 className='text-[2.3rem] mb-10 leading-[3rem] tracking-wider md:tracking-normal letter-sa font-bold md:text-6xl bg-gradient-to-b from-gray-500 to-white bg-clip-text text-transparent'>
      CyberNinja Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="bg-black border md:h-[40rem] border-gray-700 shadow-lg rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-xl relative">
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold py-1 px-3 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-3xl font-bold mb-4">{plan.price}</p>
              <ul className="list-disc list-inside mt-10 mb-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex text-left items-center text-lg md:text-2xl mb-6">
                    <span className="text-blue-500 mr-5 border p-3 rounded-full">{feature.icon}</span>
                    {feature.feature}
                  </li>
                ))}
              </ul>
              <button className="border-[0.13rem] text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
