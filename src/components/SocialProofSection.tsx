import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, Users, TrendingUp, Award } from "lucide-react";

const SocialProofSection = () => {
  const handleCTAClick = () => {
    window.open("https://aifreeforever.com/tools/ai-sales-pitch-generator", "_blank");
  };

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Research Professor, MIT",
      content: "This tool helped me create compelling grant proposal pitches that secured $2M in funding. The AI understands academic language perfectly.",
      rating: 5,
      image: "SC"
    },
    {
      name: "Mike Rodriguez", 
      role: "Sales Manager, TechCorp",
      content: "Our team's conversion rate increased by 40% after using these AI-generated pitches. The quality is consistently excellent.",
      rating: 5,
      image: "MR"
    },
    {
      name: "Emma Thompson",
      role: "MBA Student, Harvard",
      content: "Perfect for case study presentations and internship applications. Saved me hours of writing and the results speak for themselves.",
      rating: 5,
      image: "ET"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "50,000+",
      label: "Active Users",
      description: "Professionals trust our tool"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Users report better outcomes"
    },
    {
      icon: Award,
      number: "4.9/5",
      label: "User Rating",
      description: "Consistently top-rated"
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by Thousands of Professionals
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join students, researchers, and business professionals who've transformed 
            their sales approach with our AI-powered pitch generator.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border text-center hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-5 h-5 text-primary mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warning fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.image}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Join the Success Stories
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Be part of a growing community of professionals who've revolutionized their sales approach. 
            Your success story could be next.
          </p>
          <Button 
            variant="cta" 
            size="xl"
            onClick={handleCTAClick}
            className="group"
          >
            Create Your Winning Pitch Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;