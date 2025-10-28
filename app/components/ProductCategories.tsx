interface ProductCategoriesProps {
  categories: string[];
  onSelect: (category: string) => void;
}

export default function ProductCategories({ categories, onSelect }: ProductCategoriesProps) {
  return (
    <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto' }}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          style={{
            background: 'none',
            border: 'none',
            padding: '0.5rem 1rem',
            cursor: 'pointer',
            fontSize: '1rem',
            color: '#000',
            whiteSpace: 'nowrap',
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
