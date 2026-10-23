// Edit dishes and seasonal accompaniments here. No component changes are needed.
// These are sample menus; confirm availability and dietary needs with each client.
export const seasons = [
  { id: 'autumn', label: 'Fall', note: 'Apples, squash, mushrooms, roasted roots, and warming sauces.' },
  { id: 'winter', label: 'Winter', note: 'Slow braises, citrus, winter greens, and comforting sides.' },
  { id: 'spring', label: 'Spring', note: 'Peas, asparagus, tender greens, and fresh herbs.' },
  { id: 'summer', label: 'Summer', note: 'Tomatoes, sweet corn, peaches, and bright herb dressings.' },
];

export function getCurrentSeason(date = new Date()) {
  const month = Number(new Intl.DateTimeFormat('en-US', { month: 'numeric', timeZone: 'America/New_York' }).format(date));
  return month >= 3 && month <= 5 ? 'spring' : month >= 6 && month <= 8 ? 'summer' : month >= 9 && month <= 11 ? 'autumn' : 'winter';
}

const produce = {
  autumn: {
    salad: 'Apple & Aged Cheddar Salad – Mixed Greens, Toasted Pecans, Cider Vinaigrette',
    vegetables: 'Roasted Carrots & Brussels Sprouts',
    risotto: 'Wild Mushroom Risotto – Parmesan, Thyme',
    ravioli: 'Ricotta Ravioli – Brown Butter, Sage, Parmesan',
    fish: 'Pan-Seared Rockfish – Butternut Squash Purée, Roasted Brussels Sprouts, Lemon Butter',
    mediterranean: 'Roasted Beet Salad – Orange, Feta, Arugula, Lemon Vinaigrette',
    grain: 'Herbed Couscous, Roasted Carrots & Cauliflower',
  },
  winter: {
    salad: 'Winter Citrus Salad – Mixed Greens, Shaved Fennel, Toasted Almonds, Citrus Vinaigrette',
    vegetables: 'Roasted Carrots & Parsnips',
    risotto: 'Wild Mushroom Risotto – Parmesan, Thyme',
    ravioli: 'Ricotta Ravioli – Brown Butter, Sage, Parmesan',
    fish: 'Pan-Seared Rockfish – Cauliflower Purée, Braised Leeks, Lemon Butter',
    mediterranean: 'Winter Citrus Salad – Fennel, Feta, Arugula, Lemon Vinaigrette',
    grain: 'Herbed Couscous, Roasted Root Vegetables',
  },
  spring: {
    salad: 'Spring Greens – Radish, Peas, Goat Cheese, Lemon Vinaigrette',
    vegetables: 'Asparagus & Roasted Carrots',
    risotto: 'Spring Pea Risotto – Asparagus, Parmesan, Lemon',
    ravioli: 'Ricotta Ravioli – Peas, Lemon Butter, Parmesan',
    fish: 'Pan-Seared Rockfish – Pea Purée, Asparagus, Lemon Butter',
    mediterranean: 'Spring Greens – Radish, Feta, Mint, Lemon Vinaigrette',
    grain: 'Herbed Couscous, Asparagus & Peas',
  },
  summer: {
    salad: 'Summer Peach Salad – Arugula, Goat Cheese, Toasted Pecans, White Balsamic Vinaigrette',
    vegetables: 'Sweet Corn & Summer Squash',
    risotto: 'Sweet Corn Risotto – Parmesan, Basil',
    ravioli: 'Ricotta Ravioli – Cherry Tomatoes, Basil, Parmesan',
    fish: 'Pan-Seared Rockfish – Sweet Corn, Zucchini, Tomato-Herb Relish',
    mediterranean: 'Tomato & Cucumber Salad – Feta, Red Onion, Oregano, Lemon',
    grain: 'Herbed Couscous, Grilled Zucchini & Peppers',
  },
};
const course = (label, ...items) => ({ label, items });
const chocolate = 'Chocolate Pot de Crème – Whipped Cream, Flaky Sea Salt';

