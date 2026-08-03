import React, { useState } from 'react';
import { Calculator, DollarSign, Home, Utensils, Train, HeartPulse, Briefcase, Sparkles } from 'lucide-react';

export const CostOfLivingCalculator: React.FC = () => {
  const [city, setCity] = useState<'Tokyo' | 'Osaka' | 'Kyoto' | 'Fukuoka'>('Tokyo');
  const [housing, setHousing] = useState<'ShareHouse' | 'Studio' | 'Suburbs'>('ShareHouse');
  const [food, setFood] = useState<'Cook' | 'Mix' | 'EatOut'>('Mix');
  const [workHours, setWorkHours] = useState<number>(20);

  // Base city multipliers
  const cityMultiplier = {
    Tokyo: 1.0,
    Osaka: 0.85,
    Kyoto: 0.82,
    Fukuoka: 0.75,
  }[city];

  // Housing cost JPY
  const housingBase = {
    ShareHouse: 55000,
    Studio: 75000,
    Suburbs: 42000,
  }[housing];

  // Food cost JPY
  const foodBase = {
    Cook: 25000,
    Mix: 35000,
    EatOut: 55000,
  }[food];

  const rentCost = Math.round(housingBase * cityMultiplier);
  const foodCost = Math.round(foodBase * cityMultiplier);
  const utilitiesCost = Math.round(12000 * cityMultiplier);
  const transitCost = Math.round(8000 * cityMultiplier);
  const healthInsuranceCost = 2000;
  const personalCost = 15000;

  const totalMonthlyJPY = rentCost + foodCost + utilitiesCost + transitCost + healthInsuranceCost + personalCost;
  const totalMonthlyUSD = Math.round(totalMonthlyJPY / 150); // 1 USD ~ 150 JPY

  // Arubaito Income
  const hourlyWageJPY = city === 'Tokyo' ? 1150 : 1050;
  const monthlyWorkIncomeJPY = workHours * 4 * hourlyWageJPY;
  const netOutofPocketJPY = Math.max(0, totalMonthlyJPY - monthlyWorkIncomeJPY);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-xl space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E5382B] bg-red-50 px-3 py-1 rounded-full uppercase">
            <Calculator className="w-3.5 h-3.5" /> Interactive Tool
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-zinc-900 mt-1">Japan Student Cost of Living Calculator</h3>
        </div>
        <span className="hidden sm:inline-block text-xs font-bold text-zinc-400">2026 Price Index</span>
      </div>

      {/* Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        {/* City Selector */}
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-1.5">
            Select Target City:
          </label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-bold bg-white text-zinc-900 focus:ring-2 focus:ring-red-400"
          >
            <option value="Tokyo">Tokyo (Shinjuku / Shibuya)</option>
            <option value="Osaka">Osaka (Namba / Umeda)</option>
            <option value="Kyoto">Kyoto (Cultural Capital)</option>
            <option value="Fukuoka">Fukuoka (Affordable Hub)</option>
          </select>
        </div>

        {/* Housing Selector */}
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-1.5">
            Housing Preference:
          </label>
          <select
            value={housing}
            onChange={(e) => setHousing(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-bold bg-white text-zinc-900 focus:ring-2 focus:ring-red-400"
          >
            <option value="ShareHouse">Share House / Dorm (Most Popular)</option>
            <option value="Studio">Private 1K Apartment</option>
            <option value="Suburbs">Commuter Suburbs Apartment</option>
          </select>
        </div>

        {/* Food Style */}
        <div>
          <label className="block text-xs font-bold text-zinc-700 uppercase tracking-wide mb-1.5">
            Dining Habits:
          </label>
          <select
            value={food}
            onChange={(e) => setFood(e.target.value as any)}
            className="w-full p-2.5 rounded-xl border border-zinc-300 text-xs font-bold bg-white text-zinc-900 focus:ring-2 focus:ring-red-400"
          >
            <option value="Cook">Cook at Home Mostly</option>
            <option value="Mix">Mix (Convenience Store + Cooking)</option>
            <option value="EatOut">Dine Out Frequently</option>
          </select>
        </div>

      </div>

      {/* Part Time Job Slider */}
      <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-zinc-200 space-y-2">
        <div className="flex items-center justify-between text-xs font-bold">
          <span className="text-zinc-800 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#E5382B]" /> Part-Time Work (Arubaito) Hours per Week:
          </span>
          <span className="text-[#E5382B] bg-red-50 px-2.5 py-0.5 rounded-full font-black">
            {workHours} Hours / Wk (Legal Max: 28 hrs)
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={28}
          step={2}
          value={workHours}
          onChange={(e) => setWorkHours(Number(e.target.value))}
          className="w-full accent-[#E5382B] cursor-pointer"
        />
        <div className="flex justify-between text-[11px] text-zinc-400 font-medium">
          <span>0 Hrs (Study Only)</span>
          <span>14 Hrs (Part-Time)</span>
          <span>28 Hrs (Full Permitted Student Cap)</span>
        </div>
      </div>

      {/* Financial Output Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        
        {/* Expenses List */}
        <div className="space-y-2 text-xs">
          <p className="font-bold text-zinc-900 uppercase tracking-wide border-b border-zinc-100 pb-1">Monthly Expense Breakdown:</p>
          <div className="flex justify-between text-zinc-700">
            <span className="flex items-center gap-1.5"><Home className="w-3.5 h-3.5 text-zinc-400" /> Rent & Housing:</span>
            <span className="font-bold">¥{rentCost.toLocaleString()} JPY</span>
          </div>
          <div className="flex justify-between text-zinc-700">
            <span className="flex items-center gap-1.5"><Utensils className="w-3.5 h-3.5 text-zinc-400" /> Food & Groceries:</span>
            <span className="font-bold">¥{foodCost.toLocaleString()} JPY</span>
          </div>
          <div className="flex justify-between text-zinc-700">
            <span className="flex items-center gap-1.5"><Train className="w-3.5 h-3.5 text-zinc-400" /> Train Commuter Pass:</span>
            <span className="font-bold">¥{transitCost.toLocaleString()} JPY</span>
          </div>
          <div className="flex justify-between text-zinc-700">
            <span className="flex items-center gap-1.5"><HeartPulse className="w-3.5 h-3.5 text-zinc-400" /> Health Insurance & Utilities:</span>
            <span className="font-bold">¥{(utilitiesCost + healthInsuranceCost).toLocaleString()} JPY</span>
          </div>
          <div className="flex justify-between pt-2 border-t border-zinc-200 text-sm font-black text-zinc-900">
            <span>Estimated Total Monthly Expense:</span>
            <span className="text-[#E5382B]">¥{totalMonthlyJPY.toLocaleString()} JPY (~${totalMonthlyUSD})</span>
          </div>
        </div>

        {/* Work Offset & Net Balance Box */}
        <div className="bg-zinc-900 text-white p-5 rounded-2xl flex flex-col justify-between space-y-4">
          <div>
            <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Part-Time Income Offset</span>
            <div className="flex items-baseline justify-between mt-1">
              <span className="text-xs text-zinc-300">Estimated Arubaito Earnings:</span>
              <span className="text-base font-black text-emerald-400">+¥{monthlyWorkIncomeJPY.toLocaleString()} JPY</span>
            </div>
          </div>

          <div className="p-3.5 bg-zinc-800 rounded-xl space-y-1">
            <p className="text-[11px] text-zinc-400">Net Out-of-Pocket Expense Needed from Sponsor:</p>
            <p className="text-2xl font-black text-white">
              ¥{netOutofPocketJPY.toLocaleString()} JPY <span className="text-xs font-normal text-zinc-400">(~${Math.round(netOutofPocketJPY / 150)} USD/mo)</span>
            </p>
          </div>

          <p className="text-[10px] text-zinc-400 leading-normal">
            💡 Working {workHours} hrs/wk covers approximately {Math.min(100, Math.round((monthlyWorkIncomeJPY / totalMonthlyJPY) * 100))}% of your total living expenses in {city}!
          </p>
        </div>

      </div>

    </div>
  );
};
