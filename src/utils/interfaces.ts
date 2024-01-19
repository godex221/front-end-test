export interface SELL {
    numero_commande: number,
    date_de_commande: string,
    nom_du_vendeur: string,
    type_vente: "MOBILE" | "FIXE",
}

export interface BTN_ASIDE {
    path: string,
    libelle: string,
    image: string,
    imageActive: string,
} 