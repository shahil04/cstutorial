import React, {useEffect} from 'react';
import OriginalLayout from '@theme-original/Layout';
import AdBanner from '../../components/AdBanner';

export default function LayoutWrapper(props) {
  useEffect(() => {
    // Append inline ads into any placeholder divs inside docs content
    try {
      const placeholders = document.querySelectorAll('.inline-ad');
      placeholders.forEach((ph) => {
        if (!ph.dataset.mounted) {
          ph.dataset.mounted = '1';
          const container = document.createElement('div');
          ph.appendChild(container);
        }
      });
    } catch (e) {
      // ignore in SSR
    }
  }, []);

  return (
    <>
      {/* Top banner below header */}
      <AdBanner variant="top" />
      <OriginalLayout {...props} />
      {/* Right floating sidebar ad */}
      <div className="right-ad">
        <AdBanner variant="sidebar" />
      </div>
    </>
  );
}
