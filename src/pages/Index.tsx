import { Pill, Hospital, Calendar, Bell, Search } from "lucide-react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleServiceClick = (service: string) => {
    toast({
      title: "Coming Soon",
      description: `${service} feature will be available soon!`,
    });
  };

  const services = [
    {
      title: "Medicine Booking",
      description: "Book medicines from nearby stores",
      icon: Pill,
      onClick: () => handleServiceClick("Medicine Booking"),
    },
    {
      title: "Hospital Beds",
      description: "Check bed availability in hospitals",
      icon: Hospital,
      onClick: () => handleServiceClick("Hospital Beds"),
    },
    {
      title: "Doctor Appointments",
      description: "Book appointments with doctors",
      icon: Calendar,
      onClick: () => handleServiceClick("Doctor Appointments"),
    },
    {
      title: "Medicine Reminders",
      description: "Set reminders for your medicines",
      icon: Bell,
      onClick: () => handleServiceClick("Medicine Reminders"),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Health, Our Priority
            </h2>
            <p className="text-gray-600">
              Search medicines, book appointments, and manage your healthcare needs in one place
            </p>
          </div>

          <SearchBar />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                {...service}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;