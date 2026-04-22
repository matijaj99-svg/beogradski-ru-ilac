import heroWorker from "@/assets/hero-worker.jpg";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";

const gallery = [
  { src: gallery1, alt: "Šut i otpadni materijal pripremljen za iznošenje" },
  { src: gallery2, alt: "Rušenje podova i pregradnih elemenata" },
  { src: gallery3, alt: "Kontejner sa drvenim otpadom" },
  { src: gallery4, alt: "Očišćen prostor spreman za predaju" },
  { src: gallery5, alt: "Rušenje u podrumskim prostorijama" },
  { src: gallery6, alt: "Sortirane cigle pripremljene za odvoz" },
];

const PHONE = "+381 63 1806752";
const PHONE_HREF = "tel:+381631806752";

const services = [
  { n: "01", title: "Rušenje stanova", desc: "Pregradni zidovi, keramika, parket, sanitarije." },
  { n: "02", title: "Iznošenje šuta", desc: "Vreće, kontejneri, kombiji. Ovlašćena deponija." },
  { n: "03", title: "Završno čišćenje", desc: "Grubo i fino čišćenje. Spremno za useljenje." },
];

const steps = [
  { n: "01", t: "Poziv", d: "Opišete prostor i obim radova." },
  { n: "02", t: "Procena", d: "Izlazak na teren — fiksna ponuda." },
  { n: "03", t: "Rušenje", d: "Ekipa, alat, zaštita." },
  { n: "04", t: "Predaja", d: "Čisto, fotografije, garancija." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-matte text-chalk font-base selection:bg-safety selection:text-matte">
      {/* Status bar */}
      <div className="bg-safety text-matte font-tactical text-[10px] md:text-xs px-4 md:px-6 py-1.5 flex justify-between tracking-[0.2em] font-bold uppercase">
        <span>Aktivne operacije</span>
        <span>Dispečer 24/7</span>
      </div>

      {/* Nav */}
      <nav className="flex justify-between items-center px-4 md:px-12 py-5 border-b border-scratched bg-matte sticky top-0 z-40">
        <a href="#" className="flex flex-col">
          <span className="font-tactical text-xl md:text-2xl font-bold uppercase tracking-widest leading-none text-chalk">
            Apex Rušenje
          </span>
          <span className="font-tactical text-[10px] text-safety tracking-[0.3em] uppercase mt-1">
            Rušenje · Šut · Čišćenje
          </span>
        </a>
        <div className="hidden lg:flex gap-10 font-tactical text-sm tracking-widest uppercase text-chalk/60">
          <a href="#usluge" className="hover:text-safety">Usluge</a>
          <a href="#proces" className="hover:text-safety">Proces</a>
          <a href="#galerija" className="hover:text-safety">Galerija</a>
          
          <a href="#kontakt" className="hover:text-safety">Kontakt</a>
        </div>
        <a
          href={PHONE_HREF}
          className="font-tactical text-base md:text-xl text-safety tracking-widest hover:text-chalk"
        >
          {PHONE}
        </a>
      </nav>

      {/* Hero */}
      <header className="px-4 md:px-12 py-20 md:py-32 border-b border-scratched relative overflow-hidden">
        <img
          src={heroWorker}
          alt="Radnik ruši zid u stanu — Apex Rušenje Beograd"
          width={1600}
          height={1024}
          className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-matte via-matte/80 to-matte/40 pointer-events-none" />
        <div className="absolute inset-0 hazard-stripes opacity-10 pointer-events-none" />
        <div className="relative">
          <div className="mb-6 flex items-center gap-4">
            <div className="size-2 bg-safety" />
            <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
              Rušenje stanova // Beograd
            </span>
          </div>

          <h1 className="font-tactical text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] font-bold uppercase leading-[0.85] mb-8 text-chalk">
            Rušimo.<br />
            Iznosimo.<br />
            <span className="text-stroke-chalk">Čistimo.</span>
          </h1>

          <p className="text-base md:text-lg text-chalk/70 max-w-[45ch] mb-10 font-medium">
            Jedna ekipa, fiksna cena, bez kašnjenja.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <a
              href="#kontakt"
              className="bg-safety text-matte font-tactical uppercase font-bold text-base md:text-lg px-8 py-5 hover:bg-chalk border-2 border-safety hover:border-chalk text-center tracking-wider transition-colors"
            >
              Besplatna procena
            </a>
            <a
              href={PHONE_HREF}
              className="bg-transparent text-chalk font-tactical uppercase font-bold text-base md:text-lg px-8 py-5 hover:border-safety hover:text-safety border-2 border-scratched text-center tracking-wider transition-colors"
            >
              Pozovi odmah
            </a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="usluge" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Usluge
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Tri faze. Jedna ekipa.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-scratched border border-scratched">
          {services.map((s) => (
            <article key={s.n} className="bg-matte p-6 md:p-8 hover:bg-steel/40 transition-colors">
              <div className="font-tactical text-safety text-xs font-bold tracking-widest mb-6">
                {s.n}
              </div>
              <h3 className="font-tactical text-2xl uppercase font-bold text-chalk mb-3">
                {s.title}
              </h3>
              <p className="text-chalk/60 text-sm md:text-base">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched bg-steel/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Proces
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Od poziva do čistog stana — 24–72h.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-scratched border border-scratched">
          {steps.map((s) => (
            <div key={s.n} className="bg-matte p-6 md:p-8 hover:bg-steel transition-colors">
              <div className="font-tactical text-5xl text-safety/40 font-bold mb-6">{s.n}</div>
              <h3 className="font-tactical text-xl uppercase font-bold text-chalk mb-2">{s.t}</h3>
              <p className="text-chalk/60 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section id="galerija" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Galerija
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Prethodni poslovi.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-scratched border border-scratched">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="bg-steel/40 aspect-square relative group overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute top-3 left-3 font-tactical text-safety text-[10px] font-bold tracking-[0.3em] uppercase bg-matte/80 px-2 py-1">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Kontakt
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk leading-[0.9] mb-8">
          Zovi. Izlazimo danas.
        </h2>

        <div className="space-y-6">
          <a href={PHONE_HREF} className="flex items-baseline gap-4 group">
            <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Telefon</span>
            <span className="font-tactical text-2xl md:text-3xl text-chalk group-hover:text-safety">{PHONE}</span>
          </a>
          <div className="flex items-baseline gap-4">
            <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Email</span>
            <span className="font-tactical text-lg md:text-xl text-chalk">info@apex-rusenje.rs</span>
          </div>
          <div className="flex items-baseline gap-4">
            <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Pokrivamo</span>
            <span className="text-chalk/80">Ceo Beograd i okolina</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div>
          <div className="font-tactical text-xl font-bold uppercase tracking-widest text-chalk">Apex Rušenje</div>
          <div className="font-tactical text-[10px] text-safety tracking-[0.3em] uppercase mt-1">
            Rušenje · Šut · Čišćenje
          </div>
        </div>
        <div className="text-chalk/40 text-xs font-tactical uppercase tracking-widest">
          © {new Date().getFullYear()} Apex Rušenje · Beograd
        </div>
      </footer>

      {/* Sticky mobile CTA */}
      <a
        href={PHONE_HREF}
        className="lg:hidden fixed bottom-4 left-4 right-4 z-40 bg-safety text-matte font-tactical uppercase font-bold text-center py-4 border-2 border-safety tracking-wider shadow-2xl"
      >
        Pozovi {PHONE}
      </a>
    </div>
  );
};

export default Index;
