import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero.png";
import { Heart, Award, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center animate-fade-in">
            About Cleanfix24
          </h1>
          <p className="text-xl text-center mt-4 text-white/90 animate-fade-in">
            A family business built on trust, care, and professional results
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src={heroImage} 
                alt="Cleanfix24 team" 
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We're <strong>Ihor and Ruslana</strong>, the proud owners of Cleanfix24 — a local family business 
                based in Wellington and Taunton. We built this company on a foundation of trust, care, 
                and a commitment to delivering professional results every single time.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                We understand how important your home and comfort are. That's why we treat every job 
                like it's our own home. Whether it's a deep clean after a party, removing stubborn 
                stains from your carpet, or detailing your car interior, we bring the same level of 
                attention and care to each project.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Based in Somerset and Devon, we're proud to serve our local community with reliable, 
                high-quality cleaning services that make a real difference.
              </p>
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                <a href="/contact">Get in Touch</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Cleanfix24?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 animate-fade-in">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Family Values</h3>
              <p className="text-muted-foreground">
                As a family-run business, we bring warmth, trust, and personal care to every job. 
                Your home is treated like our own.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Professional Results</h3>
              <p className="text-muted-foreground">
                We use professional equipment and techniques to deliver exceptional cleaning results 
                that exceed expectations.
              </p>
            </div>
            
            <div className="text-center p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={40} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Local & Trusted</h3>
              <p className="text-muted-foreground">
                Based in Wellington and Taunton, we're proud members of the Somerset & Devon community, 
                serving our neighbors with pride.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-secondary text-white p-12 rounded-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Experience the Cleanfix24 Difference
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Let us take care of your cleaning needs with professionalism and care
            </p>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <a href="/services">View Our Services</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
