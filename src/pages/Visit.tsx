
import { useState } from 'react';
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Visit = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    groupSize: '',
    visitType: '',
    specialRequests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your visit request has been submitted! We\'ll confirm your booking within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      groupSize: '',
      visitType: '',
      specialRequests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/30 to-yellow-300/30" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-4 animate-fade-in">
            Visit Our Farm
          </h1>
          <p className="text-xl text-gray-700 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Book your educational farm experience
          </p>
        </div>
      </section>

      {/* Visit Options */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12 animate-fade-in">
            Choose Your Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Family Tour",
                duration: "2 hours",
                price: "$15/person",
                description: "Perfect for families with children. Includes cow milking demo and feeding experience.",
                features: ["Cow milking demonstration", "Animal feeding", "Fresh milk tasting", "Photo opportunities"]
              },
              {
                title: "Educational Tour",
                duration: "3 hours",
                price: "$25/person",
                description: "Comprehensive tour for students and groups interested in sustainable farming.",
                features: ["Farm operations overview", "Sustainability practices", "Q&A with farmers", "Farm-to-table lunch"]
              },
              {
                title: "Premium Experience",
                duration: "Half day",
                price: "$45/person",
                description: "Full immersion experience including hands-on activities and gourmet farm meal.",
                features: ["All activities included", "Hands-on farming", "Gourmet farm meal", "Take-home products"]
              }
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold text-green-800 mb-2">{option.title}</h3>
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {option.duration}
                  </span>
                  <span className="font-semibold text-green-600">{option.price}</span>
                </div>
                <p className="text-gray-700 mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Booking Form */}
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg animate-fade-in">
            <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">Book Your Visit</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('time', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                      <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                      <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                      <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Group Size *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('groupSize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select group size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-2">1-2 people</SelectItem>
                      <SelectItem value="3-5">3-5 people</SelectItem>
                      <SelectItem value="6-10">6-10 people</SelectItem>
                      <SelectItem value="11-20">11-20 people</SelectItem>
                      <SelectItem value="20+">20+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Visit Type *
                  </label>
                  <Select onValueChange={(value) => handleSelectChange('visitType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select visit type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="family">Family Tour</SelectItem>
                      <SelectItem value="educational">Educational Tour</SelectItem>
                      <SelectItem value="premium">Premium Experience</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Dietary Requirements
                </label>
                <Textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={4}
                  className="w-full"
                  placeholder="Any special requirements, dietary restrictions, or questions..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
              >
                Book Your Visit
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Visit;
