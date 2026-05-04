import { useState } from "react";
import { Star } from "lucide-react";
import heroWorker from "@/assets/hero-worker.jpg";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery7 from "@/assets/gallery-7.png";
import gallery8 from "@/assets/gallery-8.png";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";

const gallery = [
  { src: gallery1, alt: "Šut i otpadni materijal pripremljen za iznošenje" },
  { src: gallery2, alt: "Rušenje podova i pregradnih elemenata" },
  { src: gallery3, alt: "Kontejner sa drvenim otpadom" },
  { src: gallery4, alt: "Očišćen prostor spreman za predaju" },
  { src: gallery5, alt: "Rušenje u podrumskim prostorijama" },
  { src: gallery7, alt: "Kupatilo nakon rušenja keramike i sanitarija" },
  { src: gallery8, alt: "Očišćena prostorija spremna za nove radove" },
  { src: gallery9, alt: "Stan u procesu rušenja podnih obloga" },
  { src: gallery10, alt: "Pripremljena betonska podloga nakon čišćenja" },
];

const PHONE = "+381 63 1806752";
const PHONE_HREF = "tel:+381631806752";

const services = [
  { n: "01", title: "Rušenje stanova", desc: "Pregradni zidovi, keramika, parket, sanitarije." },
  { n: "02", title: "Iznošenje šuta", desc: "Vreće, kontejneri, kombi prevoz šuta. Ovlašćena deponija." },
  { n: "03", title: "Završno čišćenje", desc: "Grubo i fino čišćenje. Spremno za fine radove." },
];

const steps = [
  { n: "01", t: "Poziv", d: "Opišete prostor i obim radova." },
  { n: "02", t: "Procena", d: "Izlazak na teren — fiksna ponuda." },
  { n: "03", t: "Rušenje", d: "Ekipa, alat, zaštita." },
  { n: "04", t: "Predaja", d: "Čisto, fotografije, garancija." },
];

