const foods = {
  sugar: [
    food("Waffles", "waffles"),
    food("Cake", "cake"),
    food("Kinder Bueno cake", "chocolateCake"),
    food("Chocolate", "chocolate"),
    food("Dubai chocolate", "chocolate"),
    food("Ice cream", "iceCream"),
    food("Nutella", "nutella"),
    food("Nutella dessert", "crepe"),
    food("Baklava", "baklava"),
    food("Tiramisu", "tiramisu"),
    food("Cheesecake", "cheesecake"),
    food("Cookies", "cookies"),
    food("Candy", "candy"),
    food("Donuts", "donuts"),
    food("Pancakes", "pancakes"),
    food("French toast", "frenchToast"),
    food("Milk dessert", "pudding"),
    food("Strawberries", "strawberries"),
    food("Blueberries", "blueberries"),
    food("Raspberries", "raspberries"),
    food("Oranges", "oranges"),
    food("Grapes", "grapes"),
    food("Fruit bowl", "fruit"),
    food("Apples", "apples"),
    food("Lemon stuffed sweets", "lemonDessert")
  ],
  salty: [
    food("Burgers", "burger"),
    food("Pasta", "pasta"),
    food("Chicken", "chicken"),
    food("Chicken Alfredo", "alfredo"),
    food("Sushi", "sushi"),
    food("Salmon", "salmon"),
    food("Pizza", "pizza"),
    food("Fries", "fries"),
    food("Chips", "chips"),
    food("Avocado toast", "avocadoToast"),
    food("Sarma", "sarma"),
    food("Doner", "doner"),
    food("Falafel", "falafel"),
    food("Tacos", "tacos"),
    food("Popeyes", "friedChicken"),
    food("KFC", "friedChicken"),
    food("McDonald's", "burger"),
    food("Lahmacun", "lahmacun"),
    food("Pide", "pide"),
    food("Cigkofte", "cigkofte"),
    food("Borek", "borek"),
    food("Manti", "manti"),
    food("Kebab", "kebab"),
    food("Iskender", "kebab"),
    food("Menemen", "menemen"),
    food("Dolma", "dolma"),
    food("Rice", "rice"),
    food("Eggs", "eggs"),
    food("Bread / flatbread", "flatbread"),
    food("Toast", "toast"),
    food("Salad", "salad"),
    food("Shawarma", "shawarma"),
    food("Noodles", "noodles"),
    food("Ramen", "ramen"),
    food("Steak", "steak"),
    food("Beans", "beans"),
    food("Meatballs", "meatballs"),
    food("Pickles", "pickles"),
    food("Extra cheese", "cheese"),
    food("Mushrooms", "mushrooms"),
    food("Tomatoes", "tomatoes")
  ]
};

const state = {
  mood: null,
  deck: [],
  index: 0,
  picked: [],
  history: [],
  animating: false
};

