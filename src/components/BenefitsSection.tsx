import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Award, 
  Clock, 
  CheckCircle,
  ArrowRight 
} from "lucide-react";

const BenefitsSection = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increase Conversion Rates",
      description: "Professional, persuasive pitches that follow proven sales psychology principles to boost your success rate.",
      stat: "95% Success Rate"
    },
    {
      icon: Clock,
      title: "Save Valuable Time",
      description: "Generate complete sales pitches in minutes instead of hours. Focus on selling, not writing.",
      stat: "10x Faster"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Solution",
      description: "Free to use with no hidden costs. Get professional-quality results without hiring expensive copywriters.",
      stat: "100% Free"
    },
    {
      icon: Users,
      title: "Audience-Specific Content",
      description: "Tailored pitches for students, researchers, professionals, and any target demographic you need to reach.",
      stat: "Any Audience"
    },
    {
      icon: Award,
      title: "Professional Quality",
      description: "AI-generated content that matches the quality of experienced sales professionals and marketing experts.",
      stat: "Expert Level"
    },
    {
      icon: CheckCircle,
      title: "Proven Frameworks",
      description: "Built on established sales methodologies like AIDA, PAS, and solution selling for maximum impact.",
      stat: "Time-Tested"
    }
  ];

  const comparisons = [
    { feature: "Professional Quality", us: true, others: "Limited" },
    { feature: "Free to Use", us: true, others: false },
    { feature: "Instant Generation", us: true, others: "Slow" },
    { feature: "Multiple Formats", us: true, others: "Basic" },
    { feature: "No Signup Required", us: true, others: false },
    { feature: "Audience Targeting", us: true, others: "Generic" }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Sales Pitch Generator?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the unique advantages that make our tool the preferred choice 
            for students, researchers, and professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mr-4">
                    <benefit.icon className="w-6 h-6 text-success" />
                  </div>
                  <span className="text-xs font-semibold text-success uppercase tracking-wide">
                    {benefit.stat}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            How We Compare
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 text-foreground font-semibold">Feature</th>
                  <th className="text-center py-4 text-foreground font-semibold">Our Tool</th>
                  <th className="text-center py-4 text-foreground font-semibold">Others</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((comparison, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 text-foreground">{comparison.feature}</td>
                    <td className="text-center py-4">
                      {comparison.us === true ? (
                        <CheckCircle className="w-5 h-5 text-success mx-auto" />
                      ) : (
                        <span className="text-success font-semibold">{comparison.us}</span>
                      )}
                    </td>
                    <td className="text-center py-4">
                      {comparison.others === false ? (
                        <span className="text-destructive">✗</span>
                      ) : (
                        <span className="text-muted-foreground">{comparison.others}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

export default BenefitsSection;