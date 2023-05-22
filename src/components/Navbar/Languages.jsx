import { useState,React } from 'react';
import Eng from '../../images/download (1).png'
import Ger from '../../images/download (2).png'
import Fra from '../../images/download (3).png'

const LANGS = [
  {
    value: 'en',
    label: 'English',
    icon: Eng,
  },
  {
    value: 'de',
    label: 'German',
    icon: Ger,
  },
  {
    value: 'fr',
    label: 'French',
    icon: Fra,
  },
];

export default function LanguagePopover() {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`p-0 w-11 h-11 ${open ? 'bg-primary-main' : ''}`}
      >
        <img src={LANGS[0].icon} alt={LANGS[0].label} />
      </button>

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div className="bg-white p-2.5 mt-6 ml-4 w-48">
            {LANGS.map((option) => (
              <button
                key={option.value}
                className="flex items-center p-2.5 hover:bg-gray-100 rounded-sm"
                onClick={handleClose}
              >
                <img
                  src={option.icon}
                  alt={option.label}
                  className="w-7 mr-2"
                />
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
