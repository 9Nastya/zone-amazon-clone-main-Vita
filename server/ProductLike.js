const Product = () => {
    const [likes, setLikes] = useState(0);
  
    const handleLikeClick = () => {
      setLikes(likes + 1);
    };
  
    return (
      <div>
        <h2>Product Name</h2>
        <p>Product Description</p>
        <LikeButton />
        <p>Likes: {likes}</p>
      </div>
    );
  };