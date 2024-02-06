
import LoginForm from '@/app/ui/login-form';
import Button from '@/app/ui/home/button';
export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen bg-login">
      <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-top.png")'}}></div>
            </div>
            
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'}}></div>
              <section className='section'>
              <div className="login-form relative mx-auto w-full max-w-[400px] flex-col space-y-2.5 p-4 mt-32 z-500">
              <LoginForm />
              </div>
              </section>
            </div>
            <div className="waveWrapperInner bgBottom">
              <div className="wave waveBottom" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'}}></div>
            </div>
          </div>
        
      
    </main>
  );
}