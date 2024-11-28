const recipes = [
  {
    id:1,
    "Recipe Name": "Vegetable Stir Fry",
    "Ingredients": [
      "1 bell pepper, sliced",
      "1 carrot, julienned",
      "100g broccoli florets",
      "2 tbsp soy sauce",
      "2 tbsp olive oil",
      "1 garlic clove, minced",
      "1 tbsp ginger, grated"
    ],
    "Cooking Instructions": [
      "Heat oil in a pan, add garlic and ginger.",
      "Add vegetables and stir fry for 5-7 minutes.",
      "Pour in soy sauce and cook for another 2 minutes.",
      "Serve with rice or noodles."
    ],
    "Cuisine Type": "Asian"
  },
  {
    id:2,
    "Recipe Name": "Cauliflower Biryani",
    "Ingredients": [
      "1 medium cauliflower, chopped",
      "1 onion, sliced",
      "1 tomato, chopped",
      "1 cup basmati rice",
      "2 tbsp biryani masala",
      "2 tbsp yogurt",
      "1/2 cup peas",
      "1/4 cup cilantro, chopped"
    ],
    "Cooking Instructions": [
      "Cook rice and set aside.",
      "In a pan, sauté onions until golden, add tomato and cauliflower.",
      "Add biryani masala and yogurt, cook until cauliflower is tender.",
      "Mix rice, peas, and cilantro with the cauliflower mixture.",
      "Serve hot with raita."
    ],
    "Cuisine Type": "Indian"
  },
  {
    id:3,
    "Recipe Name": "Margherita Pizza",
    "Ingredients": [
      "1 pizza dough",
      "1 cup tomato sauce",
      "200g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper"
    ],
    "Cooking Instructions": [
      "Preheat oven to 220°C (425°F).",
      "Roll out pizza dough, spread tomato sauce on top.",
      "Arrange mozzarella slices, and season with salt and pepper.",
      "Bake for 12-15 minutes or until crust is golden.",
      "Top with fresh basil leaves and drizzle with olive oil."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:4,
    "Recipe Name": "Chickpea Salad",
    "Ingredients": [
      "1 can chickpeas, drained and rinsed",
      "1 cucumber, diced",
      "1 red onion, finely chopped",
      "1 tomato, chopped",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper"
    ],
    "Cooking Instructions": [
      "In a bowl, mix chickpeas, cucumber, onion, and tomato.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper and toss well.",
      "Serve chilled."
    ],
    "Cuisine Type": "Mediterranean"
  },
  {
    id:5,
    "Recipe Name": "Vegetable Lasagna",
    "Ingredients": [
      "12 lasagna noodles",
      "2 cups ricotta cheese",
      "2 cups mozzarella cheese",
      "2 cups marinara sauce",
      "1 zucchini, sliced",
      "1 bell pepper, diced",
      "1 cup spinach, chopped",
      "1 egg"
    ],
    "Cooking Instructions": [
      "Cook lasagna noodles according to package instructions.",
      "Sauté zucchini, bell pepper, and spinach in olive oil.",
      "Mix ricotta cheese with egg, salt, and pepper.",
      "Layer noodles, cheese mixture, sautéed vegetables, and marinara sauce.",
      "Top with mozzarella and bake at 180°C (350°F) for 30 minutes."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:6,
    "Recipe Name": "Lentil Soup",
    "Ingredients": [
      "1 cup lentils",
      "1 onion, chopped",
      "2 carrots, chopped",
      "2 celery stalks, chopped",
      "1 garlic clove, minced",
      "4 cups vegetable broth",
      "1 tsp cumin",
      "Salt and pepper"
    ],
    "Cooking Instructions": [
      "In a pot, sauté onion, garlic, carrots, and celery.",
      "Add lentils, vegetable broth, cumin, salt, and pepper.",
      "Simmer for 25-30 minutes until lentils are tender.",
      "Serve hot with crusty bread."
    ],
    "Cuisine Type": "Middle Eastern"
  },
  {
    id:7,
    "Recipe Name": "Stuffed Bell Peppers",
    "Ingredients": [
      "4 bell peppers, tops cut off and seeds removed",
      "1 cup cooked rice",
      "1 can black beans, drained and rinsed",
      "1/2 cup corn kernels",
      "1 cup shredded cheese",
      "1 tbsp cumin",
      "Salt and pepper"
    ],
    "Cooking Instructions": [
      "Preheat oven to 180°C (350°F).",
      "Mix rice, black beans, corn, cheese, cumin, salt, and pepper.",
      "Stuff the bell peppers with the mixture.",
      "Place peppers in a baking dish and bake for 25-30 minutes."
    ],
    "Cuisine Type": "Mexican"
  },
  {
    id:8,
    "Recipe Name": "Vegan Tacos",
    "Ingredients": [
      "1 can lentils, drained and rinsed",
      "1 avocado, sliced",
      "1 onion, chopped",
      "1 tomato, chopped",
      "1 lime, cut into wedges",
      "Corn tortillas",
      "Fresh cilantro"
    ],
    "Cooking Instructions": [
      "Heat lentils in a pan with salt and pepper.",
      "Warm the tortillas in a separate pan.",
      "Assemble tacos with lentils, avocado, onion, and tomato.",
      "Garnish with cilantro and a squeeze of lime juice."
    ],
    "Cuisine Type": "Mexican"
  },
  {
    id:9,
    "Recipe Name": "Vegetable Curry",
    "Ingredients": [
      "1 potato, cubed",
      "1 carrot, chopped",
      "1 zucchini, chopped",
      "1 can coconut milk",
      "2 tbsp curry powder",
      "1 onion, chopped",
      "1 garlic clove, minced",
      "2 tbsp vegetable oil"
    ],
    "Cooking Instructions": [
      "Heat oil in a pot and sauté onion and garlic.",
      "Add potato, carrot, and zucchini, cook for 5 minutes.",
      "Stir in curry powder, then pour in coconut milk.",
      "Simmer for 20 minutes until vegetables are tender.",
      "Serve with rice."
    ],
    "Cuisine Type": "Indian"
  },
  {
    id:10,
    "Recipe Name": "Zucchini Noodles with Pesto",
    "Ingredients": [
      "2 zucchinis, spiralized",
      "1 cup basil pesto",
      "1/4 cup pine nuts",
      "Parmesan cheese for garnish"
    ],
    "Cooking Instructions": [
      "Toss zucchini noodles with pesto until well coated.",
      "Top with pine nuts and Parmesan cheese.",
      "Serve immediately."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:11,
    "Recipe Name": "Vegetarian Chili",
    "Ingredients": [
      "1 can kidney beans, drained and rinsed",
      "1 can black beans, drained and rinsed",
      "1 onion, chopped",
      "1 bell pepper, chopped",
      "2 tomatoes, diced",
      "2 tbsp chili powder",
      "1 cup vegetable broth"
    ],
    "Cooking Instructions": [
      "In a large pot, sauté onion and bell pepper.",
      "Add beans, tomatoes, chili powder, and vegetable broth.",
      "Simmer for 30 minutes, stirring occasionally.",
      "Serve with sour cream or cornbread."
    ],
    "Cuisine Type": "American"
  },
  {
    id:12,
    "Recipe Name": "Spinach and Ricotta Stuffed Shells",
    "Ingredients": [
      "12 jumbo pasta shells",
      "2 cups ricotta cheese",
      "1 cup spinach, chopped",
      "1 cup marinara sauce",
      "1 cup mozzarella cheese"
    ],
    "Cooking Instructions": [
      "Preheat oven to 180°C (350°F).",
      "Cook pasta shells according to package instructions.",
      "Mix ricotta with spinach, salt, and pepper.",
      "Stuff shells with ricotta mixture and place in a baking dish.",
      "Top with marinara sauce and mozzarella, bake for 20 minutes."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:13,
    "Recipe Name": "Mushroom Risotto",
    "Ingredients": [
      "200g Arborio rice",
      "1 onion, chopped",
      "200g mushrooms, sliced",
      "1/2 cup white wine",
      "4 cups vegetable broth",
      "2 tbsp butter",
      "1/2 cup Parmesan cheese"
    ],
    "Cooking Instructions": [
      "Sauté onion and mushrooms in butter.",
      "Add rice and stir for 2 minutes.",
      "Add white wine and cook until absorbed.",
      "Gradually add broth, stirring constantly, until rice is tender.",
      "Stir in Parmesan and serve."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:14,
    "Recipe Name": "Caprese Salad",
    "Ingredients": [
      "3 tomatoes, sliced",
      "200g fresh mozzarella, sliced",
      "Fresh basil leaves",
      "Olive oil",
      "Balsamic vinegar"
    ],
    "Cooking Instructions": [
      "Layer tomatoes, mozzarella, and basil on a plate.",
      "Drizzle with olive oil and balsamic vinegar.",
      "Serve immediately."
    ],
    "Cuisine Type": "Italian"
  },
  {
    id:15,
    "Recipe Name": "Sweet Potato Fries",
    "Ingredients": [
      "2 large sweet potatoes, peeled and cut into fries",
      "2 tbsp olive oil",
      "1 tsp paprika",
      "Salt and pepper"
    ],
    "Cooking Instructions": [
      "Preheat oven to 200°C (400°F).",
      "Toss sweet potatoes with olive oil, paprika, salt, and pepper.",
      "Spread fries in a single layer on a baking sheet.",
      "Bake for 25-30 minutes, flipping halfway through."
    ],
    "Cuisine Type": "American"
  },
  {
    id:16,
    "Recipe Name": "Vegetable Samosas",
    "Ingredients": [
      "2 potatoes, boiled and mashed",
      "1 cup peas",
      "1 onion, chopped",
      "1 tbsp curry powder",
      "Samosa wrappers",
      "Oil for frying"
    ],
    "Cooking Instructions": [
      "Sauté onions in oil, then add curry powder.",
      "Mix in mashed potatoes and peas.",
      "Fill samosa wrappers with mixture, seal, and fry until golden."
    ],
    "Cuisine Type": "Indian"
  },
  {
    id:17,
    "Recipe Name": "Avocado Toast",
    "Ingredients": [
      "2 slices bread",
      "1 ripe avocado",
      "Salt and pepper",
      "Olive oil"
    ],
    "Cooking Instructions": [
      "Toast the bread slices.",
      "Mash the avocado and spread on the toasted bread.",
      "Drizzle with olive oil, and season with salt and pepper."
    ],
    "Cuisine Type": "American"
  }
]

const recipeList= localStorage.setItem("recipes", JSON.stringify(recipes));

console.log("receipe list",recipeList);
