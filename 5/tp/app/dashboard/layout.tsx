import SideNav from '../../app/ui/dashboard/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="waveWrapper waveAnimation">
        <SideNav />
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-top.png")'}}></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'}}></div>
        </div>
        <div className="childrenWrapper children flex justify-center items-center h-screen">
          {children}
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'}}></div>
        </div>
      </div>
    </>
  );
}
