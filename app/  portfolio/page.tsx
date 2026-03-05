export default function PortfolioPage() {
  return (
    <main style={{ minHeight: "100vh", padding: 24 }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        <a href="/" style={{ textDecoration: "underline", opacity: 0.9 }}>
          ← Voltar
        </a>

        <h1 style={{ fontSize: 34, margin: "16px 0 6px" }}>Portfólio</h1>
        <p style={{ opacity: 0.8, marginTop: 0 }}>
          Foto • Vídeo • Drone — Eventos e Negócios (em atualização)
        </p>

        <div
          style={{
            marginTop: 18,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12,
          }}
        >
          {[
            { title: "Eventos", desc: "Formaturas, casamentos, 15 anos e cobertura completa." },
            { title: "Negócios", desc: "Conteúdo estratégico, reels, institucional e presença digital." },
            { title: "Drone", desc: "Captações aéreas para imóveis, empresas, lavoura e eventos." },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                border: "1px solid rgba(255,255,255,0.16)",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <div style={{ fontSize: 16, fontWeight: 700 }}>{item.title}</div>
              <div style={{ marginTop: 8, fontSize: 13, opacity: 0.78 }}>{item.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href="https://wa.me/554999333799?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20site%20e%20quero%20ver%20exemplos%20do%20seu%20trabalho%20para%20meu%20tipo%20de%20projeto."
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.16)",
              textDecoration: "none",
            }}
          >
            Chamar no WhatsApp
          </a>

          <a
            href="https://instagram.com/robson_quadros"
            target="_blank"
            rel="noreferrer"
            style={{
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.16)",
              textDecoration: "none",
              opacity: 0.9,
            }}
          >
            Ver Instagram
          </a>
        </div>

        <p style={{ marginTop: 18, opacity: 0.6, fontSize: 12 }}>
          Quer algo específico? Me chama e eu te envio exemplos do teu tipo de evento/negócio.
        </p>
      </div>
    </main>
  );
}
