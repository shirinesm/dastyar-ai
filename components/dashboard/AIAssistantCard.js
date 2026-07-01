// نمایش پیشنهاد هوشمند Dastyar
// در نسخه Demo داده ثابت است.
// در آینده به AI Service متصل خواهد شد.


export default function AIAssistantCard() {


    return (
  
      <section
        className="
          rounded-3xl
          bg-[#EDE9FE]
          p-6
        "
      >
  
        <p className="text-sm text-[#6D5DFB]">
          Dastyar AI
        </p>
  
  
        <h2 className="mt-3 text-xl font-semibold text-[#292524]">
          Your focus can improve today
        </h2>
  
  
        <p className="mt-3 text-sm leading-6 text-[#57534E]">
          You completed your main tasks.
          Consider planning your next important activity.
        </p>
  
  
      </section>
  
    );
  
  }