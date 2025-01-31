const EyeIcon = ({ open }) => {
  if (open) {
    return (
      <svg width="16" height="16">
        <use href="../../../public/sprite.svg#eye" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16">
      <use href="../../../public/sprite.svg#close-eye" />
    </svg>
  );
};

export default EyeIcon;
