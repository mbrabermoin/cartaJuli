import { useEffect, useRef } from 'react'
import './App.css'

const photoPaths = [
  './assets/WhatsApp Image 2026-05-08 at 19.23.21.jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.21 (1).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.21 (2).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.21 (3).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.21 (4).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.21 (5).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22.jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (1).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (2).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (3).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (4).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (5).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (6).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (7).jpeg',
  './assets/WhatsApp Image 2026-05-08 at 19.23.22 (8).jpeg',
]

const photos = photoPaths.map((path) => new URL(path, import.meta.url).href)

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

const carouselFrames = [...framePositions, ...framePositions]

function App() {
  const carouselRef = useRef(null)

  useEffect(() => {
    const container = carouselRef.current

    if (!container) {
      return undefined
    }

    let animationId = 0
    let lastTimestamp = 0
    let isPaused = false

    const speed = 22
    const edgeOffset = 2

    const pause = () => {
      isPaused = true
    }

    const resume = () => {
      isPaused = false
      lastTimestamp = 0
    }

    const animate = (timestamp) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp
      }

      const delta = timestamp - lastTimestamp
      lastTimestamp = timestamp

      if (!isPaused) {
        const loopWidth = container.scrollWidth / 2

        if (loopWidth > container.clientWidth) {
          const nextPosition = container.scrollLeft + (speed * delta) / 1000

          if (nextPosition >= loopWidth - edgeOffset) {
            container.scrollLeft = nextPosition - loopWidth
          } else {
            container.scrollLeft = nextPosition
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    container.addEventListener('pointerdown', pause)
    container.addEventListener('pointerup', resume)
    container.addEventListener('pointercancel', resume)
    container.addEventListener('touchstart', pause, { passive: true })
    container.addEventListener('touchend', resume)

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('pointerdown', pause)
      container.removeEventListener('pointerup', resume)
      container.removeEventListener('pointercancel', resume)
      container.removeEventListener('touchstart', pause)
      container.removeEventListener('touchend', resume)
    }
  }, [])

  return (
    <main className="letter-page">
      <aside ref={carouselRef} className="photo-cloud" aria-hidden="true">
        {carouselFrames.map((frame, index) => (
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
            obvio, asique busqué la forma de sorprenderte, de hacer algo diferente,
            y se me ocurrió escribirte esta carta digital, que es algo que nos une,
            mas en este momento de relación. 
            Vuelvo a escribirte una vez más, para tu cumpleaños, para desearte el
            mejor cumpleaños de tu vida, sabiendo que los siguientes van a ser
            siempre mejores!
          </p>

          <p>
            No puedo creer todavía todo lo que vamos viviendo y progresando en
            nuestras vidas, en nuestra vida! Siento que estamos fortaleciendo
            nuestra relación, nuestra pareja y esa familia que ambos proyectamos y
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
            mejorar, pensando a futuro, planificando. Amo nuestra conexión, lo
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

          <p className="letter-signature">¡Feliz cumpleaños mi amor, te amo!</p>
        </section>

        <div className="wax-seal" aria-hidden="true">❤</div>
      </article>
    </main>
  )
}

export default App
