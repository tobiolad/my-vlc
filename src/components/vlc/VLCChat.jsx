import { useState, useEffect, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";

const SYSTEM_PROMPT = `You are the Venture Learning Collective (VLC) assistant. Answer questions about VLC clearly and warmly.

VLC is a nonprofit ecosystem platform helping entrepreneurs structure, position, and develop ventures that can access funding, scale sustainably, and create real-world impact.

The Funding Readiness Lab is a 3-week pilot program in partnership with GRANTED:
- Week 1: From idea to fundable project (define a clear structured project, understand fundability, build scope/timeline/budget)
- Week 2: Aligning with real funding opportunities (think like a funder, identify grants, understand eligibility)
- Week 3: Narrative, application, and positioning (develop application narrative, avoid common mistakes, prepare for submission)
- Finale: Funding Readiness Showcase — all participants receive a completion honorarium, the most viable project wins a micro-grant.

Participants leave with: a fully structured funding-ready project, aligned grant opportunities, understanding of how funders evaluate proposals, a refined narrative, and practical tools. Small cohort. No prior funding experience required.

Ecosystem partners:
- Data Fellows (datafellowsai.com): Data Literacy & Decision Intelligence
- Inscend (inscend.io): Decision intelligence platform
- Okoko Cosmetiques (okokocosmetiques.com): Brand Building & Venture Development

Team:
- Tobi Oladimeji, Co-Founder & Executive Director (ecosystem design, funding systems, data intelligence). Book 1:1: https://calendar.app.google/mAEjbipQGoAxTW426
- Oyeta Kokoroko, Co-Founder & Director of Venture Development, Funding Readiness & Brand Strategy (venture positioning, market credibility, brand strategy). Founder advisory: https://oyeta.systeme.io/founder-advisory

To apply: https://tally.so/r/ZjVWGe

Keep answers concise and direct. If unsure, encourage them to apply or fill in the contact form.`;

function MessageBubble({ message }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-3`}>
      {!isUser && (
        <div className="w-6 h-6 rounded-full bg-cobalt flex items-center justify-center shrink-0 mr-2 mt-1">
          <span className="text-white text-[9px] font-display font-black">V</span>
        </div>
      )}
      <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-[1.6]
        ${isUser
          ? "bg-cobalt text-white font-display"
          : "bg-white border border-black/10 text-obsidian font-display"
        }`}>
        {isUser ? (
          <p>{message.content}</p>
        ) : (
          <ReactMarkdown className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0">
            {message.content}
          </ReactMarkdown>
        )}
      </div>
    </div>
  );
}

const GREETING = {
  role: "assistant",
  content: "Hi! I'm the VLC assistant. Ask me anything about the program, how to apply, our team, or our ecosystem partners."
};

export default function VLCChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  async function handleSend(e) {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", content: input.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput("");
    setLoading(true);

    // Build conversation context for the LLM (skip the static greeting)
    const conversationText = history
      .filter(m => m !== GREETING)
      .map(m => `${m.role === "user" ? "User" : "Assistant"}: ${m.content}`)
      .join("\n");

    const reply = await base44.integrations.Core.InvokeLLM({
      prompt: `${SYSTEM_PROMPT}\n\nConversation so far:\n${conversationText}\n\nAssistant:`,
    });

    setMessages(prev => [...prev, { role: "assistant", content: reply }]);
    setLoading(false);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)]
                        bg-white border border-black/10 rounded-2xl shadow-2xl shadow-black/15
                        flex flex-col overflow-hidden"
          style={{ height: "480px" }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 bg-obsidian">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-cobalt flex items-center justify-center">
                <span className="text-white text-xs font-display font-black">V</span>
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white">VLC Assistant</p>
                <p className="font-display text-[10px] text-white/50 uppercase tracking-widest">Venture Learning Collective</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)}
              className="text-white/40 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 bg-cool/50">
            {messages.map((msg, i) => (
              <MessageBubble key={i} message={msg} />
            ))}
            {loading && (
              <div className="flex justify-start mb-3">
                <div className="w-6 h-6 rounded-full bg-cobalt flex items-center justify-center shrink-0 mr-2 mt-1">
                  <span className="text-white text-[9px] font-display font-black">V</span>
                </div>
                <div className="bg-white border border-black/10 rounded-2xl px-4 py-3">
                  <Loader2 className="w-4 h-4 text-cobalt animate-spin" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend}
            className="flex items-center gap-2 px-4 py-3 border-t border-black/8 bg-white">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={loading}
              className="flex-1 font-display text-sm text-obsidian placeholder:text-black/30
                         bg-transparent outline-none min-h-[40px]"
            />
            <button type="submit" disabled={!input.trim() || loading}
              className="w-9 h-9 rounded-full bg-cobalt flex items-center justify-center
                         hover:bg-cobalt/90 transition-colors disabled:opacity-40 shrink-0">
              <Send className="w-4 h-4 text-white" />
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Open chat"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-cobalt shadow-lg
                   shadow-cobalt/30 flex items-center justify-center
                   hover:bg-cobalt/90 transition-colors">
        {open
          ? <X className="w-6 h-6 text-white" />
          : <MessageCircle className="w-6 h-6 text-white" />
        }
      </button>
    </>
  );
}