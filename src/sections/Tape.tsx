import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';


const words =[
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scaleable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Responsive",
  "Reliable",
];

export const TapeSection = () => {
  return (
     <div className="py-12 lg:py-14 overflow-x-clip">
      <div className=" bg-gradient-to-r from-rose-300/70 to-amber-200/70  -rotate-3 -mx-1 ">
       <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map(word => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="uppercase font-extrabold text-sm tracking-widest">{word}</span>
                    <StarIcon className="size-6 -rotate-12"/>
                  </div>
                ))}
                </Fragment>
            ))}
      
        </div>
       </div>
      </div>
     </div>
  );
};