const Index = () => {
  const initialReviews = [
    { name: "Marko Petrović", rating: 5, text: "Srušili kompletno kupatilo za jedan dan, sve odneli i ostavili stan čist. Profesionalci.", job: "Rušenje kupatila — Voždovac" },
    { name: "Ivana Jovanović", rating: 5, text: "Tačni, brzi i uredni. Cena ista kao u ponudi, bez iznenađenja.", job: "Rušenje pregradnih zidova — Novi Beograd" },
    { name: "Stefan Nikolić", rating: 5, text: "Najbolja ekipa sa kojom sam radio. Sve počišćeno do kraja, spremno za majstore.", job: "Komplet rušenje stana 55m² — Vračar" },
    { name: "Jelena Đorđević", rating: 4, text: "Sve odlično odrađeno, malo kasnili prvog dana ali su nadoknadili. Preporuka.", job: "Rušenje kuhinje i keramike — Zemun" },
    { name: "Nikola Stanković", rating: 5, text: "Šut iznet isti dan, bez prašine po zgradi. Komšije zadovoljne, a to puno znači.", job: "Iznošenje šuta sa 5. sprata — Zvezdara" },
    { name: "Ana Milić", rating: 5, text: "Korektni od poziva do predaje ključeva. Fiksna cena, čist stan, fotografije po završetku.", job: "Rušenje stana 40m² — Banovo brdo" },
    { name: "Miloš Pavlović", rating: 4, text: "Solidno odrađeno, malo više prašine nego što sam očekivao ali su sve počistili pre odlaska. Cena korektna.", job: "Rušenje pregradnog zida — Mirijevo" },
  ];

  const [reviews, setReviews] = useState(initialReviews);
  const [form, setForm] = useState({ name: "", rating: 5, job: "", text: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const name = form.name.trim().slice(0, 60);
    const job = form.job.trim().slice(0, 100);
    const text = form.text.trim().slice(0, 500);
    if (!name || !text) return;
    setReviews([{ name, rating: form.rating, job, text }, ...reviews]);
    setForm({ name: "", rating: 5, job: "", text: "" });
  };

  return (
    <div className="min-h-screen bg-matte text-chalk font-base selection:bg-safety selection:text-matte">
      {/* Nav */}
      <nav className="flex justify-between items-center px-4 md:px-12 py-5 border-b border-safety bg-safety sticky top-0 z-40">
        <a href="#" className="flex flex-col">
          <span className="font-tactical text-xl md:text-2xl font-bold uppercase tracking-widest leading-none text-matte">
            Apex Rušenje
          </span>
          <span className="font-tactical text-[10px] text-matte/80 tracking-[0.3em] uppercase mt-1">
            Rušenje · Šut · Čišćenje
          </span>
        </a>
        <div className="hidden lg:flex gap-10 font-tactical text-sm tracking-widest uppercase text-matte/80">
          <a href="#usluge" className="hover:text-matte">Usluge</a>
          <a href="#proces" className="hover:text-matte">Proces</a>
          <a href="#zasto" className="hover:text-matte">Zašto nas</a>
          <a href="#cenovnik" className="hover:text-matte">Cenovnik</a>
          <a href="#galerija" className="hover:text-matte">Galerija</a>
          <a href="#recenzije" className="hover:text-matte">Recenzije</a>
          <a href="#kontakt" className="hover:text-matte">Kontakt</a>
        </div>
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

          <h1 className="font-tactical text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold uppercase leading-[0.9] mb-6 text-chalk">
            Od početka rušenja do čistog stana za 72 sata
          </h1>

          <p className="font-tactical text-xl md:text-2xl lg:text-3xl text-chalk/80 uppercase tracking-wider mb-10 font-bold">
            Rušimo. Iznosimo. <span className="text-stroke-chalk">Čistimo.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl flex-wrap">
            <a
              href={PHONE_HREF}
              className="bg-transparent text-chalk font-tactical uppercase font-bold text-base md:text-lg px-8 py-5 hover:border-safety hover:text-safety border-2 border-scratched text-center tracking-wider transition-colors"
            >
              {PHONE}
            </a>
            <a
              href="#cenovnik"
              className="bg-accent-orange text-matte font-tactical uppercase font-bold text-base md:text-lg px-8 py-5 hover:bg-chalk border-2 border-accent-orange hover:border-chalk text-center tracking-wider transition-colors"
            >
              Pogledaj cenovnik
            </a>
          </div>
        </div>
      </header>

      {/* Services */}
      <section id="usluge" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched bg-steel">
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
      <section id="proces" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Proces
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Četiri koraka. Jasan plan.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-scratched border border-scratched">
          {steps.map((s) => (
            <div key={s.n} className="bg-matte p-6 md:p-8 hover:bg-steel transition-colors">
              <div className="font-tactical text-5xl text-chalk font-bold mb-6">{s.n}</div>
              <h3 className="font-tactical text-xl uppercase font-bold text-chalk mb-2">{s.t}</h3>
              <p className="text-chalk/60 text-sm">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="zasto" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched bg-steel">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Zašto odabrati nas
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Iskusni. Brzi. Uredni.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-scratched border border-scratched">
          {[
            { n: "100+", t: "Završenih poslova", d: "Stanovi, kupatila i lokali širom Beograda." },
            { n: "72h", t: "Brzo izvođenje", d: "Od poziva do predaje čistog stana." },
            { n: "0", t: "Šuta iza nas", d: "Stan ostavljamo potpuno čist i spreman." },
            { n: "FIX", t: "Fiksna ponuda", d: "Bez skrivenih troškova nakon izlaska na teren." },
          ].map((w) => (
            <div key={w.t} className="bg-matte p-6 md:p-8 hover:bg-steel/40 transition-colors">
              <div className="font-tactical text-4xl md:text-5xl text-chalk font-bold mb-4">{w.n}</div>
              <h3 className="font-tactical text-lg uppercase font-bold text-chalk mb-2">{w.t}</h3>
              <p className="text-chalk/60 text-sm">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="cenovnik" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Cenovnik
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-4 max-w-3xl leading-[0.9]">
          Okvirne cene usluga
        </h2>
        <p className="text-chalk/60 text-sm md:text-base mb-12 max-w-2xl">
          Jasne polazne cene. Konačna ponuda nakon izlaska na teren.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-scratched border border-scratched mb-10">
          {[
            { n: "01", title: "Rušenje zidova", price: "od 12 €", unit: "/m²" },
            { n: "02", title: "Rušenje kupatila", price: "od 200 €", unit: "komplet" },
            { n: "03", title: "Komplet usluga", price: "od 200 €", unit: "rušenje + čišćenje" },
          ].map((p) => (
            <article key={p.n} className="bg-matte p-6 md:p-8 hover:bg-steel/40 transition-colors">
              <div className="font-tactical text-safety text-xs font-bold tracking-widest mb-6">
                {p.n}
              </div>
              <h3 className="font-tactical text-xl md:text-2xl uppercase font-bold text-chalk mb-4">
                {p.title}
              </h3>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-tactical text-3xl md:text-4xl font-bold text-accent-orange whitespace-nowrap">{p.price}</span>
                <span className="font-tactical text-xs text-chalk/60 uppercase tracking-wider">{p.unit}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Example */}
        <div className="border-l-4 border-accent-orange bg-steel p-6 md:p-8 mb-10">
          <div className="font-tactical text-accent-orange text-[10px] font-bold tracking-[0.3em] uppercase mb-3">
            Primer
          </div>
          <p className="font-tactical text-lg md:text-2xl text-chalk uppercase font-bold leading-tight">
            Rušenje kupatila 4–5m² sa iznošenjem šuta:{" "}
            <span className="text-accent-orange">250–400 €</span>
          </p>
        </div>

        {/* Price factors */}
        <div className="max-w-3xl">
          <h3 className="font-tactical text-xl md:text-2xl uppercase font-bold text-chalk mb-6">
            Cena zavisi od:
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-scratched border border-scratched">
            {[
              "Sprata i lifta",
              "Količine šuta",
              "Vrste materijala",
              "Pristupa objektu",
            ].map((f) => (
              <li
                key={f}
                className="bg-matte p-4 md:p-5 flex items-center gap-3 font-tactical uppercase text-sm md:text-base text-chalk tracking-wider"
              >
                <span className="size-2 bg-safety shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerija" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched bg-steel">
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
          <a href="mailto:apexrusenje@gmail.com" className="flex items-baseline gap-4 group">
            <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Email</span>
            <span className="font-tactical text-lg md:text-xl text-chalk group-hover:text-safety">apexrusenje@gmail.com</span>
          </a>
          <div className="flex items-baseline gap-4">
            <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Pokrivamo</span>
            <span className="text-chalk/80">Ceo Beograd i okolina</span>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-scratched font-tactical text-sm md:text-base text-chalk/70 max-w-2xl">
          Moguće slanje slika na WhatsApp i Viber za procenu i dobijanje ponude.
        </p>
      </section>

      {/* Reviews */}
      <section id="recenzije" className="px-4 md:px-12 py-20 md:py-24 border-b border-scratched bg-steel">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Recenzije
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Šta kažu klijenti.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-scratched border border-scratched mb-16">
          {reviews.map((r, i) => (
            <article key={i} className="bg-matte p-6 md:p-8 flex flex-col">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className={
                      j < r.rating
                        ? "size-4 fill-accent-orange text-accent-orange"
                        : "size-4 text-scratched"
                    }
                  />
                ))}
              </div>
              <p className="text-chalk/80 text-sm md:text-base mb-6 flex-1">"{r.text}"</p>
              <div className="border-t border-scratched pt-4">
                <div className="font-tactical uppercase font-bold text-chalk text-sm tracking-wider">
                  {r.name}
                </div>
                {r.job && (
                  <div className="font-tactical text-[11px] text-chalk/60 uppercase tracking-widest mt-1">
                    {r.job}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Review form */}
        <div className="max-w-2xl">
          <h3 className="font-tactical text-2xl md:text-3xl uppercase font-bold text-chalk mb-6">
            Ostavi recenziju
          </h3>
          <form onSubmit={handleSubmit} className="space-y-5 bg-matte border border-scratched p-6 md:p-8">
            <div>
              <label className="block font-tactical text-xs uppercase tracking-widest text-chalk/70 mb-2">
                Ime i prezime
              </label>
              <input
                type="text"
                required
                maxLength={60}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-matte border border-scratched px-4 py-3 font-base text-chalk focus:outline-none focus:border-safety"
              />
            </div>
            <div>
              <label className="block font-tactical text-xs uppercase tracking-widest text-chalk/70 mb-2">
                Ocena
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    type="button"
                    key={n}
                    onClick={() => setForm({ ...form, rating: n })}
                    aria-label={`${n} zvezdica`}
                    className="p-1"
                  >
                    <Star
                      className={
                        n <= form.rating
                          ? "size-7 fill-accent-orange text-accent-orange"
                          : "size-7 text-scratched"
                      }
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block font-tactical text-xs uppercase tracking-widest text-chalk/70 mb-2">
                Opis posla
              </label>
              <input
                type="text"
                maxLength={100}
                placeholder="npr. Rušenje kupatila — Vračar"
                value={form.job}
                onChange={(e) => setForm({ ...form, job: e.target.value })}
                className="w-full bg-matte border border-scratched px-4 py-3 font-base text-chalk focus:outline-none focus:border-safety"
              />
            </div>
            <div>
              <label className="block font-tactical text-xs uppercase tracking-widest text-chalk/70 mb-2">
                Komentar
              </label>
              <textarea
                required
                maxLength={500}
                rows={4}
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full bg-matte border border-scratched px-4 py-3 font-base text-chalk focus:outline-none focus:border-safety resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-accent-orange text-matte font-tactical uppercase font-bold text-base px-8 py-4 hover:bg-chalk border-2 border-accent-orange hover:border-chalk tracking-wider transition-colors"
            >
              Pošalji recenziju
            </button>
          </form>
        </div>
      </section>
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
