'use client';

import Spline from '@splinetool/react-spline';

export default function SplineModel() {
  return (
    // Parent container: Mobile pe 350px height lega taaki layout na bigde
    <div className="relative flex justify-center items-center w-full h-[350px] md:h-full">
      
      {/* Magic Wrapper: 
          Mobile pe hum isko intentionally bada (600px) bana rahe hain taaki circle edge se cut na ho.
          Fir scale-[0.55] se usko visually 55% chota kar diya taaki screen par fit aa jaye.
          Desktop (md) par isko wapas full size aur normal scale de diya hai. */}
      <div className="absolute w-[600px] h-[600px] md:w-full md:h-full scale-[0.55] sm:scale-[0.7] md:scale-100 flex justify-center items-center origin-center">
        <Spline
          scene="https://prod.spline.design/Jp7s1MUBaPM5OSV8/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

    </div>
  );
}