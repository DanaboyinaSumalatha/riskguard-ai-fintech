<section className="max-w-4xl mx-auto p-6">
  <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
    <h3 className="text-xl font-bold">Live Demo - Transaction Fraud Checker</h3>
    <p className="text-sm text-white/40 mt-1">3 simple steps • Real-time check</p>

    <div className="grid md:grid-cols-3 gap-6 mt-8">

      {/* STEP 1 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-cyan-500 text-black text-xs flex items-center justify-center font-bold">1</div>
          <span className="text-sm font-semibold">Enter Details</span>
        </div>
        <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount - 4000" className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm mb-2" />
        <div className="grid grid-cols-1 gap-2">
          <select value={country} onChange={e=>setCountry(e.target.value)} className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs"><option>Same country</option><option>Different country</option><option>High-risk country</option></select>
          <select value={card} onChange={e=>setCard(e.target.value)} className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs"><option>Visa</option><option>MasterCard</option><option>Amex</option><option>Unknown</option></select>
          <select value={time} onChange={e=>setTime(e.target.value)} className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs"><option>Normal hours</option><option>3 AM (Suspicious)</option><option>Multiple in 1 min</option></select>
          <select value={device} onChange={e=>setDevice(e.target.value)} className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs"><option>Known device</option><option>New device</option><option>VPN / Proxy</option></select>
          <select value={merchant} onChange={e=>setMerchant(e.target.value)} className="bg-black/40 border border-white/10 rounded-lg p-2.5 text-xs"><option>Trusted</option><option>New merchant</option><option>Blacklisted</option></select>
        </div>
      </div>

      {/* STEP 2 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-cyan-500 text-black text-xs flex items-center justify-center font-bold">2</div>
          <span className="text-sm font-semibold">AI Check</span>
        </div>
        <div className="bg-black/40 border border-white/10 rounded-lg p-4 text-xs space-y-2 text-white/60">
          <div>✓ Amount: ${amount||'4000'}</div>
          <div>✓ Country: {country}</div>
          <div>✓ Card: {card}</div>
          <div>✓ Time: {time}</div>
          <div>✓ Device: {device}</div>
          <div>✓ Merchant: {merchant}</div>
        </div>
        <button onClick={()=>{
          const v=parseFloat(amount)||4000; let s=0; if(v>3000)s+=40; else if(v>2000)s+=25; if(country==='High-risk country')s+=25; else if(country==='Different country')s+=10; if(card==='Unknown')s+=15; if(time==='3 AM (Suspicious)')s+=20; else if(time==='Multiple in 1 min')s+=35; if(device==='VPN / Proxy')s+=15; else if(device==='New device')s+=5; if(merchant==='Blacklisted')s+=30; else if(merchant==='New merchant')s+=10;
          setResult(s<50?`SAFE|${s}|Approved ✅`:`BLOCKED|${s}|Blocked 🚫`);
        }} className="w-full mt-3 py-3 bg-cyan-500 text-black rounded-full text-sm font-bold">Run AI Check →</button>
      </div>

      {/* STEP 3 */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-full bg-cyan-500 text-black text-xs flex items-center justify-center font-bold">3</div>
          <span className="text-sm font-semibold">Result</span>
        </div>
        {!result?(
          <div className="bg-black/40 border border-dashed border-white/10 rounded-lg p-8 text-center text-xs text-white/30">Click "Run AI Check" to see result</div>
        ):(
          <div className={`rounded-lg p-4 border ${result.startsWith('SAFE')?'bg-green-500/10 border-green-500/20':'bg-red-500/10 border-red-500/20'}`}>
            <div className="text-xs text-white/40">Risk Score</div>
            <div className="text-3xl font-bold mt-1">{result.split('|')[1]}/100</div>
            <div className={`mt-3 px-3 py-2 rounded-full text-center text-sm font-bold ${result.startsWith('SAFE')?'bg-green-500 text-black':'bg-red-500 text-white'}`}>{result.split('|')[0]}</div>
            <div className="mt-3 text-xs text-center">{result.split('|')[2]}</div>
          </div>
        )}
      </div>

    </div>
  </div>
</section>
