<section id="demo" className="max-w-5xl mx-auto p-6">
  <div className="bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-[24px] p-8 backdrop-blur">

    {/* HEADER - CLEAN */}
    <div className="flex items-center gap-3 mb-8">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">⚡</div>
      <div>
        <h3 className="text-[22px] font-bold">Transaction Fraud Check</h3>
        <p className="text-[12px] text-white/40">Real-time AI analysis • 6 parameters</p>
      </div>
      <div className="ml-auto px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-300 text-[10px]">● LIVE</div>
    </div>

    <div className="grid md:grid-cols-5 gap-8">
      {/* LEFT - INPUTS - 3 COLUMNS */}
      <div className="md:col-span-3 space-y-5">

        <div>
          <label className="text-[11px] font-semibold tracking-widest text-white/60 uppercase">Amount (USD)</label>
          <div className="relative mt-2">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">$</span>
            <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="4000" className="w-full bg-black/40 border border-white/10 focus:border-cyan-400/50 rounded-xl py-3.5 pl-8 pr-4 outline-none text-[15px] font-medium transition" />
          </div>
        </div>

        {[
          {label:'Country', val:country, set:setCountry, opts:['Same country','Different country','High-risk country']},
          {label:'Card Type', val:card, set:setCard, opts:['Visa','MasterCard','Amex','Unknown']},
          {label:'Transaction Time', val:time, set:setTime, opts:['Normal hours','3 AM (Suspicious)','Multiple in 1 min']},
          {label:'Device', val:device, set:setDevice, opts:['Known device','New device','VPN / Proxy']},
          {label:'Merchant', val:merchant, set:setMerchant, opts:['Trusted','New merchant','Blacklisted']},
        ].map((f)=>(
          <div key={f.label}>
            <label className="text-[11px] font-semibold tracking-widest text-white/60 uppercase">{f.label}</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {f.opts.map(o=>{
                const active=f.val===o;
                return <button key={o} onClick={()=>f.set(o)} className={`px-4 py-2 rounded-full text-[12px] font-medium border transition-all ${active?'bg-white text-black border-white shadow-lg':'bg-white/[0.04] border-white/10 text-white/60 hover:bg-white/[0.08] hover:text-white'}`}>{o}</button>
              })}
            </div>
          </div>
        ))}

        <button onClick={()=>{
          const v=parseFloat(amount)||0; if(!v){setResult('ERROR|Please enter amount'); return;}
          let score=0; if(v>3000)score+=40; else if(v>2000)score+=25; if(country==='High-risk country')score+=25; else if(country==='Different country')score+=10; if(card==='Unknown')score+=15; if(time==='3 AM (Suspicious)')score+=20; else if(time==='Multiple in 1 min')score+=35; if(device==='VPN / Proxy')score+=15; else if(device==='New device')score+=5; if(merchant==='Blacklisted')score+=30; else if(merchant==='New merchant')score+=10;
          const isSafe=score<50; const status=isSafe?'SAFE':'BLOCKED';
          setResult(`${status}|${score}|${v}|${isSafe?'Transaction Approved':'Transaction Blocked'}`);
        }} className="w-full mt-2 py-4 bg-white text-black rounded-full font-bold text-[14px] hover:bg-white/90 transition">
          Analyze Transaction
        </button>
      </div>

      {/* RIGHT - RESULT - 2 COLUMNS - CLEAN */}
      <div className="md:col-span-2">
        <div className="sticky top-6">
          <label className="text-[11px] font-semibold tracking-widest text-white/60 uppercase">Result</label>
          <div className="mt-2 min-h-[420px] bg-black/40 border border-white/10 rounded-[20px] p-5 flex flex-col">
            {!result? (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-2xl mb-4">🔍</div>
                <p className="text-[13px] text-white/30 max-w-[180px]">Enter amount and click Analyze to see fraud risk</p>
              </div>
            ) : (
              <>
                {(() => {
                  const [status,score,amt,msg]=result.split('|');
                  const isSafe=status==='SAFE';
                  return (
                    <>
                      <div className={`rounded-[16px] p-5 border ${isSafe?'bg-green-500/[0.08] border-green-500/20':'bg-red-500/[0.08] border-red-500/20'}`}>
                        <div className="flex items-center justify-between mb-3">
                          <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest ${isSafe?'bg-green-500 text-black':'bg-red-500 text-white'}`}>{status}</span>
                          <span className="text-[11px] text-white/40">Score {score}/100</span>
                        </div>
                        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-4">
                          <div className={`h-full rounded-full transition-all duration-700 ${isSafe?'bg-green-400':'bg-red-400'}`} style={{width:`${score}%`}} />
                        </div>
                        <p className={`text-[18px] font-bold ${isSafe?'text-green-300':'text-red-300'}`}>{msg}</p>
                      </div>

                      <div className="mt-4 space-y-2.5">
                        <div className="flex justify-between text-[12px] py-2 border-b border-white/[0.06]"><span className="text-white/40">Amount</span><span className="font-medium">${amt} {parseFloat(amt)>3000&&'(High)'}</span></div>
                        <div className="flex justify-between text-[12px] py-2 border-b border-white/[0.06]"><span className="text-white/40">Country</span><span className="font-medium">{country}</span></div>
                        <div className="flex justify-between text-[12px] py-2 border-b border-white/[0.06]"><span className="text-white/40">Card</span><span className="font-medium">{card}</span></div>
                        <div className="flex justify-between text-[12px] py-2 border-b border-white/[0.06]"><span className="text-white/40">Time</span><span className="font-medium">{time}</span></div>
                        <div className="flex justify-between text-[12px] py-2 border-b border-white/[0.06]"><span className="text-white/40">Device</span><span className="font-medium">{device}</span></div>
                        <div className="flex justify-between text-[12px] py-2"><span className="text-white/40">Merchant</span><span className="font-medium">{merchant}</span></div>
                      </div>
                    </>
                  )
                })()}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
