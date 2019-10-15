function deckTransform() {
  let angle = Math.random() * 90 - 45;
  let xPos = Math.random() * 40 - 20;
  let yPos = Math.random() * 40 - 20;
  return `translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`;
}

export default deckTransform;
