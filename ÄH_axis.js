#cube81 {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 4px;
  max-width: 360px;
  margin: 20px auto;
}

.cube81-cell {
  width: 36px;
  height: 36px;
  background: rgba(0,0,0,0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: var(--muted);
  transition: background .3s ease;
}

.cube81-cell.active {
  background: rgba(0,0,0,0.15);
  color: var(--fg);
}
