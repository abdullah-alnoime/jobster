import { useState, useEffect } from "react";
import {
  Clock,
  CalendarCheck,
  XCircle,
  ListChecks,
  TrendingUp,
} from "lucide-react";

const Stats = () => {
  const [stats, setStats] = useState({
    pending: 12,
    interview: 3,
    declined: 8,
    total: 23,
  });
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      setAnimate(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="h-full grid items-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
                  <div className="h-8 bg-gray-200 rounded w-12 mx-auto mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const successRate = Math.round((stats.interview / (stats.total || 1)) * 100);

  return (
    <section className="h-full grid items-center">
      <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100 to-transparent rounded-full -translate-y-8 translate-x-8 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-100 to-transparent rounded-full translate-y-6 -translate-x-6 opacity-50"></div>

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Application Dashboard
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Track your job search progress with real-time insights and stay
                motivated on your journey to landing the perfect role.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {successRate}% Interview Rate
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard
              icon={<Clock className="w-6 h-6" />}
              count={stats.pending}
              label="Pending Review"
              color="text-amber-600"
              bgColor="bg-amber-50"
              borderColor="border-amber-200"
              animate={animate}
              delay="0ms"
            />
            <StatCard
              icon={<CalendarCheck className="w-6 h-6" />}
              count={stats.interview}
              label="Interviews"
              color="text-blue-600"
              bgColor="bg-blue-50"
              borderColor="border-blue-200"
              animate={animate}
              delay="150ms"
            />
            <StatCard
              icon={<XCircle className="w-6 h-6" />}
              count={stats.declined}
              label="Not Selected"
              color="text-rose-600"
              bgColor="bg-rose-50"
              borderColor="border-rose-200"
              animate={animate}
              delay="300ms"
            />
            <StatCard
              icon={<ListChecks className="w-6 h-6" />}
              count={stats.total}
              label="Total Applied"
              color="text-slate-700"
              bgColor="bg-slate-50"
              borderColor="border-slate-200"
              animate={animate}
              delay="450ms"
            />
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 md:hidden">
            <div className="flex items-center justify-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium w-fit mx-auto">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              {successRate}% Interview Rate
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({
  icon,
  count,
  label,
  color,
  bgColor,
  borderColor,
  animate,
  delay,
}) => (
  <div
    className={`${bgColor} ${borderColor} border-2 rounded-xl p-6 text-center transition-all duration-500 hover:scale-105 hover:shadow-lg group cursor-pointer ${
      animate ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
    }`}
    style={{ transitionDelay: delay }}
  >
    <div className="flex flex-col items-center">
      <div
        className={`${color} mb-3 p-2 rounded-lg ${bgColor} group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div className={`text-3xl font-bold ${color} mb-1 tabular-nums`}>
        {count}
      </div>
      <div className="text-sm font-medium text-gray-600">{label}</div>
    </div>
  </div>
);

export default Stats;