export function getMenus(season) {
  const p = produce[season] || produce.autumn;
  const latinSides = {
    autumn: 'Roasted Sweet Potato, Black Bean Purée',
    winter: 'Roasted Root Vegetables, Black Bean Purée',
    spring: 'Grilled Asparagus, Black Bean Purée',
    summer: 'Charred Street Corn, Black Bean Purée',
  };
  const latinSalads = {
    autumn: 'Roasted Squash Salad – Arugula, Queso Fresco, Pepitas, Lime',
    winter: 'Citrus & Avocado Salad – Queso Fresco, Cilantro, Lime',
    spring: 'Cucumber & Radish Salad – Queso Fresco, Cilantro, Lime',
    summer: 'Watermelon & Cucumber Salad – Tajín, Lime, Queso Fresco',
  };
  const japaneseVegetables = {
    autumn: 'Roasted Mushrooms & Bok Choy', winter: 'Bok Choy & Roasted Carrots',
    spring: 'Asparagus & Snap Peas', summer: 'Zucchini & Bok Choy',
  };
  return [
    {
      id: 'french', title: 'French Countryside', subtitle: 'Classic sauces, comforting flavors, and a leisurely dinner.',
      courses: [
        course('To begin', 'Brie Tartlet – Fig Jam, Prosciutto, Thyme, Balsamic'),
        course('First course', p.salad),
        course('Main course · choose your direction', `Filet Mignon – Roasted Garlic Pommes Purée, ${p.vegetables}, Red Wine Demi-Glace`, `Pan-Seared Chicken Breast – Herb Jus, Garlic Whipped Potatoes, ${p.vegetables}`),
        course('Something sweet', chocolate),
      ],
    },
    {
      id: 'italian', title: 'Italian Inspired', subtitle: 'Crostini, ricotta ravioli, and seasonal accompaniments.',
      courses: [
        course('To begin', 'Wild Mushroom Crostini – Whipped Ricotta, Thyme, Truffle Honey'),
        course('Pasta course', p.ravioli),
        course('Main course · choose your direction', `Beef Tenderloin – ${p.risotto.replace(' – ', ', ')}, ${p.vegetables}`, `Chicken Marsala – Wild Mushrooms, Herb Cream Sauce, ${p.vegetables}`),
        course('Something sweet', 'Limoncello Cheesecake – Candied Lemon'),
      ],
    },
    {
      id: 'coastal', title: 'Coastal & Chesapeake', subtitle: 'Crab, rockfish, and a menu built around the catch.',
      courses: [
        course('To begin', 'Crab Cake – Rémoulade'),
        course('First course', 'Lobster Bisque – Crème Fraîche, Chive Oil, Microgreens'),
        course('Main course', p.fish),
        course('Something sweet', chocolate),
      ],
    },
    {
      id: 'american', title: 'Seasonal American', subtitle: 'A generous table for birthdays, gatherings, and celebrations.',
      courses: [
        course('To begin', 'Wild Mushroom Tart – Goat Cheese, Lavender, Thyme'),
        course('For the table', p.salad, 'Sourdough Bread – Herb Butter'),
        course('Main course · choose your direction', `Braised Short Ribs – Garlic Whipped Potatoes, ${p.vegetables}, Braising Jus`, `Beef Tenderloin – ${p.risotto.replace(' – ', ', ')}, ${p.vegetables}`),
        course('Something sweet', 'Vanilla Bean Crème Brûlée Cheesecake'),
      ],
    },
    {
      id: 'latin', title: 'Latin American', subtitle: 'Citrus, chimichurri, and bold flavors for a shared table.',
      courses: [
        course('To begin', 'Snapper Ceviche – Lime, Cilantro, Avocado'),
        course('First course', latinSalads[season] || latinSalads.autumn),
        course('Main course', `Grilled Skirt Steak – Chimichurri, ${latinSides[season] || latinSides.autumn}`),
        course('Something sweet', 'Tres Leches Cake'),
      ],
    },
    {
      id: 'japanese', title: 'Japanese Inspired', subtitle: 'Sesame, citrus, and miso with seasonal vegetables.',
      courses: [
        course('To begin', 'Seared Ahi Tuna – Sesame, Citrus, Scallions, Ponzu'),
        course('First course', 'Shaved Cucumber Salad – Rice Vinegar, Ginger, Sesame'),
        course('Main course', `Miso-Glazed Chilean Sea Bass – Jasmine Rice, ${japaneseVegetables[season] || japaneseVegetables.autumn}`),
        course('Something sweet', chocolate),
      ],
    },
    {
      id: 'mediterranean', title: 'Mediterranean Inspired', subtitle: 'A seasonal menu idea with lemon, herbs, and vegetables.',
      courses: [
        course('To begin', 'Whipped Feta – Honey, Thyme, Warm Pita'),
        course('First course', p.mediterranean),
        course('Main course · choose your direction', `Lemon-Herb Chicken – ${p.grain}`, `Roasted Cauliflower – Chickpeas, ${p.grain}, Lemon-Tahini Sauce`),
        course('Something sweet', 'Lemon-Olive Oil Cake – Whipped Cream'),
      ],
    },
  ];
}
