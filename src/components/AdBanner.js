import React, {useEffect} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';


function makeAdIns(adClient, adSlot, style, className) {
  return (
    <ins
      className={className || 'adsbygoogle'}
      style={style}
      data-ad-client={adClient}
      data-ad-slot={adSlot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

function AdBanner({ variant }) {
  const {siteConfig} = useDocusaurusContext();
  const adClient = siteConfig?.customFields?.adClient;
  const placeholderUrl = 'https://via.placeholder.com/728x90?text=Ad+Placeholder'; // Internet image for ad placeholder

  useEffect(() => {
    if (adClient && adClient !== 'ca-pub-xxxxxxxx') {
      try {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (e) {
        // ignore
      }
    }
  }, [variant, adClient]);

  function renderAdOrImage(slot, style, className) {
    if (!adClient || adClient === 'ca-pub-xxxxxxxx') {
      return (
        <img src={placeholderUrl} alt="Ad placeholder" style={style} className={className} />
      );
    }
    return makeAdIns(adClient, slot, style, className);
  }

  if (variant === 'sidebar') {
    return (
      <div className="ad-container ad-sidebar" aria-hidden>
        {renderAdOrImage('1234567890', {display: 'block', width: '300px', height: '600px'})}
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className="ad-container ad-inline" aria-hidden>
        {renderAdOrImage('2345678901', {display: 'block', width: '100%', height: '90px'})}
      </div>
    );
  }

  // top banner
  return (
    <div className="ad-container ad-top" aria-hidden>
      {renderAdOrImage('3456789012', {display: 'block', width: '100%', height: '90px'})}
    </div>
  );
}

export default AdBanner;
