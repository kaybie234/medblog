const facts = [
  {
    title: 'The brain works in patterns',
    detail: 'The human brain uses pattern recognition to process information faster than conscious thought. Repeating healthy habits helps build strong neural pathways.',
    tag: 'Neurology',
  },
  {
    title: 'Hydration supports cellular energy',
    detail: 'Water is essential for transporting nutrients, regulating temperature, and supporting mitochondria in every cell.',
    tag: 'Wellness',
  },
  {
    title: 'Vaccines trained the immune system',
    detail: 'Vaccines expose the body to a safe form of a pathogen so the immune system can build memory without causing illness.',
    tag: 'Immunology',
  },
];

const lessons = [
  {
    title: 'How to read a medical study',
    detail: 'Learn to distinguish between observational reports, randomized trials, and meta-analyses so you can interpret research confidently.',
    tag: 'Health literacy',
  },
  {
    title: 'Understanding digital health tools',
    detail: 'From wearables to telemedicine, discover how medical technology is changing the patient experience and improving care.',
    tag: 'Medical Tech',
  },
  {
    title: 'Nutrition habits for mental focus',
    detail: 'A balanced diet, steady hydration, and mindful eating can support clarity, memory, and daily energy.',
    tag: 'Lifestyle',
  },
];

const news = [
  {
    headline: 'AI detects early signs of diabetes from retina scans',
    summary: 'A new study shows that machine learning models can identify early diabetic changes in the eye before symptoms appear.',
    date: 'July 11, 2026',
  },
  {
    headline: 'Global health agencies update hypertension guidelines',
    summary: 'Updated recommendations emphasize home monitoring and lifestyle changes as first-line treatment strategies.',
    date: 'July 10, 2026',
  },
  {
    headline: 'Wearables now monitor blood oxygen and stress in real time',
    summary: 'Next-generation health wearables combine SpO2 tracking, heart rate variability, and guided recovery coaching.',
    date: 'July 9, 2026',
  },
];

function createCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${item.title}</h3>
    <p>${item.detail}</p>
    <div class="meta">${item.tag}</div>
  `;
  return card;
}

function createNewsCard(item) {
  const card = document.createElement('article');
  card.className = 'card';
  card.innerHTML = `
    <h3>${item.headline}</h3>
    <p>${item.summary}</p>
    <div class="news-meta">${item.date}</div>
  `;
  return card;
}

function renderSection(items, containerId, createItem) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => container.appendChild(createItem(item)));
}

window.addEventListener('DOMContentLoaded', () => {
  renderSection(facts, 'facts-list', createCard);
  renderSection(lessons, 'learn-list', createCard);
  renderSection(news, 'news-list', createNewsCard);
});
