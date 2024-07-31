import { useState } from 'react';
import PropTypes from 'prop-types';

const UpArrow = () => (
  <svg
    className="w-6 h-6 text-gray-800"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 9l-7-7-7 7"
    />
  </svg>
);

const DownArrow = () => (
  <svg
    className="w-6 h-6 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 15l7 7 7-7"
    />
  </svg>
);

const Accordion = ({ sections, onSelectSection }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    onSelectSection(index);
  };

  return (
    <div className="w-full">
      {sections.map((section, index) => (
        <div key={index} className="w-full">
          <button
            className={`w-full text-left px-4 py-2 mb-1 flex items-center justify-between border-t border-gray-300 rounded-lg font-semibold transition-colors ${
              openIndex === index
                ? 'bg-zinc-300 text-gray-800'
                : 'bg-purple-600 text-white'
            } ${index !== sections.length - 1 ? 'border-b' : ''}`}
            onClick={() => handleToggle(index)}
          >
            <span
              className={`text-lg md:text-xl ${openIndex === index ? 'text-gray-800 font-bold text-2xl py-1' : 'text-white py-1'}`}
            >
              {section.title}
            </span>
            <span>
              {openIndex === index ? <UpArrow /> : <DownArrow />}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 border-t border-gray-300 rounded-b-lg">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
  })).isRequired,
  onSelectSection: PropTypes.func.isRequired,
};

export default Accordion;
