import { motion } from 'motion/react';
import { partyConfig } from '../config';
import { CalendarDays, Clock, MapPin, Star, Calendar } from 'lucide-react';

export default function Scene4Details() {
  const handleAddToGoogle = () => {
    const text = encodeURIComponent(partyConfig.eventTitle);
    const details = encodeURIComponent("Don't forget your toothbrush and sleeping bag!");
    const location = encodeURIComponent(partyConfig.address || "");
    const dates = "20260530T063000Z/20260530T230000Z";
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  const handleAddToApple = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Stella Party//EN
BEGIN:VEVENT
DTSTART:20260530T063000Z
DTEND:20260530T230000Z
SUMMARY:${partyConfig.eventTitle}
DESCRIPTION:Don't forget your toothbrush and sleeping bag!
LOCATION:${partyConfig.address}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'party.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-full w-full py-24 px-6 flex flex-col relative items-center max-w-lg mx-auto">
      <motion.div
        className="flex flex-col items-center mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span className="text-xs uppercase tracking-[0.3em] font-medium text-white/50 mb-4 block">See you in the CLEARING.</span>
        <h2 className="font-display text-5xl font-medium tracking-tight text-white mb-2">
          Details
        </h2>
        <div className="w-12 h-[1px] bg-white/20 mt-6" />
      </motion.div>

      <div className="flex flex-col gap-4 w-full relative z-10 pb-12">
        <DetailCard icon={<CalendarDays className="text-white/80"/>} title="Date" value={partyConfig.date} delay={0.1} />
        <DetailCard icon={<Clock className="text-white/80"/>} title="Time" value={partyConfig.time} delay={0.2} />
        <DetailCard icon={<MapPin className="text-white/80"/>} title="Where" value={partyConfig.address} delay={0.3} />
        <DetailCard icon={<Star className="text-white/80"/>} title="What to Bring" value={partyConfig.whatToBring} delay={0.4} />
      </div>

      <motion.div 
        className="w-full flex flex-col gap-8 pb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-white/50 mb-2">Save the Date</span>
          <div className="flex flex-col gap-3 w-full">
            <button
              onClick={handleAddToApple}
              className="w-full py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-3 bg-white/10 text-white border border-white/10 hover:bg-white/20 active:bg-white/30 transition-all backdrop-blur-md"
            >
              <Calendar size={18} />
              Add to Calendar (iOS)
            </button>
            <button
              onClick={handleAddToGoogle}
              className="w-full py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-3 bg-white/10 text-white border border-white/10 hover:bg-white/20 active:bg-white/30 transition-all backdrop-blur-md"
            >
              <Calendar size={18} />
              Add to Calendar (Android)
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function DetailCard({ icon, title, value, subValue, delay }: any) {
  return (
    <motion.div 
      className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex gap-5 items-center transition-all hover:bg-black/30 w-full"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/5 shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 mb-1">{title}</h4>
        <p className="text-base font-medium text-white/90 leading-tight">{value}</p>
        {subValue && <p className="text-xs font-medium text-white/50 mt-1">{subValue}</p>}
      </div>
    </motion.div>
  );
}