const photos = {
  alfredo: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=900&h=1200&fit=crop&auto=format&q=80",
  apples: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=900&h=1200&fit=crop&auto=format&q=80",
  avocadoToast: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&h=1200&fit=crop&auto=format&q=80",
  baklava: "https://images.unsplash.com/photo-1705663106388-6c1c51ff5a8d?w=900&h=1200&fit=crop&auto=format&q=80",
  beans: "https://images.unsplash.com/photo-1515516969-d4008cc6241a?w=900&h=1200&fit=crop&auto=format&q=80",
  blueberries: "https://images.unsplash.com/photo-1498557850523-fd3d118b962e?w=900&h=1200&fit=crop&auto=format&q=80",
  borek: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=900&h=1200&fit=crop&auto=format&q=80",
  bread: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&h=1200&fit=crop&auto=format&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=1200&fit=crop&auto=format&q=80",
  cake: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900&h=1200&fit=crop&auto=format&q=80",
  candy: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=900&h=1200&fit=crop&auto=format&q=80",
  cheesecake: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=900&h=1200&fit=crop&auto=format&q=80",
  cheese: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=900&h=1200&fit=crop&auto=format&q=80",
  chicken: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=900&h=1200&fit=crop&auto=format&q=80",
  chips: "https://images.unsplash.com/photo-1566478989037-eec170784d0b?w=900&h=1200&fit=crop&auto=format&q=80",
  chocolate: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=900&h=1200&fit=crop&auto=format&q=80",
  chocolateCake: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=900&h=1200&fit=crop&auto=format&q=80",
  cigkofte: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=900&h=1200&fit=crop&auto=format&q=80",
  cookies: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=900&h=1200&fit=crop&auto=format&q=80",
  crepe: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=900&h=1200&fit=crop&auto=format&q=80",
  dolma: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=1200&fit=crop&auto=format&q=80",
  doner: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&h=1200&fit=crop&auto=format&q=80",
  donuts: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=900&h=1200&fit=crop&auto=format&q=80",
  eggs: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&h=1200&fit=crop&auto=format&q=80",
  falafel: "https://images.unsplash.com/photo-1593001874117-c99c800e3eb8?w=900&h=1200&fit=crop&auto=format&q=80",
  flatbread: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?w=900&h=1200&fit=crop&auto=format&q=80",
  frenchToast: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=900&h=1200&fit=crop&auto=format&q=80",
  friedChicken: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=900&h=1200&fit=crop&auto=format&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=900&h=1200&fit=crop&auto=format&q=80",
  fruit: "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=900&h=1200&fit=crop&auto=format&q=80",
  grapes: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=900&h=1200&fit=crop&auto=format&q=80",
  iceCream: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=900&h=1200&fit=crop&auto=format&q=80",
  kebab: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&h=1200&fit=crop&auto=format&q=80",
  lahmacun: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&h=1200&fit=crop&auto=format&q=80",
  lemonDessert: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=900&h=1200&fit=crop&auto=format&q=80",
  manti: "https://images.unsplash.com/photo-1555126634-323283e090fa?w=900&h=1200&fit=crop&auto=format&q=80",
  meatballs: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=900&h=1200&fit=crop&auto=format&q=80",
  menemen: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&h=1200&fit=crop&auto=format&q=80",
  mushrooms: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=900&h=1200&fit=crop&auto=format&q=80",
  noodles: "https://images.unsplash.com/photo-1552611052-33e04de081de?w=900&h=1200&fit=crop&auto=format&q=80",
  nutella: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=900&h=1200&fit=crop&auto=format&q=80",
  oranges: "https://images.unsplash.com/photo-1547514701-42782101795e?w=900&h=1200&fit=crop&auto=format&q=80",
  pancakes: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=900&h=1200&fit=crop&auto=format&q=80",
  pasta: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=900&h=1200&fit=crop&auto=format&q=80",
  pickles: "https://images.unsplash.com/photo-1600431521340-491eca880813?w=900&h=1200&fit=crop&auto=format&q=80",
  pide: "https://images.unsplash.com/photo-1593504049359-74330189a345?w=900&h=1200&fit=crop&auto=format&q=80",
  pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900&h=1200&fit=crop&auto=format&q=80",
  pudding: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=900&h=1200&fit=crop&auto=format&q=80",
  ramen: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=900&h=1200&fit=crop&auto=format&q=80",
  raspberries: "https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?w=900&h=1200&fit=crop&auto=format&q=80",
  rice: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=900&h=1200&fit=crop&auto=format&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900&h=1200&fit=crop&auto=format&q=80",
  salmon: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&h=1200&fit=crop&auto=format&q=80",
  sarma: "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&h=1200&fit=crop&auto=format&q=80",
  shawarma: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=900&h=1200&fit=crop&auto=format&q=80",
  steak: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900&h=1200&fit=crop&auto=format&q=80",
  strawberries: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=900&h=1200&fit=crop&auto=format&q=80",
  sushi: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&h=1200&fit=crop&auto=format&q=80",
  tacos: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=900&h=1200&fit=crop&auto=format&q=80",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=900&h=1200&fit=crop&auto=format&q=80",
  toast: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=900&h=1200&fit=crop&auto=format&q=80",
  tomatoes: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=900&h=1200&fit=crop&auto=format&q=80",
  waffles: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?w=900&h=1200&fit=crop&auto=format&q=80"
};

