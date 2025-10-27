import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CallHistory = () => {
  return (
    <div className="min-h-screen bg-background p-6 md:p-12">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-3xl font-bold text-foreground">Call history</h1>
        
        <div className="bg-primary/10 rounded-lg p-16 flex flex-col items-center justify-center text-center space-y-6">
          <Phone className="h-16 w-16 text-muted-foreground" strokeWidth={1.5} />
          
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground">No call history yet</p>
            <p className="text-muted-foreground">Make your first call from the phone tab</p>
          </div>
          
          <Link 
            to="/phone" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            Go to Phone <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallHistory;
