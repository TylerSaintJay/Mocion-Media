
import React from 'react';

// Fix: Extend the JSX.IntrinsicElements interface in the global namespace.
// Using 'any' for the type ensures that the custom element 'elevenlabs-convai' 
// and its non-standard attributes (like 'agent-id') are recognized without errors.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': any;
    }
  }
}

export const ChatWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Fix: The custom element is now declared in the JSX namespace to resolve property existence errors */}
      <elevenlabs-convai agent-id="agent_7001kecca82wesxbmyhqextt5fka"></elevenlabs-convai>
    </div>
  );
};
