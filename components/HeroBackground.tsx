"use client";

export default function HeroBackground() {
  return (
    <>
      <div className="absolute inset-0 z-15">

        <div className="absolute top-1/4 right-1/3 w-[200px] h-[500px] bg-gradient-to-b from-purple-900/20 via-transparent to-blue-900/20 blur-2xl opacity-40" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-amber-200/10 via-transparent to-transparent rounded-full blur-3xl" />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/30 via-transparent to-slate-950/30" />
      </div>
    </>
  )
}

