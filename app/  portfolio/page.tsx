export default function PortfolioPage() {
  return (
    <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>Portfólio</h1>
      <p style={{ opacity: 0.8, marginBottom: 24 }}>
        Foto & Vídeo • Eventos • Negócios
      </p>

      <section style={{ display: "grid", gap: 12 }}>
        <a href="/" style={{ textDecoration: "underline" }}>← Voltar para links</a>

        <div style={{ border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, padding: 16 }}>
          <h2 style={{ margin: 0, fontSize: 18 }}>Em breve</h2>
          <p style={{ marginTop: 8, opacity: 0.8 }}>
            Aqui vai entrar tua vitrine com fotos, vídeos e cases.
          </p>
        </div>
      </section>
    </main>
  );
}
