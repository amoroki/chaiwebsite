import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Alert, AlertDescription } from "./ui/alert";
import { CheckCircle, AlertCircle } from "lucide-react";

interface SampleRequestModalProps {
  children: React.ReactNode;
}

export function SampleRequestModal({ children }: SampleRequestModalProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    teaTypes: [] as string[],
    quantities: '',
    notes: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const teaOptions = [
    'Black Tea (CTC) - PEKOE',
    'Black Tea (CTC) - BROKEN PEKOE',
    'Black Tea (CTC) - FANNINGS',
    'Black Tea (Orthodox) - OP',
    'Black Tea (Orthodox) - FBOP',
    'Black Tea (Orthodox) - PEKOE',
    'Green Tea - GUNPOWDER',
    'Green Tea - SENCHA STYLE',
    'Green Tea - SPECIALTY'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
    }
  };

  const handleTeaTypeChange = (teaType: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      teaTypes: checked 
        ? [...prev.teaTypes, teaType]
        : prev.teaTypes.filter(t => t !== teaType)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Basic validation
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.company) {
        setSubmitStatus('error');
        setStatusMessage('Please fill in all required fields.');
        setIsSubmitting(false);
        return;
      }

      if (formData.teaTypes.length === 0) {
        setSubmitStatus('error');
        setStatusMessage('Please select at least one tea type.');
        setIsSubmitting(false);
        return;
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // For now, just log the form data (replace with actual database submission)
      console.log('Sample request data:', formData);
      
      setSubmitStatus('success');
      setStatusMessage('Sample request submitted successfully! We will prepare and send samples within 3-5 business days.');
      setFormData({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phone: '',
        country: '',
        teaTypes: [],
        quantities: '',
        notes: ''
      });
      setTimeout(() => {
        setOpen(false);
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage('Something went wrong. Please try again or contact us directly.');
      console.error('Sample request submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Request Tea Samples</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <Alert className="mb-6 border-green-200 bg-green-50">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-700">
                {statusMessage}
              </AlertDescription>
            </Alert>
          )}
          
          {submitStatus === 'error' && (
            <Alert className="mb-6 border-red-200 bg-red-50">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <AlertDescription className="text-red-700">
                {statusMessage}
              </AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">First Name *</label>
                <Input 
                  placeholder="Your first name" 
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Last Name *</label>
                <Input 
                  placeholder="Your last name" 
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Company *</label>
              <Input 
                placeholder="Your company name" 
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                required
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <Input 
                  type="email" 
                  placeholder="your.email@company.com" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input 
                  type="tel" 
                  placeholder="+254 104 173 050" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Country/Region</label>
              <Input 
                placeholder="Your country or region" 
                value={formData.country}
                onChange={(e) => handleInputChange('country', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-3">Tea Types * (select at least one)</label>
              <div className="grid sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto border rounded-lg p-4">
                {teaOptions.map((teaType) => (
                  <div key={teaType} className="flex items-center space-x-2">
                    <Checkbox
                      id={teaType}
                      checked={formData.teaTypes.includes(teaType)}
                      onCheckedChange={(checked) => handleTeaTypeChange(teaType, checked as boolean)}
                    />
                    <label htmlFor={teaType} className="text-sm cursor-pointer">
                      {teaType}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Expected Quantities</label>
              <Input 
                placeholder="e.g., 100kg monthly, 5 tons quarterly" 
                value={formData.quantities}
                onChange={(e) => handleInputChange('quantities', e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Additional Notes</label>
              <Textarea 
                placeholder="Any specific requirements, quality standards, or questions..."
                rows={3}
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
              />
            </div>

            <div className="flex space-x-3">
              <Button 
                type="submit"
                className="flex-1 bg-green-600 hover:bg-green-700" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Samples'}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => setOpen(false)}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}