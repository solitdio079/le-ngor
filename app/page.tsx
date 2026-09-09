'use client';

import { useState } from 'react';

type MenuItem = {
  name: string;
  description?: string;
  price: string;
  tag?: string;
};

type MenuGroup = {
  title: string;
  note?: string;
  image?: string;
  imageAlt?: string;
  items: MenuItem[];
};

type Category = {
  id: string;
  label: string;
  eyebrow: string;
  number: string;
  groups: MenuGroup[];
  childMenu?: boolean;
};

const categories: Category[] = [
  {
    id: 'entrees',
    label: 'Entrées',
    eyebrow: 'Pour commencer',
    number: '01',
    childMenu: true,
    groups: [
      {
        title: 'Entrées',
        image: '/assets/baobab-drink.png',
        imageAlt: 'Illustration au trait de fruits de baobab',
        items: [
          { name: 'Soupe du Pêcheur façon Bouillabaisse', description: 'Rougets, crevettes, calamars, moules', price: '6 000' },
          { name: 'Salade César', description: 'Au croustillant de poulet farci aux fines herbes', price: '6 000' },
          { name: 'Tataki de Bœuf cœur rouge', description: 'Bœuf saisi en surface, cœur tendre et rosé', price: '6 500' },
          { name: 'Carpaccio de Poisson', description: 'Baies roses et fleur de sel', price: '5 500' },
          { name: 'Salade Niçoise revisitée', description: 'Au thon mi-cuit & œufs de caille', price: '6 000' },
          { name: 'Quenelles de Fromage crémeux & Saumon Fumé', description: 'Aux éclats de noix et fines herbes', price: '7 500' },
          { name: 'Salade Tiède au Poulpe Fumé', description: 'Mousseline de patates douces parfumée au paprika', price: '6 000' },
          { name: 'Salade Orientale', description: 'Poivrons, tomates, féta et coriandre', price: '6 000', tag: 'Végétarien' },
        ],
      },
    ],
  },
  {
    id: 'mer',
    label: 'Poissons & mer',
    eyebrow: 'Fraîcheur de l’Atlantique',
    number: '02',
    groups: [
      {
        title: 'Poissons',
        image: '/assets/fish-sketch.png',
        imageAlt: 'Illustration au trait de poissons',
        items: [
          { name: 'Filet de Lotte, Sauce aux Dattes Fondantes', price: '7 500' },
          { name: 'Thiof Entier Grillé, Salsa Verde', price: '11 500' },
          { name: 'Pavé de Thon, Réduction Balsamique & Graines de Sésame', price: '8 500' },
          { name: 'Filet de Capitaine Laqué, Sauce Moringa', price: '8 500' },
          { name: 'Dorade Entière Grillée, Sauce Crémeuse à l’ail', price: '9 000' },
          { name: 'Filet de Thiof au Beurre Blanc Citronné', price: '8 500' },
        ],
      },
      {
        title: 'Crustacés & Fruits de Mer',
        image: '/assets/lobster-sketch.png',
        imageAlt: 'Illustration au trait de crustacés',
        items: [
          { name: 'Gambas Laquées, Sauce du Chef Mangue et Passion', price: '12 500' },
          { name: 'Langouste à la Crème d’Orange', description: 'Portion de 300 g', price: '16 500' },
          { name: 'Calamar Grillés, Marinade Persil Citron', price: '9 500' },
          { name: 'Crevettes Sauce Citronnée au Gingembre', price: '9 500' },
          { name: 'Mixte de la Mer (Gambas, Calamar, Lotte), Sauce Moyo', price: '10 500' },
          { name: 'Camerones Sauce Rouille de Crustacés', price: '16 500' },
        ],
      },
      {
        title: 'Spécialités végétariennes',
        note: 'Toutes nos spécialités végétariennes sont à 6 500 FCFA.',
        items: [
          { name: 'Tajine aux Légumes, Pruneaux et Abricots Fondants', price: '6 500' },
          { name: 'Raviolis aux Champignons & aux éclats de Noix', price: '6 500' },
          { name: 'Burger au Steak de Pommes de Terre', price: '6 500' },
          { name: 'Pennes au Caviar de Tomate et Poivrons & Féta', price: '6 500' },
          { name: 'Curry de Lentilles', price: '6 500' },
        ],
      },
    ],
  },
  {
    id: 'grillades',
    label: 'Grillades & pâtes',
    eyebrow: 'Le feu & la générosité',
    number: '03',
    groups: [
      {
        title: 'Viandes Grillées',
        image: '/assets/steak-sketch.png',
        imageAlt: 'Illustration au trait d’une viande grillée',
        items: [
          { name: 'Entrecôte Grillée (Brésil), Sauce Bleue', price: '10 500' },
          { name: 'Souris d’Agneau confite au Romarin, écrasée de patates douces', price: '13 500' },
          { name: 'Brochette de Poulet Marinée, piquée au Gingembre, Crème de Bouye', price: '9 500' },
          { name: 'Filet de Bœuf, Sauce Champignons Forestiers', price: '11 500' },
          { name: 'Côte de Bœuf Braisée, Sauce Poivre Vert', price: '14 500' },
          { name: 'Cuisse de Poulet, Sauce Yassa', price: '6 500' },
          { name: 'Mixte de Viande (Poulet et Bœuf), Sauce café Touba', price: '9 500' },
        ],
      },
      {
        title: 'Burgers',
        image: '/assets/burger-sketch.png',
        imageAlt: 'Illustration au trait d’un burger',
        items: [
          { name: 'Classic Ring', description: 'Oignons', price: '6 000' },
          { name: 'Crispy Chicken', description: 'Poulet crispy', price: '6 500' },
          { name: 'Duck Cheese', description: 'Lamelles de canard fumé, crème de brie', price: '8 500' },
          { name: 'Crispy Spicy Green', description: 'Steak de poulet, purée d’avocat épicé', price: '7 500' },
          { name: 'Crispy Gambas', price: '8 500' },
        ],
      },
      {
        title: 'Pâtes',
        items: [
          { name: 'Tagliatelles de la Mer, Sauce Rouille de Crustacés', price: '10 500' },
          { name: 'Linguine aux Palourdes', price: '10 500' },
          { name: 'Spaghettis Bolognaise', price: '7 000' },
          { name: 'Ravioles de Gambas, Sauce Bisque', price: '11 500' },
        ],
      },
      {
        title: 'Garnitures au choix',
        note: 'Frites maison, légumes de saison, athiéké, écrasé de patate douce, riz, salade ou spaghettis.',
        items: [
          { name: 'Assiette Aloco', price: '3 000' },
        ],
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    eyebrow: 'La touche sucrée',
    number: '04',
    groups: [
      {
        title: 'Desserts',
        image: '/assets/profiterole-sketch.png',
        imageAlt: 'Illustration au trait de profiteroles',
        items: [
          { name: 'Cheese Cake Spéculos', price: '5 000' },
          { name: 'Chocolat Intense', description: 'Dark chocolate', price: '5 500' },
          { name: 'Ditakh', description: 'Mousse vanille, insert ditakh, coulis passion', price: '5 500' },
          { name: 'Nutty Crush', description: 'Chocolat au lait, noisettes', price: '6 000' },
          { name: 'Tarte Citron Menthe', description: 'Et son coulis framboise', price: '4 500' },
        ],
      },
      {
        title: 'Crêpes',
        items: [
          { name: 'Crêpe Nutella', price: '3 500' },
          { name: 'Crêpe Miel, Citron, Sucre', price: '3 000' },
        ],
      },
      {
        title: 'Desserts Glacés',
        image: '/assets/icecream-sketch.png',
        imageAlt: 'Illustration au trait d’une coupe glacée',
        items: [
          { name: 'Profiteroles Framboise', description: 'Coulis chocolat, chantilly & amandes', price: '5 500' },
          { name: 'Brownie', description: 'Brownie maison, boule chocolat blanc, coulis chocolat, chantilly', price: '6 000' },
          { name: 'Gaufre Liégeoise', description: 'Gaufre, boule Ferrero, coulis chocolat, chantilly', price: '6 000' },
          { name: 'Boule de Glace', description: 'Caramel, café, coco, pistache, vanille, fraise, chocolat, Ferrero, chocolat blanc. Sorbets : framboise, passion, citron.', price: '2 500' },
        ],
      },
    ],
  },
  {
    id: 'boissons',
    label: 'Boissons',
    eyebrow: 'Fraîches, chaudes & festives',
    number: '05',
    groups: [
      {
        title: 'Sodas & jus de Fruits',
        image: '/assets/baobab-drink.png',
        imageAlt: 'Illustration au trait de fruits de baobab',
        items: [
          { name: 'Jus locaux', description: 'Bouye, bissap, ginger', price: '1 800' },
          { name: 'Sodas', description: 'Coca, Fanta, Sprite, limonade, Indian Tonic, tonic agrumes ou citron', price: '1 800' },
          { name: 'Sirops', description: 'Grenadine, citron, ditakh, fraise, menthe', price: '1 500' },
          { name: 'Jus de Fruits', description: 'Ananas, orange, mangue, pomme', price: '1 700' },
          { name: 'Coca Light', price: '2 000' },
          { name: 'Red Bull', price: '2 500' },
          { name: 'Jus Naturels', description: 'Orange, citron, pamplemousse, ananas, mangue (en saison)', price: '3 000' },
        ],
      },
      {
        title: 'Eaux Minérales & Gazeuses',
        items: [
          { name: '1/2 Casamançaise', price: '1 200' },
          { name: 'Casamançaise 1,5 L', price: '1 800' },
          { name: 'Kirène Pétillante', price: '2 200' },
        ],
      },
      {
        title: 'Mocktails',
        note: 'Tous nos mocktails sont à 4 500 FCFA.',
        items: [
          { name: 'La Joongue', description: 'Pomme verte, infusion kinkéliba, miel', price: '4 500' },
          { name: 'Bouye Colada', description: 'Bouye, ananas & coco', price: '4 500' },
          { name: 'Sweet Citronella', description: 'Citronnelle, kiwi, ananas, miel', price: '4 500' },
          { name: 'Sugar Bomb', description: 'Pomme verte, cassis, mangue', price: '4 500' },
          { name: 'Pink Basilic', description: 'Bissap, fraise, basilic', price: '4 500' },
          { name: 'Virgin Mojito Fruité', description: 'Passion, framboise ou myrtille', price: '4 500' },
        ],
      },
      {
        title: 'Frappés et Milk Shake',
        items: [
          { name: 'Frappé Café', price: '4 500' },
          { name: 'Milk Shake', description: 'Vanille, fraise ou chocolat', price: '4 500' },
          { name: 'Royal Milk Shake', description: 'Avec chantilly et topping', price: '5 500' },
        ],
      },
      {
        title: 'Bières',
        items: [
          { name: 'Flag, Gazelle, Radler Citron', price: '2 500' },
          { name: 'Heineken, Desperados', price: '3 000' },
          { name: 'Bono', description: 'Blanche, IPA ou Triple', price: '3 500' },
        ],
      },
      {
        title: 'Liqueurs',
        items: [
          { name: 'Red Label, J&B, Martini, Gin Gordon, Bacardi, Pastis', price: '5 000' },
          { name: 'Jack Daniel’s, Black Label, Campari, Absolut, Porto, Gin Bombay Sapphire', price: '5 500' },
          { name: 'Chivas 12 ans, Glenfiddich 12 ans, Gin Tanqueray', price: '6 000' },
        ],
      },
      {
        title: 'Cocktails',
        note: 'Tous nos cocktails sont à 5 500 FCFA.',
        items: [
          { name: 'Original Mojito', description: 'Rhum ambré, sucre roux, citron, menthe', price: '5 500' },
          { name: 'Sweet Dream', description: 'Rhum, lychee, cassis, eau pétillante', price: '5 500' },
          { name: 'Mojito Fruité', description: 'Passion, fraise ou myrtille', price: '5 500' },
          { name: 'Baobab Style', description: 'Rhum ambré, bouye, ananas, coco, passion', price: '5 500' },
          { name: 'Cocopeach Margarita', description: 'Tequila, triple sec, coco, pêche', price: '5 500' },
          { name: 'Red Teq', description: 'Tequila, cassis, pomme verte, orgeat', price: '5 500' },
          { name: 'Moscow Mule', description: 'Vodka, ginger beer, citron', price: '5 500' },
          { name: 'Bideew', description: 'Vodka, pastèque, menthe, citron', price: '5 500' },
          { name: 'Rose Gin Fizz', description: 'Gin, citron, sirop de rose', price: '5 500' },
          { name: 'Healthy Gin', description: 'Gin, kiwi, concombre, ananas', price: '5 500' },
        ],
      },
      {
        title: 'Boissons Chaudes',
        items: [
          { name: 'Ataya', price: '1 000' },
          { name: 'Thé, Infusion', price: '1 500' },
          { name: 'Chocolat Chaud', price: '2 500' },
          { name: 'Café Expresso', price: '200' },
          { name: 'Cappuccino, Café au Lait, Noisette, Café Double', price: '3 500' },
          { name: 'Virgin Grog', price: '3 500' },
        ],
      },
      {
        title: 'Digestifs',
        items: [
          { name: 'Irish Coffee', price: '5 500' },
          { name: 'Bailey’s, Get 27', price: '5 000' },
          { name: 'Cognac, Grand Marnier, Armagnac, Cognac', price: '6 000' },
          { name: 'Grog', description: 'Rhum, gingembre, miel, citron', price: '5 500' },
          { name: 'Expresso Aldiana', description: 'Vodka, Bailey’s, Jet 27, expresso', price: '6 000' },
        ],
      },
    ],
  },
  {
    id: 'vins',
    label: 'Vins',
    eyebrow: 'La cave',
    number: '06',
    groups: [
      {
        title: 'Vins blancs',
        image: '/assets/wine-sketch.png',
        imageAlt: 'Illustration au trait d’un verre de vin',
        items: [
          { name: 'Au verre — Sauvignon', price: '4 000' },
          { name: 'Au verre — Bordeaux Moelleux', price: '4 000' },
          { name: 'Bordeaux Moelleux Château Rousseau', price: '12 000' },
          { name: 'Cape Spring Chenin', description: 'Afrique du Sud', price: '15 500' },
          { name: 'Chardonnay Domaine de Puech Sentinelle', description: 'Bio', price: '15 500' },
          { name: 'Les Vieilles Fermes Famille Perrin', description: 'Luberon', price: '16 000' },
          { name: 'Chablis Louis Jadot', price: '45 000' },
        ],
      },
      {
        title: 'Vins Rosés',
        items: [
          { name: 'Au verre — Chemin des Sables', price: '4 000' },
          { name: 'La Baume Rosé', description: 'Languedoc', price: '16 000' },
          { name: 'Chemin des Sables', description: 'Languedoc Roussillon', price: '14 500' },
          { name: 'Côte de Provence La Rouvière', price: '21 000' },
        ],
      },
      {
        title: 'Vins Rouges',
        items: [
          { name: 'Au verre — El Chivo', price: '4 000' },
          { name: 'Côte du Rhône Victor Bérard', price: '15 500' },
          { name: 'El Chivo, Cabernet Sauvignon', description: 'Chili', price: '12 500' },
          { name: 'La Vieille Ferme Famille Perrin', description: 'Luberon', price: '16 000' },
          { name: 'Graves Les Tourelles', description: 'Bordeaux', price: '19 000' },
          { name: 'Château Gravereau', description: 'Bordeaux', price: '16 000' },
        ],
      },
      {
        title: 'Champagnes & Mousseux',
        items: [
          { name: 'Prosecco', price: '25 000' },
          { name: 'Jacquart Rosé', price: '70 000' },
          { name: 'Jacquart Blanc de Blanc', price: '90 000' },
          { name: 'Taittinger', price: '70 000' },
          { name: 'Laurent Perrier', price: '80 000' },
        ],
      },
    ],
  },
];

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <article className="menu-item">
      <div className="item-copy">
        <h3>{item.name}</h3>
        {item.description && <p>{item.description}</p>}
        {item.tag && <span className="tag">{item.tag}</span>}
      </div>
      <span className="dots" aria-hidden="true" />
      <strong>{item.price}<small> FCFA</small></strong>
    </article>
  );
}

