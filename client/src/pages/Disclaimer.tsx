export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto prose prose-invert">
        <h1>AI Disclaimer</h1>
        
        <h2>Accuracy of Information</h2>
        <p>
          While Shevoki strives to provide accurate and up-to-date information about
          the Solana blockchain ecosystem, please be aware that:
        </p>
        
        <ul>
          <li>
            AI systems can make mistakes or provide incomplete information
          </li>
          <li>
            Blockchain technology and markets change rapidly, and information may
            become outdated
          </li>
          <li>
            Technical details and specifications may vary across different platforms
            and implementations
          </li>
        </ul>

        <h2>Not Financial Advice</h2>
        <p>
          Information provided by Shevoki should not be considered financial advice.
          Always do your own research and consult with qualified professionals
          before making investment decisions.
        </p>

        <h2>Verification</h2>
        <p>
          Users are encouraged to verify critical information from official sources
          and documentation. Shevoki is an educational tool, not a substitute for
          professional guidance.
        </p>
      </div>
    </div>
  );
}
