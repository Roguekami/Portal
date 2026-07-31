import { useState } from 'react';
import Layout from '../../components/Layout';
import { mockExamQuestions } from '../../data/mockData';

const CBTExam = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});

  const question = mockExamQuestions[currentQuestionIndex];
  
  const handleNext = () => {
    if (currentQuestionIndex < mockExamQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSelectOption = (option: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [question.id]: option
    }));
  };

  return (
    <Layout role="student">
      <div className="max-w-[1000px] mx-auto px-margin_mobile md:px-margin_desktop py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-display-lg text-display-lg text-primary">Mathematics Mid-Term</h2>
          <div className="bg-error/10 text-error font-data-numeric text-xl px-4 py-2 rounded-lg font-bold">
            44:59
          </div>
        </div>
        
        <div className="bg-surface-container-lowest border border-[#E5E5E1] rounded-lg p-8 mb-6">
          <div className="flex justify-between items-center mb-6 text-on-surface-variant font-label-md">
            <span>Question {currentQuestionIndex + 1} of {mockExamQuestions.length}</span>
            <span>2.5 points</span>
          </div>
          
          <h3 className="font-body-lg text-xl mb-8">{question.text}</h3>
          
          <div className="space-y-4">
            {question.options.map((option, idx) => {
              const isSelected = selectedAnswers[question.id] === option;
              return (
                <div 
                  key={idx} 
                  onClick={() => handleSelectOption(option)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors flex items-center gap-3 ${isSelected ? 'border-primary bg-primary/5' : 'border-outline-variant/50 hover:bg-surface-container-low'}`}
                >
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? 'border-primary' : 'border-outline'}`}>
                    {isSelected && <div className="w-3 h-3 rounded-full bg-primary"></div>}
                  </div>
                  <span className="font-body-md">{option}</span>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={handlePrev}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 border border-outline-variant rounded-lg font-label-md text-on-surface-variant disabled:opacity-50 hover:bg-surface-container-low transition-colors"
          >
            Previous
          </button>
          
          {currentQuestionIndex === mockExamQuestions.length - 1 ? (
            <button className="px-8 py-2 bg-secondary text-white rounded-lg font-label-md hover:bg-secondary-container hover:text-on-secondary-container transition-colors shadow-md">
              Submit Exam
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="px-6 py-2 bg-primary text-on-primary rounded-lg font-label-md hover:opacity-90 transition-opacity"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CBTExam;
