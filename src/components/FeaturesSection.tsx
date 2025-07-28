import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Zap, 
  Target, 
  FileText, 
  Sparkles, 
  Clock, 
  Shield,
  ArrowRight 
} from "lucide-react";

const FeaturesSection = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  const features = [
    {
      icon: Zap,
      title: "AI-Powered Generation",
      description: "Advanced AI algorithms create compelling sales pitches tailored to your specific needs and target audience.",
      highlight: "Smart Technology"
    },
    {
      icon: Target,
      title: "Audience-Focused Content", 
      description: "Generate pitches optimized for students, researchers, professionals, or any specific target demographic.",
      highlight: "Precision Targeting"
    },
    {
      icon: FileText,
      title: "Multiple Formats",
      description: "Create pitches in various formats - elevator pitches, presentation scripts, email templates, and more.",
      highlight: "Versatile Output"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Generate professional sales pitches in under 5 minutes. No waiting, no complicated processes.",
      highlight: "Lightning Fast"
    },
    {
      icon: Shield,
      title: "Professional Quality",
      description: "Each generated pitch follows proven sales frameworks and persuasion techniques for maximum impact.",
      highlight: "Proven Methods"
    },
    {
      icon: Sparkles,
      title: "Customizable Output",
      description: "Fine-tune your pitches with industry-specific language, tone adjustments, and length preferences.",
      highlight: "Full Control"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Perfect Pitches
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our sales pitch generator combines cutting-edge AI with proven sales methodologies 
            to help you create persuasive presentations that convert.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCTAClick}
                  className="group"
                >
                  Try This Feature
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCTAClick}
            className="group"
          >
            Start Using Sales Pitch Generator Today
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;