import { useState } from "react";
import { Clock, CalendarCheck, XCircle, ListChecks } from "lucide-react";

const Stats = () => {
  const [stats, setStats] = useState({
    pending: 0,
    interview: 0,
    declined: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <div>loading</div>;
  }
  return (
    <section className="h-full grid items-center">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Application Summary
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          Here's a quick overview of your job applications. Track which ones are
          still pending, which have interviews scheduled, and which were
          declined. Use this info to stay organized.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard
            icon={<Clock className="w-5 h-5 text-yellow-600 mb-1" />}
            count={stats.pending}
            label="Pending"
            color="text-yellow-600"
          />
          <StatCard
            icon={<CalendarCheck className="w-5 h-5 text-blue-600 mb-1" />}
            count={stats.interview}
            label="Interviews"
            color="text-blue-600"
          />
          <StatCard
            icon={<XCircle className="w-5 h-5 text-red-600 mb-1" />}
            count={stats.declined}
            label="Declined"
            color="text-red-600"
          />
          <StatCard
            icon={<ListChecks className="w-5 h-5 text-gray-800 mb-1" />}
            count={stats.total}
            label="Total"
            color="text-gray-800"
          />
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ icon, count, label, color }) => (
  <div className="text-center">
    <div className="flex flex-col items-center">
      {icon}
      <div className={`text-2xl font-bold ${color}`}>{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </div>
);

export default Stats;
