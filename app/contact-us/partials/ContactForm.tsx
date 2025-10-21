"use client";

import Image from "next/image";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <div id="contact" className="pt-32 md:pt-44 pb-12 px-5 md:px-20">
        <div className="text-center">
          <h1 className="text-[40px] md:text-[80px] lg:text-[140px] font-bold font-eudoxus bg-gradient-to-r from-white to-[#525151] bg-clip-text text-transparent">
            Get in touch
          </h1>
          <p className="mt-6 md:mt-8 text-[#FAFAFA] font-gordita text-lg md:text-xl leading-relaxed max-w-[735px] mx-auto">
            Join thousands of users who are already spending their crypto with our secure, instant
            card platform.
          </p>
        </div>
      </div>
      <div className="pb-16 md:pb-24">
        <div className="grid lg:grid-cols-2 rounded-[20px] overflow-hidden bg-[#1B1B1B]">
          {/* Form */}
          <div className="p-8 md:p-12 lg:p-16">
            <div className="mb-8 md:mb-12">
              <h2 className="font-eudoxus text-3xl md:text-4xl font-bold text-white mb-3">
                Lets connect
              </h2>
              <p className="text-white/80 font-gordita text-lg md:text-xl">
                Lets align our constellations! Reach out and let the magic of collaboration
                illuminate our skies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 font-gordita focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                  className="w-full px-4 py-3.5 rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 font-gordita focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full px-4 py-3.5 rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 font-gordita focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full px-4 py-3.5 rounded-2xl border border-white/20 bg-white/5 text-white placeholder:text-white/60 font-gordita focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
                className="w-full px-4 py-3.5 rounded-[20px] border border-white/20 bg-white/5 text-white placeholder:text-white/60 font-gordita resize-none focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 px-10 rounded-[34px] bg-gradient-to-l from-[#BCBCBC] to-[#D9D9D9] text-black font-gordita font-medium capitalize hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send us the message"}
              </button>
            </form>
          </div>

          <div className="hidden lg:block relative w-full">
            <Image
              src="/images/contact-us-banner.png"
              alt="Contact Us"
              fill
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
