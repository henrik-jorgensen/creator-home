import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogPortal,
  AlertDialogOverlay,
} from "@/components/ui/alert-dialog"

// Define the event type
interface ToggleDialogEvent extends CustomEvent {
  detail: {
    open: boolean;
    title: string;
    message: string;
    success: boolean;
  };
}

export function NewsletterDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const handleToggleDialog = (event: ToggleDialogEvent) => {
      setIsOpen(event.detail.open);
      setTitle(event.detail.title);
      setMessage(event.detail.message);
      setSuccess(event.detail.success);
    };

    document.addEventListener('toggle-dialog', handleToggleDialog as EventListener);
    return () => {
      document.removeEventListener('toggle-dialog', handleToggleDialog as EventListener);
    };
  }, []);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <span className="hidden" />
      </AlertDialogTrigger>
      <AlertDialogPortal>
        <AlertDialogOverlay 
          className="fixed inset-0 bg-black/50 z-50"
          data-state={isOpen ? 'open' : 'closed'}
        />
        <AlertDialogContent 
          className="fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] sm:max-w-[425px]"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <AlertDialogHeader>
            <div className="mx-auto mb-4 w-12 h-12" role="presentation">
              {success ? (
                <svg className="w-12 h-12 text-green-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              ) : (
                <svg className="w-12 h-12 text-red-500 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m15 9-6 6"/>
                  <path d="m9 9 6 6"/>
                </svg>
              )}
            </div>
            <AlertDialogTitle className="text-center">
              {title}
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              {message}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction 
              onClick={() => setIsOpen(false)}
              className="focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Okay, got it
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogPortal>
    </AlertDialog>
  );
} 