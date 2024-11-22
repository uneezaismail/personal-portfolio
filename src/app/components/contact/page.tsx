'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

const ContactMe  = () => {
  return (
    <section id="contact" className="py-12 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-8">Contact Me</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 lg:p-10">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="w-full md:w-1/2">
                <Label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <Label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="text-center">
              <Button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-lg shadow-md hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600 transition ease-in-out duration-300"
              >
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
