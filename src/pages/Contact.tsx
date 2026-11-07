import { useState } from "react";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_URL, TEL_URL, MAILTO_URL } from "@/lib/site";

const Contact = () => {
  usePageMeta("Contact Us | Cleanfix24 - Free Quotes in Somerset & Devon", "Get a free cleaning quote from Cleanfix24. Call, WhatsApp or send a message - serving Wellington, Taunton and surrounding areas.", "/contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    // Create WhatsApp message
    const whatsappMessage = `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
    const whatsappUrl = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success("Opening WhatsApp. Your message is prepared — click send to complete.");

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <WhatsAppButton />

      {/* Header */}
      <section className="bg-gradient-to-br from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center animate-fade-in">
            Get in Touch
          </h1>
          <p className="text-xl text-center mt-4 text-white/90 animate-fade-in">
            We're here to help with all your cleaning needs
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="07123 456789"
                    className="mt-1"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your cleaning needs..."
                    required
                    className="mt-1 min-h-[150px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  <MessageCircle className="mr-2" size={20} />
                  Send via WhatsApp
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Prefer to reach out directly? Use any of the methods below to get in touch with us.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href={TEL_URL} className="text-primary hover:underline text-lg">
                      {SITE.phoneDisplay}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Call us Monday - Sunday, 8am - 8pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MessageCircle size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">WhatsApp</h3>
                    <a 
                      href={WHATSAPP_URL} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-lg"
                    >
                      Send us a message
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      Quick responses, convenient chat
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href={MAILTO_URL} className="text-primary hover:underline text-lg">
                      {SITE.email}
                    </a>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-lg">Somerset & Devon</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wellington, Taunton & surrounding areas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Service Coverage</h2>
            <div className="bg-background rounded-lg p-8 text-center shadow-sm">
              <MapPin size={48} className="text-primary mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">
                We serve the Somerset and Devon area, with a focus on Wellington, Taunton, and surrounding communities. 
                Not sure if we cover your location? Give us a call to check!
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
