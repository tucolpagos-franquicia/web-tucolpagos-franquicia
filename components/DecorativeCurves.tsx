export default function DecorativeCurves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Curved element - Yellow */}
      <svg
        className="absolute top-0 right-0 w-96 h-96 opacity-[0.06]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,200 Q300,100 400,200 T400,400 L0,400 L0,200 Q100,300 200,200"
          fill="#fdbc02"
        />
      </svg>

      {/* Curved element - Green */}
      <svg
        className="absolute bottom-0 left-0 w-96 h-96 opacity-[0.08]"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M200,200 Q100,300 0,200 T0,0 L400,0 L400,200 Q300,100 200,200"
          fill="#91c004"
        />
      </svg>
    </div>
  )
}


