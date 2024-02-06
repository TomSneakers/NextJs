import Button from "./ui/Home/button";

export default function Home() {
  return (
    
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
         <div className="waveWrapper waveAnimation">
            <div className="waveWrapperInner bgTop">
              <div className="wave waveTop" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-top.png")'}}></div>
            </div>
            
            <div className="waveWrapperInner bgMiddle">
              <div className="wave waveMiddle" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'}}></div>
              <section className='section'>
                <div className='masthead-image' id='master-container'>
                    <div className='content center'>
                        <h1 id='master'>
                          <div>Bonjour</div>
                          <div id='master-container-scroller'>
                            <div className='master-container-scroller_item'>
                              <div className='cta-link' >Bonjour</div>
                            </div>
                            <div className='master-container-scroller_item'>
                              <div className='cta-link'>Veuillez</div>
                            </div>
                            <div className='master-container-scroller_item'>
                              <div className='cta-link' >vous</div>
                            </div>
                            <div className='master-container-scroller_item'>
                              <div className='cta-link'>connecter</div>
                            </div>
                          </div>
                          <div>Sur l'application.</div>
                          <Button href="/login" className="bouton-to-login" >Connection</Button>
                        </h1>
                    </div>
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
