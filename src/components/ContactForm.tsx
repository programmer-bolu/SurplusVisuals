import { useState } from 'react';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from './ui/select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    projectDetails: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null); // 'success', 'error', or null

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    projectType: string;
    projectDetails: string;
}

interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> {}

const handleInputChange = (e: InputChangeEvent) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
        ...prev,
        [name]: value
    }));
};

interface SelectChangeEvent {
    (value: string): void;
}

const handleSelectChange: SelectChangeEvent = (value) => {
    setFormData((prev: ContactFormData) => ({
        ...prev,
        projectType: value
    }));
};

interface SubmitData extends ContactFormData {
    fullName: string;
    timestamp: string;
    source: string;
}

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    // Prepare the data for Formspree
    const submitData: SubmitData = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        projectType: formData.projectType,
        projectDetails: formData.projectDetails,
        fullName: `${formData.firstName} ${formData.lastName}`.trim(),
        timestamp: new Date().toISOString(),
        source: 'Portfolio Website Contact Form'
    };

    try {
        const response: Response = await fetch('https://formspree.io/f/xrblrley', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(submitData)
        });

        if (response.ok) {
            setSubmitStatus('success');
            // Reset form after successful submission
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                projectType: '',
                projectDetails: ''
            });
            
            // Auto-hide success message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        setSubmitStatus('error');
        
        // Auto-hide error message after 7 seconds
        setTimeout(() => {
            setSubmitStatus(null);
        }, 7000);
    } finally {
        setIsLoading(false);
    }
};

  return (
    <Card className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 relative">
      {/* Success/Error Messages */}
      {submitStatus && (
        <div className={`absolute top-4 left-4 right-4 p-4 rounded-lg border backdrop-blur-md z-10 ${
          submitStatus === 'success' 
            ? 'bg-green-500/20 border-green-400/30 text-green-200' 
            : 'bg-red-500/20 border-red-400/30 text-red-200'
        }`}>
          <div className="flex items-center gap-2">
            {submitStatus === 'success' ? (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Message sent successfully!</span>
              </>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium">Failed to send message. Please try again.</span>
              </>
            )}
          </div>
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              First Name *
            </label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={isLoading}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20 text-sm transition-colors duration-300 disabled:opacity-50"
              placeholder="Emmanuel"
            />
          </div>
          <div>
            <label className="block text-white/80 text-sm font-medium mb-2">
              Last Name *
            </label>
            <Input
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={isLoading}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20 text-sm transition-colors duration-300 disabled:opacity-50"
              placeholder="Adewuyi"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Email *
          </label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={isLoading}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20 text-sm transition-colors duration-300 disabled:opacity-50"
            placeholder="emmanueladewuyi3@gmail.com"
          />
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Project Type *
          </label>
          <Select 
            value={formData.projectType} 
            onValueChange={handleSelectChange}
            disabled={isLoading}
            required
          >
            <SelectTrigger className="w-full bg-white/10 border border-white/20 text-white rounded-lg px-3 py-2 text-sm focus:border-blue-400 focus:ring-blue-400/20 transition-colors duration-300 disabled:opacity-50">
              <SelectValue placeholder="Select project type" />
            </SelectTrigger>
            <SelectContent className="bg-[#0f172a] border border-white/10 text-white">
              <SelectItem value="commercial">Commercial Video</SelectItem>
              <SelectItem value="music-video">Music Video</SelectItem>
              <SelectItem value="documentary">Documentary</SelectItem>
              <SelectItem value="fashion">Fashion Film</SelectItem>
              <SelectItem value="corporate">Corporate Video</SelectItem>
              <SelectItem value="short-film">Short Film</SelectItem>
              <SelectItem value="social-media">Social Media Content</SelectItem>
              <SelectItem value="wedding">Wedding Video</SelectItem>
              <SelectItem value="event">Event Coverage</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <label className="block text-white/80 text-sm font-medium mb-2">
            Project Details *
          </label>
          <Textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleInputChange}
            disabled={isLoading}
            required
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-blue-400 focus:ring-blue-400/20 text-sm min-h-[120px] transition-colors duration-300 disabled:opacity-50"
            placeholder="Tell me about your project, timeline, budget range, and specific requirements..."
          />
        </div>
        
        <Button
          type="submit"
          disabled={isLoading || !formData.firstName || !formData.lastName || !formData.email || !formData.projectType || !formData.projectDetails}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed py-3 text-lg transition-all duration-300 relative overflow-hidden"
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2m16 0h2M6.34 6.34L4.93 4.93M19.07 19.07l-1.41-1.41" />
              </svg>
              <span>Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2">
              <span>Send Message</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          )}
        </Button>
        
        {/* Form Footer */}
        <div className="text-center text-white/60 text-xs">
          <p>* Required fields</p>
          <p className="mt-1">We'll respond within 24 hours • Your information is secure</p>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;