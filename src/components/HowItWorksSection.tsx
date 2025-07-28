import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Edit3, Settings, Download, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  const steps = [
    {
      icon: Edit3,
      step: "01",
      title: "Input Your Details",
      description: "Enter your product/service information, target audience, and key selling points in our intuitive form."
    },
    {
      icon: Settings,
      step: "02", 
      title: "Customize Parameters",
      description: "Select your pitch type, tone, length, and industry focus to ensure the perfect match for your needs."
    },
    {
      icon: Rocket,
      step: "03",
      title: "AI Generation",
      description: "Our advanced AI processes your inputs and creates a compelling, persuasive sales pitch in seconds."
    },
    {
      icon: Download,
      step: "04",
      title: "Download & Use",
      description: "Get your professional sales pitch in multiple formats and start converting prospects immediately."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Creating a powerful sales pitch has never been easier. Follow these simple steps 
            to generate professional, persuasive content in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-border hover:shadow-lg transition-all duration-200 h-full">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-6 h-6 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center bg-muted/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Create Your Perfect Sales Pitch?
          </h3>
          <p className="text-muted-foreground mb-6">
            Join thousands of professionals who've transformed their sales approach with our AI-powered tool.
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCTAClick}
            className="group"
          >
            Try It Now - Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;