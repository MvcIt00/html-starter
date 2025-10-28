interface ProductImageProps {
  category: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ category }) => {
  // Map categories to placeholder images
  const imageMap: Record<string, string> = {
    'carrelli': 'https://via.placeholder.com/600x400/4A90E2/ffffff?text=Carrelli+Elevatori',
    'transpallet': 'https://via.placeholder.com/600x400/7ED321/ffffff?text=Transpallet',
    'piattaforme': 'https://via.placeholder.com/600x400/F5A623/ffffff?text=Piattaforme',
    'accessori': 'https://via.placeholder.com/600x400/BD10E0/ffffff?text=Accessori',
    'ricambi': 'https://via.placeholder.com/600x400/50E3C2/ffffff?text=Ricambi',
    'default': 'https://via.placeholder.com/600x400/9013FE/ffffff?text=Prodotto'
  };

  const imageSrc = imageMap[category.toLowerCase()] || imageMap['default'];

  return (
    <div className="product-image-container">
      <img 
        src={imageSrc} 
        alt={`${category} vehicle`}
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ProductImage;
