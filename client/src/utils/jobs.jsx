import { Briefcase, Building2, Clock, MapPin } from "lucide-react";

const getStatusColor = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-100 text-yellow-800 border-yellow-200";
    case "interview":
      return "bg-blue-100 text-blue-800 border-blue-200";
    case "declined":
      return "bg-red-100 text-red-800 border-red-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getJobTypeIcon = (jobType) => {
  switch (jobType) {
    case "remote":
      return <MapPin className="w-4 h-4" />;
    case "part-time":
      return <Clock className="w-4 h-4" />;
    case "contract":
      return <Briefcase className="w-4 h-4" />;
    case "internship":
      return <Building2 className="w-4 h-4" />;
    default:
      return <Briefcase className="w-4 h-4" />;
  }
};

export { getStatusColor, getJobTypeIcon };
