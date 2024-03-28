// Animal constructor function
let idCounter = 0;
function Animal(name, lifespan, group, food, description, length, weight, found, image, isActive) {
  this.id = idCounter++;
  this.name = name;
  this.lifespan = lifespan;
  this.group = group;
  this.food = food;
  this.description = description;
  this.length = length;
  this.weight = weight;
  this.found = found;
  this.image = image;
  this.isActive = isActive;
}

// Animal objects
const echidna = new Animal(
  "Echidna",
  "50 years",
  "mammals",
  "insects such as ants and termites, beetle larvae and worms",
  "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus",
  "76cm",
  "10kg",
  "Throughout Australia",
  "echidna.jpeg",
  false
);

const frillNeckedLizard = new Animal(
  "Frill-necked Lizard",
  "20 years",
  "reptiles",
  "Small insects and spiders",
  "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
  "90cm",
  "1kg",
  "Northern Australia",
  "frillNeckedLizard.jpeg",
  false
);

const cassowary = new Animal(
  "Cassowary",
  "20 years",
  "birds",
  "Plants matter like fruit, insects and small animals like mice and lizards",
  "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida",
  "1.7m",
  "44kg",
  "Queensland",
  "cassowary.jpeg",
  false
);

// More animals
const dolphin = new Animal(
  "Dolphin",
  "25 years",
  "mammals",
  "Fish and squid",
  "The dolphin, an intelligent and social marine mammal, inhabits warm and temperate waters worldwide. Known for its powerful fins and distinctive smile, dolphins exhibit acrobatic movements underwater and often leap playfully at the surface. They are highly social, living in groups, and communicate through various sounds and body language.",
  "3m",
  "200kg",
  "Oceans worldwide",
  "dolphin.jpeg",
  false
);

const giraffe = new Animal(
  "Giraffe",
  "25 years",
  "mammals",
  "Leaves, fruits, and flowers",
  "The giraffe is the world’s tallest land animal, and it has a long neck and legs...",
  "5.5m",
  "800kg",
  "Africa, primarily in savannas and open woodlands",
  "giraffe.jpeg",
  false
);

const eagle = new Animal(
  "Eagle",
  "20 years",
  "birds",
  "Small mammals and birds",
  "The eagle, a majestic bird of prey, commands the skies with its keen vision and powerful wings. Symbolizing freedom and strength, eagles are known for their impressive hunting prowess. Their sharp talons and beaks enable them to capture a diverse range of prey, showcasing their role as apex predators.",
  "2.3m",
  "6kg",
  "Found on every continent",
  "eagle.jpeg",
  false
);

const penguin = new Animal(
  "Penguin",
  "20 years",
  "birds",
  "Fish and squid",
  "Penguins are flightless birds adapted for life in the water. They are excellent swimmers...",
  "1m",
  "40kg",
  "Southern Hemisphere, especially Antarctica",
  "penguin.jpeg",
  false
);

const snake = new Animal(
  "Snake",
  "15-25 years",
  "reptiles",
  "Rodents, birds, and eggs",
  "The snake, a fascinating reptile, slithers silently through diverse habitats across the globe. With its unique scales and limbless body, the snake has adapted to various environments, from lush jungles to arid deserts. Despite their often misunderstood reputation, snakes play a vital role in maintaining ecological balance.",
  "Varies",
  "Varies",
  "Found worldwide in various habitats",
  "snake.jpeg",
  false
);

const turtle = new Animal(
  "Turtle",
  "80-150 years",
  "reptiles",
  "Vegetation, small invertebrates, and fish",
  "Turtles are characterized by a bony or cartilaginous shell that shields them from predators...",
  "Varies",
  "Varies",
  "Found in oceans, freshwater, and on land worldwide",
  "turtle.jpeg",
  false
);

const kangaroo = new Animal(
  "Kangaroo",
  "6-8 years",
  "mammals",
  "Grasses, leaves, and shrubs",
  "Kangaroos are marsupials known for their powerful hind legs and distinctive hopping movement. They are herbivores that graze on a variety of vegetation, and some species can cover large distances with their powerful leaps.",
  "1.8m",
  "70kg",
  "Australia",
  "kangaroo.jpeg",
  false
);

