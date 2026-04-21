import heroImg from "@/assets/hero-demolition.jpg";
import demoImg from "@/assets/service-demolition.jpg";
import debrisImg from "@/assets/service-debris.jpg";
import cleanImg from "@/assets/service-cleaning.jpg";
import { useState } from "react";
import { toast } from "sonner";

const PHONE = "+381 60 123 4567";
const PHONE_HREF = "tel:+381601234567";

const services = [
  {
    n: "01",
    title: "Rušenje stanova",
    desc: "Rušenje pregradnih zidova, skidanje keramike, parketa, plafona i sanitarija. Sa zaštitom susednih prostorija od prašine.",
    img: demoImg,
  },
  {
    n: "02",
    title: "Iznošenje šuta",
    desc: "Vreće, kontejneri, kamioni 5–12t. Iznošenje sa svih spratova, deponovanje na ovlašćenoj deponiji sa dokumentacijom.",
    img: debrisImg,
  },
  {
    n: "03",
    title: "Završno čišćenje",
    desc: "Grubo i fino čišćenje posle radova. Skidanje prašine, pranje, priprema prostora za majstore i useljenje.",
    img: cleanImg,
  },
];

const stats = [
  { label: "Iznetog šuta (tona / god.)", value: "14.892" },
  { label: "Završenih objekata", value: "1.240+" },
  { label: "Prosečan izlazak", value: "2h 45m" },
  { label: "Garancija na termin", value: "100%" },
];

const steps = [
  { n: "01", t: "Pozivate / pišete", d: "Opišete prostor i obim radova. Slobodno pošaljite fotografije na Viber." },
  { n: "02", t: "Izlazak na teren", d: "U toku istog ili sledećeg dana procenjujemo prostor i dajemo fiksnu ponudu." },
  { n: "03", t: "Rušenje i šut", d: "Ekipa dolazi sa alatom i zaštitom. Iznosimo šut isti dan ili po dogovoru." },
  { n: "04", t: "Čisto i predato", d: "Završno čišćenje, fotografije pre/posle, garancija i račun." },
];

const faqs = [
  { q: "Da li radite vikendom i praznicima?", a: "Da. Dispečer je dostupan 24/7, ekipe izlaze i subotom, nedeljom i praznicima bez doplate." },
  { q: "Kako se obračunava cena?", a: "Cena je fiksna nakon izlaska na teren. Bez skrivenih troškova — sve je definisano pre početka radova." },
  { q: "Da li imate potvrdu o deponovanju šuta?", a: "Da, šut deponujemo isključivo na ovlašćenim deponijama u Beogradu i izdajemo potvrdu." },
  { q: "Koje delove Beograda pokrivate?", a: "Ceo grad — od Zemuna i Novog Beograda do Voždovca, Zvezdare, Palilule i prigradskih opština." },
];

