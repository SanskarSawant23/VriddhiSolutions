import React, { useEffect } from 'react';

const Calendly = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
    
    <div className="calendly-inline-widget" data-url="https://calendly.com/worksan646/30min" style={{ minWidth: '320px', height: '700px' }}>
       
    </div>
    </>
  );
};

export default Calendly;