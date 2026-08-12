import { useState } from 'react';
import Layout from '../../components/Layout';
import { mockExamQuestions } from '../../data/mockData';

export default function CBTExam() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  
  const question = mockExamQuestions[currentQuestionIndex];
  
  const handleSelectOption = (option: string) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [question.id]: option
    });
  };

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

  return (
    <Layout role="student">
      <div className="page-enter min-h-screen flex flex-col">
        <header className="w-full flex flex-col sm:flex-row justify-between items-center py-6 z-10 relative border-b border-outline-variant/30 mb-8">
          <div className="flex items-center gap-4 mb-4 sm:mb-0">
            <h1 className="font-headline-md text-headline-md text-primary">Advanced Biology 301: Midterm</h1>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/30">
              <span className="material-symbols-outlined text-error">timer</span>
              <span className="font-data-numeric text-data-numeric text-error">24:05</span>
            </div>
          </div>
        </header>

        <main className="flex-grow flex items-center justify-center z-10 relative">
          <div className="w-full max-w-3xl flex flex-col gap-8">
            <div className="bg-surface-container-lowest rounded-xl p-8 shadow-sm border border-outline-variant/20 card">
              <div className="flex justify-between items-start mb-6 border-b border-surface-container-high pb-4">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest section-label">Question {currentQuestionIndex + 1} of {mockExamQuestions.length}</span>
                <span className="font-label-md text-label-md text-secondary">2 points</span>
              </div>
              <h2 className="font-headline-md text-headline-md text-primary mb-8 leading-relaxed">
                {question.text}
              </h2>
              
              <div className="flex flex-col gap-4">
                {question.options.map((option, index) => {
                  const letter = String.fromCharCode(65 + index);
                  const isSelected = selectedAnswers[question.id] === option;
                  
                  return (
                    <button 
                      key={option}
                      className={`rounded-xl p-6 flex items-center gap-4 text-left w-full border ${isSelected ? 'border-secondary bg-secondary/5 ring ring-secondary/20 shadow-sm' : 'border-outline-variant/20 bg-surface-container-lowest hover:border-secondary hover:shadow-sm'} transition-all`}
                      onClick={() => handleSelectOption(option)}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-data-numeric text-data-numeric flex-shrink-0 ${isSelected ? 'border-secondary bg-secondary text-on-secondary' : 'border-outline-variant text-on-surface-variant'}`}>
                        {letter}
                      </div>
                      <span className="font-body-lg text-body-lg text-primary">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex justify-between items-center bg-surface-container-lowest rounded-xl p-4 shadow-sm border border-outline-variant/20 card">
              <button 
                onClick={handlePrev} 
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 flex items-center gap-2 font-label-md text-label-md border border-primary text-primary rounded-lg hover:bg-primary/5 disabled:opacity-50"
              >
                <span className="material-symbols-outlined">arrow_back</span>
                Previous
              </button>
              
              {currentQuestionIndex === mockExamQuestions.length - 1 ? (
                <button className="bg-primary text-on-primary px-8 py-3 flex items-center gap-2 font-label-md text-label-md rounded-lg hover:opacity-90 shadow-sm">
                  Submit Exam
                  <span className="material-symbols-outlined">check_circle</span>
                </button>
              ) : (
                <button 
                  onClick={handleNext}
                  className="bg-primary text-on-primary px-6 py-3 flex items-center gap-2 font-label-md text-label-md rounded-lg hover:opacity-90 shadow-sm"
                >
                  Next
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
