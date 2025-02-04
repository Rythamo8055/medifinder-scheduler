import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

const ServiceCard = ({ title, description, icon: Icon, onClick }: ServiceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all">
      <div className="flex flex-col space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{title}</h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
        <Button 
          onClick={onClick}
          className="w-full"
        >
          Access Service
        </Button>
      </div>
    </Card>
  );
};

export default ServiceCard;