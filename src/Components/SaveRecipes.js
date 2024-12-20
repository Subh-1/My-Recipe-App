 const SaveRecipes = () => {
  const myrecipes = [
    {
      id: 1,
      recipeName: "Vegetable Stir Fry",
      Ingredients: [
        "1 bell pepper, sliced",
        "1 carrot, julienned",
        "100g broccoli florets",
        "2 tbsp soy sauce",
        "2 tbsp olive oil",
        "1 garlic clove, minced",
        "1 tbsp ginger, grated",
      ],
      cookingInstructions: [
        "Heat oil in a pan, add garlic and ginger.",
        "Add vegetables and stir fry for 5-7 minutes.",
        "Pour in soy sauce and cook for another 2 minutes.",
        "Serve with rice or noodles.",
      ],
      cuisineType: "Asian",
      image: "../images/vegstir.jpg",
    },
    {
      id: 2,
      recipeName: "Cauliflower Biryani",
      Ingredients: [
        "1 medium cauliflower, chopped",
        "1 onion, sliced",
        "1 tomato, chopped",
        "1 cup basmati rice",
        "2 tbsp biryani masala",
        "2 tbsp yogurt",
        "1/2 cup peas",
        "1/4 cup cilantro, chopped",
      ],
      cookingInstructions: [
        "Cook rice and set aside.",
        "In a pan, sauté onions until golden, add tomato and cauliflower.",
        "Add biryani masala and yogurt, cook until cauliflower is tender.",
        "Mix rice, peas, and cilantro with the cauliflower mixture.",
        "Serve hot with raita.",
      ],
      cuisineType: "Indian",
      image: "../images/biryani.jpg",
    },
    {
      id: 3,
      recipeName: "Margherita Pizza",
      Ingredients: [
        "1 pizza dough",
        "1 cup tomato sauce",
        "200g fresh mozzarella, sliced",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper",
      ],
      cookingInstructions: [
        "Preheat oven to 220°C (425°F).",
        "Roll out pizza dough, spread tomato sauce on top.",
        "Arrange mozzarella slices, and season with salt and pepper.",
        "Bake for 12-15 minutes or until crust is golden.",
        "Top with fresh basil leaves and drizzle with olive oil.",
      ],
      cuisineType: "Italian",
      image: "../images/margherita.jpg",
    },

    {
      id: 4,
      recipeName: "Vegetable Lasagna",
      Ingredients: [
        "12 lasagna noodles",
        "2 cups ricotta cheese",
        "2 cups mozzarella cheese",
        "2 cups marinara sauce",
        "1 zucchini, sliced",
        "1 bell pepper, diced",
        "1 cup spinach, chopped",
        "1 egg",
      ],
      cookingInstructions: [
        "Cook lasagna noodles according to package instructions.",
        "Sauté zucchini, bell pepper, and spinach in olive oil.",
        "Mix ricotta cheese with egg, salt, and pepper.",
        "Layer noodles, cheese mixture, sautéed vegetables, and marinara sauce.",
        "Top with mozzarella and bake at 180°C (350°F) for 30 minutes.",
      ],
      cuisineType: "Italian",
      image: "../images/lasagns.jpg",
    },
    {
      id: 5,
      recipeName: "Lentil Soup",
      Ingredients: [
        "1 cup lentils",
        "1 onion, chopped",
        "2 carrots, chopped",
        "2 celery stalks, chopped",
        "1 garlic clove, minced",
        "4 cups vegetable broth",
        "1 tsp cumin",
        "Salt and pepper",
      ],
      cookingInstructions: [
        "In a pot, sauté onion, garlic, carrots, and celery.",
        "Add lentils, vegetable broth, cumin, salt, and pepper.",
        "Simmer for 25-30 minutes until lentils are tender.",
        "Serve hot with crusty bread.",
      ],
      cuisineType: "Middle Eastern",
      image: "../images/lentil.jpg",
    },
    {
      id: 6,
      recipeName: "Stuffed Bell Peppers",
      Ingredients: [
        "4 bell peppers, tops cut off and seeds removed",
        "1 cup cooked rice",
        "1 can black beans, drained and rinsed",
        "1/2 cup corn kernels",
        "1 cup shredded cheese",
        "1 tbsp cumin",
        "Salt and pepper",
      ],
      cookingInstructions: [
        "Preheat oven to 180°C (350°F).",
        "Mix rice, black beans, corn, cheese, cumin, salt, and pepper.",
        "Stuff the bell peppers with the mixture.",
        "Place peppers in a baking dish and bake for 25-30 minutes.",
      ],
      cuisineType: "Mexican",
      image: "../images/stuff bell.jpg",
    },
    {
      id: 7,
      recipeName: "Vegan Tacos",
      Ingredients: [
        "1 can lentils, drained and rinsed",
        "1 avocado, sliced",
        "1 onion, chopped",
        "1 tomato, chopped",
        "1 lime, cut into wedges",
        "Corn tortillas",
        "Fresh cilantro",
      ],
      cookingInstructions: [
        "Heat lentils in a pan with salt and pepper.",
        "Warm the tortillas in a separate pan.",
        "Assemble tacos with lentils, avocado, onion, and tomato.",
        "Garnish with cilantro and a squeeze of lime juice.",
      ],
      cuisineType: "Mexican",
      image: "../images/vegan tacos.jpg",
    },
  ];
  localStorage.removeItem("recipes");
  localStorage.setItem("recipes", JSON.stringify(myrecipes));
};

export default SaveRecipes;