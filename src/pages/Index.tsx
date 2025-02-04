import { Pill, Hospital, Calendar, Bell } from "lucide-react";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import ServiceCard from "@/components/ServiceCard";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleServiceClick = (service: string) => {
    switch (service) {
      case "Medicine Booking":
        toast({
          title: "Medicine Booking",
          description: "Searching for nearby pharmacies...",
        });
        break;
      case "Hospital Beds":
        toast({
          title: "Hospital Beds",
          description: "Checking bed availability in nearby hospitals...",
        });
        break;
      case "Doctor Appointments":
        toast({
          title: "Doctor Appointments",
          description: "Loading available appointment slots...",
        });
        break;
      case "Medicine Reminders":
        toast({
          title: "Medicine Reminders",
          description: "Setting up your medicine reminder...",
        });
        break;
    }
  };

  const services = [
    {
      title: "Medicine Booking",
      description: "Find and book medicines from nearby stores with real-time availability",
      icon: Pill,
      onClick: () => handleServiceClick("Medicine Booking"),
    },
    {
      title: "Hospital Beds",
      description: "Check real-time bed availability in hospitals near you",
      icon: Hospital,
      onClick: () => handleServiceClick("Hospital Beds"),
    },
    {
      title: "Doctor Appointments",
      description: "Schedule appointments with doctors based on their availability",
      icon: Calendar,
      onClick: () => handleServiceClick("Doctor Appointments"),
    },
    {
      title: "Medicine Reminders",
      description: "Set up personalized reminders for your medication schedule",
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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