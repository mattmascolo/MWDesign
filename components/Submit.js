import { useState } from 'react';
import { supabase } from './SupabaseHandler';

const Submit = (props) => {
    const { first_name, last_name, email, message, phone, organization } = props;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = async (event) => {
    console.log('submitting')
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contact').insert([
        {
          first_name,
          email,
          message,
          organization,
          phone,
          last_name
        }
      ]);

      if (error) {
        throw error;
      }

      setSubmissionStatus('Your message was submitted successfully!');
    } catch (error) {
      setSubmissionStatus(JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
        <button
        onClick={handleSubmit} disabled={isSubmitting}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let&apos;s talk
          </button> 
        {submissionStatus && <div>{submissionStatus}</div>}
    </div>
  );
};

export default Submit;
