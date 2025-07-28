import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  return (
    <section className="bg-background py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-8 h-8 text-primary mr-3" />
          <span className="text-primary font-semibold uppercase tracking-wide text-sm">
            AI-Powered Sales Tool
          </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Create Compelling{" "}
          <span className="text-primary">Sales Pitches</span>{" "}
          in Minutes
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Transform your ideas into persuasive sales presentations with our AI-powered sales pitch generator. 
          Perfect for students, researchers, and professionals who need compelling pitches quickly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCTAClick}
            className="group"
          >
            Try Sales Pitch Generator Now - Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-success rounded-full mr-2"></span>
            No signup required • Instant results
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-4">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Pitches Generated</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="p-4">
            <div className="text-3xl font-bold text-primary mb-2">5 Min</div>
            <div className="text-muted-foreground">Average Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;