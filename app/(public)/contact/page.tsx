import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>

        <p className="mt-3 text-muted-foreground">
          Have questions or need help? We'd love to hear from you.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <MapPin className="mt-1 h-6 w-6 text-primary" />

              <div>
                <h3 className="font-semibold">Office Address</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  House #15, Road #08,
                  <br />
                  Mirpur, Dhaka 1216,
                  <br />
                  Bangladesh
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Mail className="mt-1 h-6 w-6 text-primary" />

              <div>
                <h3 className="font-semibold">Email</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  support@rentnest.com
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Clock className="mt-1 h-6 w-6 text-primary" />

              <div>
                <h3 className="font-semibold">Working Hours</h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  Saturday - Thursday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card>
            <CardContent className="p-8">
              <h2 className="mb-6 text-2xl font-bold">Send us a Message</h2>

              <form className="space-y-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <Input placeholder="Enter your name" />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email
                    </label>

                    <Input type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <Input placeholder="Subject" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Message
                  </label>

                  <Textarea rows={6} placeholder="Write your message..." />
                </div>

                <Button className="w-full md:w-auto">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