const Index = () => {
  const [form, setForm] = useState({ name: "", phone: "", address: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Unesite ime i broj telefona.");
      return;
    }
    toast.success("Upit primljen. Zovemo Vas u roku od 30 minuta.");
    setForm({ name: "", phone: "", address: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-matte text-chalk font-base selection:bg-safety selection:text-matte">
      {/* Status bar */}
      <div className="bg-safety text-matte font-tactical text-[10px] md:text-xs px-4 md:px-6 py-1.5 flex justify-between tracking-[0.2em] font-bold uppercase">
        <span>Status: Aktivne operacije</span>
        <span className="hidden md:block">Sektor: Beograd metropolitan</span>
        <span>Dispečer 24/7</span>
      </div>

      {/* Nav */}
      <nav className="flex justify-between items-center px-4 md:px-12 py-5 border-b border-scratched bg-matte sticky top-0 z-40">
        <a href="#" className="flex flex-col">
          <span className="font-tactical text-xl md:text-2xl font-bold uppercase tracking-widest leading-none text-chalk">
            Rušenje BG
          </span>
          <span className="font-tactical text-[10px] text-safety tracking-[0.3em] uppercase mt-1">
            Rušenje · Šut · Čišćenje
          </span>
        </a>
        <div className="hidden lg:flex gap-10 font-tactical text-sm tracking-widest uppercase text-chalk/60">
          <a href="#usluge" className="hover:text-safety">Usluge</a>
          <a href="#proces" className="hover:text-safety">Proces</a>
          <a href="#cene" className="hover:text-safety">Cene</a>
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
      <header className="grid grid-cols-1 lg:grid-cols-12 border-b border-scratched">
        <section className="lg:col-span-7 px-4 md:px-12 py-14 md:py-24 flex flex-col justify-center border-r border-scratched">
          <div className="mb-6 flex items-center gap-4">
            <div className="size-2 bg-safety" />
            <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
              Rušenje stanova // Beograd
            </span>
          </div>

          <h1 className="font-tactical text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-bold uppercase leading-[0.85] mb-8 text-chalk">
            Rušimo.<br />
            Iznosimo.<br />
            <span className="text-stroke-chalk">Čistimo.</span>
          </h1>

          <p className="text-base md:text-lg text-chalk/70 max-w-[55ch] mb-10 font-medium leading-relaxed">
            Profesionalno rušenje stanova, brzo iznošenje šuta i finalno čišćenje
            prostora — sve sa jednom ekipom. Bez prašine kod komšija, bez kašnjenja,
            sa fiksnom cenom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
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
        </section>

        <section className="lg:col-span-5 relative bg-steel min-h-[400px] flex flex-col">
          <div className="absolute inset-0">
            <img
              src={heroImg}
              alt="Rušenje stana u Beogradu — ekipa Rušenje BG"
              width={1024}
              height={1280}
              className="w-full h-full object-cover grayscale opacity-50 mix-blend-luminosity contrast-125"
            />
            <div className="absolute inset-0 hazard-stripes opacity-40" />
          </div>
          <div className="mt-auto relative z-10 w-full bg-matte border-t-4 border-safety grid grid-cols-2 divide-x divide-scratched">
            <div className="p-6 md:p-8">
              <span className="font-tactical text-safety text-xs uppercase tracking-[0.2em]">
                Tona iznetog šuta
              </span>
              <div className="font-tactical text-4xl md:text-5xl font-bold text-chalk tabular-nums mt-2">
                14.892
              </div>
              <span className="text-xs text-chalk/40 uppercase tracking-wider">
                YTD 2025
              </span>
            </div>
            <div className="p-6 md:p-8">
              <span className="font-tactical text-safety text-xs uppercase tracking-[0.2em]">
                Izlazak za
              </span>
              <div className="font-tactical text-4xl md:text-5xl font-bold text-chalk tabular-nums mt-2">
                2h 45m
              </div>
              <span className="text-xs text-chalk/40 uppercase tracking-wider">
                u okviru BG
              </span>
            </div>
          </div>
        </section>
      </header>

      {/* Stats strip */}
      <section className="grid grid-cols-2 lg:grid-cols-4 border-b border-scratched">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`p-6 md:p-10 ${i !== 0 ? "border-l border-scratched" : ""} ${i >= 2 ? "border-t lg:border-t-0 border-scratched" : ""}`}
          >
            <div className="font-tactical text-3xl md:text-5xl font-bold text-chalk tabular-nums">
              {s.value}
            </div>
            <div className="text-[11px] md:text-xs text-chalk/50 uppercase tracking-[0.2em] mt-2 font-tactical">
              {s.label}
            </div>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="usluge" className="px-4 md:px-12 py-20 md:py-28 border-b border-scratched">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Šta radimo
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-16 max-w-3xl leading-[0.9]">
          Tri faze. Jedna ekipa. Bez glavobolje.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-scratched border border-scratched">
          {services.map((s) => (
            <article key={s.n} className="bg-matte flex flex-col group">
              <div className="relative aspect-[4/3] overflow-hidden bg-steel">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-80"
                />
                <div className="absolute top-4 left-4 bg-safety text-matte font-tactical text-xs font-bold px-2 py-1 tracking-widest">
                  {s.n}
                </div>
              </div>
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <h3 className="font-tactical text-2xl uppercase font-bold text-chalk mb-3">
                  {s.title}
                </h3>
                <p className="text-chalk/60 leading-relaxed text-sm md:text-base">
                  {s.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proces" className="px-4 md:px-12 py-20 md:py-28 border-b border-scratched bg-steel/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="size-2 bg-safety" />
          <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
            Proces
          </span>
        </div>
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-16 max-w-3xl leading-[0.9]">
          Od poziva do čistog stana — 24–72h.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-scratched border border-scratched">
          {steps.map((s) => (
            <div key={s.n} className="bg-matte p-6 md:p-8 hover:bg-steel transition-colors">
              <div className="font-tactical text-5xl text-safety/40 font-bold mb-6">{s.n}</div>
              <h3 className="font-tactical text-xl uppercase font-bold text-chalk mb-2">{s.t}</h3>
              <p className="text-chalk/60 text-sm leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing teaser */}
      <section id="cene" className="px-4 md:px-12 py-20 md:py-28 border-b border-scratched">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-4">
              <div className="size-2 bg-safety" />
              <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
                Cene
              </span>
            </div>
            <h2 className="font-tactical text-4xl md:text-5xl font-bold uppercase text-chalk leading-[0.9] mb-6">
              Fiksna cena. Bez iznenađenja.
            </h2>
            <p className="text-chalk/60 leading-relaxed mb-8">
              Cenu definišemo nakon kratkog izlaska na teren ili na osnovu fotografija
              prostora. Ono što dogovorimo — to plaćate. Bez doplata u toku radova.
            </p>
            <a
              href="#kontakt"
              className="inline-block bg-safety text-matte font-tactical uppercase font-bold px-8 py-5 border-2 border-safety hover:bg-chalk hover:border-chalk tracking-wider transition-colors"
            >
              Traži ponudu
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-scratched border border-scratched">
            {[
              { t: "Rušenje pregradnog zida", p: "od 1.500 RSD/m²" },
              { t: "Skidanje keramike", p: "od 600 RSD/m²" },
              { t: "Iznošenje šuta (vreća)", p: "od 350 RSD/kom" },
              { t: "Kontejner 5m³", p: "od 18.000 RSD" },
              { t: "Kompletan stan 50m²", p: "od 65.000 RSD" },
              { t: "Završno čišćenje", p: "od 350 RSD/m²" },
            ].map((row) => (
              <div key={row.t} className="bg-matte p-6 flex flex-col gap-2">
                <div className="text-chalk/60 text-xs font-tactical uppercase tracking-widest">
                  {row.t}
                </div>
                <div className="font-tactical text-2xl text-chalk font-bold">{row.p}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-12 py-20 md:py-28 border-b border-scratched bg-steel/30">
        <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk mb-12 max-w-3xl leading-[0.9]">
          Često pitana pitanja.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-scratched border border-scratched">
          {faqs.map((f) => (
            <div key={f.q} className="bg-matte p-6 md:p-8">
              <h3 className="font-tactical text-lg uppercase font-bold text-safety mb-3">
                {f.q}
              </h3>
              <p className="text-chalk/70 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="px-4 md:px-12 py-20 md:py-28 border-b border-scratched">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="size-2 bg-safety" />
              <span className="text-safety font-tactical uppercase tracking-[0.2em] text-xs font-bold">
                Kontakt
              </span>
            </div>
            <h2 className="font-tactical text-4xl md:text-6xl font-bold uppercase text-chalk leading-[0.9] mb-8">
              Zovi. Izlazimo danas.
            </h2>
            <p className="text-chalk/70 leading-relaxed mb-10 max-w-lg">
              Dispečer dostupan 24/7. Pošaljite fotografije prostora na Viber/WhatsApp
              i dobićete okvirnu ponudu u toku istog sata.
            </p>

            <div className="space-y-6">
              <a href={PHONE_HREF} className="flex items-baseline gap-4 group">
                <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Telefon</span>
                <span className="font-tactical text-2xl md:text-3xl text-chalk group-hover:text-safety">{PHONE}</span>
              </a>
              <div className="flex items-baseline gap-4">
                <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Email</span>
                <span className="font-tactical text-lg md:text-xl text-chalk">info@rusenje-bg.rs</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Pokrivamo</span>
                <span className="text-chalk/80">Ceo Beograd i prigradske opštine</span>
              </div>
              <div className="flex items-baseline gap-4">
                <span className="font-tactical text-xs text-safety uppercase tracking-[0.2em] w-20">Radno</span>
                <span className="text-chalk/80">Pon–Ned · 0–24h</span>
              </div>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="bg-steel/50 border border-scratched p-6 md:p-10 flex flex-col gap-5"
          >
            <h3 className="font-tactical text-2xl uppercase font-bold text-chalk mb-2">
              Zatraži ponudu
            </h3>
            {[
              { k: "name", l: "Ime i prezime", t: "text", req: true },
              { k: "phone", l: "Telefon", t: "tel", req: true },
              { k: "address", l: "Adresa objekta", t: "text" },
            ].map((f) => (
              <label key={f.k} className="flex flex-col gap-2">
                <span className="font-tactical text-xs uppercase tracking-[0.2em] text-chalk/60">
                  {f.l} {f.req && <span className="text-safety">*</span>}
                </span>
                <input
                  type={f.t}
                  required={f.req}
                  value={form[f.k as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.k]: e.target.value })}
                  className="bg-matte border-2 border-scratched focus:border-safety outline-none px-4 py-3 text-chalk transition-colors"
                />
              </label>
            ))}
            <label className="flex flex-col gap-2">
              <span className="font-tactical text-xs uppercase tracking-[0.2em] text-chalk/60">
                Opis radova
              </span>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="bg-matte border-2 border-scratched focus:border-safety outline-none px-4 py-3 text-chalk transition-colors resize-none"
                placeholder="npr. rušenje 2 zida, skidanje keramike u kupatilu, iznošenje šuta sa 4. sprata..."
              />
            </label>
            <button
              type="submit"
              className="bg-safety text-matte font-tactical uppercase font-bold text-lg px-8 py-5 border-2 border-safety hover:bg-chalk hover:border-chalk tracking-wider transition-colors mt-2"
            >
              Pošalji upit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-12 py-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
        <div>
          <div className="font-tactical text-xl font-bold uppercase tracking-widest text-chalk">Rušenje BG</div>
          <div className="font-tactical text-[10px] text-safety tracking-[0.3em] uppercase mt-1">
            Rušenje · Šut · Čišćenje
          </div>
        </div>
        <div className="text-chalk/40 text-xs font-tactical uppercase tracking-widest">
          © {new Date().getFullYear()} Rušenje BG · Beograd · Sva prava zadržana
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
