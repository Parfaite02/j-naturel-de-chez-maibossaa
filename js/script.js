// ===== ADMIN LOGIN =====
function ouvrirAdmin() {
    document.getElementById('adminOverlay').classList.add('active');
}

function fermerAdmin() {
    document.getElementById('adminOverlay').classList.remove('active');
    document.getElementById('adminMsg').innerHTML = '';
    document.getElementById('adminUser').value = '';
    document.getElementById('adminPass').value = '';
}

function connecterAdmin() {
    const user = document.getElementById('adminUser').value.trim();
    const pass = document.getElementById('adminPass').value.trim();

    const ADMIN_USER = 'parfaite';
    const ADMIN_PASS = 'jus.2026';

    if (user === ADMIN_USER && pass === ADMIN_PASS) {
        document.getElementById('adminMsg').innerHTML =
            '<div class="alert alert-success">✅ Bienvenue Parfaite !</div>';
        setTimeout(() => {
            fermerAdmin();
            afficherPanneauAdmin();
        }, 1500);
    } else {
        document.getElementById('adminMsg').innerHTML =
            '<div class="alert alert-error">❌ Identifiants incorrects.</div>';
    }
}

function afficherPanneauAdmin() {
    const existant = document.getElementById('panneauAdmin');
    if (existant) { existant.remove(); return; }

    const panneau = document.createElement('div');
    panneau.id = 'panneauAdmin';
    panneau.style.cssText = `
        position: fixed; bottom: 0; left: 0; right: 0;
        background: #1b5e20; color: #fff;
        padding: 15px 30px;
        display: flex; gap: 15px; align-items: center;
        z-index: 998; flex-wrap: wrap;
        box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
    `;
    panneau.innerHTML = `
        <span style="color:#ffeb3b;font-weight:700;">🔐 Mode Admin — Parfaite</span>
        <button onclick="voirCommandes()" style="background:#ffeb3b;color:#1b5e20;border:none;padding:8px 18px;border-radius:20px;cursor:pointer;font-weight:700;">🛒 Commandes</button>
        <button onclick="voirProduits()" style="background:#ffffff20;color:#fff;border:none;padding:8px 18px;border-radius:20px;cursor:pointer;">🍹 Produits</button>
        <button onclick="document.getElementById('panneauAdmin').remove()" style="background:#ffffff20;color:#fff;border:none;padding:8px 18px;border-radius:20px;cursor:pointer;margin-left:auto;">🚪 Déconnexion</button>
    `;
    document.body.appendChild(panneau);
}

// produits disponibles
const produits = [
    { nom: 'mangue', prix: 500 },
    { nom: 'ananas', prix: 500 },
    { nom: 'pasteque', prix: 500 },
    { nom: 'goyave', prix: 500 },
    { nom: 'orange', prix: 400 },
    { nom: 'mixtee', prix: 700 }, 

];

// Soumettre commande
function soumettreCommande(){
    const nom = document.getElementById('cmdNom').value.trim();
    const tel = document.getElementById('cmdTel').value.trim();
    const adresse = document.getElementById('cmdAdresse').value.trim();
    const produit = document.getElementById('cmdProduit').value;
    const quantite = document.getElementById('cmdQuantite').value;
    const total = document.getElementById('totalEstime').textContent;

    if (!nom|| !tel || !adresse || !produit) {
        alert('veuillez remplir tous les champs !');
        return;
        
    }

const msg = document.createElement('div');
msg.style.cssText = 'position:fixed;top:0;right:0;bottom:0;background:rgba(0,0,0,0,8);display:flex;align-items:center;justify-conter;z-index:9999;';
msg.innerHTML = `
   <div style="background:white;padding:30px;border-radius:15px;text-align:centre;max-width:300px;">
     <div style="font-size:3rem;">
     <h2 style="color:#1b5e20;">Commande confirmée !</h2>
     <p>Merci <strong>${nom}</strong> !</p>
     <p>Total : <strong style="color:#1b5e20;">${total}</strong></p>
     <p style="color:#888;">Nous vous contacterons au ${tel} bientot.</p>
     <button onclick="this.parentElement.parentElement.remove()"
     style="background:#1b5e20;color:white;border:padding:10px 25px;border-raduis:8px;font-size:1rem;margin-top:10px;">
     OK
     </button>
    </div>
`;
document.body.appendChild(msg);

}