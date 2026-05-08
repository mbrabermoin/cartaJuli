import { useState } from 'react'
import './App.css'

const photoModules = import.meta.glob(
  './assets/WhatsApp Image 2026-05-08 at 19.23*.jpeg',
  { eager: true, import: 'default' },
)

const photos = Object.entries(photoModules)
  .sort(([leftPath], [rightPath]) =>
    leftPath.localeCompare(rightPath, undefined, { numeric: true }),
  )
  .map(([, src]) => src)

const framePositions = photos.map((src, index) => {
  const side = index % 2 === 0 ? 'left' : 'right'
  const vertical = 8 + ((index * 13) % 76)
  const distance = 2 + ((index * 7) % 9)
  const rotation = -12 + ((index * 17) % 25)
  const depth = 1 + (index % 4)

  return {
    src,
    side,
    vertical,
    distance,
    rotation,
    depth,
  }
})

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className="letter-page">
      <div className={`envelope-stage ${isOpen ? 'envelope-opened' : ''}`}>
        <button
          type="button"
          className="envelope-button"
          onClick={() => setIsOpen(true)}
          aria-label="Abrir carta"
        >
          <span className="envelope-shadow" aria-hidden="true"></span>
          <span className="envelope-back" aria-hidden="true"></span>
          <span className="envelope-flap" aria-hidden="true"></span>
          <span className="envelope-front" aria-hidden="true"></span>
          <span className="envelope-seal" aria-hidden="true">❤</span>
          <span className="envelope-instruction">Para Juli, tocá para abrir!</span>
        </button>
      </div>

      <div className={`letter-experience ${isOpen ? 'is-open' : ''}`}>
        <aside className="photo-cloud" aria-hidden="true">
          {framePositions.map((frame, index) => (
            <figure
              key={`${frame.src}-${index}`}
              className={`memory-frame ${frame.side === 'left' ? 'memory-left' : 'memory-right'}`}
              style={{
                top: `${frame.vertical}%`,
                [frame.side]: `${frame.distance}%`,
                '--rotation': `${frame.rotation}deg`,
                zIndex: frame.depth,
              }}
            >
              <img src={frame.src} alt="" loading="lazy" decoding="async" />
            </figure>
          ))}
        </aside>

        <aside className="photo-cloud-mobile" aria-hidden="true">
          <div className="photo-track">
            {[0, 1].map((copy) => (
              <div className="photo-group" key={copy}>
                {photos.map((src, index) => (
                  <figure key={`${src}-${copy}-${index}`} className="memory-frame-mobile">
                    <img src={src} alt="" loading="lazy" decoding="async" />
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </aside>

        <div className="heart-field" aria-hidden="true">
          <span className="heart heart-1">❤</span>
          <span className="heart heart-2">❤</span>
          <span className="heart heart-3">❤</span>
          <span className="heart heart-4">❤</span>
          <span className="heart heart-5">❤</span>
        </div>

        <div className="ambient-shape ambient-shape-top" aria-hidden="true"></div>
        <div className="ambient-shape ambient-shape-bottom" aria-hidden="true"></div>

        <article className="letter-card">
          <header className="letter-header">
            <p className="letter-mini-title">Con todo mi amor</p>
            <p className="letter-tag">Carta de cumpleaños</p>
            <h1>Para vos, Gordita</h1>
            <div className="header-divider" aria-hidden="true">
              <span>❤</span>
            </div>
          </header>

          <section className="letter-content" aria-label="Carta romántica">
            <p>Gordita,</p>

          <p>
            No encontraba momento para escribirte esta carta en papel, iba a ser muy 
            obvio, me conoces todos los secretos. Asique busqué la forma de sorprenderte
            y se me ocurrió escribirte esta carta digital, que es algo que nos une,
            mas en este momento de relación y de la vida. 
            Vuelvo a escribirte una vez más, para tu cumpleaños, para desearte el
            mejor cumpleaños de tu vida, sabiendo que los siguientes van a ser
            siempre mejores!
          </p>

          <p>
            No puedo creer todavía todo lo que vamos viviendo y progresando en
            nuestras vidas, en nuestra vida! Siento que estamos fortaleciendo
            nuestra relación, nuestra pareja, nuestro equipo (por ahora de a 3 con el Gordo Lito)
             y esa familia que ambos proyectamos y
            que ya estamos encaminados en lograr. No puedo creer que ya llevemos
            un año viviendo juntos, que tu último cumpleaños haya sido viviendo
            separados, y hoy no poder ni imaginarme un día, ni una noche sin estar
            con vos!
          </p>

          <p>
            No puedo creer la increíble relación que tenemos, aunque tengamos
            nuestras ideas y nuestras formas, nos complementamos de una forma
            única. Y en los puntos donde todavía no encajamos, ambos trabajamos
            para acercarnos, para hacerle la vida más fácil y más feliz al otro.
            Amo nuestras noches eternas hablando, planteándonos cosas, viendo que
            mejorar, pensando a futuro, planificando. Que se vea por la ventana que ya salio el
             sol y seguir hablando. Amo nuestra conexión, lo
            fácil que nos sale todo cuando estamos juntos.
          </p>

          <p>
            El año pasado te decía que se nos venía una etapa hermosa de
            convivencia, te lo decía con todos los miedos y la incertidumbre de no
            saber que iba a pasar, ahora estoy convencido de que fue la mejor
            decisión. Poder despertarme todos los días con la mujer de mi vida y
            poder ir armando nuestro hogar, discutiendo que es mejor o peor, pero
            disfrutando nuestra relación a mil. Nuestro viajes a Brasil y a Panamá
            no fueron solo vacaciones para mi, fueron mil anécdotas, mil risas,
            (mil peleas), mil abrazos, mil besos y otros dos viajes más, para
            nuestra colección, que te prometo (o te lo juro como diría mi piojo),
            son los primeros de millones más.
          </p>

          <p>
            Sigo sin entender qué habré hecho para merecer estar a tu lado, poder
            acompañarte y que me elijas como compañero de vida. Espero siempre
            estar a tu altura, poder hacerte feliz toda la vida y que sigamos
            mejorando juntos, sabiendo que no estamos en lo mejor de nuestra vida,
            siempre lo mejor está por venir.
          </p>
          
          <p>
            Y por ultimo quiero agracerte! Gracias por ser mi sustento, mi compañera, 
            mi vida, mi todo. 
            Gracias por elegirme, por bancarme, por ayudarme a crecer, por hacerme feliz,
            por hacerme sentir amado, por hacerme sentir que soy el hombre más afortunado del
            mundo. Gracias por ser vos, por ser tan increíble, por ser tan hermosa,
             por ser tan dulce, tan inteligente, tan fuerte,
            tan buena persona. Gracias por ser la mujer de mi vida.
          </p>

            <p className="letter-signature">¡Feliz cumpleaños mi amor, te amo!</p>
          </section>

          <div className="wax-seal" aria-hidden="true">❤</div>
        </article>
      </div>
    </main>
  )
}

export default App
