// بخش معرفی اصلی Dashboard
// نمایش وضعیت کلی روز و امتیازهای مهم کاربر


export default function HeroSection() {

    return (
  
      <section className="
        rounded-3xl
        border
        border-[#E7DED2]
        bg-gradient-to-br
        from-[#F3EBDD]
        to-[#FFFCF7]
        p-6
        md:p-8
      ">
  
  
        <p className="text-sm text-[#78716C]">
          Good evening 👋
        </p>
  
  
        <h1 className="
          mt-3
          max-w-2xl
          text-2xl
          font-semibold
          text-[#292524]
          md:text-3xl
        ">
          Let's make today productive
        </h1>
  
  
        <p className="
          mt-3
          max-w-xl
          text-sm
          leading-6
          text-[#78716C]
        ">
          Track your activities, improve your focus and build better routines with Dastyar.
        </p>
  
  
  
        <div className="
          mt-6
          flex
          flex-col
          gap-3
          sm:flex-row
        ">
  
  
          <div className="
            rounded-2xl
            bg-[#6D5DFB]
            px-5
            py-3
            text-white
          ">
  
            <p className="text-xs opacity-80">
              Today's Score
            </p>
  
            <p className="text-2xl font-semibold">
              85%
            </p>
  
          </div>
  
  
  
          <div className="
            rounded-2xl
            bg-[#FFFCF7]
            px-5
            py-3
          ">
  
            <p className="text-xs text-[#78716C]">
              Focus
            </p>
  
  
            <p className="text-2xl font-semibold text-[#292524]">
              75%
            </p>
  
          </div>
  
  
        </div>
  
  
      </section>
  
    );
  
  }