export default function Home() {
  const [activeId, setActiveId] = useState(categories[0].id);
  const activeCategory = categories.find((category) => category.id === activeId) ?? categories[0];

  return (
    <main>
      <header className="masthead">
        <a className="brand-link" href="#top" aria-label="Le Ngor — accueil du menu">
          <img className="brand" src="/assets/le-ngor-logo.png" alt="Restaurant Le Ngor, since 2004" />
        </a>
        <p className="eyebrow">Spécialités • Grillades • Poissons & fruits de mer</p>
      </header>

      <section className="intro" id="top" aria-labelledby="menu-title">
        <div className="intro-copy">
          <p className="kicker">Notre menu</p>
          <h1 id="menu-title">Entre terre<br />& mer</h1>
          <p>Explorez la carte du Restaurant Le Ngor, servie avec caractère depuis 2004.</p>
          <span className="price-note">Prix en francs CFA</span>
        </div>
        <div className="intro-art" aria-hidden="true">
          <img src="/assets/fish-sketch.png" alt="" />
          <span>La carte</span>
        </div>
      </section>

      <nav className="category-nav" aria-label="Catégories du menu" role="tablist">
        {categories.map((category) => (
          <button
            key={category.id}
            className={activeId === category.id ? 'active' : ''}
            type="button"
            role="tab"
            aria-selected={activeId === category.id}
            aria-controls="menu-panel"
            onClick={() => setActiveId(category.id)}
          >
            <span>{category.number}</span>
            {category.label}
          </button>
        ))}
      </nav>

      <section className="menu-section" id="menu-panel" role="tabpanel" aria-live="polite">
        <div className="section-band">
          <span>{activeCategory.number}</span>
          <h2>{activeCategory.label}</h2>
          <span>{activeCategory.eyebrow}</span>
        </div>

        {activeCategory.childMenu && (
          <aside className="child-menu" aria-label="Menu enfant">
            <div className="child-heading">
              <p>Pour les moins de 12 ans</p>
              <h3>Menu Enfant</h3>
            </div>
            <div className="child-choice">
              <strong>Plat au choix</strong>
              <span>Spaghettis Bolognaise</span>
              <span>Nuggets de poisson maison</span>
              <span>Nuggets de poulet maison</span>
            </div>
            <div className="child-choice">
              <strong>Boisson</strong>
              <span>Jus local, jus de fruits, eau minérale ou soda</span>
            </div>
            <div className="child-choice">
              <strong>Dessert</strong>
              <span>1 boule de glace</span>
            </div>
            <div className="child-price">7 000 <small>FCFA</small></div>
          </aside>
        )}

        <div className="group-stack">
          {activeCategory.groups.map((group, groupIndex) => (
            <section className="menu-group" key={group.title}>
              <header className="group-heading">
                <span>{String(groupIndex + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{group.title}</h2>
                  {group.note && <p>{group.note}</p>}
                </div>
                {group.image && <img src={group.image} alt={group.imageAlt ?? ''} />}
              </header>
              <div className="menu-list">
                {group.items.map((item) => <MenuItemRow item={item} key={`${group.title}-${item.name}`} />)}
              </div>
            </section>
          ))}
        </div>
      </section>

      <footer>
        <img src="/assets/le-ngor-logo.png" alt="Le Ngor" />
        <p>Spécialités • Grillades • Poissons & fruits de mer</p>
        <a href="#top">Retour en haut ↑</a>
      </footer>
    </main>
  );
}
