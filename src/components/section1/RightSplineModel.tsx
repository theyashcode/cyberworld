// app/components/SplineModel.tsx
'use client';

import Spline from '@splinetool/react-spline';

export default function RightSplineModel() {
  return (
    <div className="w-full h-full relative mt-2" style={{ minHeight: '450px' }}>
      <Spline
        scene="https://prod.spline.design/OQbmz1d0VwxYzcys/scene.splinecode"
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
      />
    </div>
  );
}