importation { définirConfig } de 'vite'
importation réagir de '@vitejs/plugin-react'
importation chemin de 'chemin'

// https://vitejs.dev/config/
exporter défaut définirConfig({
  plugins: [réagir()],
  résoudre: {
    alias: {
      "@": chemin'.résoudre(__dirname, "./src"),
    },
  },
  optimiserDeps: {
    exclure: ['lucide-réaction'],
  },
  construire: {
    surDir: 'dist',
    carte source: vrai,
    rollupOptions: {
      sortie: {
        morceaux manuels: {
          vendeur: ['réagir', "réaction-dom"],
          ui: [" mouvement de cadre ", 'lucide-réaction'],
        },
      },
    },
  },
  serveur: {
    port: 3000,
    hôte: vrai,
  },
})