const els = {
  choiceScreen: document.querySelector("#choiceScreen"),
  swipeScreen: document.querySelector("#swipeScreen"),
  deck: document.querySelector("#deck"),
  deckMood: document.querySelector("#deckMood"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  pickedCount: document.querySelector("#pickedCount"),
  emptyState: document.querySelector("#emptyState"),
  pickedList: document.querySelector("#pickedList"),
  doneText: document.querySelector("#doneText"),
  noBtn: document.querySelector("#noBtn"),
  undoBtn: document.querySelector("#undoBtn"),
  yesBtn: document.querySelector("#yesBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  backBtn: document.querySelector("#backBtn"),
  againBtn: document.querySelector("#againBtn"),
  copyBtn: document.querySelector("#copyBtn")
};

document.querySelectorAll("[data-start]").forEach((button) => {
  button.addEventListener("click", () => start(button.dataset.start));
});

els.noBtn.addEventListener("click", () => choose(false));
els.yesBtn.addEventListener("click", () => choose(true));
els.undoBtn.addEventListener("click", undoChoice);
els.resetBtn.addEventListener("click", () => start(state.mood));
els.againBtn.addEventListener("click", () => start(state.mood));
els.backBtn.addEventListener("click", showChoice);
els.copyBtn.addEventListener("click", copyPicked);

document.addEventListener("keydown", (event) => {
  if (els.swipeScreen.classList.contains("hidden")) return;
  if (event.key === "ArrowLeft") choose(false);
  if (event.key === "ArrowRight") choose(true);
});

function food(name, photoKey) {
  return {
    name,
    photoKey
  };
}

function start(mood) {
  const sourceFoods = getFoodSource();

  state.mood = mood;
  state.deck = shuffle((sourceFoods[mood] || []).map((item) => ({
    ...item,
    image: item.image
  })));
  state.index = 0;
  state.picked = [];
  state.history = [];
  state.animating = false;
  setControlsDisabled(false);

  els.choiceScreen.classList.add("hidden");
  els.swipeScreen.classList.remove("hidden");
  els.emptyState.classList.add("hidden");
  els.deckMood.textContent = mood === "sugar" ? "Sweet" : "Salty";
  render();
}

function getFoodSource() {
  return window.FOOD_PICKER_FOODS || foods;
}

function showChoice() {
  els.swipeScreen.classList.add("hidden");
  els.choiceScreen.classList.remove("hidden");
}

function render() {
  updateProgress();
  els.deck.innerHTML = "";

  if (state.index >= state.deck.length) {
    showDone();
    return;
  }

  const nextCards = state.deck.slice(state.index, state.index + 3).reverse();
  nextCards.forEach((foodItem, offset) => {
    const depth = nextCards.length - offset - 1;
    const card = createCard(foodItem);
    card.style.transform = `translate3d(0, ${depth * 8}px, 0) scale(${1 - depth * 0.025})`;
    card.style.zIndex = String(10 + offset);
    els.deck.append(card);
  });

  attachDrag(els.deck.lastElementChild);
}

function createCard(foodItem) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <span class="stamp no">No</span>
    <span class="stamp yes">Yes</span>
    <img src="${foodItem.image}" alt="${foodItem.name}" loading="eager" draggable="false" referrerpolicy="no-referrer" />
    <div class="card-shine" aria-hidden="true"></div>
    <div class="card-content">
      <h3 class="card-title">${foodItem.name}</h3>
    </div>
  `;

  const image = card.querySelector("img");
  image.addEventListener("dragstart", (event) => event.preventDefault());
  image.addEventListener("error", () => {
    image.replaceWith(fallbackPhoto(foodItem.name));
  });

  return card;
}

function fallbackPhoto(name) {
  const fallback = document.createElement("div");
  fallback.className = "fallback-photo";
  fallback.innerHTML = `<span>${name}</span>`;
  return fallback;
}

function choose(accepted, options = {}) {
  if (state.animating || state.index >= state.deck.length) return;

  const card = els.deck.lastElementChild;
  if (!card) return;

  state.animating = true;
  setControlsDisabled(true);
  state.history.push({
    item: state.deck[state.index],
    accepted
  });

  if (accepted) state.picked.push(state.deck[state.index]);

  const direction = accepted ? 1 : -1;
  const deckWidth = els.deck.getBoundingClientRect().width || 440;
  const exitDistance = Math.max(window.innerWidth + 80, deckWidth * 2.1);
  const velocity = options.velocity || 1;
  const startY = options.y || -12;
  const rotation = options.rotation || direction * 18;

  card.classList.add("exiting");
  card.style.transform = `translate3d(${direction * exitDistance * velocity}px, ${startY - 18}px, 0) rotate(${rotation}deg)`;
  card.style.opacity = "0";

  state.index += 1;
  setTimeout(() => {
    render();
    state.animating = false;
    setControlsDisabled(false);
  }, 280);
}

function undoChoice() {
  if (state.animating || state.history.length === 0) return;

  const previous = state.history.pop();
  state.index = Math.max(0, state.index - 1);

  if (previous.accepted) {
    const pickedIndex = state.picked.lastIndexOf(previous.item);
    if (pickedIndex !== -1) state.picked.splice(pickedIndex, 1);
  }

  els.emptyState.classList.add("hidden");
  els.copyBtn.disabled = false;
  render();
  setControlsDisabled(false);
}

function attachDrag(card) {
  if (!card) return;

  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let dragging = false;

  card.addEventListener("pointerdown", (event) => {
    if (state.animating) return;
    dragging = true;
    startX = event.clientX;
    startY = event.clientY;
    currentX = 0;
    currentY = 0;
    card.classList.add("dragging");
    card.setPointerCapture(event.pointerId);
  });

  card.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    currentX = event.clientX - startX;
    currentY = event.clientY - startY;
    const rotate = clamp(currentX / 18, -14, 14);
    const lift = Math.min(8, Math.abs(currentX) / 24);
    card.style.transform = `translate3d(${currentX}px, ${currentY - lift}px, 0) rotate(${rotate}deg)`;
    setStampOpacity(card, currentX);
  });

  card.addEventListener("pointerup", () => finishDrag());
  card.addEventListener("pointercancel", () => finishDrag());

  function finishDrag() {
    if (!dragging) return;
    dragging = false;
    card.classList.remove("dragging");

    const deckWidth = els.deck.getBoundingClientRect().width || 440;
    const threshold = Math.min(150, deckWidth * 0.28);

    if (Math.abs(currentX) > threshold) {
      choose(currentX > 0, {
        velocity: clamp(Math.abs(currentX) / threshold, 1, 1.45),
        rotation: clamp(currentX / 15, -20, 20),
        y: currentY
      });
      return;
    }

    card.style.transform = "";
    setStampOpacity(card, 0);
  }
}

function setStampOpacity(card, x) {
  const yes = card.querySelector(".stamp.yes");
  const no = card.querySelector(".stamp.no");
  const deckWidth = els.deck.getBoundingClientRect().width || 440;
  const opacity = clamp(Math.abs(x) / (deckWidth * 0.24), 0, 1);
  yes.style.opacity = x > 0 ? opacity : 0;
  no.style.opacity = x < 0 ? opacity : 0;
}

function setControlsDisabled(disabled) {
  els.noBtn.disabled = disabled;
  els.yesBtn.disabled = disabled;
  els.undoBtn.disabled = disabled || state.history.length === 0;
  els.resetBtn.disabled = disabled;
  els.backBtn.disabled = disabled;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function showDone() {
  els.deck.innerHTML = "";
  els.emptyState.classList.remove("hidden");
  els.pickedList.innerHTML = "";

  if (state.picked.length === 0) {
    els.doneText.textContent = "She skipped everything. Pick the other mood and try again.";
    els.copyBtn.disabled = true;
    return;
  }

  els.copyBtn.disabled = false;
  els.doneText.textContent = `${state.picked.length} yes pick${state.picked.length === 1 ? "" : "s"}. Start with the first one that is nearby.`;
  state.picked.forEach((item) => {
    const pill = document.createElement("span");
    pill.textContent = item.name;
    els.pickedList.append(pill);
  });
}

async function copyPicked() {
  const text = state.picked.map((item) => item.name).join(", ");
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    els.copyBtn.textContent = "Copied";
    setTimeout(() => {
      els.copyBtn.textContent = "Copy picks";
    }, 1100);
  } catch {
    els.copyBtn.textContent = "Copy failed";
    setTimeout(() => {
      els.copyBtn.textContent = "Copy picks";
    }, 1100);
  }
}

function updateProgress() {
  const total = state.deck.length;
  const current = Math.min(state.index, total);
  els.progressText.textContent = `${current} / ${total}`;
  els.progressBar.style.width = total ? `${(current / total) * 100}%` : "0";
  els.pickedCount.textContent = `${state.picked.length} yes`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}