const koala = new Animal(
  "Koala",
  "13-18 years",
  "mammals",
  "Eucalyptus leaves",
  "Koalas are arboreal marsupials known for their cuddly appearance. They primarily feed on eucalyptus leaves and spend most of their time in trees. Koalas are native to Australia and are often associated with their unique vocalizations.",
  "60cm",
  "14kg",
  "Eastern Australia",
  "koala.jpeg",
  false
);

const lion = new Animal(
  "Lion",
  "10-14 years",
  "mammals",
  "Wild herbivores and occasionally carrion",
  "Lions are majestic big cats known for their social structure and impressive manes in males. They are apex predators in their habitats, living in prides and coordinating their hunting efforts. Lions are found in various parts of Africa and a small population in India.",
  "2.1m",
  "190kg",
  "Sub-Saharan Africa and a small population in India",
  "lion.jpeg",
  false
);

const owl = new Animal(
  "Owl",
  "5-20 years",
  "birds",
  "Small mammals, birds, and insects",
  "Owls are nocturnal birds of prey known for their silent flight and excellent night vision. They have specialized feathers for silent flight and powerful talons for catching prey. Owls are found on every continent except Antarctica.",
  "Varies",
  "Varies",
  "Worldwide, except Antarctica",
  "owl.jpeg",
  false
);

const flamingo = new Animal(
  "Flamingo",
  "20-30 years",
  "birds",
  "Crustaceans, algae, and small fish",
  "Flamingos are wading birds known for their vibrant pink plumage and distinctive long legs and necks. They live in large colonies in wetland areas and are filter feeders, using their specialized bills to extract small organisms from the water.",
  "Varies",
  "Varies",
  "Africa, Asia, Americas, and Europe",
  "flamingo.jpeg",
  false
);

const peregrineFalcon = new Animal(
  "Peregrine Falcon",
  "8-15 years",
  "birds",
  "Other birds captured mid-flight",
  "The peregrine falcon is a powerful bird of prey known for its incredible speed during hunting dives. It is one of the fastest animals in the world. Peregrine falcons have adapted to urban environments, nesting on tall buildings and cliffs.",
  "Varies",
  "Varies",
  "Worldwide, except extreme polar regions",
  "peregrineFalcon.jpeg",
  false
);

const gecko = new Animal(
  "Gecko",
  "5-20 years",
  "reptiles",
  "Insects and small invertebrates",
  "Geckos are small lizards known for their ability to climb smooth surfaces, thanks to specialized toe pads with microscopic hairs. They are found in warm climates worldwide and exhibit a variety of colors and patterns.",
  "Varies",
  "Varies",
  "Tropical and subtropical regions",
  "gecko.jpeg",
  false
);

const iguana = new Animal(
  "Iguana",
  "8-20 years",
  "reptiles",
  "Vegetation, fruits, and flowers",
  "Iguanas are large, herbivorous lizards known for their impressive size and colorful appearance. They are often found in tropical and subtropical regions, and some species can swim in water. Iguanas play a crucial role in their ecosystems by controlling vegetation.",
  "Varies",
  "Varies",
  "Central and South America, and some islands",
  "iguana.jpeg",
  false
);

const tortoise = new Animal(
  "Tortoise",
  "80-150 years",
  "reptiles",
  "Vegetation and some invertebrates",
  "Tortoises are land-dwelling reptiles with a large, dome-shaped shell that protects them from predators. They are known for their slow movement and long lifespan. Tortoises are found in various habitats, from deserts to grasslands.",
  "Varies",
  "Varies",
  "Found worldwide in different habitats",
  "tortoise.jpeg",
  false
);

// Updated animals array
export const animals = [
  echidna,
  frillNeckedLizard,
  cassowary,
  dolphin,
  giraffe,
  eagle,
  penguin,
  snake,
  turtle,
  kangaroo,
  koala,
  lion,
  owl,
  flamingo,
  peregrineFalcon,
  gecko,
  iguana,
  tortoise,
];
